// Connector məzmununun cross-check validatoru — struktur və ardıcıllıq səhvləri.
// İşlət: npm run validate:connectors
import { connectorGroups, FUNCTION_META } from "../src/content/connectors";
import type { ConnectorFunction, QuizQuestion } from "../src/content/types";

let problems = 0;
const warn = (id: string, msg: string) => {
  problems++;
  console.log(`  ✗ [${id}] ${msg}`);
};

// İngilis sahələrində olmamalı simvollar (azNote/azDescription yoxlanmır).
const NON_LATIN = /[Ѐ-ӿͰ-ϿəĞğİıŞşÇçÜüÖöÂâ]/;

function checkQuiz(id: string, qs: QuizQuestion[]) {
  qs.forEach((q, i) => {
    const tag = `practice Q${i + 1}`;
    if (q.type === "multiple-choice") {
      if (!Array.isArray(q.options) || q.options.length < 2) warn(id, `${tag}: <2 options`);
      if (typeof q.answer !== "number" || q.answer < 0 || q.answer >= q.options.length)
        warn(id, `${tag}: answer index ${q.answer} out of range`);
      if (new Set(q.options).size !== q.options.length) warn(id, `${tag}: duplicate options`);
    } else if (q.type === "gap-fill") {
      if (!q.answer || !q.answer.trim()) warn(id, `${tag}: empty answer`);
    }
  });
}

// "not only ... but also" → "not only"; "first / firstly" → "first";
// "that is (to say)" → "that is" — nümunədə axtarmaq üçün baş hissəni çıxar.
function coreOf(phrase: string): string {
  return phrase
    .toLowerCase()
    .split(" ... ")[0]
    .split(" / ")[0]
    .replace(/\(.*?\)/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

// Bütün FUNCTION_META açarlarının qrupu var?
const groupIds = new Set(connectorGroups.map((g) => g.id));
for (const key of Object.keys(FUNCTION_META) as ConnectorFunction[]) {
  if (!groupIds.has(key)) warn("global", `FUNCTION_META "${key}" üçün qrup yoxdur`);
}
if (groupIds.size !== connectorGroups.length) warn("global", "duplicate group id(s)");

for (const g of connectorGroups) {
  if (!FUNCTION_META[g.id]) warn(g.id, "FUNCTION_META-da yoxdur");
  if (!g.description?.trim()) warn(g.id, "missing description");
  if (!g.azDescription?.trim()) warn(g.id, "missing azDescription");
  if (g.connectors.length < 3) warn(g.id, `only ${g.connectors.length} connectors`);
  if (g.practice.length < 3) warn(g.id, `only ${g.practice.length} practice items`);

  const phrases = new Set<string>();
  for (const c of g.connectors) {
    if (!c.phrase?.trim()) warn(g.id, "connector with empty phrase");
    if (phrases.has(c.phrase)) warn(g.id, `duplicate phrase "${c.phrase}"`);
    phrases.add(c.phrase);
    if (!c.meaning?.trim()) warn(g.id, `"${c.phrase}": missing meaning`);
    if (!c.example?.trim()) warn(g.id, `"${c.phrase}": missing example`);

    // İfadə öz nümunəsində gerçəkdən işlənməlidir (text-first / gap-fill üçün).
    const core = coreOf(c.phrase);
    if (core && !c.example.toLowerCase().includes(core))
      warn(g.id, `"${c.phrase}": phrase not found in its example`);

    // qeyri-latın simvol yoxlaması (İngilis sahələrində)
    for (const blob of [c.phrase, c.meaning, c.example, c.position ?? "", ...(c.synonyms ?? [])]) {
      if (NON_LATIN.test(blob))
        warn(g.id, `non-Latin char in English text: "${blob}"`);
    }
  }

  checkQuiz(g.id, g.practice);
}

const total = connectorGroups.reduce((n, g) => n + g.connectors.length, 0);
console.log(
  `\n${problems === 0 ? "✅ No structural problems found" : `⚠️  ${problems} problem(s) found`} across ${connectorGroups.length} groups / ${total} connectors.`,
);
process.exit(0);
