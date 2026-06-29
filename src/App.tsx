import { Link, NavLink, Outlet } from "react-router-dom";
import { BookOpenText, Flame, Moon, Repeat, Sun, Zap } from "lucide-react";
import { sections } from "./sections";
import { useStats } from "./store/progress";
import { useTheme } from "./store/theme";

// Bütün naviqasiya linkləri — Topics + reference bölmələri (registr-dən) + Review.
// Yeni bölmə əlavə etmək: yalnız registr-ə əlavə et, bura avtomatik düşür.
const NAV_LINK_CLASS = ({ isActive }: { isActive: boolean }) =>
  `inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition ${
    isActive
      ? "bg-brand-50 text-brand-700 dark:bg-brand-500/15 dark:text-brand-300"
      : "text-muted hover:bg-surface-2 hover:text-fg"
  }`;

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-6 sm:px-6 sm:py-8">
        <Outlet />
      </main>
      <footer className="border-t border-line bg-surface">
        <div className="mx-auto max-w-5xl px-4 py-6 text-center text-xs text-faint sm:px-6">
          Ensclo — şəxsi ingilis dili öyrənmə layihəsi · B1 · B2 · C1
        </div>
      </footer>
    </div>
  );
}

function Header() {
  const { streak, level, xp, xpIntoLevel } = useStats();
  const { mode, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5 rounded-lg">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-sm">
            <BookOpenText size={18} strokeWidth={2.2} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-tight text-fg">Ensclo</span>
            <span className="hidden text-[11px] font-medium text-faint sm:inline">
              Learn English
            </span>
          </span>
        </Link>

        <nav className="flex items-center gap-1">
          <NavLink to="/" end className={NAV_LINK_CLASS}>
            Topics
          </NavLink>
          {sections.map((s) => {
            const Icon = s.nav.icon;
            return (
              <NavLink key={s.key} to={`/${s.key}`} className={NAV_LINK_CLASS}>
                <Icon size={15} />
                <span className="hidden sm:inline">{s.nav.label}</span>
              </NavLink>
            );
          })}
          <NavLink to="/review" className={NAV_LINK_CLASS}>
            <Repeat size={15} />
            <span className="hidden sm:inline">Review</span>
          </NavLink>
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2.5">
          <Stat
            icon={<Flame size={15} className="text-orange-500" />}
            value={streak}
            label="streak"
            title={`${streak} günlük ardıcıllıq`}
          />
          <Stat
            icon={<Zap size={15} className="text-amber-500" />}
            value={xp}
            label="XP"
            title={`Ümumi ${xp} XP`}
          />
          <div
            className="hidden items-center gap-2 rounded-full bg-brand-50 py-1.5 pl-2.5 pr-3 dark:bg-brand-500/10 sm:flex"
            title={`Level ${level} — növbəti levelə ${100 - xpIntoLevel} XP`}
          >
            <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-600 text-[11px] font-bold text-white tnum">
              {level}
            </span>
            <div className="h-1.5 w-14 overflow-hidden rounded-full bg-brand-200 dark:bg-brand-500/30">
              <div
                className="h-full rounded-full bg-brand-600 transition-all duration-500"
                style={{ width: `${xpIntoLevel}%` }}
              />
            </div>
          </div>

          <button
            type="button"
            onClick={toggle}
            aria-label={mode === "dark" ? "Light moda keç" : "Dark moda keç"}
            title={mode === "dark" ? "Light mode" : "Dark mode"}
            className="grid h-9 w-9 place-items-center rounded-full text-muted transition hover:bg-surface-2 hover:text-fg"
          >
            {mode === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}

function Stat({
  icon,
  value,
  label,
  title,
}: {
  icon: React.ReactNode;
  value: number;
  label: string;
  title: string;
}) {
  return (
    <div
      className="flex items-center gap-1.5 rounded-full bg-surface-2 px-2.5 py-1.5 sm:px-3"
      title={title}
      aria-label={`${value} ${label}`}
    >
      {icon}
      <span className="text-sm font-bold text-fg tnum">{value}</span>
      <span className="hidden text-xs font-medium text-faint sm:inline">{label}</span>
    </div>
  );
}
