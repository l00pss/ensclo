import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2, NotebookPen } from "lucide-react";
import { getSection } from "../sections";
import type { ReferenceItem } from "../sections/types";
import type { Level } from "../content/types";
import { LEVELS } from "../content/catalog";
import FilterPills from "../components/FilterPills";
import Quiz from "../components/Quiz";
import SectionNotFound from "../components/SectionNotFound";
import { useProgress } from "../store/progress";

const LEVEL_OPTIONS: (Level | "all")[] = ["all", ...LEVELS];

/** Bir reference qrupunun detalı — maddə kartları + səviyyə filtri + practice. */
export default function ReferenceDetailPage() {
  const { sectionKey, groupId } = useParams();
  const section = getSection(sectionKey);
  const group = section?.groupsById.get(groupId ?? "");
  const [level, setLevel] = useState<Level | "all">("all");
  const { state, recordSectionQuiz, setSectionGroupDone } = useProgress();

  const visible = useMemo(
    () => (group ? group.items.filter((it) => level === "all" || it.level === level) : []),
    [group, level],
  );

  if (!section || !group) {
    return <SectionNotFound message="Bu qrup tapılmadı." />;
  }

  const ItemCard = section.ItemCard;
  const Icon = group.icon;
  const progress = state.sections[section.key]?.[group.id];

  return (
    <div className="space-y-6">
      <Link
        to={`/${section.key}`}
        className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-brand-600"
      >
        <ArrowLeft size={16} /> {section.nav.label}
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
                {group.label}
              </h1>
              <p className="font-medium text-faint">{group.azLabel}</p>
              <p className="mt-1.5 max-w-2xl text-muted">{group.description}</p>
              <p className="mt-1 max-w-2xl text-sm text-brand-600 dark:text-brand-400">
                🇦🇿 {group.azDescription}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setSectionGroupDone(section.key, group.id, !progress?.completed)}
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

      {/* MADDƏ KARTLARI */}
      <div className="grid gap-3 sm:grid-cols-2">
        {visible.map((item: ReferenceItem) => (
          <ItemCard key={section.itemKey(item)} item={item} />
        ))}
        {visible.length === 0 && (
          <p className="col-span-full rounded-2xl border border-dashed border-line p-8 text-center text-faint">
            Bu səviyyədə nəticə yoxdur.
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
          <Quiz
            questions={group.practice}
            onFinish={(s) => recordSectionQuiz(section.key, group.id, s)}
          />
        </div>
      </section>
    </div>
  );
}
