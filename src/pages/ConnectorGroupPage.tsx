import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  MapPin,
  NotebookPen,
} from "lucide-react";
import { getConnectorGroup, FUNCTION_META } from "../content/connectors";
import type { Connector, Level, Register } from "../content/types";
import { LEVELS } from "../content/catalog";
import LevelBadge from "../components/LevelBadge";
import Quiz from "../components/Quiz";
import { useProgress } from "../store/progress";

const REGISTER_META: Record<Register, { label: string; className: string }> = {
  neutral: {
    label: "neutral",
    className: "bg-surface-2 text-muted",
  },
  formal: {
    label: "formal",
    className: "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300",
  },
  informal: {
    label: "informal",
    className: "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",
  },
  academic: {
    label: "academic",
    className: "bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300",
  },
};

export default function ConnectorGroupPage() {
  const { groupId } = useParams();
  const group = groupId ? getConnectorGroup(groupId) : undefined;
  const [level, setLevel] = useState<Level | "all">("all");
  const { state, recordConnectorQuiz, setConnectorGroupDone } = useProgress();

  const visible = useMemo(
    () => (group ? group.connectors.filter((c) => level === "all" || c.level === level) : []),
    [group, level],
  );

  if (!group) {
    return (
      <div className="rounded-2xl border border-dashed border-line p-10 text-center">
        <p className="text-muted">Bu bağlayıcı qrupu tapılmadı.</p>
        <Link to="/connectors" className="mt-2 inline-block font-medium text-brand-600 hover:underline">
          ← Bütün bağlayıcılar
        </Link>
      </div>
    );
  }

  const meta = FUNCTION_META[group.id];
  const Icon = meta.icon;
  const progress = state.connectors[group.id];

  return (
    <div className="space-y-6">
      <Link
        to="/connectors"
        className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-brand-600"
      >
        <ArrowLeft size={16} /> Bütün bağlayıcılar
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
            onClick={() => setConnectorGroupDone(group.id, !progress?.completed)}
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
      <div className="flex flex-wrap items-center gap-2">
        <span className="mr-1 text-xs font-semibold uppercase tracking-wide text-faint">Level</span>
        {(["all", ...LEVELS] as const).map((lv) => {
          const active = level === lv;
          return (
            <button
              key={lv}
              type="button"
              onClick={() => setLevel(lv)}
              aria-pressed={active}
              className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition ${
                active
                  ? "bg-brand-600 text-white shadow-sm"
                  : "bg-surface text-muted ring-1 ring-inset ring-line hover:bg-surface-2"
              }`}
            >
              {lv === "all" ? "All" : lv}
            </button>
          );
        })}
      </div>

      {/* BAĞLAYICI KARTLARI */}
      <div className="grid gap-3 sm:grid-cols-2">
        {visible.map((c) => (
          <ConnectorCard key={c.phrase} c={c} />
        ))}
        {visible.length === 0 && (
          <p className="col-span-full rounded-2xl border border-dashed border-line p-8 text-center text-faint">
            Bu səviyyədə bağlayıcı yoxdur.
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
          <Quiz questions={group.practice} onFinish={(s) => recordConnectorQuiz(group.id, s)} />
        </div>
      </section>
    </div>
  );
}

function ConnectorCard({ c }: { c: Connector }) {
  const reg = c.register ? REGISTER_META[c.register] : null;
  return (
    <div className="card flex flex-col p-4">
      <div className="flex items-start justify-between gap-2">
        <p className="font-display text-lg font-semibold text-fg">{c.phrase}</p>
        <LevelBadge level={c.level} />
      </div>
      <p className="mt-1 text-sm font-semibold text-brand-600 dark:text-brand-400">
        🇦🇿 {c.azMeaning}
      </p>
      {reg && (
        <span className={`mt-1.5 inline-flex w-fit rounded-md px-1.5 py-0.5 text-xs font-medium ${reg.className}`}>
          {reg.label}
        </span>
      )}
      <p className="mt-2 text-sm text-muted">{c.meaning}</p>
      <p className="mt-1.5 text-sm italic text-faint">"{c.example}"</p>
      {c.position && (
        <p className="mt-2 flex items-start gap-1.5 text-xs text-muted">
          <MapPin size={13} className="mt-0.5 shrink-0 text-faint" />
          {c.position}
        </p>
      )}
      {c.synonyms && c.synonyms.length > 0 && (
        <p className="mt-2 flex flex-wrap gap-1.5">
          {c.synonyms.map((s) => (
            <span key={s} className="rounded-md bg-surface-2 px-1.5 py-0.5 text-xs text-muted">
              {s}
            </span>
          ))}
        </p>
      )}
      {c.pitfall && (
        <p className="mt-2 flex items-start gap-1.5 rounded-xl bg-amber-50 px-2.5 py-2 text-xs text-amber-800 dark:bg-amber-500/10 dark:text-amber-200">
          <AlertTriangle size={13} className="mt-0.5 shrink-0" />
          {c.pitfall}
        </p>
      )}
      {c.azNote && (
        <p className="mt-2 text-xs font-medium text-brand-600 dark:text-brand-400">🇦🇿 {c.azNote}</p>
      )}
    </div>
  );
}
