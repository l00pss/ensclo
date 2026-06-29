// Idioms & Functional Phrases cross-check validatoru.
// İşlət: npm run validate:reference
import { idiomGroups } from "../src/content/idioms";
import { functionalGroups } from "../src/content/functional";
import type { Idiom, FunctionalPhrase } from "../src/content/types";
import type { ReferenceGroup, ReferenceItem } from "../src/content/reference";
import { checkQuiz, createReporter, NON_LATIN, report } from "./validate-shared";

const { warn, count } = createReporter();

/** Azərbaycan hərfləri — AZ sahələrinin ASCII-yə "deqradasiyasını" tutmaq üçün. */
const AZ = /[əğıöşçüƏĞIİÖŞÇÜâÂ]/;

interface FieldSpec<T> {
  english: (item: T) => string[];
  azerbaijani: (item: T) => (string | undefined)[];
}

function validate<T extends ReferenceItem>(
  sectionKey: string,
  groups: ReferenceGroup<T>[],
  spec: FieldSpec<T>,
) {
  const groupIds = new Set<string>();
  for (const g of groups) {
    if (groupIds.has(g.id)) warn(sectionKey, `duplicate group id "${g.id}"`);
    groupIds.add(g.id);

    if (!g.label?.trim()) warn(g.id, "missing label");
    if (!g.azLabel?.trim()) warn(g.id, "missing azLabel");
    if (!g.description?.trim()) warn(g.id, "missing description");
    if (!g.azDescription?.trim()) warn(g.id, "missing azDescription");
    if (g.azDescription && !AZ.test(g.azDescription))
      warn(g.id, "azDescription has NO Azerbaijani letters (ASCII degradation?)");
    for (const blob of [g.label, g.azLabel, g.description])
      if (NON_LATIN.test(g.description) && blob === g.description)
        warn(g.id, `non-Latin char in English description: "${g.description}"`);
    if (g.items.length < 6) warn(g.id, `only ${g.items.length} items`);
    if (g.practice.length < 4) warn(g.id, `only ${g.practice.length} practice items`);

    for (const item of g.items) {
      for (const blob of spec.english(item))
        if (blob && NON_LATIN.test(blob)) warn(g.id, `non-Latin char in English field: "${blob}"`);
      for (const blob of spec.azerbaijani(item))
        if (blob && !AZ.test(blob)) warn(g.id, `AZ field has NO Azerbaijani letters: "${blob}"`);
    }

    checkQuiz(warn, g.id, "practice", g.practice);
  }
}

validate<Idiom>("idioms", idiomGroups, {
  english: (i) => [i.idiom, i.meaning, i.example],
  azerbaijani: (i) => [i.azMeaning, i.azNote],
});

validate<FunctionalPhrase>("functional", functionalGroups, {
  english: (p) => [p.phrase, p.use, p.example],
  azerbaijani: (p) => [p.azUse],
});

const idiomCount = idiomGroups.reduce((n, g) => n + g.items.length, 0);
const fnCount = functionalGroups.reduce((n, g) => n + g.items.length, 0);
report(
  count(),
  `across ${idiomGroups.length} idiom groups / ${idiomCount} idioms and ${functionalGroups.length} functional groups / ${fnCount} phrases.`,
);
process.exit(0);
