import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Layers,
  MessageSquareText,
  NotebookPen,
  PartyPopper,
  PenLine,
  Target,
  type LucideIcon,
} from "lucide-react";
import { getTopic } from "../content";
import type { Topic } from "../content/types";
import LevelBadge from "../components/LevelBadge";
import Flashcards from "../components/Flashcards";
import Quiz from "../components/Quiz";
import { LEVEL_META, themeIcon } from "../lib/theme";
import { useProgress } from "../store/progress";

type Tab = "lesson" | "learn" | "flashcards" | "reading" | "quiz" | "practice";

const TABS: { id: Tab; label: string; icon: LucideIcon }[] = [
  { id: "lesson", label: "Lesson", icon: Target },
  { id: "learn", label: "Learn", icon: GraduationCap },
  { id: "flashcards", label: "Flashcards", icon: Layers },
  { id: "reading", label: "Reading", icon: BookOpen },
  { id: "quiz", label: "Quiz", icon: NotebookPen },
  { id: "practice", label: "Practice", icon: MessageSquareText },
];

export default function TopicPage() {
  const { id } = useParams();
  const topic = id ? getTopic(id) : undefined;
  const [tab, setTab] = useState<Tab>("lesson");
  const { state, setCompleted, recordQuiz, toggleWord } = useProgress();

  if (!topic) {
    return (
      <div className="rounded-2xl border border-dashed border-line p-10 text-center">
        <p className="text-muted">Topic tapılmadı.</p>
        <Link to="/" className="mt-2 inline-block font-medium text-brand-600 hover:underline">
          ← Bütün topiclər
        </Link>
      </div>
    );
  }

  const p = state.topics[topic.id];
  const m = LEVEL_META[topic.level];
  const learned = new Set(p?.learnedWords ?? []);
  const TopicIcon = themeIcon(topic.theme);

  return (
    <div className="space-y-6">
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-brand-600"
      >
        <ArrowLeft size={16} /> Bütün topiclər
      </Link>

      {/* HERO */}
      <header className="overflow-hidden rounded-2xl border border-line bg-surface shadow-card">
        <div className={`h-1.5 ${m.bar}`} aria-hidden />
        <div className="flex flex-wrap items-start justify-between gap-4 p-5 sm:p-6">
          <div className="flex gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-surface-2 text-brand-600 dark:text-brand-400 sm:h-14 sm:w-14">
              <TopicIcon size={28} strokeWidth={2} />
            </span>
            <div>
              <div className="mb-1.5 flex flex-wrap items-center gap-2">
                <LevelBadge level={topic.level} showLabel />
                <span className="text-sm text-faint">{topic.theme}</span>
              </div>
              <h1 className="font-display text-2xl font-bold tracking-tight text-fg sm:text-3xl">
                {topic.title}
              </h1>
              <p className="mt-1 max-w-2xl text-muted">{topic.summary}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setCompleted(topic.id, !p?.completed)}
            className={`inline-flex shrink-0 items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-semibold shadow-sm transition ${
              p?.completed
                ? "bg-emerald-600 text-white hover:brightness-95"
                : "border border-line bg-surface text-fg hover:bg-surface-2"
            }`}
          >
            {p?.completed ? (
              <>
                <CheckCircle2 size={16} /> Tamamlandı
              </>
            ) : (
              "Tamamla"
            )}
          </button>
        </div>
      </header>

      {/* TABS */}
      <nav className="flex gap-1.5 overflow-x-auto rounded-2xl border border-line bg-surface p-1.5 shadow-card [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {TABS.map((t) => {
          const Icon = t.icon;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              aria-current={tab === t.id}
              className={`flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium transition sm:px-3.5 ${
                tab === t.id ? "bg-brand-600 text-white shadow-sm" : "text-muted hover:bg-surface-2"
              }`}
            >
              <Icon size={16} />
              {t.label}
            </button>
          );
        })}
      </nav>

      <div className="animate-fade-in-up">
        {tab === "lesson" && (
          <LessonFlow
            topic={topic}
            onRecordQuiz={(s) => recordQuiz(topic.id, s)}
            onFinish={() => setCompleted(topic.id, true)}
            completed={!!p?.completed}
          />
        )}
        {tab === "learn" && (
          <div>
            <LeadInBlock topic={topic} />
            <VocabBlock topic={topic} />
            <GrammarBlock topic={topic} />
          </div>
        )}
        {tab === "flashcards" && (
          <Flashcards
            items={topic.vocabulary}
            learned={learned}
            onToggleLearned={(w) => toggleWord(topic.id, w)}
          />
        )}
        {tab === "reading" && (
          <div>
            <ReadingBlock topic={topic} />
            <Section title="Comprehension questions">
              <Quiz questions={topic.reading.questions} />
            </Section>
          </div>
        )}
        {tab === "quiz" && (
          <div>
            {p?.lastQuizScore != null && (
              <p className="mb-4 text-sm text-muted">
                Sonuncu nəticə: <strong className="tnum">{p.lastQuizScore}%</strong>
              </p>
            )}
            <Quiz questions={topic.quiz} onFinish={(s) => recordQuiz(topic.id, s)} />
          </div>
        )}
        {tab === "practice" && (
          <div>
            <SpeakingBlock topic={topic} />
            <WritingBlock topic={topic} />
          </div>
        )}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Guided, text-first lesson flow (input → noticing → practice → output)
