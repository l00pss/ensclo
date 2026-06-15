// Connector məzmununun cross-check validatoru — struktur və ardıcıllıq səhvləri.
// İşlət: npm run validate:connectors
import { connectorGroups, FUNCTION_META } from "../src/content/connectors";
import type { ConnectorFunction } from "../src/content/types";
import { checkQuiz, createReporter, NON_LATIN, report } from "./validate-shared";

const { warn, count } = createReporter();

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
    if (!c.azMeaning?.trim()) warn(g.id, `"${c.phrase}": missing azMeaning (AZ translation)`);
    if (!c.example?.trim()) warn(g.id, `"${c.phrase}": missing example`);

    // İfadə öz nümunəsində gerçəkdən işlənməlidir (text-first / gap-fill üçün).
    const core = coreOf(c.phrase);
    if (core && !c.example.toLowerCase().includes(core))
      warn(g.id, `"${c.phrase}": phrase not found in its example`);

    // qeyri-latın simvol yoxlaması (İngilis sahələrində)
    for (const blob of [c.phrase, c.meaning, c.example, c.position ?? "", ...(c.synonyms ?? [])]) {
      if (NON_LATIN.test(blob)) warn(g.id, `non-Latin char in English text: "${blob}"`);
    }
  }

  checkQuiz(warn, g.id, "practice", g.practice);
}

const total = connectorGroups.reduce((n, g) => n + g.connectors.length, 0);
report(count(), `across ${connectorGroups.length} groups / ${total} connectors.`);
process.exit(0);
