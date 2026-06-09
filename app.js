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
    words: [
      "as", "sad", "dad", "lad", "fall", "ask", "half", "dash", "all", "flag", "glass", "salad", "shall", "flash",
      "flask", "slash", "lass", "hall", "halls", "falls", "lads", "adds", "alas", "salsa", "ash", "had",
      "has", "gas", "glad", "gala", "saga", "jag", "hag", "slag"
    ]
  },
  {
    id: "top",
    label: "上排键位伸展",
    focus: "qwerty uiop",
    words: [
      "we", "you", "type", "quiet", "power", "proper", "upper", "word", "query", "require", "reward", "writer", "keyboard",
      "quite", "quote", "queue", "queen", "quick", "write", "wire", "route", "outer", "tower", "poetry", "report",
      "prior", "proof", "error", "were", "your", "their", "there", "where", "reply", "review"
    ]
  },
  {
    id: "bottom",
    label: "下排键位平衡",
    focus: "zxcvbnm",
    words: [
      "zinc", "box", "move", "calm", "navy", "mix", "brave", "common", "value", "vivid", "balance", "movement",
      "zone", "zoom", "maze", "comma", "cabin", "van", "ban", "novel", "civic", "canvas", "bamboo", "moment",
      "volume", "movie", "manner", "number", "bottom", "memory", "native", "common"
    ]
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
const GUIDE_POSITION_KEY = `${STORAGE_KEY}:finger-guide-position`;
const RECORDS_API = "/api/records";
const ADAPTIVE_API = "/api/adaptive-practice";
const ADAPTIVE_LESSON_ID = "adaptive";
const ADAPTIVE_SEGMENT_CHARS = 180;
const ADAPTIVE_BUFFER_MIN = 300;
const LOCAL_HISTORY_FALLBACK_LIMIT = 100;
const MASTERED_WORD_LIMIT = 180;
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
let realInputComposing = false;
let realInputSkipText = "";
let realInputHandledAt = 0;
let guidePositions = loadGuidePositions();
let fingerGuideSyncFrame = 0;
let fingerGuideHeartbeatId = 0;
const guideDragState = {
  guide: null,
  view: "",
  startPointerX: 0,
  startPointerY: 0,
  startX: 0,
  startY: 0
};

const KEYBOARD_LAYOUT = [
  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "delete"],
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
  ["left-shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "right-shift"],
  ["space"]
];

const KEY_NEIGHBORS = {
  q: ["w", "a"],
  w: ["q", "e", "s"],
  e: ["w", "r", "d"],
  r: ["e", "t", "f"],
  t: ["r", "y", "g"],
  y: ["t", "u", "h"],
  u: ["y", "i", "j"],
  i: ["u", "o", "k"],
  o: ["i", "p", "l"],
  p: ["o", ";"],
  a: ["q", "s", "z"],
  s: ["a", "w", "d", "x"],
  d: ["s", "e", "f", "c"],
  f: ["d", "r", "g", "v"],
  g: ["f", "t", "h", "b"],
  h: ["g", "y", "j", "n"],
  j: ["h", "u", "k", "m"],
  k: ["j", "i", "l", ","],
  l: ["k", "o", ";", "."],
  ";": ["l", "p", "/"],
  z: ["a", "x"],
  x: ["z", "s", "c"],
  c: ["x", "d", "v"],
  v: ["c", "f", "b"],
  b: ["v", "g", "n"],
  n: ["b", "h", "m"],
  m: ["n", "j", ","],
  ",": ["m", "k", "."],
  ".": [",", "l", "/"],
  "/": [".", ";"]
};

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
  "-": { hand: "右手", finger: "小指", group: "pinky" },
  p: { hand: "右手", finger: "小指", group: "pinky" },
  ";": { hand: "右手", finger: "小指", group: "pinky" },
  "'": { hand: "右手", finger: "小指", group: "pinky" },
  "/": { hand: "右手", finger: "小指", group: "pinky" },
  "?": { hand: "右手", finger: "小指", group: "pinky" },
  delete: { hand: "右手", finger: "小指", group: "pinky" },
  "left-shift": { hand: "左手", finger: "小指", group: "pinky" },
  "right-shift": { hand: "右手", finger: "小指", group: "pinky" },
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
  realTypingInput: document.querySelector("#realTypingInput"),
  typingCopy: document.querySelector("#typingCopy"),
  typingBird: document.querySelector("#typingBird"),
  testFingerGuide: document.querySelector("#testFingerGuide"),
  wpmMetric: document.querySelector("#wpmMetric"),
  rawMetric: document.querySelector("#rawMetric"),
  accuracyMetric: document.querySelector("#accuracyMetric"),
  charReadout: document.querySelector("#charReadout"),
  testView: document.querySelector("#testView"),
  practiceView: document.querySelector("#practiceView"),
  historyView: document.querySelector("#historyView"),
  lessonList: document.querySelector("#lessonList"),
  lessonTitle: document.querySelector("#lessonTitle"),
  levelStatusPanel: document.querySelector("#levelStatusPanel"),
  levelStatusBadge: document.querySelector("#levelStatusBadge"),
  levelStatusTarget: document.querySelector("#levelStatusTarget"),
  levelStatusProgress: document.querySelector("#levelStatusProgress"),
  levelStatusNext: document.querySelector("#levelStatusNext"),
  lessonFocus: document.querySelector("#lessonFocus"),
  lessonScore: document.querySelector("#lessonScore"),
  lessonMonitor: document.querySelector("#lessonMonitor"),
  lessonMonitorWpm: document.querySelector("#lessonMonitorWpm"),
  lessonMonitorRaw: document.querySelector("#lessonMonitorRaw"),
  lessonMonitorAccuracy: document.querySelector("#lessonMonitorAccuracy"),
  lessonMonitorStatus: document.querySelector("#lessonMonitorStatus"),
  lessonWeak: document.querySelector("#lessonWeak"),
  lessonCoach: document.querySelector("#lessonCoach"),
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
  practiceMonitorStartTime: null,
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
    masteredWords: [],
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
    focusFingers: Array.isArray(value.focusFingers) ? value.focusFingers.slice(0, 8) : base.focusFingers,
    masteredWords: Array.isArray(value.masteredWords)
      ? [...new Set(value.masteredWords.map(cleanPracticeWord).filter(Boolean))].slice(0, MASTERED_WORD_LIMIT)
      : []
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
  state.adaptive = normalizeAdaptiveState({
    ...state.adaptive,
    masteredWords: buildMasteredWords()
  });
  persist();
  buildLessonList();
  if (isAdaptiveLesson() && !state.practiceStarted && !state.practiceTyped) {
    state.practiceText = generatePracticeChunk();
    renderPractice();
  }
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
  if (latestAdaptive) state.adaptive = recoverAdaptiveStateFromRecords(records, normalizeAdaptiveState(latestAdaptive));
  state.weakWords = [...new Set(weakWords.filter(Boolean)), ...state.weakWords].slice(0, 80);
}

function isSpeedOnlyDowngradeRecord(record) {
  const adaptive = record?.adaptive;
  if (!adaptive || adaptive.decision !== "downgrade") return false;
  const targetAccuracy = Number(adaptive.targetAccuracy || record.targetAccuracy || 94);
  const targetCpm = Number(adaptive.targetCpm || record.targetCpm || 0);
  const accuracy = Number(record.accuracy || 0);
  const cpm = Number(record.wpm || record.cpm || 0);
  return accuracy >= targetAccuracy && cpm < targetCpm;
}

