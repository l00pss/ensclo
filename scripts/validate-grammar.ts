// Grammar məzmununun cross-check validatoru — struktur və ardıcıllıq səhvləri.
// İşlət: npm run validate:grammar
import { grammarGroups, GRAMMAR_META } from "../src/content/grammar";
import type { GrammarCategory } from "../src/content/types";
import { checkQuiz, createReporter, NON_LATIN, report } from "./validate-shared";

const { warn, count } = createReporter();

// Bütün GRAMMAR_META açarlarının qrupu var?
const groupIds = new Set(grammarGroups.map((g) => g.id));
for (const key of Object.keys(GRAMMAR_META) as GrammarCategory[]) {
  if (!groupIds.has(key)) warn("global", `GRAMMAR_META "${key}" üçün qrup yoxdur`);
}
if (groupIds.size !== grammarGroups.length) warn("global", "duplicate group id(s)");

for (const g of grammarGroups) {
  if (!GRAMMAR_META[g.id]) warn(g.id, "GRAMMAR_META-da yoxdur");
  if (!g.description?.trim()) warn(g.id, "missing description");
  if (!g.azDescription?.trim()) warn(g.id, "missing azDescription");
  if (g.rules.length < 3) warn(g.id, `only ${g.rules.length} rules`);
  if (g.practice.length < 3) warn(g.id, `only ${g.practice.length} practice items`);

  const titles = new Set<string>();
  for (const r of g.rules) {
    if (!r.title?.trim()) warn(g.id, "rule with empty title");
    if (titles.has(r.title)) warn(g.id, `duplicate rule title "${r.title}"`);
    titles.add(r.title);
    if (!r.explanation?.trim()) warn(g.id, `"${r.title}": missing explanation`);
    if (!r.azNote?.trim()) warn(g.id, `"${r.title}": missing azNote (AZ izah)`);
    if (!r.examples?.length) warn(g.id, `"${r.title}": no examples`);

    for (const ex of r.examples) {
      if (!ex.en?.trim()) warn(g.id, `"${r.title}": example with empty 'en'`);
    }

    // qeyri-latın simvol yoxlaması (yalnız İngilis sahələrində: azNote/pitfall AZ-dir).
    const englishBlobs = [r.title, r.explanation, r.form ?? "", ...r.examples.flatMap((e) => [e.en, e.note ?? ""])];
    for (const blob of englishBlobs) {
      if (NON_LATIN.test(blob)) warn(g.id, `non-Latin char in English text: "${blob}"`);
    }
  }

  checkQuiz(warn, g.id, "practice", g.practice);
}

const total = grammarGroups.reduce((n, g) => n + g.rules.length, 0);
report(count(), `across ${grammarGroups.length} groups / ${total} rules.`);
process.exit(0);
