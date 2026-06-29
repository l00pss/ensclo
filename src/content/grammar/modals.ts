import type { GrammarGroup } from "../types";

export const modals: GrammarGroup = {
  id: "modals",
  description:
    "Modal verbs (can, must, should, might, …) add meaning to the main verb: ability, obligation, possibility, advice. They are always followed by the base verb.",
  azDescription:
    "Modal feillər (can, must, should, might…) əsas feilə məna qatır: bacarıq, məcburiyyət, ehtimal, məsləhət. Ardınca həmişə əsas feil gəlir.",
  rules: [
    {
      title: "can / could / be able to (ability)",
      level: "B1",
      explanation:
        "'can' for present ability, 'could' for past ability or polite requests. Use 'be able to' where 'can' has no form (e.g. after another modal or in perfect tenses).",
      azNote:
        "'can' — indi bacarmaq, 'could' — keçmişdə bacarmaq və ya nəzakətli xahiş. Başqa forma lazım olanda 'be able to'.",
      form: "can / could + base verb  ·  be able to + base verb",
      examples: [
        { en: "She can speak three languages." },
        { en: "I couldn't sleep last night." },
        { en: "You will be able to download it tomorrow.", note: "'will can' is impossible" },
      ],
      pitfall: "İki modal yan-yana gəlmir: 'will can' YOX → 'will be able to'.",
    },
    {
      title: "must / have to (obligation)",
      level: "B1",
      explanation:
        "Both express obligation. 'must' often feels personal/internal; 'have to' feels external (a rule). For the past, only 'had to' works.",
      azNote:
        "İkisi də məcburiyyət. 'must' daxili/şəxsi, 'have to' xarici qayda. Keçmişdə yalnız 'had to'.",
      form: "must + base verb  ·  have/has to + base verb",
      examples: [
        { en: "I must finish this tonight.", note: "personal sense of duty" },
        { en: "You have to wear a helmet here.", note: "a rule" },
        { en: "We had to wait two hours.", note: "past = had to" },
      ],
      pitfall: "Keçmişdə 'must' yoxdur: 'I must go yesterday' YOX → 'I had to go'.",
    },
    {
      title: "mustn't vs don't have to",
      level: "B2",
      explanation:
        "These mean opposite things. 'mustn't' = it is forbidden. 'don't have to' = it is not necessary (but you may).",
      azNote:
        "'mustn't' = QADAĞANDIR. 'don't have to' = lazım deyil (istəsən edə bilərsən). Tez-tez qarışdırılır.",
      examples: [
        { en: "You mustn't smoke here.", note: "forbidden" },
        { en: "You don't have to come if you're busy.", note: "not necessary" },
      ],
      pitfall: "İkisini qarışdırma: 'mustn't' = qadağa, 'don't have to' = sərbəstlik.",
    },
    {
      title: "should / ought to (advice)",
      level: "B1",
      explanation:
        "Use them to give advice or say what is the right thing to do. 'should' is far more common; 'ought to' is a slightly more formal equivalent.",
      azNote:
        "Məsləhət/doğru olan üçün. 'should' daha çox işlənir, 'ought to' bir az rəsmi sinonimidir.",
      form: "should / ought to + base verb",
      examples: [
        { en: "You should see a doctor." },
        { en: "We ought to leave soon." },
        { en: "You shouldn't eat so much sugar." },
      ],
      pitfall: "'ought to' inkar/sualda nadirdir — sadəcə 'should' işlət.",
    },
    {
      title: "Modals of possibility: may / might / could",
      level: "B2",
      explanation:
        "Express that something is possible (but not certain) now or in the future. 'may' is slightly more formal; 'might' and 'could' are very common.",
      azNote:
        "Bir şeyin mümkün olduğunu (amma əmin olmadığını) bildirir. 'may' bir az rəsmi, 'might/could' geniş işlənir.",
      form: "may / might / could + base verb",
      examples: [
        { en: "It might rain later." },
        { en: "She may know the answer." },
        { en: "They could be at home now." },
      ],
      pitfall: "Burada 'could' bacarıq yox, EHTİMAL deməkdir — kontekstdən ayırd et.",
    },
    {
      title: "Modals of deduction: must / can't (be)",
      level: "B2",
      explanation:
        "For confident conclusions about the present. 'must be' = I'm sure it's true. 'can't be' = I'm sure it's not true.",
      azNote:
        "İndiki haqqında əmin nəticə. 'must be' = mütləq belədir. 'can't be' = mütləq belə deyil. (mustn't YOX!)",
      form: "must / can't + be / base verb",
      examples: [
        { en: "The lights are off — they must be asleep." },
        { en: "That can't be true, I saw her an hour ago." },
      ],
      pitfall: "Əmin inkar nəticədə 'mustn't' deyil → 'can't': 'They can't be home'.",
    },
    {
      title: "Perfect modals: must have / should have",
      level: "C1",
      explanation:
        "Talk about the past: 'must have + p.p.' = a confident guess about the past; 'should have + p.p.' = a past action that was the right thing but didn't happen (regret/criticism).",
      azNote:
        "Keçmiş haqqında: 'must have' = əmin təxmin; 'should have' = etməli idin, amma etmədin (peşmançılıq/tənqid).",
      form: "modal + have + past participle",
      examples: [
        { en: "He's not answering — he must have left already." },
        { en: "You should have told me earlier.", note: "but you didn't" },
        { en: "I needn't have worried — everything was fine." },
      ],
      pitfall: "'should of' deyə yazma — düzgünü 'should have' (danışıqda 'should've').",
    },
  ],
  practice: [
    {
      type: "multiple-choice",
      prompt: "Sorry, I ___ come to the party last night — I had to work.",
      options: ["can't", "couldn't", "mustn't", "shouldn't"],
      answer: 1,
      explanation: "Past ability/possibility → 'couldn't'.",
    },
    {
      type: "multiple-choice",
      prompt: "You ___ smoke in the hospital — it's against the law.",
      options: ["don't have to", "mustn't", "shouldn't have", "couldn't"],
      answer: 1,
      explanation: "Forbidden → 'mustn't'.",
    },
    {
      type: "multiple-choice",
      prompt: "It's optional. You ___ come if you don't want to.",
      options: ["mustn't", "can't", "don't have to", "shouldn't"],
      answer: 2,
      explanation: "Not necessary (but allowed) → 'don't have to'.",
    },
    {
      type: "gap-fill",
      prompt: "The lights are off and the car is gone — they ___ have left. (confident guess)",
      answer: "must",
      explanation: "Confident deduction about the past → 'must have left'.",
    },
    {
      type: "multiple-choice",
      prompt: "That ___ be John — he's in Paris this week.",
      options: ["must", "can't", "should", "might"],
      answer: 1,
      explanation: "Sure it's NOT true → 'can't be'.",
    },
    {
      type: "gap-fill",
      prompt: "I'm so tired. I ___ have gone to bed earlier. (regret)",
      answer: "should",
      explanation: "Past regret / the right thing not done → 'should have'.",
    },
  ],
};
