// Məzmun cross-check validatoru — struktur və ardıcıllıq səhvlərini tapır.
// İşlət: npx esbuild ... | node  (aşağıdakı bash əmrinə bax)
import { topics } from "../src/content/index";
import { checkQuiz, createReporter, NON_LATIN, report } from "./validate-shared";

const { warn, count } = createReporter();

function textHas(text: string, word: string): boolean {
  // baş sözü normalize et: "to grind" -> "grind"
  const base = word.replace(/^to\s+/i, "").trim().toLowerCase();
  const t = text.toLowerCase();
  if (t.includes(base)) return true;
  // "be in charge of" → "in charge of" (be feili əyilir: is/was in charge of)
  if (base.startsWith("be ") && t.includes(base.slice(3))) return true;
  // söz ailəsini tut (apply→applied, study→studies) — kobud stemming.
  const head = base.split(/\s+/)[0];
  const stems = new Set<string>();
  const add = (w: string) => {
    if (w.length >= 4) stems.add(w);
  };
  add(head);
  if (head.endsWith("y")) add(head.slice(0, -1)); // apply→appl, study→stud
  if (head.endsWith("e")) add(head.slice(0, -1)); // imagine→imagin
  return [...stems].some((s) => t.includes(s));
}

for (const tp of topics) {
  // tələb olunan sahələr
  if (!tp.id || !tp.title || !tp.level || !tp.theme) warn(tp.id || "?", "missing core field");
  if (tp.vocabulary.length < 4) warn(tp.id, `only ${tp.vocabulary.length} vocab items`);
  if (tp.quiz.length < 4) warn(tp.id, `only ${tp.quiz.length} quiz items`);
  if (tp.reading.questions.length < 2) warn(tp.id, "fewer than 2 comprehension Qs");

  // sözlərin mətndə olması (text-first prinsipi)
  for (const v of tp.vocabulary) {
    if (!textHas(tp.reading.text, v.word))
      warn(tp.id, `vocab "${v.word}" NOT found in reading text`);
  }

  // qrammatika məsələləri
  checkQuiz(warn, tp.id, "quiz", tp.quiz);
  checkQuiz(warn, tp.id, "reading", tp.reading.questions);

  // qeyri-latın simvol yoxlaması (İngilis sahələrində)
  const englishBlobs = [
    tp.title,
    tp.summary,
    tp.reading.title,
    tp.reading.text,
    tp.grammar.point,
    tp.grammar.explanation,
    ...tp.grammar.examples.map((e) => e.en + " " + (e.note ?? "")),
    ...tp.vocabulary.map((v) => v.word + " " + v.definition + " " + v.example),
    ...tp.speaking,
    tp.writing.task,
  ];
  englishBlobs.forEach((b) => {
    if (NON_LATIN.test(b)) warn(tp.id, `non-Latin char in English text: "...${b.match(/.{0,20}[Ѐ-ӿͰ-Ͽ].{0,20}/)?.[0]}..."`);
  });

  // unikal id
}

const ids = topics.map((t) => t.id);
if (new Set(ids).size !== ids.length) warn("global", "duplicate topic id(s)");

report(count(), `across ${topics.length} topics.`);
process.exit(0);
