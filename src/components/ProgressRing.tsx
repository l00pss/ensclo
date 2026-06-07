interface Props {
  /** 0–100 */
  value: number;
  size?: number;
  stroke?: number;
  className?: string;
  trackClassName?: string;
  children?: React.ReactNode;
}

/** Dairəvi proqres göstəricisi (SVG). */
export default function ProgressRing({
  value,
  size = 56,
  stroke = 6,
  className = "text-brand-600",
  trackClassName = "text-line",
  children,
}: Props) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(100, value));
  const offset = c - (pct / 100) * c;

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth={stroke}
          className={trackClassName}
          stroke="currentColor"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          className={`${className} transition-[stroke-dashoffset] duration-700 ease-out`}
          stroke="currentColor"
        />
      </svg>
      {children && (
        <span className="absolute inset-0 flex items-center justify-center">{children}</span>
      )}
    </div>
  );
}
