import { createServer } from "node:http";
import { randomUUID } from "node:crypto";
import { createReadStream } from "node:fs";
import { access, mkdir, readFile, rename, stat, writeFile } from "node:fs/promises";
import { dirname, extname, join, normalize, sep } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = dirname(fileURLToPath(import.meta.url));

await loadLocalEnv();

const dataDir = join(rootDir, "data");
const recordsFile = join(dataDir, "records.json");
const host = "127.0.0.1";
const port = Number(process.env.PORT || 5173);
const mimoApiUrl = process.env.MIMO_API_URL || "https://api.xiaomimimo.com/anthropic";
const mimoModel = process.env.MIMO_MODEL || "mimo-v2.5-pro";

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8"
};

async function loadLocalEnv() {
  for (const fileName of [".env.local", ".env"]) {
    try {
      const raw = await readFile(join(rootDir, fileName), "utf8");
      for (const line of raw.split(/\r?\n/)) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#")) continue;
        const match = trimmed.match(/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
        if (!match) continue;
        const [, key, rawValue] = match;
        if (process.env[key]) continue;
        process.env[key] = rawValue.replace(/^["']|["']$/g, "");
      }
    } catch {
      // Optional local environment files are intentionally silent.
    }
  }
}

async function ensureStore() {
  await mkdir(dataDir, { recursive: true });
  try {
    await access(recordsFile);
  } catch {
    await writeFile(recordsFile, JSON.stringify({ version: 1, records: [] }, null, 2), "utf8");
  }
}

async function readStore() {
  await ensureStore();
  const raw = await readFile(recordsFile, "utf8");
  const parsed = raw.trim() ? JSON.parse(raw) : { version: 1, records: [] };
  if (Array.isArray(parsed)) return { version: 1, records: parsed };
  return {
    version: parsed.version || 1,
    records: Array.isArray(parsed.records) ? parsed.records : []
  };
}

async function writeStore(store) {
  await ensureStore();
  const tempFile = `${recordsFile}.tmp`;
  await writeFile(tempFile, JSON.stringify(store, null, 2), "utf8");
  await rename(tempFile, recordsFile);
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(payload));
}

async function readJsonBody(request) {
  let body = "";
  for await (const chunk of request) {
    body += chunk;
    if (body.length > 2_000_000) throw new Error("Request body too large");
  }
  return body ? JSON.parse(body) : {};
}

async function handleRecordsApi(request, response) {
  if (request.method === "GET") {
    sendJson(response, 200, await readStore());
    return;
  }

  if (request.method === "POST") {
    const payload = await readJsonBody(request);
    const record = payload.record || payload;
    if (!record || typeof record !== "object" || Array.isArray(record)) {
      sendJson(response, 400, { error: "record must be an object" });
      return;
    }

    const store = await readStore();
    const savedRecord = {
      ...record,
      id: record.id || randomUUID(),
      savedAt: new Date().toISOString()
    };
    store.records.push(savedRecord);
    await writeStore(store);
    sendJson(response, 201, { ok: true, record: savedRecord, count: store.records.length });
    return;
  }

  if (request.method === "DELETE") {
    const store = await readStore();
    store.records = [];
    await writeStore(store);
    sendJson(response, 200, { ok: true, count: 0 });
    return;
  }

  sendJson(response, 405, { error: "method not allowed" });
}

function getMimoMessagesEndpoint() {
  const base = mimoApiUrl.replace(/\/+$/, "");
  if (base.endsWith("/v1/messages")) return base;
  if (base.endsWith("/anthropic")) return `${base}/v1/messages`;
  return `${base}/anthropic/v1/messages`;
}

function getAdaptiveSystemPrompt() {
  return [
    "你是“键盘侠”的自适应英文打字教练 agent。",
    "你的任务是根据用户刚完成的一段练习摘要，生成下一批英文打字练习内容，并判断是否升级、保持、专项加强或降级。",
    "训练路径必须循序渐进：基准键位控制 -> 上排键位伸展 -> 下排键位平衡 -> 常用英文词 -> 标点英文句子 -> 数字与复杂英文上下文。",
    "每个阶段都必须从简单单词开始，逐步加入更长单词、常见字母组合、标点、数字和自然短句。",
    "经常打错或明显变慢的词、键位、手指，要在下一组中提高出现频率；总是打对且速度快的词要逐步减少。",
    "输入摘要中 currentStageWords 是当前阶段推荐词库，nextWords 必须优先覆盖这些词，再结合 weakWords 和 similarKeyHints。",
    "输入摘要中 masteredWords 表示用户已经连续打对且速度快的词，这是硬性排除列表；除非它们同时也是错词、慢词或 weakWords，否则 nextWords 不要再包含这些词。",
    "输入摘要中 similarKeyHints 表示与错键或慢键相关的相似键位词，nextWords 应优先加入其中一部分，帮助用户练相近键位。",
    "练习内容应尽可能组合成真实可能发生的英文短句场景，并包含常见英文书面标点：逗号、句号、分号、问号、撇号、连字符和数字。",
    "只有准确率和字符/分连续达到目标，才能进入下一难度；如果只是速度未达标但准确率稳定，应保持当前等级并做专项加练，不要降级。只有准确率明显吃力或连续大幅低于目标时，才可以降级。",
    "不要输出解释性正文，只返回一个压缩 JSON 对象。JSON 不要使用 Markdown 代码块，不要换行。",
    "JSON 字段：level(number 1-7), stageId(string), stageLabel(string), decision(string: advance|hold|focus|downgrade), targetAccuracy(number), targetCpm(number), focusKeys(array), focusFingers(array), nextWords(array), coachMessage(string)。",
    "nextWords 必须是 48 到 72 个不重复的英文练习词，每项最多 18 个字符，只包含英文大小写字母、数字、逗号、句号、分号、问号、撇号和连字符。",
    "nextWords 中至少 70% 应来自 currentStageWords、similarKeyHints 或 weakWords；不要为了凑数加入完全无关的长词。",
    "不要输出 nextText 字段，服务端会根据 nextWords 组合成带标点和数字的真实短句。",
    "coachMessage 使用中文，一句话即可。",
    "你将从已经给出的前缀 {\"level\": 后面继续写 JSON，不要重复左花括号，不要重复 level 字段名。"
  ].join("\n");
}

function extractAnthropicText(payload) {
  if (!Array.isArray(payload?.content)) return "";
  return payload.content
    .filter((block) => block?.type === "text" && typeof block.text === "string")
    .map((block) => block.text)
    .join("\n")
    .trim();
}

function parseJsonObject(text) {
  const cleaned = String(text || "")
    .replace(/^```(?:json)?/i, "")
    .replace(/```$/i, "")
    .trim();
  try {
    return JSON.parse(cleaned);
  } catch {
    const start = cleaned.indexOf("{");
    const end = cleaned.lastIndexOf("}");
    if (start < 0 || end <= start) throw new Error("adaptive response is not JSON");
    return JSON.parse(cleaned.slice(start, end + 1));
  }
}

function normalizeAdaptiveText(value) {
  return String(value || "")
    .replace(/[^A-Za-z0-9 ,.;?'\-\n]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 1200);
}

function normalizeAdaptiveWords(value) {
  if (!Array.isArray(value)) return [];
  const seen = new Set();
  return value
    .map((item) => String(item || "").replace(/[^A-Za-z0-9,.;?'\-]/g, "").trim())
    .filter(Boolean)
    .filter((item) => item.length <= 18)
    .filter((item) => {
      const key = item.toLowerCase().replace(/[,.?;]+$/g, "");
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, 72);
}

function buildTextFromAdaptiveWords(words, level) {
  const cleanWords = normalizeAdaptiveWords(words)
    .map((word) => word.replace(/[,.?;]+$/g, ""))
    .filter(Boolean);
  if (!cleanWords.length) return "";
  const numbers = [3, 5, 8, 12, 15, 18, 24, 30, 42, 60, 75, 90];
  const templates = [
    (a, b, c, n) => `At ${n}, ${a} came before ${b}; ${c} came next.`,
    (a, b, c, n) => `After ${n} tries, ${a} felt clear, but ${b} needed ${c}.`,
    (a, b, c, n) => `Don't rush; use ${a}, then ${b}, then ${c}.`,
    (a, b, c, n) => `When ${n} seconds passed, ${a} and ${b} felt easier.`,
    (a, b, c, n) => `${a} wasn't ${b}; it was ${c}.`,
    (a, b, c, n) => `By ${n}, ${a}, ${b}, and ${c} stayed in order.`,
    (a, b, c, n) => `If ${a} looks wrong, try ${b} before ${c}.`,
    (a, b, c, n) => `${a} is quick; ${b} is careful; ${c} is steady.`,
    (a, b, c, n) => `For ${n} seconds, ${a} moved near ${b} and ${c}.`,
    (a, b, c, n) => `Use ${a}-first, pause at ${b}, and end with ${c}.`,
    (a, b, c, n) => `${a} can lead, ${b} can follow, and ${c} can close.`,
    (a, b, c, n) => `If ${a} is easy now, skip it and spend ${n} seconds on ${c}.`,
    (a, b, c, n) => `${a}, ${b}, and ${c} should feel clean by ${n}.`,
    (a, b, c, n) => `Start with ${a}; shift to ${b}; settle on ${c}.`,
    (a, b, c, n) => `A ${n}-second pass used ${a}, ${b}, and ${c}.`,
    (a, b, c, n) => `${a} stayed calm, ${b} stayed short, and ${c} stayed exact.`
  ];
  const sentences = [];
  let cursor = 0;
  while (sentences.join(" ").length < 860 && sentences.length < 14) {
    const a = cleanWords[cursor % cleanWords.length];
    const b = cleanWords[(cursor + 1) % cleanWords.length] || a;
    const c = cleanWords[(cursor + 2) % cleanWords.length] || b;
    const n = numbers[(cursor + level) % numbers.length];
    const template = templates[(sentences.length + level) % templates.length];
    sentences.push(template(a, b, c, n));
    cursor += 3;
  }
  return normalizeAdaptiveText(sentences.join(" "));
}

function getAdaptiveWordKey(value) {
  return String(value || "")
    .replace(/[^A-Za-z0-9'\-]/g, "")
    .toLowerCase();
}

function filterAdaptiveWordsForContext(words, context = {}) {
  const protectedWords = new Set([
    ...(context.weakWords || []),
    ...(context.segment?.missedWords || []),
    ...(context.segment?.missed || []),
    ...((context.segment?.slowWords || []).map((item) => item?.word || item))
  ].map(getAdaptiveWordKey).filter(Boolean));
  const mastered = new Set((context.masteredWords || [])
    .map(getAdaptiveWordKey)
    .filter((word) => word && !protectedWords.has(word)));
  const fallbackWords = [
    "read", "check", "list", "room", "task", "note", "send", "file",
    "mark", "plan", "team", "desk", "timer", "report", "update", "review",
    "number", "answer", "message", "practice"
  ];
  const stageWords = normalizeAdaptiveWords(context.currentStageWords || []);
  const hintWords = normalizeAdaptiveWords([
    ...(context.similarKeyHints || []),
    ...(context.weakWords || []),
    ...(context.segment?.missedWords || []),
    ...((context.segment?.slowWords || []).map((item) => item?.word || item))
  ]);
  const priorityKeys = new Set([...stageWords, ...hintWords].map(getAdaptiveWordKey));
  const modelWords = normalizeAdaptiveWords(words);
  const modelPriority = modelWords.filter((word) => priorityKeys.has(getAdaptiveWordKey(word)));
  const modelSupplement = modelWords.filter((word) => !priorityKeys.has(getAdaptiveWordKey(word)));
  return normalizeAdaptiveWords([
    ...hintWords,
    ...stageWords,
    ...modelPriority,
    ...modelSupplement,
    ...fallbackWords
  ]).filter((word) => !mastered.has(getAdaptiveWordKey(word))).slice(0, 72);
}

function sanitizeAdaptivePlan(plan, context = {}) {
  const currentLevel = Math.min(7, Math.max(1, Number(context.current?.level || context.level) || 1));
  let level = Math.min(7, Math.max(1, Number(plan.level) || currentLevel));
  let decision = ["advance", "hold", "focus", "downgrade"].includes(plan.decision) ? plan.decision : "hold";
  const segmentAccuracy = Number(context.segment?.accuracy || 0);
  const segmentCpm = Number(context.segment?.cpm || 0);
  const targetAccuracy = Number(context.segment?.targetAccuracy || context.current?.targetAccuracy || 94);
  const targetCpm = Number(context.segment?.targetCpm || context.current?.targetCpm || 0);
  const speedOnlyMiss = segmentAccuracy >= targetAccuracy && segmentCpm < targetCpm;

  if (level < currentLevel && (decision !== "downgrade" || speedOnlyMiss)) {
    level = currentLevel;
    decision = speedOnlyMiss ? "focus" : "hold";
  } else if (level < currentLevel - 1) {
    level = currentLevel - 1;
  }

  const nextWords = filterAdaptiveWordsForContext(plan.nextWords, context);
  const generatedText = buildTextFromAdaptiveWords(nextWords, level);
  return {
    level,
    stageId: String(plan.stageId || "home").slice(0, 40),
    stageLabel: String(plan.stageLabel || "综合练习").slice(0, 40),
    decision,
    targetAccuracy: Math.min(99, Math.max(85, Number(plan.targetAccuracy) || 96)),
    targetCpm: Math.min(420, Math.max(40, Number(plan.targetCpm) || 80)),
    focusKeys: Array.isArray(plan.focusKeys) ? plan.focusKeys.map((item) => String(item).slice(0, 8)).slice(0, 10) : [],
    focusFingers: Array.isArray(plan.focusFingers) ? plan.focusFingers.map((item) => String(item).slice(0, 16)).slice(0, 6) : [],
    nextWords,
    nextText: generatedText || normalizeAdaptiveText(plan.nextText),
    coachMessage: String(plan.coachMessage || "继续保持准确，再慢慢提高速度。").slice(0, 80)
  };
}

async function requestAdaptivePlan(payload) {
  const apiKey = process.env.MIMO_API_KEY;
  if (!apiKey) {
    const error = new Error("MIMO_API_KEY is not configured");
    error.statusCode = 503;
    throw error;
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 35000);
  const jsonPrefix = "{\"level\":";
  try {
    const response = await fetch(getMimoMessagesEndpoint(), {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json"
      },
      signal: controller.signal,
      body: JSON.stringify({
        model: mimoModel,
        max_tokens: 1500,
        system: getAdaptiveSystemPrompt(),
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: JSON.stringify(payload)
              }
            ]
          },
          {
            role: "assistant",
            content: [
              {
                type: "text",
                text: jsonPrefix
              }
            ]
          }
        ],
        thinking: { type: "disabled" },
        temperature: 0.1,
        top_p: 0.95,
        stream: false
      })
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      const error = new Error(data?.error?.message || `MiMo API returned ${response.status}`);
      error.statusCode = response.status;
      throw error;
    }
    const text = extractAnthropicText(data);
    const candidate = text.trim().startsWith("{") ? text : `${jsonPrefix}${text}`;
    return sanitizeAdaptivePlan(parseJsonObject(candidate), payload);
  } finally {
    clearTimeout(timeoutId);
  }
}

async function handleAdaptivePracticeApi(request, response) {
  if (request.method === "GET") {
    sendJson(response, 200, {
      ok: true,
      configured: Boolean(process.env.MIMO_API_KEY),
      model: mimoModel
    });
    return;
  }

  if (request.method !== "POST") {
    sendJson(response, 405, { error: "method not allowed" });
    return;
  }

  try {
    const payload = await readJsonBody(request);
    const plan = await requestAdaptivePlan(payload);
    sendJson(response, 200, { ok: true, plan });
  } catch (error) {
    sendJson(response, error.statusCode || 500, {
      ok: false,
      error: error.message || "adaptive practice failed"
    });
  }
}

async function serveStatic(request, response) {
  const url = new URL(request.url, `http://${host}:${port}`);
  let pathname = decodeURIComponent(url.pathname);
  if (pathname === "/") pathname = "/index.html";

  const filePath = normalize(join(rootDir, pathname));
  if (filePath !== rootDir && !filePath.startsWith(`${rootDir}${sep}`)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  try {
    const fileStat = await stat(filePath);
    if (!fileStat.isFile()) throw new Error("Not a file");
    const ext = extname(filePath);
    response.writeHead(200, { "Content-Type": mimeTypes[ext] || "application/octet-stream" });
    createReadStream(filePath).pipe(response);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
}

const server = createServer(async (request, response) => {
  try {
    if (request.url?.startsWith("/api/records")) {
      await handleRecordsApi(request, response);
      return;
    }
    if (request.url?.startsWith("/api/adaptive-practice")) {
      await handleAdaptivePracticeApi(request, response);
      return;
    }
    await serveStatic(request, response);
  } catch (error) {
    sendJson(response, 500, { error: error.message || "server error" });
  }
});

await ensureStore();

server.listen(port, host, () => {
  console.log(`Typing practice running at http://${host}:${port}/`);
  console.log("Records file: data/records.json");
});