// ---------------------------------------------------------------------------

function LessonFlow({
  topic,
  onRecordQuiz,
  onFinish,
  completed,
}: {
  topic: Topic;
  onRecordQuiz: (score: number) => void;
  onFinish: () => void;
  completed: boolean;
}) {
  const steps = useMemo(
    () => [
      { key: "intro", label: "Before you read", hint: "Warm up — mövzuya köklən", body: <LeadInBlock topic={topic} bare /> },
      { key: "reading", label: "Read the text", hint: "Əsas input — mənanı tut, hər sözü yox", body: <ReadingBlock topic={topic} bare /> },
      { key: "comprehension", label: "Did you understand?", hint: "Anlamanı yoxla", body: <Quiz questions={topic.reading.questions} /> },
      { key: "vocab", label: "Vocabulary from the text", hint: "Sözləri kontekstdə fərq et", body: <VocabBlock topic={topic} bare /> },
      { key: "grammar", label: `Grammar — ${topic.grammar.point}`, hint: "Mətndəki strukturu kəşf et", body: <GrammarBlock topic={topic} bare /> },
      { key: "quiz", label: "Practice quiz", hint: "İndi özün yoxla", body: <Quiz questions={topic.quiz} onFinish={onRecordQuiz} /> },
      {
        key: "output",
        label: "Now produce",
        hint: "Danış və yaz — öyrəndiyini istifadə et",
        body: (
          <div>
            <SpeakingBlock topic={topic} bare />
            <WritingBlock topic={topic} bare />
          </div>
        ),
      },
    ],
    [topic, onRecordQuiz],
  );

  const [step, setStep] = useState(0);
  const isLast = step === steps.length - 1;
  const current = steps[step];

  const goTo = (n: number) => {
    setStep(n);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="rounded-2xl border border-line bg-surface p-5 shadow-card sm:p-6">
      {/* Addım proqresi */}
      <div className="mb-5">
        <div className="mb-2 flex items-center justify-between gap-3 text-sm">
          <span className="shrink-0 font-semibold text-fg">
            Step {step + 1} <span className="text-faint">/ {steps.length}</span>
          </span>
          <span className="truncate text-right text-faint">{current.hint}</span>
        </div>
        <div className="flex gap-1.5">
          {steps.map((s, i) => (
            <button
              key={s.key}
              type="button"
              aria-label={`Step ${i + 1}: ${s.label}`}
              onClick={() => goTo(i)}
              className={`h-1.5 flex-1 rounded-full transition ${
                i < step ? "bg-brand-400" : i === step ? "bg-brand-600" : "bg-surface-2"
              }`}
            />
          ))}
        </div>
      </div>

      <h2 className="mb-4 font-display text-xl font-bold text-fg">{current.label}</h2>

      <div key={current.key} className="animate-fade-in-up">
        {current.body}
      </div>

      {/* Naviqasiya */}
      <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
        <button
          type="button"
          onClick={() => goTo(step - 1)}
          disabled={step === 0}
          className="inline-flex items-center gap-1 rounded-xl px-4 py-2.5 text-sm font-semibold text-muted transition hover:bg-surface-2 disabled:opacity-0"
        >
          <ArrowLeft size={16} /> Back
        </button>

        {!isLast ? (
          <button
            type="button"
            onClick={() => goTo(step + 1)}
            className="inline-flex items-center gap-1 rounded-xl bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
          >
            Next <ArrowRight size={16} />
          </button>
        ) : (
          <button
            type="button"
            onClick={onFinish}
            className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
          >
            {completed ? (
              <>
                <CheckCircle2 size={16} /> Tamamlandı
              </>
            ) : (
              <>
                <PartyPopper size={16} /> Finish lesson
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Reusable content blocks — both tabs and the guided lesson use these.
// `bare` = lesson içində (öz başlığı/çərçivəsi olmadan).
// ---------------------------------------------------------------------------

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-6">
      <h2 className="mb-3 font-display text-lg font-semibold text-fg">{title}</h2>
      {children}
    </section>
  );
}

function Wrap({ title, bare, children }: { title: string; bare?: boolean; children: React.ReactNode }) {
  if (bare) return <>{children}</>;
  return <Section title={title}>{children}</Section>;
}

function LeadInBlock({ topic, bare }: { topic: Topic; bare?: boolean }) {
  return (
    <Wrap title="Lead-in" bare={bare}>
      <ul className="space-y-2">
        {topic.leadIn.map((q, i) => (
          <li key={i} className="flex gap-2.5 rounded-xl bg-surface-2 px-4 py-3 text-muted">
            <MessageSquareText size={18} className="mt-0.5 shrink-0 text-faint" />
            {q}
          </li>
        ))}
      </ul>
    </Wrap>
  );
}

function ReadingBlock({ topic, bare }: { topic: Topic; bare?: boolean }) {
  return (
    <Wrap title={topic.reading.title} bare={bare}>
      {bare && (
        <h3 className="mb-3 font-display text-lg font-semibold text-fg">{topic.reading.title}</h3>
      )}
      <article className="card whitespace-pre-line p-6 text-[15px] leading-7 text-fg/90">
        {topic.reading.text}
      </article>
    </Wrap>
  );
}

function VocabBlock({ topic, bare }: { topic: Topic; bare?: boolean }) {
  return (
    <Wrap title="Vocabulary" bare={bare}>
      <div className="grid gap-3 sm:grid-cols-2">
        {topic.vocabulary.map((v) => (
          <div key={v.word} className="card p-4">
            <p className="font-display font-semibold text-fg">{v.word}</p>
            <p className="mt-1 text-sm text-muted">{v.definition}</p>
            <p className="mt-1 text-sm italic text-faint">"{v.example}"</p>
            {v.collocations && (
              <p className="mt-2 flex flex-wrap gap-1.5">
                {v.collocations.map((c) => (
                  <span key={c} className="rounded-md bg-surface-2 px-1.5 py-0.5 text-xs text-muted">
                    {c}
                  </span>
                ))}
              </p>
            )}
            {v.azNote && (
              <p className="mt-2 text-xs font-medium text-brand-600 dark:text-brand-400">
                🇦🇿 {v.azNote}
              </p>
            )}
          </div>
        ))}
      </div>
    </Wrap>
  );
}

function GrammarBlock({ topic, bare }: { topic: Topic; bare?: boolean }) {
  return (
    <Wrap title={`Grammar focus — ${topic.grammar.point}`} bare={bare}>
      <div className="card p-5">
        <p className="text-fg/90">{topic.grammar.explanation}</p>
        <p className="mt-3 rounded-xl bg-brand-50 p-3.5 text-sm text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
          🇦🇿 {topic.grammar.azNote}
        </p>
        <ul className="mt-4 space-y-2">
          {topic.grammar.examples.map((ex, i) => (
            <li key={i} className="rounded-xl border border-line px-3.5 py-2.5 text-sm">
              <span className="text-fg">{ex.en}</span>
              {ex.note && <span className="text-faint"> — {ex.note}</span>}
            </li>
          ))}
        </ul>
      </div>
    </Wrap>
  );
}

function SpeakingBlock({ topic, bare }: { topic: Topic; bare?: boolean }) {
  return (
    <Wrap title="Speaking" bare={bare}>
      {bare && (
        <h3 className="mb-3 flex items-center gap-2 font-display text-lg font-semibold text-fg">
          <MessageSquareText size={18} className="text-brand-600 dark:text-brand-400" /> Speaking
        </h3>
      )}
      <ul className="space-y-2">
        {topic.speaking.map((s, i) => (
          <li key={i} className="flex gap-2.5 rounded-xl bg-surface-2 px-4 py-3 text-muted">
            <span className="shrink-0 text-faint tnum">{i + 1}.</span>
            {s}
          </li>
        ))}
      </ul>
    </Wrap>
  );
}

function WritingBlock({ topic, bare }: { topic: Topic; bare?: boolean }) {
  return (
    <Wrap title="Writing" bare={bare}>
      {bare && (
        <h3 className="mb-3 mt-6 flex items-center gap-2 font-display text-lg font-semibold text-fg">
          <PenLine size={18} className="text-brand-600 dark:text-brand-400" /> Writing
        </h3>
      )}
      <div className="card p-5">
        <p className="text-fg/90">{topic.writing.task}</p>
        {topic.writing.minWords && (
          <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-3 py-1 text-sm text-muted">
            <Target size={14} /> ən azı {topic.writing.minWords} söz
          </p>
        )}
      </div>
    </Wrap>
  );
}