function recoverAdaptiveStateFromRecords(records, candidate) {
  const adaptiveRecords = records.filter((record) => record.type === "practice" && record.lessonId === ADAPTIVE_LESSON_ID && record.adaptive);
  const lastSpeedOnlyDowngradeIndex = adaptiveRecords.findLastIndex(isSpeedOnlyDowngradeRecord);
  if (lastSpeedOnlyDowngradeIndex <= 0) return candidate;

  const beforeDowngrade = normalizeAdaptiveState(adaptiveRecords[lastSpeedOnlyDowngradeIndex - 1].adaptive);
  if (beforeDowngrade.level <= candidate.level) return candidate;

  const afterDowngrade = adaptiveRecords.slice(lastSpeedOnlyDowngradeIndex + 1);
  const hasRealDifficultyAfter = afterDowngrade.some((record) => Number(record.accuracy || 0) < Math.max(88, Number(record.adaptive?.targetAccuracy || 94) - 4));
  const hasAdvancedAfter = afterDowngrade.some((record) => record.adaptive?.decision === "advance");
  if (hasRealDifficultyAfter || hasAdvancedAfter) return candidate;

  const stage = getAdaptiveStage(beforeDowngrade.level);
  return normalizeAdaptiveState({
    ...candidate,
    level: beforeDowngrade.level,
    stageId: stage.id,
    stageLabel: stage.label,
    decision: "focus",
    streak: 0,
    stuck: 0,
    targetAccuracy: getAdaptiveTargetAccuracy(beforeDowngrade.level),
    targetCpm: getAdaptiveTargetCpm(beforeDowngrade.level),
    coachMessage: "已修正速度未达标导致的降级，继续保持当前等级并加强慢词。"
  });
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

function getStats(typed, target, elapsed) {
  const seconds = Math.max(elapsed, 0.001);
  const minutes = seconds / 60;
  let correct = 0;
  let incorrect = 0;
  const targetLength = Math.min(typed.length, target.length);
  for (let index = 0; index < targetLength; index += 1) {
    if (isTypedCharCorrect(typed[index], target[index])) {
      correct += 1;
    } else {
      incorrect += 1;
    }
  }
  const extra = Math.max(typed.length - target.length, 0);
  const accuracy = typed.length ? (correct / typed.length) * 100 : 100;
  const wpm = correct / minutes;
  const raw = typed.length / minutes;
  return {
    correct,
    incorrect,
    extra,
    accuracy: clamp(accuracy, 0, 100),
    wpm: Math.max(0, wpm),
    raw: Math.max(0, raw)
  };
}

function isTypedCharCorrect(typedChar, expectedChar) {
  if (typedChar === undefined || expectedChar === undefined) return false;
  return typedChar === expectedChar;
}

function getInputOutputText(event) {
  return event.data ?? els.realTypingInput?.value ?? "";
}

function acceptRealTypedText(text, nativeInput = false) {
  if (!text) return false;
  let accepted = false;
  for (const typedChar of text) {
    if (typedChar === "\n" || typedChar === "\r") continue;
    if (state.view === "test") {
      acceptTestInputChar(typedChar);
      accepted = true;
    }
    if (state.view === "practice") {
      acceptPracticeInputChar(typedChar);
      accepted = true;
    }
  }
  if (accepted && nativeInput) realInputHandledAt = performance.now();
  if (accepted) scheduleFingerGuideRefresh();
  return accepted;
}

function queueRealInputKeyFallback(event) {
  if (event.defaultPrevented || event.key.length !== 1) return;
  const typedChar = event.key;

  if (event.target !== els.realTypingInput) {
    event.preventDefault();
    acceptRealTypedText(typedChar, false);
    requestAnimationFrame(focusActiveTypingSurface);
    return;
  }

  const nativeHandledAt = realInputHandledAt;
  window.setTimeout(() => {
    if (realInputHandledAt !== nativeHandledAt) return;
    if (els.realTypingInput) els.realTypingInput.value = "";
    acceptRealTypedText(typedChar, false);
  }, 80);
}

function isTypedTextCorrect(typedText, expectedText) {
  return typedText === expectedText;
}

function startPracticeMonitorWindow() {
  if (state.practiceMonitorStartTime !== null) return;
  state.practiceMonitorStartTime = getPracticeElapsed();
}

function getPracticeSegmentStats(segmentStart = state.practiceCheckpoint, segmentEnd = state.practiceTyped.length) {
  const typed = state.practiceTyped.slice(segmentStart, segmentEnd);
  const target = state.practiceText.slice(segmentStart, segmentEnd);
  if (!typed.length) {
    return {
      ...getStats("", "", 1),
      elapsed: 0,
      monitoredChars: 0
    };
  }
  const currentElapsed = getPracticeElapsed();
  const events = state.practiceKeyEvents
    .filter((event) => event.type === "char" && event.position >= segmentStart && event.position < segmentEnd)
    .sort((a, b) => a.position - b.position);
  const activeWindowStart = segmentStart === state.practiceCheckpoint ? state.practiceMonitorStartTime : null;
  const firstElapsed = Number.isFinite(activeWindowStart)
    ? activeWindowStart
    : (Number.isFinite(events[0]?.elapsed) ? events[0].elapsed : currentElapsed);
  const elapsed = Math.max(currentElapsed - firstElapsed, 0);
  return {
    ...getStats(typed, target, elapsed),
    elapsed,
    monitoredChars: typed.length
  };
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
  const stats = getStats(state.typed, state.targetText, Math.max(second, 0.001));
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
    deleteTestInputChar();
    return;
  }
  queueRealInputKeyFallback(event);
}

function deleteTestInputChar() {
  if (!state.typed.length) return false;
  state.typed = state.typed.slice(0, -1);
  renderAll();
  scheduleFingerGuideRefresh();
  return true;
}

