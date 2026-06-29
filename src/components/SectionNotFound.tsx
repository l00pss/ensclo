import { Link } from "react-router-dom";

/** Naməlum bölmə/qrup üçün ortaq "tapılmadı" vəziyyəti. */
export default function SectionNotFound({ message }: { message?: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-line p-10 text-center">
      <p className="text-muted">{message ?? "Bu səhifə tapılmadı."}</p>
      <Link to="/" className="mt-2 inline-block font-medium text-brand-600 hover:underline">
        ← Ana səhifə
      </Link>
    </div>
  );
}
