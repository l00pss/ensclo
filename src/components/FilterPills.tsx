// Təkrar istifadə olunan "pill" filtri (segmented control).
// Həm HomePage (Level / Theme), həm də ConnectorGroupPage (Level) bunu işlədir —
// stil bir yerdə saxlanılır (DRY).
export default function FilterPills<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label?: string;
  value: T;
  options: readonly T[];
  onChange: (value: T) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {label && (
        <span className="mr-1 w-12 shrink-0 text-xs font-semibold uppercase tracking-wide text-faint">
          {label}
        </span>
      )}
      {options.map((option) => {
        const active = value === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            aria-pressed={active}
            className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition ${
              active
                ? "bg-brand-600 text-white shadow-sm"
                : "bg-surface text-muted ring-1 ring-inset ring-line hover:bg-surface-2"
            }`}
          >
            {option === "all" ? "All" : option}
          </button>
        );
      })}
    </div>
  );
}
