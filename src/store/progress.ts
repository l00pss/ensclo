import { useCallback, useEffect, useMemo, useState } from "react";
import { topicMeta } from "../content/catalog";
import { connectorGroups } from "../content/connectors";
import { grammarGroups } from "../content/grammar";

// ---------------------------------------------------------------------------
// Progres + geymifikasiya — hələlik localStorage.
// Best practice (Duolingo): görünən proqres, XP, streak (loss aversion),
// "kiçik qələbələr". Gələcəkdə backend/DB gələndə yalnız bu fayl dəyişəcək.
// ---------------------------------------------------------------------------

const KEY = "ensclo.progress.v2";

export interface TopicProgress {
  completed: boolean;
  /** Sonuncu quiz nəticəsi (faiz). */
  lastQuizScore?: number;
  /** Bu topic-də flashcard ilə "öyrənildi" işarələnmiş sözlər. */
  learnedWords?: string[];
}

/** Bağlayıcı (connector) qrupu üzrə proqres. */
export interface ConnectorProgress {
  completed: boolean;
  /** Sonuncu practice nəticəsi (faiz). */
  lastScore?: number;
}

/** Qrammatika kateqoriyası üzrə proqres (connector ilə eyni forma). */
export type GrammarProgress = ConnectorProgress;

export interface ProgressState {
  topics: Record<string, TopicProgress>;
  /** Bağlayıcı qrupları üzrə proqres (açar = ConnectorFunction id-si). */
  connectors: Record<string, ConnectorProgress>;
  /** Qrammatika kateqoriyaları üzrə proqres (açar = GrammarCategory id-si). */
  grammar: Record<string, GrammarProgress>;
  /** Ümumi toplanmış XP. */
  xp: number;
  /** Cari ardıcıl gün sayı (streak). */
  streak: number;
  /** Sonuncu öyrənmə tarixi — "YYYY-MM-DD" (yerli). */
  lastStudyDay?: string;
}

// Qeyd: köhnə saxlanmış state-də `connectors` olmaya bilər — `read()`-dəki
// `{ ...EMPTY, ...parsed }` sayəsində default `{}` qalır (miqrasiya lazım deyil).
const EMPTY: ProgressState = { topics: {}, connectors: {}, grammar: {}, xp: 0, streak: 0 };

function todayKey(): string {
  // Yerli tarix, gün dəqiqliyində.
  return new Date().toLocaleDateString("en-CA"); // YYYY-MM-DD
}

function dayDiff(a: string, b: string): number {
  const ms = new Date(b).getTime() - new Date(a).getTime();
  return Math.round(ms / 86_400_000);
}

function read(): ProgressState {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { ...EMPTY };
    return { ...EMPTY, ...(JSON.parse(raw) as ProgressState) };
  } catch {
    return { ...EMPTY };
  }
}

function write(state: ProgressState) {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
    window.dispatchEvent(new Event("ensclo:progress"));
  } catch {
    /* storage əlçatmaz — səssizcə keç */
  }
}

/** Gün ərzində ilk fəaliyyətdə streak-i yenilə (loss aversion mexanikası). */
function touchStreak(state: ProgressState): ProgressState {
  const today = todayKey();
  if (state.lastStudyDay === today) return state;
  let streak = 1;
  if (state.lastStudyDay && dayDiff(state.lastStudyDay, today) === 1) {
    streak = state.streak + 1; // ardıcıl gün
  }
  return { ...state, streak, lastStudyDay: today };
}

// --- Geymifikasiya sabitləri & saf köməkçilər (React-dən asılı deyil) ----------

/** Topic ilk dəfə tamamlananda verilən XP. */
const XP_TOPIC_COMPLETE = 50;
/** Bağlayıcı qrupu ilk dəfə tamamlananda verilən XP. */
const XP_CONNECTOR_GROUP_COMPLETE = 30;
/** Qrammatika kateqoriyası ilk dəfə tamamlananda verilən XP. */
const XP_GRAMMAR_GROUP_COMPLETE = 40;
/** Quiz nəticəsindən (faiz) qazanılan XP. */
const quizXp = (scorePercent: number) => Math.round(scorePercent / 2);

/** Entity record-una patch tətbiq et; entry yoxdursa {completed:false} ilə yaradılır. */
function upsertEntity<T extends { completed: boolean }>(
  entities: Record<string, T>,
  id: string,
  patch: Partial<T>,
): Record<string, T> {
  const current = (entities[id] ?? { completed: false }) as T;
  return { ...entities, [id]: { ...current, ...patch } };
}

/** Entity-ni `completed` işarələ; `firstTime` = ilk dəfə tamamlanırsa (XP üçün). */
function completeEntity<T extends { completed: boolean }>(
  entities: Record<string, T>,
  id: string,
  completed: boolean,
): { entities: Record<string, T>; firstTime: boolean } {
  const current = (entities[id] ?? { completed: false }) as T;
  return {
    entities: { ...entities, [id]: { ...current, completed } },
    firstTime: completed && !current.completed,
  };
}

