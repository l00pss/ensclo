import type { GrammarGroup } from "../types";

export const gerundInfinitive: GrammarGroup = {
  id: "gerund-infinitive",
  description:
    "When one verb follows another, the second is either an -ing form (gerund) or 'to + verb' (infinitive). The first verb decides which — and sometimes the meaning changes.",
  azDescription:
    "İngiliscədə bir feildən sonra ikinci bir feil işlənəndə, ikinci feil ya -ing formasında (buna gerund deyilir, yəni feildən düzələn isimvari forma), ya da 'to + feil' formasında (buna məsdər/infinitive deyilir) gəlir. Hansı formanın gələcəyini həmişə birinci feil müəyyən edir, ona görə də feilləri qruplaşdıraraq öyrənmək lazımdır. Bəzi hallarda eyni feil hər iki forma ilə işlənə bilər, lakin onda cümlənin mənası dəyişir.",
  rules: [
    {
      title: "Verb + -ing (gerund)",
      level: "B1",
      explanation:
        "Some verbs are always followed by the -ing form: enjoy, avoid, finish, mind, suggest, keep, practise, miss.",
      azNote:
        "Bir sıra feillərdən sonra ikinci feil həmişə -ing formasında (gerund) gəlir: enjoy, avoid, finish, mind, suggest, keep, practise, miss. Məsələn: 'I enjoy cooking' (yox 'enjoy to cook'). Bu feilləri ayrıca siyahı kimi yadda saxlamaq lazımdır, çünki onlardan sonra heç vaxt 'to + feil' işlənmir.",
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
        "Bir sıra feillərdən sonra isə ikinci feil həmişə 'to + feil' (məsdər) formasında gəlir: want, decide, hope, need, promise, offer, agree, learn, plan. Məsələn: 'I want to go home' (yox 'want going'). Bu qrup adətən bir istək, qərar, plan və ya niyyət bildirən feillərdir.",
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
        "İstənilən ön sözdən (preposition) sonra feil mütləq -ing formasında işlənir: in, on, at, of, about, for, after, before, without və s. Məsələn: 'good at drawing', 'without saying goodbye'. Yadda saxla: ön sözdən sonra heç vaxt 'to + feil' gəlmir, yalnız -ing formasından istifadə olunur.",
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
        "want, ask, tell, allow, expect, advise kimi feillərdən sonra əvvəlcə obyekt (kimə, kimi aid olduğunu göstərən söz), sonra isə 'to + feil' gəlir. Yəni quruluş belədir: feil + obyekt + 'to + feil'. Məsələn: 'I want you to call me' (yəni 'sənin mənə zəng etməyini istəyirəm'). Azərbaycan dilindəki 'istəyirəm ki, sən...' quruluşunu hərfi tərcümə etmə.",
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
        "Bəzi feillər hər iki forma ilə işlənə bilər, lakin seçdiyin forma cümlənin mənasını tamamilə dəyişir. Məsələn: 'stop smoking' = siqareti tamamilə tərgitmək, amma 'stop to smoke' = siqaret çəkmək üçün bir anlıq dayanmaq. Eyni şəkildə 'remember to do' = bir işi unutmamaq (gələcək vəzifə), 'remember doing' = keçmişdə baş vermiş bir şeyi xatırlamaq. Ona görə də burada formanı kontekstə görə diqqətlə seç.",
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
