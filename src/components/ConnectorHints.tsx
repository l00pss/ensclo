import { Link } from "react-router-dom";
import { Spline } from "lucide-react";
import {
  connectorGroups,
  DEFAULT_WRITING_FUNCTIONS,
  FUNCTION_META,
} from "../content/connectors";
import type { ConnectorFunction } from "../content/types";

/**
 * Lesson-un "Now produce" addımında və Practice tab-ında göstərilən kömək:
 * yazı/danışıq üçün faydalı bağlayıcılar (funksiya → bir neçə nümunə ifadə).
 * Bağlayıcıların əsl dəyəri istehsaldadır (yazma/danışma).
 */
export default function ConnectorHints({
  functions = DEFAULT_WRITING_FUNCTIONS,
}: {
  functions?: ConnectorFunction[];
}) {
  const groups = functions
    .map((id) => connectorGroups.find((g) => g.id === id))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));

  if (groups.length === 0) return null;

  return (
    <div className="mt-6 rounded-2xl border border-brand-200 bg-brand-50/60 p-4 dark:border-brand-500/30 dark:bg-brand-500/5 sm:p-5">
      <div className="mb-3 flex items-center gap-2">
        <Spline size={18} className="text-brand-600 dark:text-brand-400" />
        <h4 className="font-display font-semibold text-fg">
          Connectors to use here
          <span className="ml-1.5 font-normal text-faint">· Faydalı bağlayıcılar</span>
        </h4>
      </div>
      <p className="mb-3 text-sm text-muted">
        Cavabını daha bağlı və təbii etmək üçün bu ifadələrdən istifadə et:
      </p>
      <ul className="space-y-2.5">
        {groups.map((g) => {
          const meta = FUNCTION_META[g.id];
          const Icon = meta.icon;
          const samples = g.connectors.slice(0, 3);
          return (
            <li key={g.id} className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
              <Link
                to={`/connectors/${g.id}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 hover:underline dark:text-brand-300"
              >
                <Icon size={14} /> {meta.label}
              </Link>
              <span className="text-faint">→</span>
              {samples.map((c) => (
                <span
                  key={c.phrase}
                  className="rounded-md bg-surface px-1.5 py-0.5 text-xs text-muted ring-1 ring-inset ring-line"
                >
                  {c.phrase}
                </span>
              ))}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
