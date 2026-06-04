const COMMON_WORDS = [
  "the", "of", "to", "and", "a", "in", "is", "it", "you", "that", "he", "was",
  "for", "on", "are", "with", "as", "I", "his", "they", "be", "at", "one",
  "have", "this", "from", "or", "had", "by", "hot", "but", "some", "what",
  "there", "we", "can", "out", "other", "were", "all", "your", "when", "up",
  "use", "word", "how", "said", "an", "each", "she", "which", "do", "their",
  "time", "if", "will", "way", "about", "many", "then", "them", "write",
  "would", "like", "so", "these", "her", "long", "make", "thing", "see",
  "him", "two", "has", "look", "more", "day", "could", "go", "come", "did",
  "number", "sound", "no", "most", "people", "my", "over", "know", "water",
  "than", "call", "first", "who", "may", "down", "side", "been", "now",
  "find", "any", "new", "work", "part", "take", "get", "place", "made",
  "live", "where", "after", "back", "little", "only", "round", "man",
  "year", "came", "show", "every", "good", "me", "give", "our", "under",
  "name", "very", "through", "just", "form", "sentence", "great", "think",
  "say", "help", "low", "line", "differ", "turn", "cause", "much", "mean",
  "before", "move", "right", "boy", "old", "too", "same", "tell", "does",
  "set", "three", "want", "air", "well", "also", "play", "small", "end",
  "put", "home", "read", "hand", "port", "large", "spell", "add", "even",
  "land", "here", "must", "big", "high", "such", "follow", "act", "why",
  "ask", "men", "change", "went", "light", "kind", "off", "need", "house",
  "picture", "try", "us", "again", "animal", "point", "mother", "world",
  "near", "build", "self", "earth", "father", "head", "stand", "own",
  "page", "should", "country", "found", "answer", "school", "grow", "study",
  "still", "learn", "plant", "cover", "food", "sun", "four", "between",
  "state", "keep", "eye", "never", "last", "let", "thought", "city", "tree",
  "cross", "farm", "hard", "start", "might", "story", "saw", "far", "sea",
  "draw", "left", "late", "run", "while", "press", "close", "night", "real",
  "life", "few", "stop", "open", "seem", "together", "next", "white",
  "children", "begin", "got", "walk", "example", "ease", "paper", "often",
  "always", "music", "those", "both", "mark", "book", "letter", "until",
  "mile", "river", "care", "second", "group", "carry", "took", "rain", "eat",
  "room", "friend", "began", "idea", "fish", "mountain", "north", "once",
  "base", "hear", "horse", "cut", "sure", "watch", "color", "face", "wood",
  "main", "enough", "plain", "girl", "usual", "young", "ready", "above",
  "ever", "red", "list", "though", "feel", "talk", "bird", "soon", "body",
  "dog", "family", "direct", "pose", "leave", "song", "measure", "door",
  "product", "black", "short", "numeral", "class", "wind", "question",
  "happen", "complete", "ship", "area", "half", "rock", "order", "fire",
  "south", "problem", "piece", "told", "knew", "pass", "since", "top",
  "whole", "king", "space", "heard", "best", "hour", "better", "true",
  "during", "hundred", "five", "remember", "step", "early", "hold", "west",
  "ground", "interest", "reach", "fast", "verb", "sing", "listen", "six",
  "table", "travel", "less", "morning", "ten", "simple", "several", "vowel",
  "toward", "war", "lay", "against", "pattern", "slow", "center", "love",
  "person", "money", "serve", "appear", "road", "map", "science", "rule",
  "govern", "pull", "cold", "notice", "voice", "fall", "power", "town",
  "fine", "certain", "fly", "unit", "lead", "cry", "dark", "machine", "note",
  "wait", "plan", "figure", "star", "box", "noun", "field", "rest", "correct"
];

const ADVANCED_WORDS = [
  "analysis", "behavior", "calendar", "deliberate", "efficient", "framework",
  "gradient", "hypothesis", "iteration", "judgment", "keyboard", "language",
  "maintenance", "navigation", "objective", "precision", "quality", "reliable",
  "sequence", "threshold", "uncertain", "velocity", "workflow", "context",
  "discipline", "feedback", "identity", "knowledge", "leverage", "migration",
  "observation", "priority", "refactor", "synthesis", "variable", "interface",
  "constraint", "capacity", "decision", "emphasis", "friction", "generate",
  "interval", "library", "momentum", "parallel", "revision", "structure",
  "typography", "validation", "accessibility", "component", "distribution",
  "environment", "foundation", "interaction", "performance", "resilience",
  "simulation", "transaction", "configuration", "documentation", "evaluation",
  "instrument", "optimization", "projection", "relationship", "specification"
];

const ADAPTIVE_STAGES = [
  {
    id: "home",
    label: "基准键位控制",
    focus: "asdf jkl; 与空格",
    words: ["as", "sad", "dad", "lad", "fall", "ask", "half", "dash", "all", "flag", "glass", "salad", "shall", "flash"]
  },
  {
    id: "top",
    label: "上排键位伸展",
    focus: "qwerty uiop",
    words: ["we", "you", "type", "quiet", "power", "proper", "upper", "word", "query", "require", "reward", "writer", "keyboard"]
  },
  {
    id: "bottom",
    label: "下排键位平衡",
    focus: "zxcvbnm",
    words: ["zinc", "box", "move", "calm", "navy", "mix", "brave", "common", "value", "vivid", "balance", "movement"]
  },
  {
    id: "common",
    label: "常用英文词",
    focus: "高频词与短语",
    words: COMMON_WORDS.slice(0, 180)
  },
  {
    id: "punctuation",
    label: "标点英文",
    focus: "逗号、句号、分号、问号",
    words: COMMON_WORDS.slice(60, 240)
  },
  {
    id: "numbers",
    label: "数字与复杂上下文",
    focus: "数字、标点和长词",
    words: [...COMMON_WORDS.slice(120, 260), ...ADVANCED_WORDS]
  }
];

const PRACTICE_LESSONS = [
  {
    id: "adaptive",
    title: "综合自适应练习",
    focus: "AI 动态难度",
    adaptive: true,
    lines: [
      "as sad dad fall ask half",
      "all hands stay relaxed as each key lands",
      "type slow and clean before you speed up"
    ]
  },
  {
    id: "home",
    title: "基准键位控制",
    focus: "基准键位",
    lines: [
      "as sad dad had a flask",
      "fall ask salad half dash",
      "a lad asks a dad as flags fall",
      "all hands stay relaxed as each key lands"
    ]
  },
  {
    id: "top",
    title: "上排键位伸展",
    focus: "上排键位",
    lines: [
      "quick quiet word power type",
      "we require proper quiet work",
      "your keyboard rewards a light touch",
      "type every upper row word with relaxed fingers"
    ]
  },
  {
    id: "bottom",
    title: "下排键位平衡",
    focus: "下排键位",
    lines: [
      "zinc box move calm navy",
      "mix brave common values",
      "vivid movement builds better balance",
      "move from key to key without lifting the wrist"
    ]
  },
  {
    id: "common",
    title: "英文常用词",
    focus: "高频词",
    lines: [
      "the one thing that you can do today",
      "many people learn faster with steady practice",
      "write each word with a smooth even pace",
      "small habits become strong skills over time"
    ]
  },
  {
    id: "punctuation",
    title: "标点节奏",
    focus: "标点",
    lines: [
      "read ahead, pause lightly, then continue.",
      "speed is useful; accuracy is essential.",
      "can you type this sentence without rushing?",
      "short phrases, clean commas, and calm hands."
    ]
  },
  {
    id: "numbers",
    title: "数字上下文",
    focus: "数字",
    lines: [
      "version 2 ships after 14 focused tests",
      "the score rose from 48 to 63 in one week",
      "practice for 15 minutes and rest for 5",
      "a 30 second sprint should still feel controlled"
    ]
  }
];

const STORAGE_KEY = "typing-practice-local-v1";
const RECORDS_API = "/api/records";
const ADAPTIVE_API = "/api/adaptive-practice";
const ADAPTIVE_LESSON_ID = "adaptive";
const ADAPTIVE_SEGMENT_CHARS = 180;
const ADAPTIVE_BUFFER_MIN = 300;
const LOCAL_HISTORY_FALLBACK_LIMIT = 100;
const WORD_BUFFER_MIN = 90;
const BIRD_FRAMES = [
  new URL("./键盘侠动效逐帧透明底/1_pixian_ai.png", import.meta.url).href,
  new URL("./键盘侠动效逐帧透明底/2_pixian_ai.png", import.meta.url).href,
  new URL("./键盘侠动效逐帧透明底/3_pixian_ai.png", import.meta.url).href,
  new URL("./键盘侠动效逐帧透明底/4_pixian_ai.png", import.meta.url).href,
  new URL("./键盘侠动效逐帧透明底/5_pixian_ai.png", import.meta.url).href,
  new URL("./键盘侠动效逐帧透明底/6_pixian_ai.png", import.meta.url).href,
  new URL("./键盘侠动效逐帧透明底/7_pixian_ai.png", import.meta.url).href,
  new URL("./键盘侠动效逐帧透明底/8_pixian_ai.png", import.meta.url).href,
  new URL("./键盘侠动效逐帧透明底/9_pixian_ai.png", import.meta.url).href,
  new URL("./键盘侠动效逐帧透明底/10_pixian_ai.png", import.meta.url).href
];
const BIRD_FRAME_MS = 54;
const BIRD_IDLE_GRACE_MS = 140;
let birdTimerId = null;
let birdFrameIndex = 0;
let birdLastInputAt = 0;
let activeBird = null;

const KEYBOARD_LAYOUT = [
  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "delete"],
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"],
  ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"],
  ["space"]
];

