// Məzmun cross-check validatoru — struktur və ardıcıllıq səhvlərini tapır.
// İşlət: npx esbuild ... | node  (aşağıdakı bash əmrinə bax)
import { topics } from "../src/content/index";
import type { QuizQuestion } from "../src/content/types";

let problems = 0;
const warn = (id: string, msg: string) => {
  problems++;
  console.log(`  ✗ [${id}] ${msg}`);
};

// İngilis mətndə olmamalı simvollar (kiril və s.) — səhv yazı tutucu.
const NON_LATIN = /[Ѐ-ӿͰ-Ͽ]/; // Cyrillic + Greek

function checkQuiz(id: string, label: string, qs: QuizQuestion[]) {
  qs.forEach((q, i) => {
    const tag = `${label} Q${i + 1}`;
    if (q.type === "multiple-choice") {
      if (!Array.isArray(q.options) || q.options.length < 2)
        warn(id, `${tag}: <2 options`);
      if (typeof q.answer !== "number" || q.answer < 0 || q.answer >= q.options.length)
        warn(id, `${tag}: answer index ${q.answer} out of range (0..${q.options.length - 1})`);
      // duplicate options
      if (new Set(q.options).size !== q.options.length) warn(id, `${tag}: duplicate options`);
    } else if (q.type === "gap-fill") {
      if (!q.answer || !q.answer.trim()) warn(id, `${tag}: empty answer`);
    }
  });
}

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
  checkQuiz(tp.id, "quiz", tp.quiz);
  checkQuiz(tp.id, "reading", tp.reading.questions);

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

console.log(`\n${problems === 0 ? "✅ No structural problems found" : `⚠️  ${problems} problem(s) found`} across ${topics.length} topics.`);
process.exit(0);
