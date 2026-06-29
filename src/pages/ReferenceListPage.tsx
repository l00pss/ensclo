import { Link, useParams } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { getSection } from "../sections";
import { useProgress } from "../store/progress";
import SectionNotFound from "../components/SectionNotFound";

/** Bir reference bölməsinin qrup siyahısı (Connectors/Grammar/Idioms/Functional). */
export default function ReferenceListPage() {
  const { sectionKey } = useParams();
  const section = getSection(sectionKey);
  const { state } = useProgress();

  if (!section) return <SectionNotFound />;

  const progress = state.sections[section.key] ?? {};
  const done = section.groups.filter((g) => progress[g.id]?.completed).length;
  const HeroIcon = section.nav.icon;

  return (
    <div className="space-y-8">
      {/* HERO */}
      <section className="animate-fade-in-up overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 via-brand-600 to-brand-700 p-5 text-white shadow-card sm:p-8">
        <div className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/15">
            <HeroIcon size={18} />
          </span>
          <span className="text-sm font-medium text-brand-100">{section.hero.kicker}</span>
        </div>
        <h1 className="mt-3 font-display text-2xl font-bold sm:text-3xl">{section.hero.title}</h1>
        <p className="mt-2 max-w-2xl text-sm text-brand-100">{section.hero.subtitle}</p>
        <div className="mt-5 flex flex-wrap gap-2.5">
          <span className="rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium backdrop-blur-sm tnum">
            {section.groups.length} qrup
          </span>
          <span className="rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium backdrop-blur-sm tnum">
            {section.totalItems} {section.unitAz}
          </span>
          <span className="rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium backdrop-blur-sm tnum">
            {done}/{section.groups.length} tamamlandı
          </span>
        </div>
      </section>

      {/* QRUP KARTLARI */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {section.groups.map((g, i) => {
          const Icon = g.icon;
          const completed = progress[g.id]?.completed;
          return (
            <Link
              key={g.id}
              to={`/${section.key}/${g.id}`}
              style={{ animationDelay: `${i * 35}ms` }}
              className="group relative flex animate-fade-in-up flex-col overflow-hidden rounded-2xl border border-line bg-surface p-5 shadow-card transition hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-surface-2 text-brand-600 dark:text-brand-400">
                  <Icon size={22} strokeWidth={2} />
                </span>
                {completed ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                    <CheckCircle2 size={13} /> Done
                  </span>
                ) : (
                  <span className="rounded-full bg-surface-2 px-2 py-0.5 text-xs font-medium text-faint tnum">
                    {g.items.length}
                  </span>
                )}
              </div>
              <h3 className="font-display text-lg font-semibold text-fg group-hover:text-brand-600 dark:group-hover:text-brand-400">
                {g.label}
              </h3>
              <p className="text-sm font-medium text-faint">{g.azLabel}</p>
              <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted">{g.description}</p>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