export function useProgress() {
  const [state, setState] = useState<ProgressState>(read);

  useEffect(() => {
    const sync = () => setState(read());
    window.addEventListener("ensclo:progress", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("ensclo:progress", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const mutate = useCallback((fn: (s: ProgressState) => ProgressState) => {
    const next = fn(read());
    write(next);
    setState(next);
  }, []);

  const patchTopic = useCallback(
    (id: string, patch: Partial<TopicProgress>) =>
      mutate((s) => ({ ...s, topics: upsertEntity(s.topics, id, patch) })),
    [mutate],
  );

  /** XP ver + gün streak-ini toxun. */
  const awardXp = useCallback(
    (amount: number) =>
      mutate((s) => touchStreak({ ...s, xp: s.xp + Math.max(0, amount) })),
    [mutate],
  );

  const setCompleted = useCallback(
    (id: string, completed: boolean) =>
      mutate((s) => {
        const { entities, firstTime } = completeEntity(s.topics, id, completed);
        const next: ProgressState = { ...s, topics: entities };
        // İlk dəfə tamamlananda XP (təkrar işarələmədə deyil).
        return firstTime ? touchStreak({ ...next, xp: next.xp + XP_TOPIC_COMPLETE }) : next;
      }),
    [mutate],
  );

  const recordQuiz = useCallback(
    (id: string, score: number) =>
      mutate((s) =>
        touchStreak({
          ...s,
          xp: s.xp + quizXp(score),
          topics: upsertEntity(s.topics, id, { lastQuizScore: score }),
        }),
      ),
    [mutate],
  );

  const toggleWord = useCallback(
    (id: string, word: string) =>
      mutate((s) => {
        const learned = new Set(s.topics[id]?.learnedWords ?? []);
        learned.has(word) ? learned.delete(word) : learned.add(word);
        return { ...s, topics: upsertEntity(s.topics, id, { learnedWords: [...learned] }) };
      }),
    [mutate],
  );

  /** Bağlayıcı qrupunun practice nəticəsini yaz (+XP = nəticənin yarısı). */
  const recordConnectorQuiz = useCallback(
    (groupId: string, score: number) =>
      mutate((s) =>
        touchStreak({
          ...s,
          xp: s.xp + quizXp(score),
          connectors: upsertEntity(s.connectors, groupId, { lastScore: score }),
        }),
      ),
    [mutate],
  );

  /** Bağlayıcı qrupunu "öyrənildi" işarələ — ilk dəfə XP. */
  const setConnectorGroupDone = useCallback(
    (groupId: string, completed: boolean) =>
      mutate((s) => {
        const { entities, firstTime } = completeEntity(s.connectors, groupId, completed);
        const next: ProgressState = { ...s, connectors: entities };
        return firstTime
          ? touchStreak({ ...next, xp: next.xp + XP_CONNECTOR_GROUP_COMPLETE })
          : next;
      }),
    [mutate],
  );

  /** Qrammatika kateqoriyasının practice nəticəsini yaz (+XP = nəticənin yarısı). */
  const recordGrammarQuiz = useCallback(
    (groupId: string, score: number) =>
      mutate((s) =>
        touchStreak({
          ...s,
          xp: s.xp + quizXp(score),
          grammar: upsertEntity(s.grammar, groupId, { lastScore: score }),
        }),
      ),
    [mutate],
  );

  /** Qrammatika kateqoriyasını "öyrənildi" işarələ — ilk dəfə XP. */
  const setGrammarGroupDone = useCallback(
    (groupId: string, completed: boolean) =>
      mutate((s) => {
        const { entities, firstTime } = completeEntity(s.grammar, groupId, completed);
        const next: ProgressState = { ...s, grammar: entities };
        return firstTime
          ? touchStreak({ ...next, xp: next.xp + XP_GRAMMAR_GROUP_COMPLETE })
          : next;
      }),
    [mutate],
  );

  return {
    state,
    patchTopic,
    awardXp,
    setCompleted,
    recordQuiz,
    toggleWord,
    recordConnectorQuiz,
    setConnectorGroupDone,
    recordGrammarQuiz,
    setGrammarGroupDone,
  };
}

/** Dashboard üçün törəmə statistika. */
export function useStats() {
  const { state } = useProgress();
  return useMemo(() => {
    const completed = topicMeta.filter((t) => state.topics[t.id]?.completed).length;
    const wordsLearned = topicMeta.reduce(
      (sum, t) => sum + (state.topics[t.id]?.learnedWords?.length ?? 0),
      0,
    );
    const totalWords = topicMeta.reduce((sum, t) => sum + t.vocabCount, 0);
    const connectorGroupsDone = connectorGroups.filter(
      (g) => state.connectors[g.id]?.completed,
    ).length;
    const grammarGroupsDone = grammarGroups.filter(
      (g) => state.grammar[g.id]?.completed,
    ).length;
    // Sadə "level" sistemi: hər 100 XP = 1 level.
    const level = Math.floor(state.xp / 100) + 1;
    const xpIntoLevel = state.xp % 100;
    return {
      completed,
      totalTopics: topicMeta.length,
      wordsLearned,
      totalWords,
      connectorGroupsDone,
      totalConnectorGroups: connectorGroups.length,
      grammarGroupsDone,
      totalGrammarGroups: grammarGroups.length,
      xp: state.xp,
      streak: state.streak,
      level,
      xpIntoLevel,
    };
  }, [state]);
}
