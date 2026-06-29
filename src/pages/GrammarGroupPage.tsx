import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AlertTriangle, ArrowLeft, CheckCircle2, NotebookPen, Workflow } from "lucide-react";
import { getGrammarGroup, GRAMMAR_META } from "../content/grammar";
import type { GrammarRule, Level } from "../content/types";
import { LEVELS } from "../content/catalog";
import LevelBadge from "../components/LevelBadge";
import FilterPills from "../components/FilterPills";
import Quiz from "../components/Quiz";
import { useProgress } from "../store/progress";

const LEVEL_OPTIONS: (Level | "all")[] = ["all", ...LEVELS];

export default function GrammarGroupPage() {
  const { groupId } = useParams();
  const group = groupId ? getGrammarGroup(groupId) : undefined;
  const [level, setLevel] = useState<Level | "all">("all");
  const { state, recordGrammarQuiz, setGrammarGroupDone } = useProgress();

  const visible = useMemo(
    () => (group ? group.rules.filter((r) => level === "all" || r.level === level) : []),
    [group, level],
  );

  if (!group) {
    return (
      <div className="rounded-2xl border border-dashed border-line p-10 text-center">
        <p className="text-muted">Bu qrammatika kateqoriyası tapılmadı.</p>
        <Link to="/grammar" className="mt-2 inline-block font-medium text-brand-600 hover:underline">
          ← Bütün qrammatika
        </Link>
      </div>
    );
  }

  const meta = GRAMMAR_META[group.id];
  const Icon = meta.icon;
  const progress = state.grammar[group.id];

  return (
    <div className="space-y-6">
      <Link
        to="/grammar"
        className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-brand-600"
      >
        <ArrowLeft size={16} /> Bütün qrammatika
      </Link>

      {/* HERO */}
      <header className="overflow-hidden rounded-2xl border border-line bg-surface shadow-card">
        <div className="h-1.5 bg-brand-500" aria-hidden />
        <div className="flex flex-wrap items-start justify-between gap-4 p-5 sm:p-6">
          <div className="flex gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-surface-2 text-brand-600 dark:text-brand-400 sm:h-14 sm:w-14">
              <Icon size={28} strokeWidth={2} />
            </span>
            <div>
              <h1 className="font-display text-2xl font-bold tracking-tight text-fg sm:text-3xl">
                {meta.label}
              </h1>
              <p className="font-medium text-faint">{meta.azLabel}</p>
              <p className="mt-1.5 max-w-2xl text-muted">{group.description}</p>
              <p className="mt-1 max-w-2xl text-sm text-brand-600 dark:text-brand-400">
                🇦🇿 {group.azDescription}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setGrammarGroupDone(group.id, !progress?.completed)}
            className={`inline-flex shrink-0 items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-semibold shadow-sm transition ${
              progress?.completed
                ? "bg-emerald-600 text-white hover:brightness-95"
                : "border border-line bg-surface text-fg hover:bg-surface-2"
            }`}
          >
            {progress?.completed ? (
              <>
                <CheckCircle2 size={16} /> Tamamlandı
              </>
            ) : (
              "Tamamla"
            )}
          </button>
        </div>
      </header>

      {/* SƏVİYYƏ FİLTRİ */}
      <FilterPills label="Level" value={level} options={LEVEL_OPTIONS} onChange={setLevel} />

      {/* QAYDA KARTLARI */}
      <div className="grid gap-3 sm:grid-cols-2">
        {visible.map((r) => (
          <RuleCard key={r.title} r={r} />
        ))}
        {visible.length === 0 && (
          <p className="col-span-full rounded-2xl border border-dashed border-line p-8 text-center text-faint">
            Bu səviyyədə qayda yoxdur.
          </p>
        )}
      </div>

      {/* PRACTICE */}
      <section className="rounded-2xl border border-line bg-surface p-5 shadow-card sm:p-6">
        <h2 className="mb-1 flex items-center gap-2 font-display text-xl font-bold text-fg">
          <NotebookPen size={20} className="text-brand-600 dark:text-brand-400" /> Practice
        </h2>
        {progress?.lastScore != null && (
          <p className="mb-4 text-sm text-muted">
            Sonuncu nəticə: <strong className="tnum">{progress.lastScore}%</strong>
          </p>
        )}
        <div className="mt-4">
          <Quiz questions={group.practice} onFinish={(s) => recordGrammarQuiz(group.id, s)} />
        </div>
      </section>
    </div>
  );
}

function RuleCard({ r }: { r: GrammarRule }) {
  return (
    <div className="card flex flex-col p-4">
      <div className="flex items-start justify-between gap-2">
        <p className="font-display text-lg font-semibold text-fg">{r.title}</p>
        <LevelBadge level={r.level} />
      </div>
      {r.form && (
        <p className="mt-2 flex items-start gap-1.5 rounded-xl bg-surface-2 px-2.5 py-2 font-mono text-xs text-muted">
          <Workflow size={13} className="mt-0.5 shrink-0 text-faint" />
          {r.form}
        </p>
      )}
      <p className="mt-2 text-sm text-muted">{r.explanation}</p>
      <p className="mt-1.5 text-sm font-semibold text-brand-600 dark:text-brand-400">
        🇦🇿 {r.azNote}
      </p>
      <ul className="mt-2 space-y-1.5">
        {r.examples.map((ex) => (
          <li key={ex.en} className="text-sm">
            <span className="italic text-faint">"{ex.en}"</span>
            {ex.note && <span className="ml-1 text-xs text-muted">— {ex.note}</span>}
          </li>
        ))}
      </ul>
      {r.pitfall && (
        <p className="mt-2 flex items-start gap-1.5 rounded-xl bg-amber-50 px-2.5 py-2 text-xs text-amber-800 dark:bg-amber-500/10 dark:text-amber-200">
          <AlertTriangle size={13} className="mt-0.5 shrink-0" />
          {r.pitfall}
        </p>
      )}
    </div>
  );
}