const KEY_FINGERS = {
  "1": { hand: "左手", finger: "小指", group: "pinky" },
  q: { hand: "左手", finger: "小指", group: "pinky" },
  a: { hand: "左手", finger: "小指", group: "pinky" },
  z: { hand: "左手", finger: "小指", group: "pinky" },
  "2": { hand: "左手", finger: "无名指", group: "ring" },
  w: { hand: "左手", finger: "无名指", group: "ring" },
  s: { hand: "左手", finger: "无名指", group: "ring" },
  x: { hand: "左手", finger: "无名指", group: "ring" },
  "3": { hand: "左手", finger: "中指", group: "middle" },
  e: { hand: "左手", finger: "中指", group: "middle" },
  d: { hand: "左手", finger: "中指", group: "middle" },
  c: { hand: "左手", finger: "中指", group: "middle" },
  "4": { hand: "左手", finger: "食指", group: "index" },
  "5": { hand: "左手", finger: "食指", group: "index" },
  r: { hand: "左手", finger: "食指", group: "index" },
  t: { hand: "左手", finger: "食指", group: "index" },
  f: { hand: "左手", finger: "食指", group: "index" },
  g: { hand: "左手", finger: "食指", group: "index" },
  v: { hand: "左手", finger: "食指", group: "index" },
  b: { hand: "左手", finger: "食指", group: "index" },
  "6": { hand: "右手", finger: "食指", group: "index" },
  "7": { hand: "右手", finger: "食指", group: "index" },
  y: { hand: "右手", finger: "食指", group: "index" },
  u: { hand: "右手", finger: "食指", group: "index" },
  h: { hand: "右手", finger: "食指", group: "index" },
  j: { hand: "右手", finger: "食指", group: "index" },
  n: { hand: "右手", finger: "食指", group: "index" },
  m: { hand: "右手", finger: "食指", group: "index" },
  "8": { hand: "右手", finger: "中指", group: "middle" },
  i: { hand: "右手", finger: "中指", group: "middle" },
  k: { hand: "右手", finger: "中指", group: "middle" },
  ",": { hand: "右手", finger: "中指", group: "middle" },
  "9": { hand: "右手", finger: "无名指", group: "ring" },
  o: { hand: "右手", finger: "无名指", group: "ring" },
  l: { hand: "右手", finger: "无名指", group: "ring" },
  ".": { hand: "右手", finger: "无名指", group: "ring" },
  "0": { hand: "右手", finger: "小指", group: "pinky" },
  p: { hand: "右手", finger: "小指", group: "pinky" },
  ";": { hand: "右手", finger: "小指", group: "pinky" },
  "/": { hand: "右手", finger: "小指", group: "pinky" },
  "?": { hand: "右手", finger: "小指", group: "pinky" },
  delete: { hand: "右手", finger: "小指", group: "pinky" },
  space: { hand: "左/右手", finger: "拇指", group: "thumb" }
};

const els = {
  workspace: document.querySelector(".workspace"),
  brandReset: document.querySelector("#brandReset"),
  tabs: document.querySelectorAll(".tab"),
  clockLabel: document.querySelector("#clockLabel"),
  modeLabel: document.querySelector("#modeLabel"),
  timeOptions: document.querySelector("#timeOptions"),
  languageOptions: document.querySelector("#languageOptions"),
  difficultyOptions: document.querySelector("#difficultyOptions"),
  toggleButtons: document.querySelectorAll(".toggle"),
  restartBtn: document.querySelector("#restartBtn"),
  typeSurface: document.querySelector("#typeSurface"),
  typingCopy: document.querySelector("#typingCopy"),
  typingBird: document.querySelector("#typingBird"),
  testFingerGuide: document.querySelector("#testFingerGuide"),
  wpmMetric: document.querySelector("#wpmMetric"),
  rawMetric: document.querySelector("#rawMetric"),
  accuracyMetric: document.querySelector("#accuracyMetric"),
  consistencyMetric: document.querySelector("#consistencyMetric"),
  charReadout: document.querySelector("#charReadout"),
  testView: document.querySelector("#testView"),
  practiceView: document.querySelector("#practiceView"),
  historyView: document.querySelector("#historyView"),
  lessonList: document.querySelector("#lessonList"),
  lessonTitle: document.querySelector("#lessonTitle"),
  lessonFocus: document.querySelector("#lessonFocus"),
  lessonScore: document.querySelector("#lessonScore"),
  lessonWeak: document.querySelector("#lessonWeak"),
  lessonCoach: document.querySelector("#lessonCoach"),
  practiceWpmMetric: document.querySelector("#practiceWpmMetric"),
  practiceRawMetric: document.querySelector("#practiceRawMetric"),
  practiceAccuracyMetric: document.querySelector("#practiceAccuracyMetric"),
  practiceConsistencyMetric: document.querySelector("#practiceConsistencyMetric"),
  practiceSurface: document.querySelector("#practiceSurface"),
  practiceCopy: document.querySelector("#practiceCopy"),
  practiceBird: document.querySelector("#practiceBird"),
  practiceFingerGuide: document.querySelector("#practiceFingerGuide"),
  practiceReadout: document.querySelector("#practiceReadout"),
  nextLessonLineBtn: document.querySelector("#nextLessonLineBtn"),
  historySummary: document.querySelector("#historySummary"),
  historyTable: document.querySelector("#historyTable"),
  clearHistoryBtn: document.querySelector("#clearHistoryBtn"),
  resultDialog: document.querySelector("#resultDialog"),
  closeResultBtn: document.querySelector("#closeResultBtn"),
  resultNextBtn: document.querySelector("#resultNextBtn"),
  resultRestartBtn: document.querySelector("#resultRestartBtn"),
  resultTitle: document.querySelector("#resultTitle"),
  resultWpm: document.querySelector("#resultWpm"),
  resultAcc: document.querySelector("#resultAcc"),
  resultRaw: document.querySelector("#resultRaw"),
  resultConsistency: document.querySelector("#resultConsistency"),
  resultChart: document.querySelector("#resultChart"),
  resultChars: document.querySelector("#resultChars"),
  resultType: document.querySelector("#resultType"),
  resultPb: document.querySelector("#resultPb"),
  missedWords: document.querySelector("#missedWords")
};

const persisted = loadPersisted();

const state = {
  view: "test",
  timeLimit: 30,
  language: "common",
  difficulty: "normal",
  punctuation: false,
  numbers: false,
  targetText: "",
  typed: "",
  started: false,
  finished: false,
  startTime: 0,
  elapsed: 0,
  timerId: null,
  samples: [],
  sampleCursor: 0,
  activeLesson: PRACTICE_LESSONS[0].id,
  lessonLine: 0,
  practiceText: "",
  practiceTyped: "",
  practiceStarted: false,
  practiceStartTime: 0,
  practiceElapsed: 0,
  practiceTimerId: null,
  practiceSamples: [],
  practiceSampleCursor: 0,
  practiceCheckpoint: 0,
  practiceKeyEvents: [],
  practiceLastKeyAt: 0,
  adaptive: persisted.adaptive,
  adaptiveNextText: "",
  adaptiveRequestId: 0,
  history: persisted.history,
  practice: persisted.practice,
  weakWords: persisted.weakWords
};

function createDefaultAdaptiveState() {
  return {
    level: 1,
    stageId: "home",
    stageLabel: "基准键位控制",
    decision: "hold",
    targetAccuracy: 96,
    targetCpm: 70,
    focusKeys: ["a", "s", "d", "f", "j", "k", "l", ";"],
    focusFingers: ["左手小指", "左手无名指", "左手中指", "左手食指", "右手食指", "右手中指", "右手无名指", "右手小指"],
    coachMessage: "先用简单键位建立准确率，再逐步提速。",
    streak: 0,
    stuck: 0,
    source: "local"
  };
}

function normalizeAdaptiveState(value) {
  const base = createDefaultAdaptiveState();
  if (!value || typeof value !== "object") return base;
  return {
    ...base,
    ...value,
    level: clamp(Number(value.level) || base.level, 1, 7),
    targetAccuracy: clamp(Number(value.targetAccuracy) || base.targetAccuracy, 85, 99),
    targetCpm: clamp(Number(value.targetCpm) || base.targetCpm, 40, 420),
    focusKeys: Array.isArray(value.focusKeys) ? value.focusKeys.slice(0, 10) : base.focusKeys,
    focusFingers: Array.isArray(value.focusFingers) ? value.focusFingers.slice(0, 8) : base.focusFingers
  };
}

function loadPersisted() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return {
      history: Array.isArray(parsed.history) ? parsed.history : [],
      practice: parsed.practice && typeof parsed.practice === "object" ? parsed.practice : {},
      weakWords: Array.isArray(parsed.weakWords) ? parsed.weakWords : [],
      adaptive: normalizeAdaptiveState(parsed.adaptive)
    };
  } catch {
    return { history: [], practice: {}, weakWords: [], adaptive: createDefaultAdaptiveState() };
  }
}

function persist() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        history: state.history.slice(0, LOCAL_HISTORY_FALLBACK_LIMIT),
        practice: state.practice,
        adaptive: state.adaptive,
        weakWords: state.weakWords.slice(0, 80)
      })
    );
  } catch (error) {
    console.warn("Unable to write browser fallback storage", error);
  }
}

async function loadRecordsFromFile() {
  try {
    const response = await fetch(RECORDS_API);
    if (!response.ok) throw new Error(`records api returned ${response.status}`);
    const data = await response.json();
    const fileRecords = Array.isArray(data.records) ? data.records : [];

    if (!fileRecords.length && state.history.length) {
      await migrateBrowserHistoryToFile();
      return;
    }

    applyRecordHistory(fileRecords);
  } catch (error) {
    console.warn("Using browser fallback records; local records file is unavailable", error);
    renderHistory();
  }
}

async function checkAdaptiveAgentStatus() {
  try {
    const response = await fetch(ADAPTIVE_API);
    const data = await response.json();
    if (data.configured && /AI\s*暂时不可用|AI不可用/.test(state.adaptive.coachMessage || "")) {
      state.adaptive = {
        ...state.adaptive,
        pending: false,
        coachMessage: "AI 已连接，完成一段后会生成下一组综合练习。"
      };
      persist();
      buildLessonList();
      if (state.view === "practice") renderPractice();
    }
  } catch {
    // Local fallback keeps practice usable when the agent is unreachable.
  }
}

async function migrateBrowserHistoryToFile() {
  const oldRecords = [...state.history].reverse();
  for (const record of oldRecords) {
    await saveRecordToFile({ ...record, migratedFromBrowserStorage: true });
  }
  const response = await fetch(RECORDS_API);
  const data = await response.json();
  applyRecordHistory(Array.isArray(data.records) ? data.records : []);
}

function applyRecordHistory(records) {
  state.history = records;
  rebuildPracticeStateFromRecords(records);
  persist();
  buildLessonList();
  renderHistory();
}

