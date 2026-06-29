import { Link } from "react-router-dom";
import { CheckCircle2, GraduationCap } from "lucide-react";
import { grammarGroups, GRAMMAR_META, totalGrammarRules } from "../content/grammar";
import { useProgress } from "../store/progress";

export default function GrammarPage() {
  const { state } = useProgress();
  const done = grammarGroups.filter((g) => state.grammar[g.id]?.completed).length;

  return (
    <div className="space-y-8">
      {/* HERO */}
      <section className="animate-fade-in-up overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 via-brand-600 to-brand-700 p-5 text-white shadow-card sm:p-8">
        <div className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/15">
            <GraduationCap size={18} />
          </span>
          <span className="text-sm font-medium text-brand-100">Grammar · Qrammatika</span>
        </div>
        <h1 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
          Qaydaları bir yerdə öyrən
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-brand-100">
          Əsas qrammatika kateqoriyaya görə qruplanıb. Hər qrupda qaydanın strukturu, səviyyə
          (B1–C1), nümunələr, tez-tez edilən səhvlər (pitfall) və practice var.
        </p>
        <div className="mt-5 flex flex-wrap gap-2.5">
          <span className="rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium backdrop-blur-sm tnum">
            {grammarGroups.length} kateqoriya
          </span>
          <span className="rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium backdrop-blur-sm tnum">
            {totalGrammarRules} qayda
          </span>
          <span className="rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium backdrop-blur-sm tnum">
            {done}/{grammarGroups.length} tamamlandı
          </span>
        </div>
      </section>

      {/* KATEQORİYA KARTLARI */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {grammarGroups.map((g, i) => {
          const meta = GRAMMAR_META[g.id];
          const Icon = meta.icon;
          const completed = state.grammar[g.id]?.completed;
          return (
            <Link
              key={g.id}
              to={`/grammar/${g.id}`}
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
                    {g.rules.length}
                  </span>
                )}
              </div>
              <h3 className="font-display text-lg font-semibold text-fg group-hover:text-brand-600 dark:group-hover:text-brand-400">
                {meta.label}
              </h3>
              <p className="text-sm font-medium text-faint">{meta.azLabel}</p>
              <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted">{g.description}</p>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