function acceptTestInputChar(typedChar) {
  if (state.view !== "test" || state.finished || !typedChar) return;
  startTest();
  state.typed += typedChar;
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
    chars: `${stats.correct}/${stats.incorrect}/${stats.extra}`,
    指标: buildChineseMetricsArchive(stats, { elapsed: state.elapsed }),
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
  const missed = [];
  let cursor = 0;
  for (let index = 0; index < targetWords.length; index += 1) {
    const targetWord = targetWords[index];
    const typedWord = typed.slice(cursor, cursor + targetWord.length);
    if (typedWord && !isTypedTextCorrect(typedWord, targetWord)) missed.push(targetWord.replace(/[^\w'-]/g, ""));
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
  const pb = getPersonalBest(record);
  const chart = record.chart?.samples?.length ? record.chart : buildRecordChartFallback(record);
  const metrics = getRecordDisplayMetrics(record);
  els.resultTitle.textContent = getRecordLabel(record);
  els.resultWpm.textContent = String(metrics.speed);
  els.resultAcc.textContent = `${metrics.accuracy}%`;
  els.resultRaw.textContent = `原始速度 ${metrics.raw} 字符/分`;
  els.resultChars.textContent = `字符 ${metrics.charsText}`;
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

function getPersonalBest(record) {
  return state.history
    .filter((item) => item.label === record.label && item.type === record.type)
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

function getRecordDisplayMetrics(record) {
  const chinese = record?.指标 || {};
  const chars = parseRecordChars(record?.chars) || parseRecordChars(chinese["字符统计"]) || {
    correct: Number(chinese["正确字符"] || 0),
    incorrect: Number(chinese["错误字符"] || 0),
    extra: Number(chinese["多余字符"] || 0)
  };
  const speed = Number(chinese["速度（字符/分）"]);
  const raw = Number(chinese["原始速度（字符/分）"]);
  const accuracy = Number.parseInt(String(chinese["准确率"] || record?.accuracy || 0), 10);
  return {
    speed: Number.isFinite(speed) ? Math.round(speed) : getRecordSpeed(record),
    raw: Number.isFinite(raw) ? Math.round(raw) : getRecordRaw(record),
    accuracy: Number.isFinite(accuracy) ? Math.round(accuracy) : Math.round(record?.accuracy || 0),
    chars,
    charsText: `${chars.correct || 0}/${chars.incorrect || 0}/${chars.extra || 0}`
  };
}

function buildChineseMetricsArchive(stats, options = {}) {
  const correct = Math.round(stats.correct || 0);
  const incorrect = Math.round(stats.incorrect || 0);
  const extra = Math.round(stats.extra || 0);
  const metrics = {
    "速度（字符/分）": Math.round(stats.wpm || 0),
    "原始速度（字符/分）": Math.round(stats.raw || 0),
    "准确率": `${Math.round(stats.accuracy || 0)}%`,
    "正确字符": correct,
    "错误字符": incorrect,
    "多余字符": extra,
    "字符统计": `${correct}/${incorrect}/${extra}`
  };
  if (Number.isFinite(options.elapsed)) metrics["总用时（秒）"] = Number(options.elapsed.toFixed(3));
  if (Number.isFinite(options.segmentElapsed)) metrics["本段用时（秒）"] = Number(options.segmentElapsed.toFixed(3));
  if (options.overallStats) {
    metrics["整场速度（字符/分）"] = Math.round(options.overallStats.wpm || 0);
    metrics["整场原始速度（字符/分）"] = Math.round(options.overallStats.raw || 0);
    metrics["整场准确率"] = `${Math.round(options.overallStats.accuracy || 0)}%`;
  }
  return metrics;
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
      <div class="finger-drag-handle" data-guide-drag-handle title="按住拖动指法提示">
        <span>指法提示</span>
        <button class="finger-guide-reset" data-guide-reset type="button" title="恢复默认位置">复位</button>
      </div>
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
  requestAnimationFrame(() => applyFingerGuidePosition(state.view));
}

function loadGuidePositions() {
  try {
    const parsed = JSON.parse(localStorage.getItem(GUIDE_POSITION_KEY) || "{}");
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveGuidePositions() {
  try {
    localStorage.setItem(GUIDE_POSITION_KEY, JSON.stringify(guidePositions));
  } catch (error) {
    console.warn("Unable to write finger guide position", error);
  }
}

function getGuideForView(view) {
  if (view === "practice") return els.practiceFingerGuide;
  if (view === "test") return els.testFingerGuide;
  return null;
}

function getGuideView(guide) {
  if (guide === els.practiceFingerGuide) return "practice";
  if (guide === els.testFingerGuide) return "test";
  return "";
}

function getGuideSize(guide) {
  const rect = guide.getBoundingClientRect();
  const width = rect.width || Math.min(760, window.innerWidth - 32);
  const height = rect.height || 280;
  return { width, height };
}

function clampGuidePosition(guide, x, y) {
  const { width, height } = getGuideSize(guide);
  const padding = 10;
  const maxX = Math.max(padding, window.innerWidth - width - padding);
  const maxY = Math.max(padding, window.innerHeight - height - padding);
  return {
    x: clamp(Number(x) || padding, padding, maxX),
    y: clamp(Number(y) || padding, padding, maxY)
  };
}

function getDefaultGuidePosition(guide) {
  const { width, height } = getGuideSize(guide);
  const view = getGuideView(guide);
  const surface = view === "practice" ? els.practiceSurface : els.typeSurface;
  const surfaceRect = surface?.getBoundingClientRect();
  const x = window.innerWidth <= 760 ? 12 : window.innerWidth - width - 18;
  let y = 88;

  if (surfaceRect?.width && window.innerWidth > 760) {
    const aboveSurface = surfaceRect.top - height - 12;
    const belowSurface = surfaceRect.bottom + 12;
    if (aboveSurface >= 72) {
      y = aboveSurface;
    } else if (belowSurface + height <= window.innerHeight - 10) {
      y = belowSurface;
    }
  } else if (window.innerWidth <= 760) {
    y = Math.max(12, window.innerHeight - height - 12);
  }

  return clampGuidePosition(guide, x, y);
}

function setFingerGuidePosition(guide, position) {
  if (!guide) return;
  const next = clampGuidePosition(guide, position?.x, position?.y);
  guide.style.left = `${Math.round(next.x)}px`;
  guide.style.top = `${Math.round(next.y)}px`;
  guide.style.right = "auto";
  guide.style.bottom = "auto";
  guide.style.transform = "none";
}

function applyFingerGuidePosition(view) {
  const guide = getGuideForView(view);
  if (!guide) return;
  const position = guidePositions[view] || getDefaultGuidePosition(guide);
  setFingerGuidePosition(guide, position);
}

function resetFingerGuidePosition(guide, shouldSave = true) {
  const view = getGuideView(guide);
  if (!view) return;
  const position = getDefaultGuidePosition(guide);
  guidePositions = { ...guidePositions, [view]: position };
  setFingerGuidePosition(guide, position);
  if (shouldSave) saveGuidePositions();
}

function startFingerGuideDrag(event) {
  const handle = event.target.closest("[data-guide-drag-handle]");
  if (!handle || event.target.closest("[data-guide-reset]")) return;
  const guide = handle.closest(".finger-guide");
  const view = getGuideView(guide);
  if (!guide || !view) return;

  const rect = guide.getBoundingClientRect();
  guideDragState.guide = guide;
  guideDragState.view = view;
  guideDragState.startPointerX = event.clientX;
  guideDragState.startPointerY = event.clientY;
  guideDragState.startX = rect.left;
  guideDragState.startY = rect.top;
  guide.classList.add("is-dragging");
  handle.setPointerCapture?.(event.pointerId);
  event.preventDefault();
}

function moveFingerGuideDrag(event) {
  if (!guideDragState.guide) return;
  const x = guideDragState.startX + event.clientX - guideDragState.startPointerX;
  const y = guideDragState.startY + event.clientY - guideDragState.startPointerY;
  const position = clampGuidePosition(guideDragState.guide, x, y);
  setFingerGuidePosition(guideDragState.guide, position);
  guidePositions = { ...guidePositions, [guideDragState.view]: position };
}

function stopFingerGuideDrag() {
  if (!guideDragState.guide) return;
  guideDragState.guide.classList.remove("is-dragging");
  saveGuidePositions();
  guideDragState.guide = null;
  guideDragState.view = "";
  requestAnimationFrame(focusActiveTypingSurface);
}

function handleFingerGuideReset(event) {
  const button = event.target.closest("[data-guide-reset]");
  if (!button) return;
  const guide = button.closest(".finger-guide");
  resetFingerGuidePosition(guide);
  requestAnimationFrame(focusActiveTypingSurface);
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
  const label = key === "space"
    ? "space"
    : key === "delete"
      ? "delete"
      : key.includes("shift")
        ? "shift"
        : key.toUpperCase();
  const sizeClass = key === "space"
    ? "finger-key-space"
    : key === "delete"
      ? "finger-key-delete"
      : key.includes("shift")
        ? "finger-key-shift"
        : "";
  return `
    <span class="finger-key finger-${info?.group || "unknown"} ${sizeClass}" data-key="${escapeHtml(key)}">
      ${escapeHtml(label)}
    </span>
  `;
}

function getGuideKeyInfo(char) {
  const shown = displayGuideChar(char);
  const normalized = normalizeGuideKey(char);
  const keyInfo = KEY_FINGERS[normalized];
  if (!char || !normalized || !keyInfo) {
    return { keys: [], infos: [], shown, instruction: "暂未收录该字符的指法" };
  }

  const shiftNeeded = needsShiftForGuide(char);
  const shiftKey = shiftNeeded ? getOppositeShiftKey(keyInfo) : "";
  const keys = shiftKey ? [shiftKey, normalized] : [normalized];
  const infos = shiftKey ? [KEY_FINGERS[shiftKey], keyInfo] : [keyInfo];
  const instruction = shiftKey
    ? `按住 ${KEY_FINGERS[shiftKey].hand}${KEY_FINGERS[shiftKey].finger} Shift，使用 ${keyInfo.hand}${keyInfo.finger}`
    : `使用 ${keyInfo.hand}${keyInfo.finger}`;

  return { keys, infos, shown, instruction };
}

function needsShiftForGuide(char) {
  if (/^[A-Z]$/.test(char)) return true;
  return ["?", ":", "\"", "_", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")"].includes(char);
}

function getOppositeShiftKey(info) {
  return info?.hand?.includes("右") ? "left-shift" : "right-shift";
}

function updateFingerGuide(guide, target, typed) {
  if (!guide) return;
  const errorIndex = findLastTypingErrorIndex(target, typed);
  const current = target[typed.length] || "";
  if (errorIndex >= 0 && errorIndex === typed.length - 1) {
    const deleteInfo = KEY_FINGERS.delete;
    const currentLabel = guide.querySelector("[data-finger-current]");
    const instruction = guide.querySelector("[data-finger-instruction]");
    const actual = typed[errorIndex] || "";
    const expected = target[errorIndex] || "";
    const deleteDistance = Math.max(1, typed.length - errorIndex);
    const deleteHint = deleteDistance > 1 ? `先退回 ${deleteDistance} 个字符` : "先删除当前字符";
    guide.classList.add("has-error");
    updateFingerHandCue(guide, deleteInfo, true);
    guide.querySelectorAll(".finger-key").forEach((element) => {
      element.classList.toggle("is-active", element.dataset.key === "delete");
    });
    if (currentLabel) currentLabel.textContent = "Delete";
    if (instruction) instruction.textContent = `输入有误：实际 ${displayGuideChar(actual, true)}，目标 ${displayGuideChar(expected, true)}。${deleteHint}，使用右手小拇指按 Delete`;
    return;
  }

  guide.classList.toggle("has-error", errorIndex >= 0);
  const guideInfo = getGuideKeyInfo(current);
  const currentLabel = guide.querySelector("[data-finger-current]");
  const instruction = guide.querySelector("[data-finger-instruction]");
  updateFingerHandCue(guide, guideInfo.infos, Boolean(current));

  guide.querySelectorAll(".finger-key").forEach((element) => {
    element.classList.toggle("is-active", guideInfo.keys.includes(element.dataset.key));
  });

  if (!current) {
    if (currentLabel) currentLabel.textContent = "完成";
    if (instruction) {
      instruction.textContent = errorIndex >= 0
        ? `这一段已到末尾，前面还有错误，可按 Delete 回退修正`
        : "这一段已经结束";
    }
    return;
  }

  if (currentLabel) currentLabel.textContent = guideInfo.shown;
  if (instruction) {
    if (errorIndex >= 0) {
      const deleteDistance = Math.max(1, typed.length - errorIndex);
      instruction.textContent = `下一键：${guideInfo.instruction}。前面有错误，可按 Delete 回退 ${deleteDistance} 个字符修正`;
    } else {
      instruction.textContent = guideInfo.instruction;
    }
  }
}

function updateFingerHandCue(guide, info, hasCurrent) {
  guide.querySelectorAll(".hand-finger").forEach((finger) => {
    finger.classList.remove("is-active");
  });
  if (!hasCurrent || !info) return;

  const infos = Array.isArray(info) ? info.filter(Boolean) : [info];
  for (const item of infos) {
    if (item.group === "thumb") {
      guide.querySelectorAll('[data-finger="thumb"]').forEach((finger) => {
        finger.classList.add("is-active");
      });
      continue;
    }

    const hand = item.hand.includes("左") ? "left" : "right";
    const finger = fingerNameToKey(item.finger);
    guide.querySelector(`[data-hand="${hand}"][data-finger="${finger}"]`)?.classList.add("is-active");
  }
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
  if (char === ":") return ";";
  if (char === "\"" || char === "’" || char === "‘") return "'";
  if (char === "_" || char === "–" || char === "—") return "-";
  const shiftedNumberKeys = {
    "!": "1",
    "@": "2",
    "#": "3",
    "$": "4",
    "%": "5",
    "^": "6",
    "&": "7",
    "*": "8",
    "(": "9",
    ")": "0"
  };
  if (shiftedNumberKeys[char]) return shiftedNumberKeys[char];
  return String(char || "").toLowerCase();
}

function displayGuideChar(char, detailed = false) {
  if (char === " ") return detailed ? "普通空格 U+0020" : "空格";
  if (char === "\u3000") return detailed ? "全角空格 U+3000" : "全角空格";
  if (char === "\t") return detailed ? "Tab U+0009" : "Tab";
  if (!char) return detailed ? "空字符" : "";
  if (!detailed) return char;
  const codePoint = char.codePointAt(0);
  const code = codePoint === undefined ? "未知编码" : `U+${codePoint.toString(16).toUpperCase().padStart(4, "0")}`;
  return `${char} ${code}`;
}

function findLastTypingErrorIndex(target, typed) {
  for (let index = typed.length - 1; index >= 0; index -= 1) {
    if (!isTypedCharCorrect(typed[index], target[index])) return index;
  }
  return -1;
}

function getActiveFingerGuideContext() {
  if (state.view === "test") {
    return {
      guide: els.testFingerGuide,
      target: state.targetText,
      typed: state.typed
    };
  }
  if (state.view === "practice") {
    return {
      guide: els.practiceFingerGuide,
      target: state.practiceText,
      typed: state.practiceTyped
    };
  }
  return null;
}

function refreshActiveFingerGuide() {
  const context = getActiveFingerGuideContext();
  if (!context) return;
  updateFingerGuide(context.guide, context.target, context.typed);
}

function scheduleFingerGuideRefresh() {
  if (fingerGuideSyncFrame) cancelAnimationFrame(fingerGuideSyncFrame);
  fingerGuideSyncFrame = requestAnimationFrame(() => {
    fingerGuideSyncFrame = 0;
    refreshActiveFingerGuide();
  });
}

function startFingerGuideHeartbeat() {
  if (fingerGuideHeartbeatId) return;
  fingerGuideHeartbeatId = window.setInterval(() => {
    if (document.hidden || guideDragState.guide) return;
    refreshActiveFingerGuide();
  }, 250);
}

function renderAll() {
  const elapsed = elapsedSeconds();
  const stats = getStats(state.typed, state.targetText, elapsed || 0);
  renderTypingCopy(els.typingCopy, state.targetText, state.typed);
  renderMetrics(stats);
  renderTopLabels(elapsed);
  updateFingerGuide(els.testFingerGuide, state.targetText, state.typed);
  scheduleFingerGuideRefresh();
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
    if (typedChar !== undefined) classes.push(isTypedCharCorrect(typedChar, expected) ? "correct" : "incorrect");
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
  const stats = getPracticeSegmentStats();
  els.lessonTitle.textContent = lesson.title;
  els.lessonFocus.textContent = isAdaptiveLesson(lesson)
    ? `${state.adaptive.stageLabel} · 目标 ${state.adaptive.targetCpm} 字符/分 / ${state.adaptive.targetAccuracy}%`
    : lesson.focus;
  els.lessonScore.textContent = isAdaptiveLesson(lesson)
    ? `等级 ${Math.round(state.adaptive.level)} · 达标 ${state.adaptive.streak || 0}/2`
    : `已完成 ${state.practice[lesson.id]?.completed || 0} 次`;
  const weak = state.weakWords.slice(0, 3).join(", ") || "暂无";
  renderPracticeMonitor(stats, lesson);
  renderAdaptiveLevelStatus(stats, lesson);
  els.lessonWeak.textContent = weak;
  if (els.lessonCoach) {
    const status = state.adaptive.pending ? "生成下一组中" : state.adaptive.coachMessage;
    els.lessonCoach.textContent = isAdaptiveLesson(lesson) ? status : "手动课程";
  }
  renderPracticeTopLabels(elapsed, lesson);
  renderTypingCopy(els.practiceCopy, state.practiceText, state.practiceTyped);
  els.practiceReadout.textContent = `${stats.correct} / ${stats.incorrect} / ${stats.extra}`;
  updateFingerGuide(els.practiceFingerGuide, state.practiceText, state.practiceTyped);
  scheduleFingerGuideRefresh();
  requestAnimationFrame(() => positionTypingBird(els.practiceBird));
}

function renderPracticeMonitor(stats, lesson) {
  if (!els.lessonMonitor) return;
  const speed = Math.round(stats.wpm);
  const raw = Math.round(stats.raw);
  const accuracy = Math.round(stats.accuracy);
  if (!stats.monitoredChars) {
    setPracticeMonitorCards(0, 0, 100, "等待输入");
    return;
  }
  if (!isAdaptiveLesson(lesson)) {
    setPracticeMonitorCards(speed, raw, accuracy, "实时监测");
    return;
  }
  const speedOk = stats.wpm >= state.adaptive.targetCpm;
  const accuracyOk = stats.accuracy >= state.adaptive.targetAccuracy;
  const status = speedOk && accuracyOk ? "当前达标" : "监测中";
  setPracticeMonitorCards(speed, raw, accuracy, status);
}

function setPracticeMonitorCards(speed, raw, accuracy, status) {
  if (els.lessonMonitorWpm) els.lessonMonitorWpm.textContent = String(speed);
  if (els.lessonMonitorRaw) els.lessonMonitorRaw.textContent = String(raw);
  if (els.lessonMonitorAccuracy) els.lessonMonitorAccuracy.textContent = `${accuracy}%`;
  if (els.lessonMonitorStatus) els.lessonMonitorStatus.textContent = status;
}

function renderAdaptiveLevelStatus(stats, lesson) {
  if (!els.levelStatusPanel) return;
  const adaptive = isAdaptiveLesson(lesson);
  els.levelStatusPanel.hidden = !adaptive;
  if (!adaptive) return;

  const level = Math.round(state.adaptive.level || 1);
  const targetCpm = Math.round(state.adaptive.targetCpm || 0);
  const targetAccuracy = Math.round(state.adaptive.targetAccuracy || 0);
  const streak = clamp(Math.round(state.adaptive.streak || 0), 0, 2);
  const speed = Math.round(stats.wpm || 0);
  const accuracy = Math.round(stats.accuracy || 100);
  const speedGap = Math.max(0, targetCpm - speed);
  const accuracyGap = Math.max(0, targetAccuracy - accuracy);
  const statusParts = [];

  if (!stats.monitoredChars) {
    statusParts.push(`连续 2 段达到 ${targetCpm} 字符/分和 ${targetAccuracy}%`);
  } else {
    if (speedGap) statusParts.push(`速度还差 ${speedGap} 字符/分`);
    if (accuracyGap) statusParts.push(`准确率还差 ${accuracyGap}%`);
    if (!speedGap && !accuracyGap) statusParts.push("本段已达到当前目标");
  }

  if (streak < 2) statusParts.push(`还需 ${2 - streak} 段达标`);

  els.levelStatusBadge.textContent = `等级 ${level} · ${state.adaptive.stageLabel}`;
  els.levelStatusTarget.textContent = `${targetCpm} 字符/分 · ${targetAccuracy}%`;
  els.levelStatusProgress.textContent = `${streak}/2 段`;
  els.levelStatusNext.textContent = statusParts.join("，");
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

function getAdaptiveTargetAccuracy(level) {
  return clamp(94 + Math.min(4, Math.floor(Number(level || 1) / 2)), 94, 98);
}

function getAdaptiveTargetCpm(level) {
  return clamp(60 + Number(level || 1) * 18, 70, 240);
}

function sanitizePracticeText(text) {
  return String(text || "")
    .replace(/[^A-Za-z0-9 ,.;?'\-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanPracticeWord(value) {
  return String(value || "")
    .replace(/[^\w'-]/g, "")
    .trim()
    .toLowerCase();
}

function collectRecentAdaptiveWordStats(summary = null) {
  const stats = [];
  state.history
    .filter((record) => record.type === "practice" && record.lessonId === ADAPTIVE_LESSON_ID)
    .slice(-24)
    .forEach((record) => {
      if (Array.isArray(record.wordStats)) stats.push(...record.wordStats);
    });
  if (Array.isArray(summary?.wordStats)) stats.push(...summary.wordStats);
  return stats;
}

function buildProtectedPracticeWords(summary = null) {
  return new Set([
    ...state.weakWords.map(cleanPracticeWord),
    ...((summary?.missedWords || summary?.missed || []).map(cleanPracticeWord)),
    ...((summary?.slowWords || []).map((item) => cleanPracticeWord(item.word || item)))
  ].filter(Boolean));
}

function buildMasteredWordEntries(summary = null) {
  const protectedWords = buildProtectedPracticeWords(summary);
  const entries = new Map();

  for (const word of state.adaptive.masteredWords || []) {
    const clean = cleanPracticeWord(word);
    if (!clean || protectedWords.has(clean)) continue;
    entries.set(clean, { word: clean, score: 2, streak: 2, lastSeen: 0 });
  }

  collectRecentAdaptiveWordStats(summary).forEach((item, index) => {
    const word = cleanPracticeWord(item.word);
    if (!word || word.length < 2) return;
    if (protectedWords.has(word)) {
      entries.delete(word);
      return;
    }

    const avgDelayMs = Number(item.avgDelayMs || 0);
    const fastEnough = !avgDelayMs || avgDelayMs <= 330;
    const cleanAttempt = Number(item.attempts || 0) >= Math.max(1, word.length - 1);
    const current = entries.get(word) || { word, score: 0, streak: 0, lastSeen: 0 };

    if (item.correct && cleanAttempt && (item.errors || 0) === 0 && fastEnough) {
      current.streak += 1;
      current.score += 1;
    } else if ((item.errors || 0) > 0 || item.correct === false) {
      current.streak = 0;
      current.score -= 2;
    } else {
      current.streak = 0;
      current.score -= 1;
    }

    current.score = clamp(current.score, -3, 5);
    current.lastSeen = index + 1;
    if (current.score <= 0) {
      entries.delete(word);
    } else {
      entries.set(word, current);
    }
  });

  return [...entries.values()]
    .filter((item) => item.streak >= 2 || item.score >= 2)
    .sort((a, b) => b.streak - a.streak || b.score - a.score || b.lastSeen - a.lastSeen || a.word.localeCompare(b.word))
    .slice(0, MASTERED_WORD_LIMIT);
}

function buildMasteredWords(summary = null) {
  return buildMasteredWordEntries(summary).map((item) => item.word);
}

function getAdaptiveCandidateWords() {
  return [...new Set([
    ...state.weakWords,
    ...ADAPTIVE_STAGES.flatMap((stage) => stage.words || []),
    ...COMMON_WORDS,
    ...ADVANCED_WORDS
  ].map(cleanPracticeWord))]
    .filter((word) => word.length >= 2 && word.length <= 16);
}

function collectRecentAdaptiveKeyStats(summary = null) {
  const stats = [];
  if (Array.isArray(summary?.keyStats)) stats.push(...summary.keyStats);
  state.history
    .filter((record) => record.type === "practice" && record.lessonId === ADAPTIVE_LESSON_ID)
    .slice(-8)
    .forEach((record) => {
      if (Array.isArray(record.keyStats)) stats.push(...record.keyStats);
    });
  return stats;
}

function buildSimilarKeyHints(summary = null, masteredWords = []) {
  const mastered = new Set(masteredWords.map(cleanPracticeWord));
  const keyWeights = new Map();

  for (const item of collectRecentAdaptiveKeyStats(summary)) {
    const key = normalizeGuideKey(item.key);
    if (!key || key.length !== 1) continue;
    const errors = Number(item.errors || 0);
    const avgDelayMs = Number(item.avgDelayMs || 0);
    if (!errors && avgDelayMs < 340) continue;
    const weight = errors * 3 + Math.max(0, avgDelayMs - 260) / 80 + 1;
    keyWeights.set(key, (keyWeights.get(key) || 0) + weight);
    (KEY_NEIGHBORS[key] || []).forEach((neighbor) => {
      keyWeights.set(neighbor, (keyWeights.get(neighbor) || 0) + weight * 0.65);
    });
  }

  if (!keyWeights.size) {
    state.adaptive.focusKeys
      .map(normalizeGuideKey)
      .filter((key) => key && key.length === 1)
      .forEach((key) => {
        keyWeights.set(key, 1);
        (KEY_NEIGHBORS[key] || []).forEach((neighbor) => keyWeights.set(neighbor, 0.65));
      });
  }

  if (!keyWeights.size) return [];

  return getAdaptiveCandidateWords()
    .filter((word) => !mastered.has(word))
    .map((word) => {
      const score = [...word].reduce((sum, char) => sum + (keyWeights.get(char) || 0), 0);
      return { word, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.word.length - b.word.length || a.word.localeCompare(b.word))
    .map((item) => item.word)
    .slice(0, 60);
}

function getAdaptiveWordBank(summary = null) {
  const level = Math.round(state.adaptive.level || 1);
  const stage = getAdaptiveStage(level);
  const masteredWords = buildMasteredWords(summary);
  const mastered = new Set(masteredWords);
  const protectedWords = buildProtectedPracticeWords(summary);
  const similarHints = buildSimilarKeyHints(summary, masteredWords);
  const weak = state.weakWords
    .map(cleanPracticeWord)
    .filter((word) => word && !mastered.has(word))
    .flatMap((word) => [word, word])
    .slice(0, 36);
  const base = stage.words || COMMON_WORDS;
  const extra = level >= 4 ? COMMON_WORDS.slice(0, 180) : [];
  const advanced = level >= 6 ? ADVANCED_WORDS.slice(0, 64) : [];
  const weightedHints = similarHints.flatMap((word) => [word, word, word]).slice(0, 72);
  const filtered = [...weak, ...weightedHints, ...base, ...extra, ...advanced]
    .map(cleanPracticeWord)
    .filter(Boolean)
    .filter((word) => protectedWords.has(word) || weak.includes(word) || similarHints.includes(word) || !mastered.has(word));
  if (filtered.length) return filtered;

  const fallback = getAdaptiveCandidateWords()
    .filter((word) => !mastered.has(word))
    .slice(0, 72);
  return fallback.length ? fallback : getAdaptiveCandidateWords().slice(0, 24);
}

function selectAdaptivePracticeWords(bank, count) {
  const selected = [];
  const seen = new Set();
  for (const word of shuffle(bank)) {
    const clean = cleanPracticeWord(word);
    if (!clean || seen.has(clean)) continue;
    selected.push(clean);
    seen.add(clean);
    if (selected.length >= count) break;
  }
  return selected.length ? selected : bank.map(cleanPracticeWord).filter(Boolean).slice(0, count);
}

function generateAdaptivePracticeChunk(lineCount = 8) {
  const bank = getAdaptiveWordBank();
  const wordCount = clamp(lineCount * 10, 42, 90);
  const words = selectAdaptivePracticeWords(bank, wordCount);
  return buildLocalAdaptiveSentenceText(words, Math.round(state.adaptive.level || 1));
}

function buildLocalAdaptiveSentenceText(words, level) {
  const cleanWords = [...new Set(words.map(cleanPracticeWord).filter(Boolean))];
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
  while (sentences.join(" ").length < 620 && sentences.length < lineCountForLevel(level)) {
    const a = cleanWords[cursor % cleanWords.length];
    const b = cleanWords[(cursor + 1) % cleanWords.length] || a;
    const c = cleanWords[(cursor + 2) % cleanWords.length] || b;
    const n = numbers[(cursor + level) % numbers.length];
    sentences.push(templates[(sentences.length + level) % templates.length](a, b, c, n));
    cursor += 3;
  }
  return sanitizePracticeText(sentences.join(" "));
}

function lineCountForLevel(level) {
  if (level >= 6) return 14;
  if (level >= 4) return 12;
  return 10;
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
  state.practiceMonitorStartTime = null;
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
    correct: isTypedCharCorrect(key, expected)
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
    segmentElapsed: Number((stats.elapsed || 0).toFixed(3)),
    segmentStart,
    segmentEnd,
    monitoredChars: stats.monitoredChars || Math.max(0, segmentEnd - segmentStart),
    chars: {
      correct: stats.correct,
      incorrect: stats.incorrect,
      extra: stats.extra
    },
    cpm: Math.round(stats.wpm),
    raw: Math.round(stats.raw),
    accuracy: Math.round(stats.accuracy),
    deletes: segmentEvents.filter((event) => event.type === "delete").length,
    missedWords: missed,
    slowWords,
    wordStats: wordStats.slice(0, 48),
    keyStats,
    fingerStats
  };
}

function buildSegmentWordStats(segmentStart, segmentEnd, events) {
  const boundaries = getWordBoundaries(state.practiceText, segmentStart, segmentEnd);
  return boundaries.map((word) => {
    const wordEvents = events.filter((event) => event.type === "char" && event.position >= word.start && event.position < word.end);
    const typedWord = state.practiceTyped.slice(word.start, Math.min(word.end, state.practiceTyped.length));
    const errors = wordEvents.filter((event) => !event.correct).length + (typedWord && !isTypedTextCorrect(typedWord, word.text) ? 1 : 0);
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
      correct: isTypedTextCorrect(typedWord, word.text)
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
  const next = { ...state.adaptive, pending: false, source: "local" };
  const nextStuck = (next.stuck || 0) + 1;

  if (metAccuracy && metSpeed) {
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
  } else if (summary.accuracy < 88 || (nextStuck >= 6 && summary.accuracy < state.adaptive.targetAccuracy - 4)) {
    next.level = clamp(Math.round(next.level || 1) - 1, 1, 7);
    next.streak = 0;
    next.stuck = 0;
    next.decision = "downgrade";
    next.coachMessage = "当前准确率有些吃力，先回到更稳的内容练准。";
  } else {
    next.streak = 0;
    next.stuck = nextStuck;
    next.decision = summary.accuracy >= 94 ? "focus" : "hold";
    next.coachMessage = metAccuracy && !metSpeed
      ? "准确率已经达标，下一组会加强速度和慢词，不会仅因速度未达标降级。"
      : "先把准确率稳住，再继续提速。";
  }

  const stage = getAdaptiveStage(next.level);
  next.stageId = stage.id;
  next.stageLabel = stage.label;
  next.focusKeys = summary.keyStats.slice(0, 6).map((item) => item.key);
  next.focusFingers = summary.fingerStats.slice(0, 4).map((item) => item.finger);
  next.targetAccuracy = getAdaptiveTargetAccuracy(next.level);
  next.targetCpm = getAdaptiveTargetCpm(next.level);
  next.masteredWords = buildMasteredWords(summary);
  state.adaptive = normalizeAdaptiveState(next);
}

function applyAdaptivePlan(plan, summary = null) {
  if (!plan || typeof plan !== "object") return;
  const currentLevel = Math.round(state.adaptive.level || 1);
  const guardedPlan = { ...plan };
  const proposedLevel = clamp(Math.round(Number(guardedPlan.level) || currentLevel), 1, 7);
  const summaryAccuracy = Number(summary?.accuracy || 0);
  const summaryCpm = Number(summary?.cpm || 0);
  const summaryTargetAccuracy = Number(summary?.targetAccuracy || state.adaptive.targetAccuracy || 94);
  const summaryTargetCpm = Number(summary?.targetCpm || state.adaptive.targetCpm || 0);
  const speedOnlyMiss = summary && summaryAccuracy >= summaryTargetAccuracy && summaryCpm < summaryTargetCpm;

  if (proposedLevel < currentLevel && (guardedPlan.decision !== "downgrade" || speedOnlyMiss)) {
    guardedPlan.level = currentLevel;
    guardedPlan.decision = speedOnlyMiss ? "focus" : "hold";
    guardedPlan.coachMessage = speedOnlyMiss
      ? "准确率已达标，继续保持当前等级并加强速度。"
      : "继续保持当前等级，下一组会针对弱项调整。";
  } else if (proposedLevel < currentLevel - 1) {
    guardedPlan.level = currentLevel - 1;
  }

  const next = normalizeAdaptiveState({
    ...state.adaptive,
    ...guardedPlan,
    pending: false,
    source: "mimo"
  });
  const stage = getAdaptiveStage(next.level);
  next.stageId = stage.id;
  next.stageLabel = stage.label;
  next.targetAccuracy = getAdaptiveTargetAccuracy(next.level);
  next.targetCpm = getAdaptiveTargetCpm(next.level);
  next.masteredWords = buildMasteredWords(summary);
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
  const masteredWords = buildMasteredWords(summary);
  const similarKeyHints = buildSimilarKeyHints(summary, masteredWords);
  const stage = getAdaptiveStage(state.adaptive.level);
  return {
    app: "键盘侠",
    locale: "zh-CN",
    current: state.adaptive,
    currentStage: {
      id: stage.id,
      label: stage.label,
      focus: stage.focus
    },
    currentStageWords: (stage.words || []).slice(0, 120),
    segment: summary,
    weakWords: state.weakWords.slice(0, 24),
    masteredWords,
    similarKeyHints,
    recentAdaptiveRecords: state.history
      .filter((record) => record.type === "practice" && record.lessonId === ADAPTIVE_LESSON_ID)
      .slice(-6)
      .map((record) => ({
        level: record.adaptive?.level,
        stageId: record.adaptive?.stageId,
        cpm: record.wpm,
        raw: record.raw,
        accuracy: record.accuracy,
        missed: record.missed || [],
        slowWords: record.slowWords || [],
        keyStats: (record.keyStats || []).slice(0, 8),
        wordStats: (record.wordStats || []).slice(0, 48)
      })),
    rules: {
      progression: ["基准键位控制", "上排键位伸展", "下排键位平衡", "常用英文词", "标点英文", "数字与复杂上下文"],
      nextWordsCount: "48 到 72 个不重复英文词",
      sentenceStyle: "服务端会把词组合成真实可能发生的英文短句，句子应包含逗号、句号、分号、问号、撇号、连字符和数字",
      currentStageVocabulary: "优先使用 currentStageWords 和 similarKeyHints，再少量加入弱项词",
      avoidMasteredWords: "masteredWords 是已经连续打对且速度快的词，除非同时属于 weakWords、missedWords 或 slowWords，否则下一组不要再出现",
      prioritizeSimilarKeyHints: "错键或慢键相关的相邻键位词应该增加",
      upgradeRequires: "准确率和字符/分连续达标",
      downgradeWhen: "只有准确率明显吃力或连续大幅低于目标时才降级；速度未达标但准确率稳定时保持当前等级专项加练"
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
    applyAdaptivePlan(data.plan, summary);
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
  const unresolvedErrorIndex = findLastTypingErrorIndex(state.practiceText, state.practiceTyped);
  if (unresolvedErrorIndex >= state.practiceCheckpoint) return;
  const lesson = getActiveLesson();
  const overallStats = getStats(state.practiceTyped, state.practiceText, getPracticeElapsed());
  const segmentStart = state.practiceCheckpoint;
  const segmentEnd = state.practiceTyped.length;
  const stats = getPracticeSegmentStats(segmentStart, segmentEnd);
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
    segmentElapsed: Number((stats.elapsed || 0).toFixed(3)),
    segmentStart,
    segmentEnd,
    wpm: Math.round(stats.wpm),
    raw: Math.round(stats.raw),
    sessionWpm: Math.round(overallStats.wpm),
    sessionRaw: Math.round(overallStats.raw),
    sessionAccuracy: Math.round(overallStats.accuracy),
    speedUnit: "cpm",
    accuracy: Math.round(stats.accuracy),
    chars: `${stats.correct}/${stats.incorrect}/${stats.extra}`,
    指标: buildChineseMetricsArchive(stats, {
      elapsed: getPracticeElapsed(),
      segmentElapsed: stats.elapsed || 0,
      overallStats
    }),
    missed,
    ...(adaptive ? {
      adaptive: state.adaptive,
      slowWords: summary.slowWords,
      keyStats: summary.keyStats,
      fingerStats: summary.fingerStats,
      wordStats: summary.wordStats.slice(0, 48)
    } : {})
  };
  appendRecord(record);
  state.practiceCheckpoint = state.practiceTyped.length;
  state.practiceMonitorStartTime = null;
  state.practiceLastKeyAt = 0;
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
    deletePracticeInputChar();
    return;
  }
  queueRealInputKeyFallback(event);
}

function deletePracticeInputChar() {
  if (!state.practiceTyped.length) return false;
  const deletePosition = Math.max(0, state.practiceTyped.length - 1);
  recordPracticeDeleteEvent(deletePosition);
  state.practiceTyped = state.practiceTyped.slice(0, -1);
  if (state.practiceTyped.length < state.practiceCheckpoint) {
    state.practiceCheckpoint = state.practiceTyped.length;
  }
  if (state.practiceTyped.length <= state.practiceCheckpoint) {
    state.practiceMonitorStartTime = null;
    state.practiceLastKeyAt = 0;
  }
  state.practiceKeyEvents = state.practiceKeyEvents.filter((event) => event.type === "delete" || event.position < state.practiceTyped.length);
  renderPractice();
  scheduleFingerGuideRefresh();
  return true;
}

function acceptPracticeInputChar(typedChar) {
  if (state.view !== "practice" || !typedChar) return;
  startPractice();
  startPracticeMonitorWindow();
  const position = state.practiceTyped.length;
  const expected = state.practiceText[position] || "";
  state.practiceTyped += typedChar;
  recordPracticeKeyEvent(typedChar, position, expected);
  triggerTypingBird(els.practiceBird);
  appendPracticeTextIfNeeded();
  recordPracticeProgress();
  renderPractice();
}

function handleRealTypingInput(event) {
  if (state.view !== "test" && state.view !== "practice") return;
  if (event.isComposing || realInputComposing) return;
  const text = getInputOutputText(event);
  if (els.realTypingInput) els.realTypingInput.value = "";
  if (realInputSkipText && text === realInputSkipText) {
    realInputSkipText = "";
    return;
  }
  acceptRealTypedText(text, true);
}

function handleRealTypingBeforeInput(event) {
  if (state.view !== "test" && state.view !== "practice") return;
  if (event.isComposing || realInputComposing) return;
  if (event.inputType?.startsWith("delete")) {
    event.preventDefault();
    if (els.realTypingInput) els.realTypingInput.value = "";
    if (state.view === "test") deleteTestInputChar();
    if (state.view === "practice") deletePracticeInputChar();
    return;
  }
  if (!event.inputType?.startsWith("insert")) return;
  const text = event.data || "";
  if (!text) return;
  event.preventDefault();
  if (els.realTypingInput) els.realTypingInput.value = "";
  realInputSkipText = text;
  window.setTimeout(() => {
    if (realInputSkipText === text) realInputSkipText = "";
  }, 0);
  acceptRealTypedText(text, true);
}

function handleRealTypingCompositionStart() {
  realInputComposing = true;
}

function handleRealTypingCompositionEnd(event) {
  realInputComposing = false;
  const text = event.data || els.realTypingInput?.value || "";
  if (els.realTypingInput) els.realTypingInput.value = "";
  if (!text) return;
  realInputSkipText = text;
  window.setTimeout(() => {
    if (realInputSkipText === text) realInputSkipText = "";
  }, 0);
  acceptRealTypedText(text, true);
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
  const avgRaw = Math.round(records.reduce((sum, record) => sum + getRecordRaw(record), 0) / records.length);
  const acc = Math.round(records.reduce((sum, record) => sum + (record.accuracy || 0), 0) / records.length);
  els.historySummary.innerHTML = `
    <span>记录 ${records.length} 条</span>
    <span>测试 ${testCount} 次</span>
    <span>练习 ${practiceCount} 段</span>
    <span>最佳 ${getRecordSpeed(best)} 字符/分</span>
    <span>平均 ${avg} 字符/分</span>
    <span>平均原始速度 ${avgRaw} 字符/分</span>
    <span>准确率 ${acc}%</span>
  `;
  els.historyTable.innerHTML = records.map((record) => `
    <div class="history-row" data-record-id="${escapeHtml(record.id || "")}">
      <strong>${escapeHtml(getRecordLabel(record))}</strong>
      <span>速度 ${getRecordDisplayMetrics(record).speed} 字符/分</span>
      <span>原始速度 ${getRecordDisplayMetrics(record).raw} 字符/分</span>
      <span>准确率 ${getRecordDisplayMetrics(record).accuracy}%</span>
      <span>字符 ${escapeHtml(getRecordDisplayMetrics(record).charsText)}</span>
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
  document.body.dataset.activeView = view;
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
      applyFingerGuidePosition(view);
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
      applyFingerGuidePosition(view);
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
  if (target === els.realTypingInput) return false;
  return target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target?.isContentEditable;
}

function focusActiveTypingSurface() {
  if (state.view === "test") focusSurface(els.typeSurface);
  if (state.view === "practice") focusSurface(els.practiceSurface);
}

function focusSurface(element) {
  if ((element === els.typeSurface || element === els.practiceSurface) && els.realTypingInput) {
    els.realTypingInput.value = "";
    try {
      els.realTypingInput.focus({ preventScroll: true });
    } catch {
      els.realTypingInput.focus();
    }
    return;
  }
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
  els.realTypingInput?.addEventListener("beforeinput", handleRealTypingBeforeInput);
  els.realTypingInput?.addEventListener("input", handleRealTypingInput);
  els.realTypingInput?.addEventListener("compositionstart", handleRealTypingCompositionStart);
  els.realTypingInput?.addEventListener("compositionend", handleRealTypingCompositionEnd);

  document.addEventListener("pointerdown", startFingerGuideDrag);
  document.addEventListener("pointermove", moveFingerGuideDrag);
  document.addEventListener("pointerup", stopFingerGuideDrag);
  document.addEventListener("pointercancel", stopFingerGuideDrag);
  document.addEventListener("click", handleFingerGuideReset);
  window.addEventListener("resize", () => {
    positionVisibleTypingBird();
    requestAnimationFrame(() => applyFingerGuidePosition(state.view));
  });
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
  els.typeSurface.addEventListener("click", () => focusSurface(els.typeSurface));
  els.practiceSurface.addEventListener("click", () => focusSurface(els.practiceSurface));
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
    if (!record) return;
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

document.body.dataset.activeView = state.view;
bindEvents();
buildLessonList();
buildFingerGuides();
startFingerGuideHeartbeat();
preloadTypingBirdFrames();
preparePracticeLine(false);
prepareTarget();
renderHistory();
loadRecordsFromFile();
checkAdaptiveAgentStatus();