function rebuildPracticeStateFromRecords(records) {
  const practice = {};
  const weakWords = [];
  let latestAdaptive = null;
  for (const record of records) {
    if (Array.isArray(record.missed)) weakWords.push(...record.missed);
    if (record.lessonId === ADAPTIVE_LESSON_ID && record.adaptive) latestAdaptive = record.adaptive;
    if (record.type !== "practice" || !record.lessonId) continue;
    const current = practice[record.lessonId] || { completed: 0, bestAccuracy: 0 };
    practice[record.lessonId] = {
      completed: current.completed + 1,
      bestAccuracy: Math.max(current.bestAccuracy || 0, Math.round(record.accuracy || 0))
    };
  }
  state.practice = practice;
  if (latestAdaptive) state.adaptive = normalizeAdaptiveState(latestAdaptive);
  state.weakWords = [...new Set(weakWords.filter(Boolean)), ...state.weakWords].slice(0, 80);
}

async function appendRecord(record) {
  state.history.push(record);
  persist();
  renderHistory();

  try {
    const savedRecord = await saveRecordToFile(record);
    state.history = state.history.map((item) => (item.id === record.id ? savedRecord : item));
    persist();
    renderHistory();
  } catch (error) {
    console.error("Failed to write record to data/records.json", error);
  }
}

async function saveRecordToFile(record) {
  const response = await fetch(RECORDS_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ record })
  });
  if (!response.ok) throw new Error(`records api returned ${response.status}`);
  const data = await response.json();
  return data.record || record;
}

async function clearRecordsFile() {
  const response = await fetch(RECORDS_API, { method: "DELETE" });
  if (!response.ok) throw new Error(`records api returned ${response.status}`);
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function getWordBank() {
  if (state.language === "advanced") return [...COMMON_WORDS, ...ADVANCED_WORDS];
  if (state.language === "missed" && state.weakWords.length) return [...new Set([...state.weakWords, ...COMMON_WORDS.slice(0, 60)])];
  return COMMON_WORDS;
}

function decorateWord(word, index) {
  let next = word;
  if (state.punctuation && index % 7 === 3) next += randomItem([",", ".", ";", "?"]);
  if (state.numbers && index % 9 === 5) next = `${next} ${Math.floor(10 + Math.random() * 90)}`;
  if (state.difficulty === "expert" && index % 11 === 4) next = randomItem(ADVANCED_WORDS);
  return next;
}

function generateWords(count) {
  const bank = getWordBank();
  const words = [];
  for (let index = 0; index < count; index += 1) {
    words.push(decorateWord(randomItem(bank), index));
  }
  return words.join(" ");
}

function prepareTarget() {
  clearInterval(state.timerId);
  state.typed = "";
  state.started = false;
  state.finished = false;
  state.elapsed = 0;
  state.samples = [];
  state.sampleCursor = 0;
  resetTypingBird(els.typingBird);

  state.targetText = generateWords(WORD_BUFFER_MIN);
  renderAll();
  requestAnimationFrame(() => focusSurface(els.typeSurface));
}

function appendTimedWordsIfNeeded() {
  if (state.targetText.length - state.typed.length > 320) return;
  state.targetText = `${state.targetText} ${generateWords(WORD_BUFFER_MIN)}`;
}

function preloadTypingBirdFrames() {
  BIRD_FRAMES.forEach((src) => {
    const image = new Image();
    image.src = src;
  });
  [els.typingBird, els.practiceBird].forEach((bird) => resetTypingBird(bird));
}

function resetTypingBird(bird = activeBird || els.typingBird) {
  if (!bird) return;
  clearInterval(birdTimerId);
  birdTimerId = null;
  birdFrameIndex = 0;
  positionTypingBird(bird);
  bird.src = BIRD_FRAMES[0];
  bird.classList.remove("is-typing");
  if (activeBird === bird) activeBird = null;
}

function triggerTypingBird(bird) {
  if (!bird) return;
  if (activeBird && activeBird !== bird) resetTypingBird(activeBird);
  activeBird = bird;
  positionTypingBird(bird);
  birdLastInputAt = performance.now();
  bird.classList.add("is-typing");
  if (birdTimerId) return;
  birdFrameIndex = 0;
  bird.src = BIRD_FRAMES[birdFrameIndex];
  birdTimerId = window.setInterval(() => {
    birdFrameIndex += 1;
    if (birdFrameIndex >= BIRD_FRAMES.length) {
      if (performance.now() - birdLastInputAt < BIRD_IDLE_GRACE_MS) {
        birdFrameIndex = 0;
      } else {
        resetTypingBird(bird);
        return;
      }
    }
    bird.src = BIRD_FRAMES[birdFrameIndex];
  }, BIRD_FRAME_MS);
}

function getBirdSurface(bird) {
  return bird === els.practiceBird ? els.practiceSurface : els.typeSurface;
}

function positionTypingBird(bird = activeBird) {
  if (!bird) return;
  const surface = getBirdSurface(bird);
  if (!surface || surface.offsetParent === null) return;
  const rect = surface.getBoundingClientRect();
  if (!rect.width || !rect.height) return;

  const viewportWidth = window.innerWidth;
  const maxRatio = viewportWidth <= 560 ? 0.42 : 0.42;
  const minSize = viewportWidth <= 560 ? 112 : viewportWidth <= 920 ? 120 : 150;
  const maxSize = viewportWidth <= 560 ? 132 : viewportWidth <= 920 ? 220 : 320;
  const preferred = rect.width * (viewportWidth <= 920 ? 0.3 : 0.28);
  const size = clamp(Math.min(preferred, rect.width * maxRatio), minSize, maxSize);
  const left = clamp(rect.right - size - 10, 8, viewportWidth - size - 8);
  const top = clamp(rect.bottom - size + 2, 8, window.innerHeight - size - 8);

  bird.style.setProperty("--bird-left", `${Math.round(left)}px`);
  bird.style.setProperty("--bird-top", `${Math.round(top)}px`);
  bird.style.setProperty("--bird-size", `${Math.round(size)}px`);
}

function elapsedSeconds() {
  if (!state.started) return state.elapsed;
  return Math.max(0, (performance.now() - state.startTime) / 1000);
}

function getStats(typed, target, elapsed, samples = state.samples) {
  const seconds = Math.max(elapsed, 0.001);
  const minutes = seconds / 60;
  let correct = 0;
  for (let index = 0; index < typed.length; index += 1) {
    if (typed[index] === target[index]) correct += 1;
  }
  const incorrect = Math.max(typed.length - correct, 0);
  const extra = Math.max(typed.length - target.length, 0);
  const accuracy = typed.length ? (correct / typed.length) * 100 : 100;
  const wpm = correct / minutes;
  const raw = typed.length / minutes;
  const consistency = calculateConsistency(samples);
  return {
    correct,
    incorrect,
    extra,
    accuracy: clamp(accuracy, 0, 100),
    wpm: Math.max(0, wpm),
    raw: Math.max(0, raw),
    consistency
  };
}

function calculateConsistency(samples = state.samples) {
  if (samples.length < 3) return 100;
  const values = samples.map((sample) => sample.wpm).filter((value) => Number.isFinite(value));
  if (values.length < 3) return 100;
  const mean = values.reduce((sum, value) => sum + value, 0) / values.length;
  if (!mean) return 100;
  const variance = values.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) / values.length;
  const cv = Math.sqrt(variance) / mean;
  return clamp(100 - cv * 72, 0, 100);
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function tick() {
  if (!state.started || state.finished) return;
  state.elapsed = elapsedSeconds();
  const wholeSecond = Math.floor(state.elapsed);
  if (wholeSecond > state.sampleCursor) {
    state.samples.push(createTestSample(wholeSecond));
    state.sampleCursor = wholeSecond;
  }
  if (state.elapsed >= state.timeLimit) {
    finishTest();
    return;
  }
  renderAll();
}

function createTestSample(second) {
  const previous = state.samples[state.samples.length - 1];
  const stats = getStats(state.typed, state.targetText, Math.max(second, 0.001), state.samples);
  const previousTyped = previous ? previous.typedLength : 0;
  const previousErrors = previous ? previous.errors : 0;
  const delta = Math.max(0, state.typed.length - previousTyped);
  const errors = stats.incorrect + stats.extra;
  const burst = delta * 60;
  return {
    second,
    typedLength: state.typed.length,
    wpm: burst,
    burst,
    cpm: Math.round(stats.wpm),
    raw: Math.round(stats.raw),
    errors,
    errorDelta: Math.max(0, errors - previousErrors)
  };
}

function startTest() {
  if (state.started || state.finished) return;
  state.started = true;
  state.startTime = performance.now() - state.elapsed * 1000;
  state.timerId = window.setInterval(tick, 160);
}

function handleTypingKey(event) {
  if (state.view !== "test" || isEditable(event.target)) return;
  if (event.metaKey || event.ctrlKey || event.altKey) return;
  if (event.key === "Tab") {
    event.preventDefault();
    prepareTarget();
    return;
  }
  if (event.key === "Escape") {
    event.preventDefault();
    els.typeSurface.focus();
    return;
  }
  if (state.finished) return;
  if (event.key === "Backspace" || event.key === "Delete") {
    event.preventDefault();
    if (state.typed.length) {
      state.typed = state.typed.slice(0, -1);
      renderAll();
    }
    return;
  }
  if (event.key.length !== 1) return;
  event.preventDefault();
  startTest();
  state.typed += event.key;
  triggerTypingBird(els.typingBird);
  appendTimedWordsIfNeeded();
  renderAll();
}

function finishTest() {
  if (state.finished) return;
  state.finished = true;
  state.elapsed = state.timeLimit;
  clearInterval(state.timerId);
  const stats = getStats(state.typed, state.targetText, state.elapsed);
  const missed = findMissedWords(state.typed, state.targetText);
  if (!state.samples.length || state.samples[state.samples.length - 1].second < state.timeLimit) {
    state.samples.push(createTestSample(state.timeLimit));
  }
  const chart = buildResultChartData(stats);
  state.weakWords = mergeWeakWords(missed);

  const record = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    type: "test",
    date: new Date().toISOString(),
    mode: "time",
    label: getModeLabel(),
    elapsed: Number(state.elapsed.toFixed(3)),
    wpm: Math.round(stats.wpm),
    raw: Math.round(stats.raw),
    speedUnit: "cpm",
    accuracy: Math.round(stats.accuracy),
    consistency: Math.round(stats.consistency),
    chars: `${stats.correct}/${stats.incorrect}/${stats.extra}`,
    chart,
    missed
  };

  appendRecord(record);
  persist();
  renderAll();
  renderHistory();
  showResult(record, stats, missed);
}

