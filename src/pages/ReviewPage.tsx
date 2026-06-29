import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Repeat, RotateCcw, Sparkles } from "lucide-react";
import { topicMeta, loadTopic } from "../content/catalog";
import type { Level } from "../content/types";
import LevelBadge from "../components/LevelBadge";
import { useProgress, todayKey } from "../store/progress";
import { GRADES, isDue, newCard, schedule, type Grade } from "../srs/scheduler";

interface ReviewCard {
  id: string;
  word: string;
  definition: string;
  example: string;
  azNote?: string;
  level: Level;
  topicTitle: string;
}

export default function ReviewPage() {
  const { state, reviewCard } = useProgress();
  const today = todayKey();

  // Sessiya kolodası bir dəfə (mount-da) qurulur — qiymət verdikcə yenidən
  // hesablanmasın deyə (snapshot). Öyrənilmiş sözlərin tam VocabItem-i lazımi
  // topic-ləri lazy yükləməklə gətirilir.
  const [queue, setQueue] = useState<ReviewCard[] | null>(null);
  const [pos, setPos] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [reviewed, setReviewed] = useState(0);

  const totalLearned = useMemo(
    () => topicMeta.reduce((n, t) => n + (state.topics[t.id]?.learnedWords?.length ?? 0), 0),
    [state.topics],
  );

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const cards: ReviewCard[] = [];
      for (const meta of topicMeta) {
        const learned = state.topics[meta.id]?.learnedWords;
        if (!learned || learned.length === 0) continue;
        const topic = await loadTopic(meta.id);
        if (!topic) continue;
        const learnedSet = new Set(learned);
        for (const v of topic.vocabulary) {
          if (!learnedSet.has(v.word)) continue;
          const id = `${meta.id}:${v.word}`;
          const card = state.srs[id] ?? newCard(today);
          if (isDue(card, today)) {
            cards.push({
              id,
              word: v.word,
              definition: v.definition,
              example: v.example,
              azNote: v.azNote,
              level: meta.level,
              topicTitle: meta.title,
            });
          }
        }
      }
      if (!cancelled) setQueue(cards);
    })();
    return () => {
      cancelled = true;
    };
    // Yalnız mount-da qur (snapshot) — qiymətlər sessiya boyu lokal idarə olunur.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const current = queue && pos < queue.length ? queue[pos] : null;

  function grade(g: Grade) {
    if (!current) return;
    const prev = state.srs[current.id] ?? newCard(today);
    reviewCard(current.id, schedule(prev, g, today));
    setReviewed((c) => c + 1);
    setPos((p) => p + 1);
    setRevealed(false);
  }

  // --- Vəziyyətlər ---------------------------------------------------------

  if (queue === null) {
    return <Centered>Kartlar hazırlanır…</Centered>;
  }

  if (queue.length === 0) {
    return (
      <Hero>
        <Sparkles size={36} className="mx-auto text-brand-500" />
        {totalLearned === 0 ? (
          <>
            <h2 className="mt-3 font-display text-xl font-bold text-fg">Hələ təkrar üçün söz yoxdur</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted">
              Topic-lərdəki flashcard-larda sözləri "öyrənildi" işarələ — onlar
              avtomatik bu aralıqlı-təkrar kolodasına düşəcək.
            </p>
            <Link
              to="/"
              className="mt-5 inline-flex items-center gap-1.5 rounded-xl bg-brand-600 px-5 py-2.5 font-semibold text-white shadow-sm transition hover:bg-brand-700"
            >
              Topic-lərə keç
            </Link>
          </>
        ) : (
          <>
            <h2 className="mt-3 font-display text-xl font-bold text-fg">Hamısını təkrar etdin! 🎉</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted">
              Bu gün üçün təkrar edəcək söz qalmadı. Sabah yeni kartlar hazır olacaq —
              ardıcıllığını (streak) qoru!
            </p>
          </>
        )}
      </Hero>
    );
  }

  if (!current) {
    // Sessiya bitdi.
    return (
      <Hero>
        <div className="text-4xl">🏆</div>
        <h2 className="mt-2 font-display text-2xl font-bold text-fg tnum">{reviewed} kart təkrar edildi</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted">
          Əla iş! Aralıqlı təkrar yaddaşı möhkəmləndirir — sabah yenə qayıt.
        </p>
        <Link
          to="/"
          className="mt-5 inline-flex items-center gap-1.5 rounded-xl bg-brand-600 px-5 py-2.5 font-semibold text-white shadow-sm transition hover:bg-brand-700"
        >
          Ana səhifə
        </Link>
      </Hero>
    );
  }

  const progressPct = (reviewed / queue.length) * 100;

  return (
    <div className="mx-auto max-w-xl space-y-5">
      {/* BAŞLIQ + PROQRES */}
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center gap-1.5 font-display text-lg font-bold text-fg">
          <Repeat size={18} className="text-brand-600 dark:text-brand-400" /> Təkrar
        </span>
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface-2">
          <div className="h-full rounded-full bg-brand-600 transition-all" style={{ width: `${progressPct}%` }} />
        </div>
        <span className="text-sm text-faint tnum">
          {reviewed}/{queue.length}
        </span>
      </div>

      {/* KART */}
      <div className="rounded-2xl border border-line bg-surface p-6 shadow-card sm:p-8">
        <div className="mb-4 flex items-center justify-between">
          <LevelBadge level={current.level} />
          <span className="truncate text-xs text-faint">{current.topicTitle}</span>
        </div>

        <p className="text-center font-display text-2xl font-bold text-fg sm:text-3xl">
          {current.word}
        </p>

        {revealed ? (
          <div className="mt-5 space-y-3 border-t border-line pt-5">
            <p className="text-sm text-muted">{current.definition}</p>
            <p className="text-sm italic text-faint">"{current.example}"</p>
            {current.azNote && (
              <p className="text-sm font-medium text-brand-600 dark:text-brand-400">🇦🇿 {current.azNote}</p>
            )}
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setRevealed(true)}
            className="mt-6 w-full rounded-xl bg-brand-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-brand-700"
          >
            Cavabı göstər
          </button>
        )}
      </div>

      {/* QİYMƏT DÜYMƏLƏRİ */}
      {revealed && (
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {GRADES.map((g) => (
            <button
              key={g.grade}
              type="button"
              onClick={() => grade(g.grade)}
              className={`rounded-xl px-3 py-3 text-sm font-semibold transition hover:brightness-95 ${g.className}`}
            >
              {g.label}
            </button>
          ))}
        </div>
      )}

      <p className="flex items-center justify-center gap-1.5 text-center text-xs text-faint">
        <RotateCcw size={12} /> Aralıqlı təkrar — düzgün xatırladıqca interval uzanır.
      </p>
    </div>
  );
}

function Centered({ children }: { children: React.ReactNode }) {
  return <div className="py-16 text-center text-muted">{children}</div>;
}

function Hero({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-line bg-surface p-8 text-center shadow-card sm:p-10">
      {children}
    </div>
  );
}
