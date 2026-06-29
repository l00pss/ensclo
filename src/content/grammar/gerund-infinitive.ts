import type { GrammarGroup } from "../types";

export const gerundInfinitive: GrammarGroup = {
  id: "gerund-infinitive",
  description:
    "When one verb follows another, the second is either an -ing form (gerund) or 'to + verb' (infinitive). The first verb decides which — and sometimes the meaning changes.",
  azDescription:
    "Bir feildən sonra başqa feil gələndə ikincisi ya -ing (gerund), ya da 'to + feil' (məsdər) olur. Hansının gələcəyini birinci feil müəyyən edir — bəzən məna da dəyişir.",
  rules: [
    {
      title: "Verb + -ing (gerund)",
      level: "B1",
      explanation:
        "Some verbs are always followed by the -ing form: enjoy, avoid, finish, mind, suggest, keep, practise, miss.",
      azNote:
        "Bəzi feillərdən sonra həmişə -ing: enjoy, avoid, finish, mind, suggest, keep, practise, miss.",
      form: "verb + verb-ing",
      examples: [
        { en: "I enjoy cooking." },
        { en: "She avoided answering the question." },
        { en: "Do you mind waiting a moment?" },
      ],
      pitfall: "'enjoy to cook' YOX → 'enjoy cooking'.",
    },
    {
      title: "Verb + to-infinitive",
      level: "B1",
      explanation:
        "Some verbs are always followed by 'to + verb': want, decide, hope, need, promise, offer, agree, learn, plan.",
      azNote:
        "Bəzi feillərdən sonra həmişə 'to + feil': want, decide, hope, need, promise, offer, agree, learn, plan.",
      form: "verb + to + base verb",
      examples: [
        { en: "I want to go home." },
        { en: "She decided to study medicine." },
        { en: "We hope to see you soon." },
      ],
      pitfall: "'want going' YOX → 'want to go'.",
    },
    {
      title: "-ing after prepositions",
      level: "B1",
      explanation:
        "After any preposition (in, on, at, of, about, for, after, before, without…) the verb takes the -ing form.",
      azNote:
        "İstənilən ön sözdən sonra feil -ing olur (in, on, of, about, after, without…).",
      form: "preposition + verb-ing",
      examples: [
        { en: "She's good at drawing." },
        { en: "He left without saying goodbye." },
        { en: "Thank you for helping me." },
      ],
      pitfall: "'good at to draw' YOX → 'good at drawing'.",
    },
    {
      title: "Verb + object + to-infinitive",
      level: "B2",
      explanation:
        "Verbs like want, ask, tell, allow, expect, advise are followed by an object + to-infinitive.",
      azNote:
        "want, ask, tell, allow, expect, advise → obyekt + 'to + feil'.",
      form: "verb + object + to + base verb",
      examples: [
        { en: "I want you to call me." },
        { en: "She asked him to wait." },
        { en: "They allowed us to stay." },
      ],
      pitfall: "'I want that you call' YOX → 'I want you to call'.",
    },
    {
      title: "Meaning change: remember / forget / stop / try",
      level: "C1",
      explanation:
        "Some verbs take both forms, but the meaning changes. 'stop doing' = quit; 'stop to do' = pause in order to do. 'remember doing' = a memory; 'remember to do' = not forget a task.",
      azNote:
        "Bəzi feillər hər ikisini qəbul edir, amma məna dəyişir: 'stop smoking' (tərgit) ≠ 'stop to smoke' (siqaret üçün dayan).",
      examples: [
        { en: "He stopped smoking.", note: "he quit" },
        { en: "He stopped to smoke.", note: "he paused in order to smoke" },
        { en: "Remember to lock the door.", note: "don't forget the task" },
        { en: "I remember locking the door.", note: "I have the memory" },
      ],
      pitfall: "Forma seçimi mənanı dəyişir — kontekstə diqqət et.",
    },
  ],
  practice: [
    {
      type: "gap-fill",
      prompt: "I enjoy ___ to music. (listen)",
      answer: "listening",
      explanation: "'enjoy' is always followed by the -ing form.",
    },
    {
      type: "multiple-choice",
      prompt: "She decided ___ abroad.",
      options: ["studying", "to study", "study", "studied"],
      answer: 1,
      explanation: "'decide' takes the to-infinitive.",
    },
    {
      type: "gap-fill",
      prompt: "He left without ___ goodbye. (say)",
      answer: "saying",
      explanation: "After a preposition ('without') use the -ing form.",
    },
    {
      type: "multiple-choice",
      prompt: "I want ___ me as soon as you arrive.",
      options: ["you to call", "you call", "that you call", "you calling"],
      answer: 0,
      explanation: "want + object + to-infinitive → 'want you to call'.",
    },
    {
      type: "multiple-choice",
      prompt: "On the way home he stopped ___ some petrol.",
      options: ["buying", "to buy", "buy", "bought"],
      answer: 1,
      explanation: "'stop to do' = pause in order to do something.",
    },
    {
      type: "multiple-choice",
      prompt: "Please remember ___ the lights before you leave.",
      options: ["turning off", "to turn off", "turn off", "turned off"],
      answer: 1,
      explanation: "'remember to do' = don't forget a future task.",
    },
  ],
};