function buildResultChartData(stats) {
  const samplesBySecond = new Map(state.samples.map((sample) => [sample.second, sample]));
  const samples = [];
  let lastSample = null;
  for (let second = 1; second <= state.timeLimit; second += 1) {
    const sample = samplesBySecond.get(second) || lastSample || {
      second,
      cpm: 0,
      raw: 0,
      burst: 0,
      errors: 0,
      errorDelta: 0,
      typedLength: 0
    };
    const normalized = {
      second,
      cpm: Math.round(sample.cpm || 0),
      raw: Math.round(sample.raw || 0),
      burst: Math.round(sample.burst ?? sample.wpm ?? 0),
      errors: Math.round(sample.errors || 0),
      errorDelta: Math.round(sample.errorDelta || 0),
      typedLength: Math.round(sample.typedLength || 0)
    };
    samples.push(normalized);
    lastSample = normalized;
  }
  const maxSpeed = Math.max(60, ...samples.flatMap((sample) => [sample.cpm, sample.raw, sample.burst]), Math.round(stats.raw));
  const maxErrors = Math.max(1, ...samples.map((sample) => sample.errors));
  return {
    version: 1,
    unit: "cpm",
    duration: state.timeLimit,
    maxSpeed,
    maxErrors,
    samples
  };
}

