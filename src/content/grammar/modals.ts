import type { GrammarGroup } from "../types";

export const modals: GrammarGroup = {
  id: "modals",
  description:
    "Modal verbs (can, must, should, might, …) add meaning to the main verb: ability, obligation, possibility, advice. They are always followed by the base verb.",
  azDescription:
    "Modal feillər (can, must, should, might və s.) cümlədəki əsas feilə əlavə məna qatan köməkçi feillərdir. Onlar bir işin bacarıq, məcburiyyət, ehtimal ya da məsləhət olduğunu bildirir. Çox vacib qayda: modal feildən sonra əsas feil həmişə öz sadə (baza) formasında gəlir, yəni ona 'to' və ya '-s' əlavə olunmur (məsələn: She can swim).",
  rules: [
    {
      title: "can / could / be able to (ability)",
      level: "B1",
      explanation:
        "'can' for present ability, 'could' for past ability or polite requests. Use 'be able to' where 'can' has no form (e.g. after another modal or in perfect tenses).",
      azNote:
        "'can' indiki zamanda nəyisə bacarmaq deməkdir (I can swim). 'could' isə keçmişdə bacarmaq (When I was young I could run fast) ya da nəzakətli xahiş üçün işlənir (Could you help me?). 'be able to' isə 'can'-in forması olmayan yerlərdə işlənir, məsələn başqa modaldan sonra və ya gələcək zamanda (I will be able to come).",
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
        "Hər ikisi məcburiyyət bildirir, amma aralarında fərq var. 'must' daha çox danışanın öz daxili hissi və ya şəxsi qərarı olanda işlənir (I must study harder). 'have to' isə kənardan gələn qayda, qanun ya da məcburiyyət olanda işlənir (I have to wear a uniform). Keçmiş zamanda 'must' işlənmir, onun yerinə yalnız 'had to' deyilir.",
      form: "must + base verb  ·  have/has to + base verb",
      examples: [
        { en: "I must finish this tonight.", note: "personal sense of duty" },
        { en: "You have to wear a helmet here.", note: "a rule" },
        { en: "We had to wait two hours.", note: "past = had to" },
      ],
      pitfall: "Keçmişdə 'must' yoxdur: 'I must go yesterday' YOX → 'I had to go'.",
    },
    {
      title: "should / ought to (advice)",
      level: "B1",
      explanation:
        "Use them to give advice or say what is the right thing to do. 'should' is far more common; 'ought to' is a slightly more formal equivalent.",
      azNote:
        "Bu modallar məsləhət vermək və ya nəyin düzgün addım olduğunu bildirmək üçün işlənir (You should rest). Gündəlik danışıqda 'should' daha çox işlənir. 'ought to' isə demək olar ki, eyni mənanı verir, sadəcə bir az daha rəsmi səslənir.",
      form: "should / ought to + base verb",
      examples: [
        { en: "You should see a doctor." },
        { en: "We ought to leave soon." },
        { en: "You shouldn't eat so much sugar." },
      ],
      pitfall: "'ought to' inkar/sualda nadirdir — sadəcə 'should' işlət.",
    },
    {
      title: "mustn't vs don't have to",
      level: "B2",
      explanation:
        "These mean opposite things. 'mustn't' = it is forbidden. 'don't have to' = it is not necessary (but you may).",
      azNote:
        "Bu iki ifadə tam əks mənalar verir, ona görə də tez-tez səhv salınır. 'mustn't' qadağandır deməkdir, yəni o işi etmək olmaz (You mustn't smoke here). 'don't have to' isə lazım deyil deməkdir, yəni o işi etmək məcburi deyil, amma istəsən edə bilərsən (You don't have to come).",
      examples: [
        { en: "You mustn't smoke here.", note: "forbidden" },
        { en: "You don't have to come if you're busy.", note: "not necessary" },
      ],
      pitfall: "İkisini qarışdırma: 'mustn't' = qadağa, 'don't have to' = sərbəstlik.",
    },
    {
      title: "Modals of possibility: may / might / could",
      level: "B2",
      explanation:
        "Express that something is possible (but not certain) now or in the future. 'may' is slightly more formal; 'might' and 'could' are very common.",
      azNote:
        "Bu modallar bir şeyin indi və ya gələcəkdə mümkün olduğunu, amma danışanın bundan əmin olmadığını bildirir (It might rain). Yəni 'bəlkə, ola bilər' mənasını verir. 'may' bir az daha rəsmidir, 'might' və 'could' isə danışıqda çox geniş işlənir.",
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
        "Bu modallar indiki vəziyyət haqqında məntiqlə çıxarılan əmin nəticə bildirir. 'must be' danışanın bir şeyə tam əmin olduğunu göstərir: mütləq belədir (They must be tired). 'can't be' isə əksini, yəni mütləq belə deyil mənasını verir (That can't be true). Diqqət: əmin inkar nəticədə 'mustn't' yox, məhz 'can't' işlənir.",
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
        "Bu quruluşlar keçmiş haqqında danışmaq üçündür. 'must have + feilin üçüncü forması' keçmişlə bağlı əmin təxmin bildirir: yəqin ki, belə olub (He must have left). 'should have + feilin üçüncü forması' isə keçmişdə edilməli olan, amma edilməmiş işi göstərir və peşmançılıq ya tənqid bildirir (You should have told me).",
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
