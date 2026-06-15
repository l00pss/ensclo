// İki validator (`validate-content`, `validate-connectors`) üçün ortaq köməkçilər.
// DRY: `warn`/say, qeyri-latın yoxlaması və quiz yoxlaması bir yerdə saxlanılır.
import type { QuizQuestion } from "../src/content/types";

export interface Reporter {
  warn: (id: string, msg: string) => void;
  /** İndiyə qədər tapılan problemlərin sayı. */
  count: () => number;
}

export function createReporter(): Reporter {
  let problems = 0;
  return {
    warn: (id, msg) => {
      problems++;
      console.log(`  ✗ [${id}] ${msg}`);
    },
    count: () => problems,
  };
}

// İngilis sahələrində olmamalı simvollar — Kiril + Yunan + Azərbaycan/türk hərfləri.
export const NON_LATIN = /[Ѐ-ӿͰ-ϿəĞğİıŞşÇçÜüÖöÂâ]/;

/** Bir quiz sual massivini yoxla (multiple-choice / gap-fill struktur səhvləri). */
export function checkQuiz(
  warn: Reporter["warn"],
  id: string,
  label: string,
  qs: QuizQuestion[],
): void {
  qs.forEach((q, i) => {
    const tag = `${label} Q${i + 1}`;
    if (q.type === "multiple-choice") {
      if (!Array.isArray(q.options) || q.options.length < 2) warn(id, `${tag}: <2 options`);
      if (typeof q.answer !== "number" || q.answer < 0 || q.answer >= q.options.length)
        warn(id, `${tag}: answer index ${q.answer} out of range (0..${q.options.length - 1})`);
      if (new Set(q.options).size !== q.options.length) warn(id, `${tag}: duplicate options`);
    } else if (q.type === "gap-fill") {
      if (!q.answer || !q.answer.trim()) warn(id, `${tag}: empty answer`);
    }
  });
}

/** Yekun nəticəni standart formatda çap et. */
export function report(problems: number, summary: string): void {
  console.log(
    `\n${problems === 0 ? "✅ No structural problems found" : `⚠️  ${problems} problem(s) found`} ${summary}`,
  );
}
