import { useCallback, useEffect, useMemo, useState } from "react";
import { topicMeta } from "../content/catalog";

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

export interface ProgressState {
  topics: Record<string, TopicProgress>;
  /** Ümumi toplanmış XP. */
  xp: number;
  /** Cari ardıcıl gün sayı (streak). */
  streak: number;
  /** Sonuncu öyrənmə tarixi — "YYYY-MM-DD" (yerli). */
  lastStudyDay?: string;
}

const EMPTY: ProgressState = { topics: {}, xp: 0, streak: 0 };

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
      mutate((s) => {
        const current: TopicProgress = s.topics[id] ?? { completed: false };
        return { ...s, topics: { ...s.topics, [id]: { ...current, ...patch } } };
      }),
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
        const current: TopicProgress = s.topics[id] ?? { completed: false };
        const wasCompleted = current.completed;
        let next: ProgressState = {
          ...s,
          topics: { ...s.topics, [id]: { ...current, completed } },
        };
        // İlk dəfə tamamlananda +50 XP (təkrar işarələmədə deyil).
        if (completed && !wasCompleted) next = touchStreak({ ...next, xp: next.xp + 50 });
        return next;
      }),
    [mutate],
  );

  const recordQuiz = useCallback(
    (id: string, score: number) =>
      mutate((s) => {
        const current: TopicProgress = s.topics[id] ?? { completed: false };
        // Quiz başına XP = nəticənin yarısı (max 50), gündə streak.
        const gained = Math.round(score / 2);
        return touchStreak({
          ...s,
          xp: s.xp + gained,
          topics: { ...s.topics, [id]: { ...current, lastQuizScore: score } },
        });
      }),
    [mutate],
  );

  const toggleWord = useCallback(
    (id: string, word: string) =>
      mutate((s) => {
        const current: TopicProgress = s.topics[id] ?? { completed: false };
        const set = new Set(current.learnedWords ?? []);
        set.has(word) ? set.delete(word) : set.add(word);
        return {
          ...s,
          topics: { ...s.topics, [id]: { ...current, learnedWords: [...set] } },
        };
      }),
    [mutate],
  );

  return { state, patchTopic, awardXp, setCompleted, recordQuiz, toggleWord };
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
    // Sadə "level" sistemi: hər 100 XP = 1 level.
    const level = Math.floor(state.xp / 100) + 1;
    const xpIntoLevel = state.xp % 100;
    return {
      completed,
      totalTopics: topicMeta.length,
      wordsLearned,
      totalWords,
      xp: state.xp,
      streak: state.streak,
      level,
      xpIntoLevel,
    };
  }, [state]);
}