function findMissedWords(typed, target) {
  const targetWords = target.split(" ");
  const typedWords = typed.split(" ");
  const missed = [];
  let cursor = 0;
  for (let index = 0; index < targetWords.length; index += 1) {
    const targetWord = targetWords[index];
    const typedWord = typed.slice(cursor, cursor + targetWord.length);
    if (typedWord && typedWord !== targetWord) missed.push(targetWord.replace(/[^\w'-]/g, ""));
    cursor += targetWord.length + 1;
  }
  return [...new Set(missed.filter(Boolean))].slice(0, 12);
}

function mergeWeakWords(words) {
  return [...new Set([...words, ...state.weakWords])].slice(0, 80);
}

function showResult(record, stats, missed) {
  showStoredResult(record, missed);
}

function showStoredResult(record, missed = record.missed || []) {
  const pb = getPersonalBest(record.label);
  const chart = record.chart?.samples?.length ? record.chart : buildRecordChartFallback(record);
  els.resultTitle.textContent = getRecordLabel(record);
  els.resultWpm.textContent = String(getRecordSpeed(record));
  els.resultAcc.textContent = `${record.accuracy}%`;
  els.resultRaw.textContent = `原始速度 ${getRecordRaw(record)}`;
  els.resultConsistency.textContent = `稳定性 ${record.consistency}%`;
  els.resultChars.textContent = `字符 ${record.chars || "0/0/0"}`;
  els.resultType.textContent = getRecordLabel(record);
  els.resultPb.textContent = pb ? `最佳 ${getRecordSpeed(pb)} 字符/分` : "最佳 -";
  renderResultChart(chart);
  els.missedWords.innerHTML = missed.length ? missed.map((word) => `<span>${escapeHtml(word)}</span>`).join("") : "";
  if (!els.resultDialog.open) els.resultDialog.showModal();
}

function buildRecordChartFallback(record) {
  const duration = Math.max(1, Math.round(record.elapsed || getRecordDurationSeconds(record) || 30));
  const speed = getRecordSpeed(record);
  const raw = getRecordRaw(record);
  const samples = Array.from({ length: duration }, (_, index) => ({
    second: index + 1,
    cpm: speed,
    raw,
    burst: raw,
    errors: 0,
    errorDelta: 0,
    typedLength: Math.round((raw / 60) * (index + 1))
  }));
  return {
    version: 1,
    unit: "cpm",
    duration,
    maxSpeed: Math.max(60, speed, raw),
    maxErrors: 1,
    samples
  };
}

function renderResultChart(chart) {
  if (!chart?.samples?.length) {
    els.resultChart.innerHTML = "";
    return;
  }

  const samples = normalizeChartSamples(chart.samples);
  const width = 860;
  const height = 270;
  const padding = { top: 18, right: 44, bottom: 38, left: 54 };
  const plotWidth = width - padding.left - padding.right;
  const plotHeight = height - padding.top - padding.bottom;
  const maxSpeed = Math.max(chart.maxSpeed || 60, ...samples.flatMap((sample) => [sample.cpm, sample.raw, sample.burst]), 60);
  const duration = Math.max(chart.duration || samples.length, 1);

  const x = (second) => padding.left + ((second - 1) / Math.max(duration - 1, 1)) * plotWidth;
  const y = (value) => padding.top + (1 - clamp(value / maxSpeed, 0, 1)) * plotHeight;
  const speedPath = samples.map((sample, index) => `${index ? "L" : "M"} ${x(sample.second).toFixed(2)} ${y(sample.cpm).toFixed(2)}`).join(" ");
  const rawPath = samples.map((sample, index) => `${index ? "L" : "M"} ${x(sample.second).toFixed(2)} ${y(sample.raw).toFixed(2)}`).join(" ");
  const burstPath = samples.map((sample, index) => `${index ? "L" : "M"} ${x(sample.second).toFixed(2)} ${y(sample.burst).toFixed(2)}`).join(" ");
  const xTicks = buildTimeTicks(duration, 6);
  const yTicks = buildTicks(maxSpeed, 4);
  const errorMarks = samples
    .filter((sample) => sample.errorDelta > 0)
    .map((sample) => {
      const cx = x(sample.second);
      const cy = y(sample.cpm);
      return `
        <g class="chart-error" transform="translate(${cx.toFixed(2)} ${cy.toFixed(2)})">
          <line x1="-4" y1="-4" x2="4" y2="4"></line>
          <line x1="-4" y1="4" x2="4" y2="-4"></line>
        </g>
      `;
    })
    .join("");
  const sampleMarkers = samples
    .map((sample, index) => renderChartSampleMarker(sample, index, x(sample.second), y(sample.cpm)))
    .join("");
  const sampleTooltips = samples
    .map((sample, index) => renderChartSampleTooltip(sample, index, x(sample.second), y(sample.cpm), width, height))
    .join("");

  els.resultChart.setAttribute("viewBox", `0 0 ${width} ${height}`);
  els.resultChart.innerHTML = `
    <g class="chart-grid">
      ${yTicks.map((tick) => `<line x1="${padding.left}" x2="${width - padding.right}" y1="${y(tick).toFixed(2)}" y2="${y(tick).toFixed(2)}"></line>`).join("")}
      ${xTicks.map((tick) => `<line x1="${x(tick).toFixed(2)}" x2="${x(tick).toFixed(2)}" y1="${padding.top}" y2="${height - padding.bottom}"></line>`).join("")}
    </g>
    <g class="chart-axis">
      ${yTicks.map((tick) => `<text x="${padding.left - 12}" y="${y(tick).toFixed(2)}" text-anchor="end" dominant-baseline="middle">${Math.round(tick)}</text>`).join("")}
      ${xTicks.map((tick) => `<text x="${x(tick).toFixed(2)}" y="${height - 12}" text-anchor="middle">${Math.round(tick)}</text>`).join("")}
      <text class="chart-axis-label" x="18" y="${height / 2}" transform="rotate(-90 18 ${height / 2})" text-anchor="middle">字符/分钟</text>
      <text class="chart-axis-label" x="${width - 12}" y="${height / 2}" transform="rotate(90 ${width - 12} ${height / 2})" text-anchor="middle">错误</text>
    </g>
    <path class="chart-burst-line" d="${burstPath}"></path>
    <path class="chart-raw-line" d="${rawPath}"></path>
    <path class="chart-speed-line" d="${speedPath}"></path>
    ${errorMarks}
    <g class="chart-points">${sampleMarkers}</g>
    <g class="chart-tooltip-layer">${sampleTooltips}</g>
  `;
  bindChartTooltips();
}

function normalizeChartSamples(samples) {
  let previousTyped = 0;
  return samples.map((sample, index) => {
    const typedLength = Math.round(sample.typedLength || 0);
    const hasTypedLength = Number.isFinite(Number(sample.typedLength)) && typedLength > 0;
    const inferredBurst = hasTypedLength
      ? index === 0 ? typedLength * 60 : Math.max(0, typedLength - previousTyped) * 60
      : Math.round(sample.raw || sample.cpm || 0);
    previousTyped = typedLength;
    return {
      second: Math.round(sample.second || index + 1),
      cpm: Math.round(sample.cpm || 0),
      raw: Math.round(sample.raw || 0),
      burst: Math.round(sample.burst ?? sample.wpm ?? inferredBurst ?? sample.raw ?? 0),
      errors: Math.round(sample.errors || 0),
      errorDelta: Math.round(sample.errorDelta || 0),
      typedLength
    };
  });
}

function renderChartSampleMarker(sample, index, cx, cy) {
  return `
    <g class="chart-sample-marker" tabindex="0" data-sample-index="${index}" aria-label="${sample.second} 秒，错误 ${sample.errors}，字符每分钟 ${sample.cpm}，原始速度 ${sample.raw}，爆发速度 ${sample.burst}">
      <circle class="chart-hover-target" cx="${cx.toFixed(2)}" cy="${cy.toFixed(2)}" r="8"></circle>
      <circle class="chart-speed-dot" cx="${cx.toFixed(2)}" cy="${cy.toFixed(2)}" r="2.2"></circle>
    </g>
  `;
}

function renderChartSampleTooltip(sample, index, cx, cy, width, height) {
  const tooltipWidth = 132;
  const tooltipHeight = 106;
  const offset = 12;
  const tx = cx + tooltipWidth + offset > width ? cx - tooltipWidth - offset : cx + offset;
  const ty = clamp(cy - tooltipHeight / 2, 6, height - tooltipHeight - 6);
  const rows = [
    { label: "错误", value: sample.errors, className: "tooltip-error" },
    { label: "字符/分", value: sample.cpm, className: "tooltip-speed" },
    { label: "原始速度", value: sample.raw, className: "tooltip-raw" },
    { label: "爆发速度", value: sample.burst, className: "tooltip-burst" }
  ];

  return `
    <g class="chart-tooltip" data-tooltip-index="${index}" transform="translate(${tx.toFixed(2)} ${ty.toFixed(2)})" aria-hidden="true">
      <rect class="chart-tooltip-bg" width="${tooltipWidth}" height="${tooltipHeight}" rx="7"></rect>
      <text class="chart-tooltip-second" x="10" y="19">${sample.second} 秒</text>
      ${rows.map((row, rowIndex) => {
        const yBase = 39 + rowIndex * 19;
        return `
          <rect class="chart-tooltip-swatch ${row.className}" x="10" y="${yBase - 10}" width="10" height="10" rx="1"></rect>
          <text class="chart-tooltip-row" x="26" y="${yBase}">${row.label}: ${row.value}</text>
        `;
      }).join("")}
    </g>
  `;
}

function bindChartTooltips() {
  const markers = els.resultChart.querySelectorAll(".chart-sample-marker");
  const tooltips = els.resultChart.querySelectorAll(".chart-tooltip");
  const hideAll = () => tooltips.forEach((tooltip) => tooltip.classList.remove("is-visible"));
  markers.forEach((marker) => {
    const index = marker.dataset.sampleIndex;
    const tooltip = els.resultChart.querySelector(`[data-tooltip-index="${index}"]`);
    if (!tooltip) return;
    const show = () => {
      hideAll();
      tooltip.classList.add("is-visible");
    };
    marker.addEventListener("mouseenter", show);
    marker.addEventListener("focus", show);
    marker.addEventListener("mouseleave", () => tooltip.classList.remove("is-visible"));
    marker.addEventListener("blur", () => tooltip.classList.remove("is-visible"));
  });
}

function buildTicks(maxValue, count) {
  if (maxValue <= 1) return [1];
  const step = Math.max(1, Math.round(maxValue / count));
  const ticks = [];
  for (let value = 0; value <= maxValue; value += step) ticks.push(value);
  if (ticks[ticks.length - 1] !== maxValue) ticks.push(maxValue);
  return ticks;
}

function buildTimeTicks(duration, count) {
  const step = Math.max(1, Math.round(duration / count));
  const ticks = [];
  for (let value = 1; value <= duration; value += step) ticks.push(value);
  if (ticks[ticks.length - 1] !== duration) ticks.push(duration);
  return ticks;
}

function getPersonalBest(label) {
  return state.history
    .filter((record) => record.label === label && record.type !== "practice")
    .sort((a, b) => getRecordSpeed(b) - getRecordSpeed(a) || b.accuracy - a.accuracy)[0];
}

function getRecordSpeed(record) {
  if (record?.speedUnit === "cpm") return Math.round(record.wpm || 0);
  const legacy = getLegacyTimedRecordStats(record);
  return legacy ? legacy.speed : Math.round(record?.wpm || 0);
}

function getRecordRaw(record) {
  if (record?.speedUnit === "cpm") return Math.round(record.raw || 0);
  const legacy = getLegacyTimedRecordStats(record);
  return legacy ? legacy.raw : Math.round(record?.raw || 0);
}

function getLegacyTimedRecordStats(record) {
  const duration = getRecordDurationSeconds(record);
  const chars = parseRecordChars(record?.chars);
  if (!duration || !chars) return null;
  const minutes = duration / 60;
  return {
    speed: Math.round(chars.correct / minutes),
    raw: Math.round((chars.correct + chars.incorrect + chars.extra) / minutes)
  };
}

function getRecordDurationSeconds(record) {
  const label = String(record?.label || "");
  const localized = label.match(/计时\s+(\d+)\s*秒/);
  if (localized) return Number(localized[1]);
  const legacy = label.match(/^time\s+(\d+)\s+english$/i);
  if (legacy) return Number(legacy[1]);
  return 0;
}

function parseRecordChars(value) {
  const match = String(value || "").match(/^(\d+)\/(\d+)\/(\d+)$/);
  if (!match) return null;
  return {
    correct: Number(match[1]),
    incorrect: Number(match[2]),
    extra: Number(match[3])
  };
}

function getModeLabel() {
  return `计时 ${state.timeLimit} 秒 · 英文`;
}

function localizeRecordLabel(label) {
  const text = String(label || "");
  const timeMatch = text.match(/^time\s+(\d+)\s+english$/i);
  if (timeMatch) return `计时 ${timeMatch[1]} 秒 · 英文`;
  const wordsMatch = text.match(/^words\s+(\d+)\s+english$/i);
  if (wordsMatch) return `词数 ${wordsMatch[1]} 个 · 英文`;
  if (/^quote\s+english$/i.test(text)) return "引用文本 · 英文";
  if (/^custom\s+english$/i.test(text)) return "自定义文本 · 英文";
  return text;
}

function buildFingerGuides() {
  [els.testFingerGuide, els.practiceFingerGuide].forEach((guide) => {
    if (!guide) return;
    guide.innerHTML = `
      ${renderFingerHands()}
      <div class="finger-guide-head">
        <div>
          <span class="finger-eyebrow">下一键提示</span>
          <strong class="finger-current" data-finger-current>空格</strong>
        </div>
        <div class="finger-instruction" data-finger-instruction>等待输入</div>
      </div>
      <div class="finger-keyboard" aria-label="QWERTY 手指键位提示">
        ${KEYBOARD_LAYOUT.map((row, rowIndex) => `
          <div class="keyboard-row keyboard-row-${rowIndex + 1}">
            ${row.map((key) => renderFingerKey(key)).join("")}
          </div>
        `).join("")}
      </div>
    `;
  });
}

function renderFingerHands() {
  return `
    <div class="finger-hands" aria-hidden="true">
      ${renderHandPicture("left", "左手")}
      ${renderHandPicture("right", "右手")}
    </div>
  `;
}

function renderHandPicture(hand, label) {
  return `
    <div class="hand-picture hand-${hand}">
      <svg viewBox="0 0 190 185" role="presentation" focusable="false">
        <g class="hand-finger hand-pinky" data-hand="${hand}" data-finger="pinky">
          <rect x="43" y="58" width="22" height="77" rx="11"></rect>
        </g>
        <g class="hand-finger hand-ring" data-hand="${hand}" data-finger="ring">
          <rect x="69" y="42" width="24" height="95" rx="12"></rect>
        </g>
        <g class="hand-finger hand-middle" data-hand="${hand}" data-finger="middle">
          <rect x="96" y="30" width="25" height="108" rx="12.5"></rect>
        </g>
        <g class="hand-finger hand-index" data-hand="${hand}" data-finger="index">
          <rect x="124" y="48" width="24" height="88" rx="12"></rect>
        </g>
        <g class="hand-finger hand-thumb" data-hand="${hand}" data-finger="thumb">
          <rect x="104" y="116" width="62" height="25" rx="12.5" transform="rotate(31 135 128.5)"></rect>
        </g>
        <path class="hand-palm" d="M48 110 C48 89 63 79 80 89 C88 76 107 74 117 90 C130 82 148 92 150 112 L153 150 C154 166 143 176 126 176 L72 176 C57 176 46 166 47 151 Z"></path>
        <text class="hand-label" x="95" y="171" text-anchor="middle">${label}</text>
      </svg>
    </div>
  `;
}

function renderFingerKey(key) {
  const info = KEY_FINGERS[key] || KEY_FINGERS[normalizeGuideKey(key)];
  const label = key === "space" ? "space" : key === "delete" ? "delete" : key.toUpperCase();
  const sizeClass = key === "space" ? "finger-key-space" : key === "delete" ? "finger-key-delete" : "";
  return `
    <span class="finger-key finger-${info?.group || "unknown"} ${sizeClass}" data-key="${escapeHtml(key)}">
      ${escapeHtml(label)}
    </span>
  `;
}

function updateFingerGuide(guide, target, typed) {
  if (!guide) return;
  const errorIndex = findLastTypingErrorIndex(target, typed);
  if (errorIndex >= 0) {
    const deleteInfo = KEY_FINGERS.delete;
    const currentLabel = guide.querySelector("[data-finger-current]");
    const instruction = guide.querySelector("[data-finger-instruction]");
    updateFingerHandCue(guide, deleteInfo, true);
    guide.querySelectorAll(".finger-key").forEach((element) => {
      element.classList.toggle("is-active", element.dataset.key === "delete");
    });
    if (currentLabel) currentLabel.textContent = "Delete";
    if (instruction) instruction.textContent = "输入有误，使用右手小拇指按 Delete";
    return;
  }

  const current = target[typed.length] || "";
  const key = normalizeGuideKey(current);
  const info = KEY_FINGERS[key];
  const currentLabel = guide.querySelector("[data-finger-current]");
  const instruction = guide.querySelector("[data-finger-instruction]");
  updateFingerHandCue(guide, info, Boolean(current));

  guide.querySelectorAll(".finger-key").forEach((element) => {
    element.classList.toggle("is-active", Boolean(key) && element.dataset.key === key);
  });

  if (!current) {
    if (currentLabel) currentLabel.textContent = "完成";
    if (instruction) instruction.textContent = "这一段已经结束";
    return;
  }

  const shown = displayGuideChar(current);
  if (currentLabel) currentLabel.textContent = shown;
  if (instruction) {
    instruction.textContent = info
      ? `使用 ${info.hand}${info.finger}`
      : "暂未收录该字符的指法";
  }
}

function updateFingerHandCue(guide, info, hasCurrent) {
  guide.querySelectorAll(".hand-finger").forEach((finger) => {
    finger.classList.remove("is-active");
  });
  if (!hasCurrent || !info) return;

  if (info.group === "thumb") {
    guide.querySelectorAll('[data-finger="thumb"]').forEach((finger) => {
      finger.classList.add("is-active");
    });
    return;
  }

  const hand = info.hand.includes("左") ? "left" : "right";
  const finger = fingerNameToKey(info.finger);
  guide.querySelector(`[data-hand="${hand}"][data-finger="${finger}"]`)?.classList.add("is-active");
}

function fingerNameToKey(name) {
  if (name === "小指") return "pinky";
  if (name === "无名指") return "ring";
  if (name === "中指") return "middle";
  if (name === "食指") return "index";
  if (name === "拇指") return "thumb";
  return "";
}

function normalizeGuideKey(char) {
  if (char === " ") return "space";
  if (char === "?") return "/";
  return String(char || "").toLowerCase();
}

function displayGuideChar(char) {
  if (char === " ") return "空格";
  return char;
}

function findLastTypingErrorIndex(target, typed) {
  for (let index = typed.length - 1; index >= 0; index -= 1) {
    if (typed[index] !== target[index]) return index;
  }
  return -1;
}

function renderAll() {
  const elapsed = elapsedSeconds();
  const stats = getStats(state.typed, state.targetText, elapsed || 0);
  renderTypingCopy(els.typingCopy, state.targetText, state.typed);
  renderMetrics(stats);
  renderTopLabels(elapsed);
  updateFingerGuide(els.testFingerGuide, state.targetText, state.typed);
  requestAnimationFrame(() => positionTypingBird(els.typingBird));
}

function renderTypingCopy(container, target, typed) {
  const safeTarget = target.slice(0, Math.max(target.length, typed.length));
  let html = "";
  for (let index = 0; index < safeTarget.length; index += 1) {
    const expected = safeTarget[index] || "";
    const typedChar = typed[index];
    const classes = ["char"];
    if (index === typed.length) classes.push("current");
    if (typedChar !== undefined) classes.push(typedChar === expected ? "correct" : "incorrect");
    html += `<span class="${classes.join(" ")}">${escapeHtml(expected)}</span>`;
  }
  if (typed.length >= safeTarget.length) {
    html += '<span class="char current"> </span>';
  }
  container.innerHTML = html;
  keepCaretVisible(container);
}

function keepCaretVisible(container) {
  const caret = container.querySelector(".current");
  if (!caret) return;
  const parent = container.parentElement;
  const caretTop = caret.offsetTop;
  const lineHeight = Number.parseFloat(getComputedStyle(container).lineHeight) || 40;
  const currentLine = Math.floor(caretTop / lineHeight);
  const targetScroll = Math.max(0, currentLine - 1) * lineHeight;
  parent.scrollTop = targetScroll;
}

function renderMetrics(stats) {
  els.wpmMetric.textContent = String(Math.round(stats.wpm));
  els.rawMetric.textContent = String(Math.round(stats.raw));
  els.accuracyMetric.textContent = `${Math.round(stats.accuracy)}%`;
  els.consistencyMetric.textContent = `${Math.round(stats.consistency)}%`;
  els.charReadout.textContent = `${stats.correct} / ${stats.incorrect} / ${stats.extra}`;
}

function renderTopLabels(elapsed) {
  const remaining = Math.max(0, Math.ceil(state.timeLimit - elapsed));
  els.clockLabel.textContent = String(remaining);
  els.modeLabel.textContent = getModeLabel();
}

function renderPractice() {
  const lesson = getActiveLesson();
  const elapsed = getPracticeElapsed();
  const stats = getStats(state.practiceTyped, state.practiceText, elapsed, state.practiceSamples);
  els.lessonTitle.textContent = lesson.title;
  els.lessonFocus.textContent = isAdaptiveLesson(lesson)
    ? `${state.adaptive.stageLabel} · 目标 ${state.adaptive.targetCpm} 字符/分 / ${state.adaptive.targetAccuracy}%`
    : lesson.focus;
  els.lessonScore.textContent = isAdaptiveLesson(lesson)
    ? `等级 ${Math.round(state.adaptive.level)} · 达标 ${state.adaptive.streak || 0}/2`
    : `已完成 ${state.practice[lesson.id]?.completed || 0} 次`;
  const weak = state.weakWords.slice(0, 3).join(", ") || "暂无";
  els.lessonWeak.textContent = `弱项：${weak}`;
  if (els.lessonCoach) {
    const status = state.adaptive.pending ? "生成下一组中" : state.adaptive.coachMessage;
    els.lessonCoach.textContent = isAdaptiveLesson(lesson) ? `教练：${status}` : "教练：手动课程";
  }
  renderPracticeMetrics(stats);
  renderPracticeTopLabels(elapsed, lesson);
  renderTypingCopy(els.practiceCopy, state.practiceText, state.practiceTyped);
  els.practiceReadout.textContent = `${stats.correct} / ${stats.incorrect} / ${stats.extra}`;
  updateFingerGuide(els.practiceFingerGuide, state.practiceText, state.practiceTyped);
  requestAnimationFrame(() => positionTypingBird(els.practiceBird));
}

function renderPracticeMetrics(stats) {
  els.practiceWpmMetric.textContent = String(Math.round(stats.wpm));
  els.practiceRawMetric.textContent = String(Math.round(stats.raw));
  els.practiceAccuracyMetric.textContent = `${Math.round(stats.accuracy)}%`;
  els.practiceConsistencyMetric.textContent = `${Math.round(stats.consistency)}%`;
}

function renderPracticeTopLabels(elapsed, lesson) {
  if (state.view !== "practice") return;
  els.clockLabel.textContent = String(Math.floor(elapsed));
  els.modeLabel.textContent = `无限练习 · ${lesson.title}`;
}

function buildLessonList() {
  els.lessonList.innerHTML = PRACTICE_LESSONS.map((lesson) => {
    const completed = state.practice[lesson.id]?.completed || 0;
    const adaptiveMeta = lesson.adaptive
      ? `等级 ${Math.round(state.adaptive.level)} · ${state.adaptive.stageLabel}`
      : `${escapeHtml(lesson.focus)} · 已练 ${completed} 次`;
    return `
      <button class="lesson-card ${lesson.adaptive ? "is-adaptive" : ""} ${lesson.id === state.activeLesson ? "is-active" : ""}" type="button" data-lesson="${lesson.id}">
        <strong>${escapeHtml(lesson.title)}</strong>
        <span>${escapeHtml(adaptiveMeta)}</span>
      </button>
    `;
  }).join("");
}

function getActiveLesson() {
  return PRACTICE_LESSONS.find((lesson) => lesson.id === state.activeLesson) || PRACTICE_LESSONS[0];
}

function isAdaptiveLesson(lesson = getActiveLesson()) {
  return lesson?.id === ADAPTIVE_LESSON_ID;
}

function getAdaptiveStage(level = state.adaptive.level) {
  if (level <= 1) return ADAPTIVE_STAGES[0];
  if (level === 2) return ADAPTIVE_STAGES[1];
  if (level === 3) return ADAPTIVE_STAGES[2];
  if (level === 4) return ADAPTIVE_STAGES[3];
  if (level === 5) return ADAPTIVE_STAGES[4];
  return ADAPTIVE_STAGES[5];
}

function sanitizePracticeText(text) {
  return String(text || "")
    .replace(/[^A-Za-z0-9 ,.;?'\-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getAdaptiveWordBank() {
  const level = Math.round(state.adaptive.level || 1);
  const stage = getAdaptiveStage(level);
  const weak = state.weakWords
    .filter(Boolean)
    .flatMap((word) => [word, word])
    .slice(0, 24);
  const base = stage.words || COMMON_WORDS;
  const extra = level >= 4 ? COMMON_WORDS.slice(0, 120) : [];
  const advanced = level >= 6 ? ADVANCED_WORDS.slice(0, 40) : [];
  return [...new Set([...weak, ...base, ...extra, ...advanced])].filter(Boolean);
}

function decorateAdaptiveWord(word, index) {
  const level = Math.round(state.adaptive.level || 1);
  let next = word;
  if (level >= 5 && index % 8 === 5) next += randomItem([",", ".", ";", "?"]);
  if (level >= 6 && index % 10 === 6) next = `${next} ${Math.floor(10 + Math.random() * 90)}`;
  if (level >= 7 && index % 12 === 7) next = randomItem(ADVANCED_WORDS);
  return next;
}

function generateAdaptivePracticeChunk(lineCount = 8) {
  const bank = getAdaptiveWordBank();
  const wordCount = clamp(lineCount * 7, 18, 70);
  const words = [];
  for (let index = 0; index < wordCount; index += 1) {
    words.push(decorateAdaptiveWord(randomItem(bank), index));
  }
  return sanitizePracticeText(words.join(" "));
}

function takeAdaptivePracticeText(lineCount = 4) {
  if (state.adaptiveNextText) {
    const text = sanitizePracticeText(state.adaptiveNextText);
    state.adaptiveNextText = "";
    if (text.length > 60) return text;
  }
  return generateAdaptivePracticeChunk(lineCount);
}

function getNextPracticeLine() {
  const lesson = getActiveLesson();
  const line = lesson.lines[state.lessonLine % lesson.lines.length];
  state.lessonLine = (state.lessonLine + 1) % lesson.lines.length;
  return line;
}

function generatePracticeChunk(lineCount = 8) {
  if (isAdaptiveLesson()) return takeAdaptivePracticeText(lineCount);
  const lines = [];
  for (let index = 0; index < lineCount; index += 1) {
    lines.push(getNextPracticeLine());
  }
  return lines.join(" ");
}

function preparePracticeLine(next = false) {
  const lesson = getActiveLesson();
  if (next) state.lessonLine = (state.lessonLine + 1) % lesson.lines.length;
  clearInterval(state.practiceTimerId);
  state.practiceText = generatePracticeChunk();
  state.practiceTyped = "";
  state.practiceStarted = false;
  state.practiceStartTime = 0;
  state.practiceElapsed = 0;
  state.practiceTimerId = null;
  state.practiceSamples = [];
  state.practiceSampleCursor = 0;
  state.practiceCheckpoint = 0;
  state.practiceKeyEvents = [];
  state.practiceLastKeyAt = 0;
  if (isAdaptiveLesson(lesson)) state.adaptiveNextText = "";
  resetTypingBird(els.practiceBird);
  buildLessonList();
  renderPractice();
  requestAnimationFrame(() => focusSurface(els.practiceSurface));
}

function startPractice() {
  if (state.practiceStarted) return;
  state.practiceStarted = true;
  state.practiceStartTime = performance.now() - state.practiceElapsed * 1000;
  state.practiceTimerId = window.setInterval(tickPractice, 160);
}

function getPracticeElapsed() {
  if (!state.practiceStarted) return state.practiceElapsed;
  return (performance.now() - state.practiceStartTime) / 1000;
}

function tickPractice() {
  if (!state.practiceStarted) return;
  state.practiceElapsed = getPracticeElapsed();
  const wholeSecond = Math.floor(state.practiceElapsed);
  if (wholeSecond > state.practiceSampleCursor) {
    const previousTyped = state.practiceSamples.length ? state.practiceSamples[state.practiceSamples.length - 1].typedLength : 0;
    const delta = Math.max(0, state.practiceTyped.length - previousTyped);
    state.practiceSamples.push({ second: wholeSecond, typedLength: state.practiceTyped.length, wpm: delta * 60 });
    state.practiceSampleCursor = wholeSecond;
  }
  if (state.view === "practice") renderPractice();
}

function appendPracticeTextIfNeeded() {
  const remaining = state.practiceText.length - state.practiceTyped.length;
  const bufferMin = isAdaptiveLesson() ? ADAPTIVE_BUFFER_MIN : 320;
  if (remaining > bufferMin) return;
  state.practiceText = `${state.practiceText} ${generatePracticeChunk(4)}`;
}

function recordPracticeKeyEvent(key, position, expected) {
  const elapsed = getPracticeElapsed();
  const delayMs = state.practiceLastKeyAt ? Math.max(0, (elapsed - state.practiceLastKeyAt) * 1000) : 0;
  state.practiceLastKeyAt = elapsed;
  state.practiceKeyEvents.push({
    type: "char",
    key,
    expected,
    position,
    elapsed: Number(elapsed.toFixed(3)),
    delayMs: Math.round(delayMs),
    correct: key === expected
  });
  if (state.practiceKeyEvents.length > 1200) state.practiceKeyEvents = state.practiceKeyEvents.slice(-900);
}

function recordPracticeDeleteEvent(position) {
  state.practiceKeyEvents.push({
    type: "delete",
    key: "delete",
    position,
    elapsed: Number(getPracticeElapsed().toFixed(3))
  });
}

function buildPracticeSegmentSummary(segmentStart, segmentEnd, stats, missed) {
  const segmentEvents = state.practiceKeyEvents.filter((event) => event.position >= segmentStart && event.position < segmentEnd);
  const wordStats = buildSegmentWordStats(segmentStart, segmentEnd, segmentEvents);
  const keyStats = buildSegmentKeyStats(segmentEvents);
  const fingerStats = buildSegmentFingerStats(segmentEvents);
  const slowWords = wordStats
    .filter((word) => word.avgDelayMs >= 360 || word.errors > 0)
    .sort((a, b) => b.errors - a.errors || b.avgDelayMs - a.avgDelayMs)
    .slice(0, 10);

  return {
    lessonId: getActiveLesson().id,
    level: Math.round(state.adaptive.level || 1),
    stageId: state.adaptive.stageId,
    stageLabel: state.adaptive.stageLabel,
    targetAccuracy: state.adaptive.targetAccuracy,
    targetCpm: state.adaptive.targetCpm,
    elapsed: Number(getPracticeElapsed().toFixed(3)),
    segmentStart,
    segmentEnd,
    chars: {
      correct: stats.correct,
      incorrect: stats.incorrect,
      extra: stats.extra
    },
    cpm: Math.round(stats.wpm),
    raw: Math.round(stats.raw),
    accuracy: Math.round(stats.accuracy),
    consistency: Math.round(stats.consistency),
    deletes: segmentEvents.filter((event) => event.type === "delete").length,
    missedWords: missed,
    slowWords,
    wordStats: wordStats.slice(0, 18),
    keyStats,
    fingerStats
  };
}

function buildSegmentWordStats(segmentStart, segmentEnd, events) {
  const boundaries = getWordBoundaries(state.practiceText, segmentStart, segmentEnd);
  return boundaries.map((word) => {
    const wordEvents = events.filter((event) => event.type === "char" && event.position >= word.start && event.position < word.end);
    const typedWord = state.practiceTyped.slice(word.start, Math.min(word.end, state.practiceTyped.length));
    const errors = wordEvents.filter((event) => !event.correct).length + (typedWord && typedWord !== word.text ? 1 : 0);
    const delayValues = wordEvents.map((event) => event.delayMs).filter((value) => value > 0);
    const avgDelayMs = delayValues.length
      ? Math.round(delayValues.reduce((sum, value) => sum + value, 0) / delayValues.length)
      : 0;
    return {
      word: word.text.replace(/[^\w'-]/g, ""),
      typed: typedWord,
      attempts: wordEvents.length,
      errors,
      avgDelayMs,
      correct: typedWord === word.text
    };
  }).filter((item) => item.word);
}

function getWordBoundaries(text, segmentStart, segmentEnd) {
  const boundaries = [];
  const matcher = /\S+/g;
  let match;
  while ((match = matcher.exec(text))) {
    const start = match.index;
    const end = start + match[0].length;
    if (end <= segmentStart) continue;
    if (start >= segmentEnd) break;
    boundaries.push({ text: match[0], start, end });
  }
  return boundaries;
}

function buildSegmentKeyStats(events) {
  const stats = new Map();
  for (const event of events) {
    if (event.type !== "char") continue;
    const key = normalizeGuideKey(event.expected || event.key);
    if (!key) continue;
    const item = stats.get(key) || { key, attempts: 0, errors: 0, avgDelayMs: 0, totalDelay: 0 };
    item.attempts += 1;
    if (!event.correct) item.errors += 1;
    item.totalDelay += event.delayMs || 0;
    stats.set(key, item);
  }
  return [...stats.values()]
    .map((item) => ({
      key: item.key,
      attempts: item.attempts,
      errors: item.errors,
      avgDelayMs: item.attempts ? Math.round(item.totalDelay / item.attempts) : 0
    }))
    .sort((a, b) => b.errors - a.errors || b.avgDelayMs - a.avgDelayMs)
    .slice(0, 12);
}

function buildSegmentFingerStats(events) {
  const stats = new Map();
  for (const event of events) {
    if (event.type !== "char") continue;
    const info = KEY_FINGERS[normalizeGuideKey(event.expected || event.key)];
    if (!info) continue;
    const label = `${info.hand}${info.finger}`;
    const item = stats.get(label) || { finger: label, attempts: 0, errors: 0, totalDelay: 0 };
    item.attempts += 1;
    if (!event.correct) item.errors += 1;
    item.totalDelay += event.delayMs || 0;
    stats.set(label, item);
  }
  return [...stats.values()]
    .map((item) => ({
      finger: item.finger,
      attempts: item.attempts,
      errors: item.errors,
      avgDelayMs: item.attempts ? Math.round(item.totalDelay / item.attempts) : 0
    }))
    .sort((a, b) => b.errors - a.errors || b.avgDelayMs - a.avgDelayMs)
    .slice(0, 8);
}

function updateLocalAdaptiveState(summary) {
  const metAccuracy = summary.accuracy >= state.adaptive.targetAccuracy;
  const metSpeed = summary.cpm >= state.adaptive.targetCpm;
  const metConsistency = summary.consistency >= 68;
  const next = { ...state.adaptive, pending: false, source: "local" };

  if (metAccuracy && metSpeed && metConsistency) {
    next.streak = (next.streak || 0) + 1;
    next.stuck = 0;
    next.decision = next.streak >= 2 ? "advance" : "hold";
    if (next.streak >= 2) {
      next.level = clamp(Math.round(next.level || 1) + 1, 1, 7);
      next.streak = 0;
    }
    next.coachMessage = next.decision === "advance"
      ? "本轮达标，下一组会提高一点难度。"
      : "这轮达标，再稳定一轮就升级。";
  } else if (summary.accuracy < 88 || (next.stuck || 0) >= 4) {
    next.level = clamp(Math.round(next.level || 1) - 1, 1, 7);
    next.streak = 0;
    next.stuck = 0;
    next.decision = "downgrade";
    next.coachMessage = "当前难度有些吃力，先回到更稳的内容练准。";
  } else {
    next.streak = 0;
    next.stuck = (next.stuck || 0) + 1;
    next.decision = summary.accuracy >= 94 ? "focus" : "hold";
    next.coachMessage = summary.accuracy >= 94
      ? "准确率接近达标，下一组会加强慢词和弱项键位。"
      : "先把准确率稳住，再继续提速。";
  }

  const stage = getAdaptiveStage(next.level);
  next.stageId = stage.id;
  next.stageLabel = stage.label;
  next.focusKeys = summary.keyStats.slice(0, 6).map((item) => item.key);
  next.focusFingers = summary.fingerStats.slice(0, 4).map((item) => item.finger);
  next.targetAccuracy = clamp(94 + Math.min(4, Math.floor(next.level / 2)), 94, 98);
  next.targetCpm = clamp(60 + next.level * 18, 70, 240);
  state.adaptive = normalizeAdaptiveState(next);
}

function applyAdaptivePlan(plan) {
  if (!plan || typeof plan !== "object") return;
  const next = normalizeAdaptiveState({
    ...state.adaptive,
    ...plan,
    pending: false,
    source: "mimo"
  });
  state.adaptive = next;
  if (plan.nextText) {
    const text = sanitizePracticeText(plan.nextText);
    if (text.length > 60) state.adaptiveNextText = text;
  }
  if (isAdaptiveLesson() && state.practiceText.length - state.practiceTyped.length < ADAPTIVE_BUFFER_MIN + 120 && state.adaptiveNextText) {
    state.practiceText = `${state.practiceText} ${takeAdaptivePracticeText(4)}`;
  }
  persist();
  buildLessonList();
  if (state.view === "practice") renderPractice();
}

function buildAdaptiveRequestPayload(summary) {
  return {
    app: "键盘侠",
    locale: "zh-CN",
    current: state.adaptive,
    segment: summary,
    weakWords: state.weakWords.slice(0, 24),
    recentAdaptiveRecords: state.history
      .filter((record) => record.type === "practice" && record.lessonId === ADAPTIVE_LESSON_ID)
      .slice(-6)
      .map((record) => ({
        level: record.adaptive?.level,
        stageId: record.adaptive?.stageId,
        cpm: record.wpm,
        raw: record.raw,
        accuracy: record.accuracy,
        consistency: record.consistency,
        missed: record.missed || [],
        slowWords: record.slowWords || []
      })),
    rules: {
      progression: ["基准键位控制", "上排键位伸展", "下排键位平衡", "常用英文词", "标点英文", "数字与复杂上下文"],
      minNextTextChars: 260,
      maxNextTextChars: 560,
      upgradeRequires: "准确率、字符/分、稳定性连续达标",
      downgradeWhen: "长时间不能达标或准确率明显下滑"
    }
  };
}

async function requestAdaptivePracticePlan(summary) {
  const requestId = state.adaptiveRequestId + 1;
  state.adaptiveRequestId = requestId;
  state.adaptive = { ...state.adaptive, pending: true };
  buildLessonList();
  renderPractice();

  try {
    const response = await fetch(ADAPTIVE_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(buildAdaptiveRequestPayload(summary))
    });
    const data = await response.json();
    if (!response.ok || !data.ok) throw new Error(data.error || `adaptive api returned ${response.status}`);
    if (requestId !== state.adaptiveRequestId) return;
    applyAdaptivePlan(data.plan);
  } catch (error) {
    if (requestId !== state.adaptiveRequestId) return;
    state.adaptive = {
      ...state.adaptive,
      pending: false,
      source: "local",
      coachMessage: "AI 暂时不可用，已用本地规则继续安排下一组。"
    };
    persist();
    buildLessonList();
    if (state.view === "practice") renderPractice();
    console.warn("Adaptive practice agent unavailable", error);
  }
}

function recordPracticeProgress() {
  const adaptive = isAdaptiveLesson();
  const chunkSize = adaptive ? ADAPTIVE_SEGMENT_CHARS : 160;
  if (state.practiceTyped.length - state.practiceCheckpoint < chunkSize) return;
  const lesson = getActiveLesson();
  const stats = getStats(state.practiceTyped, state.practiceText, getPracticeElapsed(), state.practiceSamples);
  const segmentStart = state.practiceCheckpoint;
  const segmentEnd = state.practiceTyped.length;
  const missed = findMissedWords(
    state.practiceTyped.slice(segmentStart, segmentEnd),
    state.practiceText.slice(segmentStart, segmentEnd)
  );
  state.weakWords = mergeWeakWords(missed);
  const summary = buildPracticeSegmentSummary(segmentStart, segmentEnd, stats, missed);
  if (adaptive) updateLocalAdaptiveState(summary);
  const current = state.practice[lesson.id] || { completed: 0, bestAccuracy: 0 };
  state.practice[lesson.id] = {
    completed: current.completed + 1,
    bestAccuracy: Math.max(current.bestAccuracy || 0, Math.round(stats.accuracy))
  };
  const record = {
    id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${segmentEnd}`,
    type: "practice",
    date: new Date().toISOString(),
    label: `英文练习 · ${lesson.title}`,
    lessonId: lesson.id,
    lessonTitle: lesson.title,
    lessonFocus: lesson.focus,
    elapsed: Number(getPracticeElapsed().toFixed(3)),
    segmentStart,
    segmentEnd,
    wpm: Math.round(stats.wpm),
    raw: Math.round(stats.raw),
    speedUnit: "cpm",
    accuracy: Math.round(stats.accuracy),
    consistency: Math.round(stats.consistency),
    chars: `${stats.correct}/${stats.incorrect}/${stats.extra}`,
    missed,
    ...(adaptive ? {
      adaptive: state.adaptive,
      slowWords: summary.slowWords,
      keyStats: summary.keyStats,
      fingerStats: summary.fingerStats,
      wordStats: summary.wordStats
    } : {})
  };
  appendRecord(record);
  state.practiceCheckpoint = state.practiceTyped.length;
  state.practiceKeyEvents = state.practiceKeyEvents.filter((event) => event.position >= state.practiceCheckpoint - 20);
  if (adaptive) requestAdaptivePracticePlan(summary);
  buildLessonList();
  persist();
}

function handlePracticeKey(event) {
  if (state.view !== "practice" || isEditable(event.target)) return;
  if (event.metaKey || event.ctrlKey || event.altKey) return;
  if (event.key === "Tab") {
    event.preventDefault();
    preparePracticeLine(true);
    return;
  }
  if (event.key === "Backspace" || event.key === "Delete") {
    event.preventDefault();
    recordPracticeDeleteEvent(Math.max(0, state.practiceTyped.length - 1));
    state.practiceTyped = state.practiceTyped.slice(0, -1);
    renderPractice();
    return;
  }
  if (event.key.length !== 1) return;
  event.preventDefault();
  startPractice();
  const position = state.practiceTyped.length;
  const expected = state.practiceText[position] || "";
  state.practiceTyped += event.key;
  recordPracticeKeyEvent(event.key, position, expected);
  triggerTypingBird(els.practiceBird);
  appendPracticeTextIfNeeded();
  recordPracticeProgress();
  renderPractice();
}

function renderHistory() {
  if (!state.history.length) {
    els.historySummary.innerHTML = "";
    els.historyTable.innerHTML = '<div class="empty-state">暂无成绩记录</div>';
    return;
  }
  const records = [...state.history].sort((a, b) => new Date(b.date || b.savedAt || 0) - new Date(a.date || a.savedAt || 0));
  const testCount = records.filter((record) => record.type !== "practice").length;
  const practiceCount = records.filter((record) => record.type === "practice").length;
  const best = [...records].sort((a, b) => getRecordSpeed(b) - getRecordSpeed(a))[0];
  const avg = Math.round(records.reduce((sum, record) => sum + getRecordSpeed(record), 0) / records.length);
  const acc = Math.round(records.reduce((sum, record) => sum + (record.accuracy || 0), 0) / records.length);
  els.historySummary.innerHTML = `
    <span>记录 ${records.length} 条</span>
    <span>测试 ${testCount} 次</span>
    <span>练习 ${practiceCount} 段</span>
    <span>最佳 ${getRecordSpeed(best)} 字符/分</span>
    <span>平均 ${avg} 字符/分</span>
    <span>准确率 ${acc}%</span>
  `;
  els.historyTable.innerHTML = records.map((record) => `
    <div class="history-row" data-record-id="${escapeHtml(record.id || "")}">
      <strong>${escapeHtml(getRecordLabel(record))}</strong>
      <span>${getRecordSpeed(record)} 字符/分</span>
      <span>${record.accuracy}% 准确率</span>
      <span>${getRecordRaw(record)} 原始</span>
      <span>${record.consistency}% 稳定</span>
      <span>${new Date(record.date).toLocaleDateString()}</span>
    </div>
  `).join("");
}

function getRecordLabel(record) {
  if (record.type === "practice") return record.label || `英文练习 · ${record.lessonTitle || "未命名课程"}`;
  return localizeRecordLabel(record.label);
}

function switchView(view) {
  state.view = view;
  els.tabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.view === view));
  els.workspace.classList.toggle("settings-hidden", view !== "test");
  els.testView.classList.toggle("view-hidden", view !== "test");
  els.practiceView.classList.toggle("view-hidden", view !== "practice");
  els.historyView.classList.toggle("view-hidden", view !== "history");
  if (view !== "test") resetTypingBird(els.typingBird);
  if (view !== "practice") resetTypingBird(els.practiceBird);
  if (view === "test") {
    renderAll();
    requestAnimationFrame(() => {
      positionTypingBird(els.typingBird);
      focusSurface(els.typeSurface);
    });
  }
  if (view === "practice") {
    if (!state.practiceText) {
      preparePracticeLine(false);
    } else {
      renderPractice();
    }
    requestAnimationFrame(() => {
      positionTypingBird(els.practiceBird);
      focusSurface(els.practiceSurface);
    });
  }
  if (view === "history") {
    els.clockLabel.textContent = "-";
    els.modeLabel.textContent = "本地成绩";
    renderHistory();
  }
}

function setActiveButton(group, selector, value) {
  group.querySelectorAll(selector).forEach((button) => {
    const key = Object.keys(button.dataset)[0];
    button.classList.toggle("is-active", button.dataset[key] === String(value));
  });
}

function isEditable(target) {
  return target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target?.isContentEditable;
}

function focusSurface(element) {
  try {
    element.focus({ preventScroll: true });
  } catch {
    element.focus();
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function bindEvents() {
  document.addEventListener("keydown", (event) => {
    handleTypingKey(event);
    handlePracticeKey(event);
  });

  window.addEventListener("resize", positionVisibleTypingBird);
  window.addEventListener("scroll", positionVisibleTypingBird, { passive: true });

  els.tabs.forEach((tab) => {
    tab.addEventListener("click", () => switchView(tab.dataset.view));
  });

  els.timeOptions.addEventListener("click", (event) => {
    const button = event.target.closest("[data-time]");
    if (!button) return;
    state.timeLimit = Number(button.dataset.time);
    setActiveButton(els.timeOptions, "[data-time]", state.timeLimit);
    prepareTarget();
  });

  els.languageOptions.addEventListener("click", (event) => {
    const button = event.target.closest("[data-language]");
    if (!button) return;
    state.language = button.dataset.language;
    setActiveButton(els.languageOptions, "[data-language]", state.language);
    prepareTarget();
  });

  els.difficultyOptions.addEventListener("click", (event) => {
    const button = event.target.closest("[data-difficulty]");
    if (!button) return;
    state.difficulty = button.dataset.difficulty;
    setActiveButton(els.difficultyOptions, "[data-difficulty]", state.difficulty);
    prepareTarget();
  });

  els.toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.toggle;
      state[key] = !state[key];
      button.classList.toggle("is-active", state[key]);
      prepareTarget();
    });
  });

  els.restartBtn.addEventListener("click", prepareTarget);
  els.brandReset.addEventListener("click", prepareTarget);
  els.typeSurface.addEventListener("click", () => els.typeSurface.focus());
  els.practiceSurface.addEventListener("click", () => els.practiceSurface.focus());
  els.nextLessonLineBtn.addEventListener("click", () => preparePracticeLine(true));

  els.lessonList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-lesson]");
    if (!button) return;
    state.activeLesson = button.dataset.lesson;
    state.lessonLine = 0;
    preparePracticeLine(false);
  });

  els.historyTable.addEventListener("click", (event) => {
    const row = event.target.closest("[data-record-id]");
    if (!row) return;
    const record = state.history.find((item) => item.id === row.dataset.recordId);
    if (!record || record.type === "practice") return;
    showStoredResult(record);
  });

  els.closeResultBtn.addEventListener("click", () => els.resultDialog.close());
  els.resultRestartBtn.addEventListener("click", () => {
    els.resultDialog.close();
    prepareTarget();
  });
  els.resultNextBtn.addEventListener("click", () => {
    els.resultDialog.close();
    prepareTarget();
  });

  els.clearHistoryBtn.addEventListener("click", async () => {
    state.history = [];
    state.practice = {};
    persist();
    renderHistory();
    buildLessonList();
    try {
      await clearRecordsFile();
    } catch (error) {
      console.error("Failed to clear data/records.json", error);
    }
  });
}

function positionVisibleTypingBird() {
  if (state.view === "test") positionTypingBird(els.typingBird);
  if (state.view === "practice") positionTypingBird(els.practiceBird);
}

bindEvents();
buildLessonList();
buildFingerGuides();
preloadTypingBirdFrames();
preparePracticeLine(false);
prepareTarget();
renderHistory();
loadRecordsFromFile();
checkAdaptiveAgentStatus();
