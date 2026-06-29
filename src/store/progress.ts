import { useCallback, useEffect, useMemo, useState } from "react";
import { topicMeta } from "../content/catalog";

// ---------------------------------------------------------------------------
// Progres + geymifikasiya — hələlik localStorage.
// Best practice (Duolingo): görünən proqres, XP, streak (loss aversion),
// "kiçik qələbələr". Gələcəkdə backend/DB gələndə yalnız bu fayl dəyişəcək.
//
// Reference bölmələri (connectors/grammar/idioms/functional) ARTIQ ayrıca yox,
// vahid `sections[key][groupId]` altında saxlanılır (DRY) — açar = section.key.
// ---------------------------------------------------------------------------

const KEY = "ensclo.progress.v2";

export interface TopicProgress {
  completed: boolean;
  /** Sonuncu quiz nəticəsi (faiz). */
  lastQuizScore?: number;
  /** Bu topic-də flashcard ilə "öyrənildi" işarələnmiş sözlər. */
  learnedWords?: string[];
}

/** Bir reference qrupu (connector/grammar/idiom/...) üzrə proqres. */
export interface SectionGroupProgress {
  completed: boolean;
  /** Sonuncu practice nəticəsi (faiz). */
  lastScore?: number;
}

/** Aralıqlı təkrar (SRS) kartının vəziyyəti — açar = `${topicId}:${word}`. */
export interface SrsCardState {
  /** Asanlıq əmsalı (SM-2), default 2.5. */
  ease: number;
  /** Növbəti interval (gün). */
  intervalDays: number;
  /** Uğurlu ardıcıl təkrar sayı. */
  reps: number;
  /** Növbəti təkrar tarixi — "YYYY-MM-DD". */
  due: string;
  /** Səhv sayı (lapse). */
  lapses: number;
}

export interface ProgressState {
  topics: Record<string, TopicProgress>;
  /** Bütün reference bölmələri: sections[sectionKey][groupId]. */
  sections: Record<string, Record<string, SectionGroupProgress>>;
  /** SRS kartlarının vəziyyəti. */
  srs: Record<string, SrsCardState>;
  /** Ümumi toplanmış XP. */
  xp: number;
  /** Cari ardıcıl gün sayı (streak). */
  streak: number;
  /** Sonuncu öyrənmə tarixi — "YYYY-MM-DD" (yerli). */
  lastStudyDay?: string;
}

const EMPTY: ProgressState = { topics: {}, sections: {}, srs: {}, xp: 0, streak: 0 };

export function todayKey(): string {
  // Yerli tarix, gün dəqiqliyində.
  return new Date().toLocaleDateString("en-CA"); // YYYY-MM-DD
}

function dayDiff(a: string, b: string): number {
  const ms = new Date(b).getTime() - new Date(a).getTime();
  return Math.round(ms / 86_400_000);
}

/** v2 (connectors/grammar ayrıca) → vahid `sections` formatına miqrasiya. */
function migrate(parsed: Record<string, unknown>): ProgressState {
  const state: ProgressState = {
    ...EMPTY,
    ...(parsed as Partial<ProgressState>),
    sections: { ...((parsed.sections as ProgressState["sections"]) ?? {}) },
    srs: { ...((parsed.srs as ProgressState["srs"]) ?? {}) },
  };
  const legacy = parsed as { connectors?: ProgressState["sections"][string]; grammar?: ProgressState["sections"][string] };
  if (legacy.connectors && !state.sections.connectors) state.sections.connectors = legacy.connectors;
  if (legacy.grammar && !state.sections.grammar) state.sections.grammar = legacy.grammar;
  delete (state as unknown as Record<string, unknown>).connectors;
  delete (state as unknown as Record<string, unknown>).grammar;
  return state;
}

function read(): ProgressState {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { ...EMPTY };
    return migrate(JSON.parse(raw) as Record<string, unknown>);
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
/** İstənilən reference qrupu ilk dəfə tamamlananda verilən XP. */
const XP_SECTION_GROUP_COMPLETE = 35;
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

/** Bir section qrupuna patch tətbiq et (iç-içə record). */
function patchSection(
  sections: ProgressState["sections"],
  sectionKey: string,
  groupId: string,
  patch: Partial<SectionGroupProgress>,
): ProgressState["sections"] {
  const groupRec = sections[sectionKey] ?? {};
  return { ...sections, [sectionKey]: upsertEntity(groupRec, groupId, patch) };
}

/** Bir section qrupunda tamamlanmış elementlərin sayı (saf selektor). */
export function countSectionDone(state: ProgressState, sectionKey: string): number {
  const rec = state.sections[sectionKey];
  if (!rec) return 0;
  return Object.values(rec).filter((g) => g.completed).length;
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

  /** İstənilən reference qrupunun practice nəticəsini yaz (+XP = nəticənin yarısı). */
  const recordSectionQuiz = useCallback(
    (sectionKey: string, groupId: string, score: number) =>
      mutate((s) =>
        touchStreak({
          ...s,
          xp: s.xp + quizXp(score),
          sections: patchSection(s.sections, sectionKey, groupId, { lastScore: score }),
        }),
      ),
    [mutate],
  );

  /** İstənilən reference qrupunu "öyrənildi" işarələ — ilk dəfə XP. */
  const setSectionGroupDone = useCallback(
    (sectionKey: string, groupId: string, completed: boolean) =>
      mutate((s) => {
        const groupRec = s.sections[sectionKey] ?? {};
        const { entities, firstTime } = completeEntity(groupRec, groupId, completed);
        const next: ProgressState = {
          ...s,
          sections: { ...s.sections, [sectionKey]: entities },
        };
        return firstTime
          ? touchStreak({ ...next, xp: next.xp + XP_SECTION_GROUP_COMPLETE })
          : next;
      }),
    [mutate],
  );

  /** SRS: bir kartın yeni planlanmış vəziyyətini yaz (+XP = kiçik mükafat). */
  const reviewCard = useCallback(
    (cardId: string, nextState: SrsCardState, xp = 2) =>
      mutate((s) =>
        touchStreak({
          ...s,
          xp: s.xp + Math.max(0, xp),
          srs: { ...s.srs, [cardId]: nextState },
        }),
      ),
    [mutate],
  );

  return {
    state,
    patchTopic,
    awardXp,
    setCompleted,
    recordQuiz,
    toggleWord,
    recordSectionQuiz,
    setSectionGroupDone,
    reviewCard,
  };
}

/** Dashboard üçün törəmə statistika (topic + XP/streak/level). */
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
