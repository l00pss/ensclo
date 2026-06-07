import type { Level } from "../content/types";
import { LEVEL_META } from "../lib/theme";

export default function LevelBadge({
  level,
  showLabel = false,
}: {
  level: Level;
  showLabel?: boolean;
}) {
  const m = LEVEL_META[level];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${m.badge}`}
    >
      {/* Rəngdən başqa mətn göstəricisi (WCAG 1.4.1) */}
      <span className="font-bold tnum">{level}</span>
      {showLabel && <span className="font-medium opacity-80">· {m.label}</span>}
    </span>
  );
}
