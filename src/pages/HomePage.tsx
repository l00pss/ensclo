import { useDeferredValue, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookMarked,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Flame,
  GraduationCap,
  ListChecks,
  Search,
  Spline,
  Zap,
} from "lucide-react";
import { LEVELS, getThemes, topicMeta as topics } from "../content/catalog";
import type { Level } from "../content/types";

// Bir səhifədə göstərilən topic sayı — DOM düyün sayını sabit saxlayır,
// ona görə ümumi topic sayı 10 000 olsa belə render donmur.
const PAGE_SIZE = 24;
import LevelBadge from "../components/LevelBadge";
import ProgressRing from "../components/ProgressRing";
import FilterPills from "../components/FilterPills";
import { LEVEL_META, themeIcon } from "../lib/theme";
import { useProgress, useStats } from "../store/progress";

function greeting(): string {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
}

export default function HomePage() {
  const [level, setLevel] = useState<Level | "all">("all");
  const [theme, setTheme] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const { state } = useProgress();
  const stats = useStats();
  const themes = useMemo(getThemes, []);

  // Yazarkən UI bloklanmasın deyə filtrləmə təxirə salınmış dəyər üzərində işləyir.
  const deferredQuery = useDeferredValue(query);

  const filtered = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();
    return topics.filter(
      (t) =>
        (level === "all" || t.level === level) &&
        (theme === "all" || t.theme === theme) &&
        (q === "" ||
          t.title.toLowerCase().includes(q) ||
          t.theme.toLowerCase().includes(q) ||
          t.summary.toLowerCase().includes(q)),
    );
  }, [level, theme, deferredQuery]);

  // Filtr və ya axtarış dəyişəndə 1-ci səhifəyə qayıt.
  useEffect(() => {
    setPage(1);
  }, [level, theme, deferredQuery]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const visible = useMemo(
    () => filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE),
    [filtered, currentPage],
  );

  const continueTopic =
    topics.find((t) => state.topics[t.id] && !state.topics[t.id]?.completed) ??
    topics.find((t) => !state.topics[t.id]?.completed);

  return (
    <div className="space-y-8">
      {/* HERO */}
      <section className="animate-fade-in-up overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 via-brand-600 to-brand-700 p-5 text-white shadow-card sm:p-8">
        <p className="text-sm font-medium text-brand-100">{greeting()} 👋</p>
        <h1 className="mt-1 font-display text-2xl font-bold sm:text-3xl">
          Bu gün ingiliscəni inkişaf etdirək
        </h1>
        <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
          <HeroStat icon={<Flame size={16} />} value={stats.streak} label="günlük streak" />
          <HeroStat icon={<Zap size={16} />} value={stats.xp} label="ümumi XP" />
          <HeroStat
            icon={<CheckCircle2 size={16} />}
            value={`${stats.completed}/${stats.totalTopics}`}
            label="topic"
          />
          <HeroStat
            icon={<BookMarked size={16} />}
            value={`${stats.wordsLearned}/${stats.totalWords}`}
            label="söz"
          />
        </div>
      </section>

      {/* DAVAM ET */}
      {continueTopic && (
        <section className="animate-fade-in-up">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-faint">
            Davam et
          </h2>
          <Link
            to={`/topic/${continueTopic.id}`}
            className="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 shadow-card transition hover:shadow-card-hover sm:p-5"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-surface-2 text-brand-600 dark:text-brand-400 sm:h-14 sm:w-14">
              <ThemeIcon theme={continueTopic.theme} size={26} />
            </span>
            <div className="min-w-0 flex-1">
              <div className="mb-1 flex items-center gap-2">
                <LevelBadge level={continueTopic.level} />
                <span className="truncate text-xs text-faint">{continueTopic.theme}</span>
              </div>
              <p className="truncate font-display text-base font-semibold text-fg sm:text-lg">
                {continueTopic.title}
              </p>
              <p className="truncate text-sm text-muted">{continueTopic.summary}</p>
            </div>
            <span className="hidden shrink-0 items-center gap-1.5 rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition group-hover:bg-brand-700 sm:inline-flex">
              Start <ArrowRight size={16} />
            </span>
            <ArrowRight size={20} className="shrink-0 text-faint group-hover:text-brand-600 sm:hidden" />
          </Link>
        </section>
      )}

      {/* SƏVİYYƏ ÜZRƏ PROQRES */}
      <section className="grid gap-3 sm:grid-cols-3">
        {LEVELS.map((lv) => {
          const lvTopics = topics.filter((t) => t.level === lv);
          const done = lvTopics.filter((t) => state.topics[t.id]?.completed).length;
          const pct = lvTopics.length ? (done / lvTopics.length) * 100 : 0;
          const m = LEVEL_META[lv];
          return (
            <button
              key={lv}
              type="button"
              onClick={() => setLevel((cur) => (cur === lv ? "all" : lv))}
              className={`flex items-center gap-4 rounded-2xl border bg-surface p-4 text-left shadow-card transition hover:shadow-card-hover ${
                level === lv ? "border-brand-400 ring-1 ring-brand-400" : "border-line"
              }`}
            >
              <ProgressRing value={pct} className={m.accent}>
                <span className="text-xs font-bold text-fg tnum">{Math.round(pct)}%</span>
              </ProgressRing>
              <div>
                <div className="flex items-center gap-2">
                  <span className={`font-display font-bold ${m.accent}`}>{lv}</span>
                  <span className="text-xs text-faint">{m.label}</span>
                </div>
                <p className="text-sm text-muted tnum">
                  {done}/{lvTopics.length} tamamlandı
                </p>
              </div>
            </button>
          );
        })}
      </section>

      {/* CONNECTORS */}
      <section className="animate-fade-in-up">
        <Link
          to="/connectors"
          className="group flex items-center gap-4 overflow-hidden rounded-2xl border border-brand-200 bg-brand-50/60 p-4 shadow-card transition hover:shadow-card-hover dark:border-brand-500/30 dark:bg-brand-500/5 sm:p-5"
        >
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-600 text-white sm:h-14 sm:w-14">
            <Spline size={26} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="font-display text-base font-semibold text-fg sm:text-lg">
              Connectors <span className="font-normal text-faint">· Bağlayıcılar</span>
            </p>
            <p className="truncate text-sm text-muted">
              Linking words — fikirləri bağla, esse və danışığı təbii et
            </p>
            <p className="mt-0.5 text-xs text-faint tnum">
              {stats.connectorGroupsDone}/{stats.totalConnectorGroups} qrup tamamlandı
            </p>
          </div>
          <ArrowRight size={20} className="shrink-0 text-faint group-hover:text-brand-600" />
        </Link>
      </section>

      {/* GRAMMAR */}
      <section className="animate-fade-in-up">
        <Link
          to="/grammar"
          className="group flex items-center gap-4 overflow-hidden rounded-2xl border border-brand-200 bg-brand-50/60 p-4 shadow-card transition hover:shadow-card-hover dark:border-brand-500/30 dark:bg-brand-500/5 sm:p-5"
        >
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-600 text-white sm:h-14 sm:w-14">
            <GraduationCap size={26} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="font-display text-base font-semibold text-fg sm:text-lg">
              Grammar <span className="font-normal text-faint">· Qrammatika</span>
            </p>
            <p className="truncate text-sm text-muted">
              Zamanlar, modallar, şərtlər — qaydaları kateqoriyaya görə öyrən
            </p>
            <p className="mt-0.5 text-xs text-faint tnum">
              {stats.grammarGroupsDone}/{stats.totalGrammarGroups} kateqoriya tamamlandı
            </p>
          </div>
          <ArrowRight size={20} className="shrink-0 text-faint group-hover:text-brand-600" />
        </Link>
      </section>

      {/* TOPICLƏR + FİLTERLƏR */}
      <section>
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <h2 className="font-display text-xl font-bold text-fg">All topics</h2>
          <span className="text-sm text-faint tnum">{filtered.length} nəticə</span>
        </div>

        <div className="mb-5 space-y-2.5">
          <div className="relative">
            <Search
              size={16}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-faint"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Topic axtar — başlıq, mövzu və ya təsvir…"
              aria-label="Topic axtar"
              className="w-full rounded-full border border-line bg-surface py-2.5 pl-9 pr-4 text-sm text-fg shadow-sm outline-none transition placeholder:text-faint focus:border-brand-400 focus:ring-1 focus:ring-brand-400"
            />
          </div>
          <FilterPills
            label="Level"
            value={level}
            onChange={(v) => setLevel(v as Level | "all")}
            options={["all", ...LEVELS]}
          />
          <FilterPills label="Theme" value={theme} onChange={setTheme} options={["all", ...themes]} />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((t, i) => {
            const p = state.topics[t.id];
            const m = LEVEL_META[t.level];
            return (
              <Link
                key={t.id}
                to={`/topic/${t.id}`}
                style={{ animationDelay: `${i * 40}ms` }}
                className="group relative flex animate-fade-in-up flex-col overflow-hidden rounded-2xl border border-line bg-surface p-5 shadow-card transition hover:-translate-y-0.5 hover:shadow-card-hover"
              >
                <span className={`absolute inset-x-0 top-0 h-1 ${m.bar}`} aria-hidden />
                <div className="mb-3 flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-surface-2 text-brand-600 dark:text-brand-400">
                    <ThemeIcon theme={t.theme} size={22} />
                  </span>
                  {p?.completed ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                      <CheckCircle2 size={13} /> Done
                    </span>
                  ) : (
                    <LevelBadge level={t.level} />
                  )}
                </div>
                <h3 className="font-display text-lg font-semibold text-fg group-hover:text-brand-600 dark:group-hover:text-brand-400">
                  {t.title}
                </h3>
                <p className="mt-1 line-clamp-2 flex-1 text-sm text-muted">{t.summary}</p>
                <div className="mt-4 flex items-center justify-between border-t border-line pt-3 text-xs text-faint">
                  <span className="inline-flex items-center gap-1">
                    <BookMarked size={13} /> {t.vocabCount} words
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <ListChecks size={13} /> {t.quizCount} quiz
                  </span>
                </div>
              </Link>
            );
          })}
          {filtered.length === 0 && (
            <p className="col-span-full rounded-2xl border border-dashed border-line p-8 text-center text-faint">
              Bu filtrlərə uyğun topic yoxdur.
            </p>
          )}
        </div>

        {pageCount > 1 && (
          <div className="mt-6 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setPage((pg) => Math.max(1, pg - 1))}
              disabled={currentPage === 1}
              aria-label="Əvvəlki səhifə"
              className="inline-flex items-center gap-1 rounded-xl border border-line bg-surface px-3 py-2 text-sm font-medium text-muted shadow-sm transition hover:bg-surface-2 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft size={16} /> Əvvəlki
            </button>
            <span className="px-2 text-sm text-faint tnum">
              {currentPage} / {pageCount}
            </span>
            <button
              type="button"
              onClick={() => setPage((pg) => Math.min(pageCount, pg + 1))}
              disabled={currentPage === pageCount}
              aria-label="Növbəti səhifə"
              className="inline-flex items-center gap-1 rounded-xl border border-line bg-surface px-3 py-2 text-sm font-medium text-muted shadow-sm transition hover:bg-surface-2 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Növbəti <ChevronRight size={16} />
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

function ThemeIcon({ theme, size }: { theme: string; size: number }) {
  const Icon = themeIcon(theme);
  return <Icon size={size} strokeWidth={2} />;
}

function HeroStat({ icon, value, label }: { icon: React.ReactNode; value: string | number; label: string }) {
  return (
    <div className="rounded-xl bg-white/10 px-3 py-2.5 backdrop-blur-sm">
      <div className="flex items-center gap-1.5">
        {icon}
        <span className="font-display text-lg font-bold tnum sm:text-xl">{value}</span>
      </div>
      <p className="mt-0.5 text-xs text-brand-100">{label}</p>
    </div>
  );
}

