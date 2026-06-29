import type { GrammarGroup } from "../types";

export const tenses: GrammarGroup = {
  id: "tenses",
  description:
    "The core verb tenses: how to talk about the present, the past, and the link between them. Getting these right is the foundation of clear English.",
  azDescription:
    "Əsas zamanlar: indi, keçmiş və onların əlaqəsi. Düzgün zaman seçimi aydın ingiliscənin təməlidir.",
  rules: [
    {
      title: "Present Simple",
      level: "B1",
      explanation:
        "Use it for habits, routines, facts, and things that are generally true. Often used with adverbs of frequency (always, usually, often, never).",
      azNote:
        "Vərdişlər, faktlar və ümumi həqiqətlər üçün. 3-cü şəxs təkdə feilə -s əlavə olunur.",
      form: "subject + base verb (+ -s for he/she/it)",
      examples: [
        { en: "Water boils at 100 °C.", note: "general fact" },
        { en: "She works in a hospital." },
        { en: "I usually wake up at seven." },
      ],
      pitfall: "He/she/it -s unutma: 'She work' YOX → 'She works'.",
    },
    {
      title: "Present Continuous",
      level: "B1",
      explanation:
        "Use it for actions happening now or around now, and for temporary situations. Also for fixed future arrangements.",
      azNote:
        "İndi (və ya bu günlərdə) baş verən, müvəqqəti işlər üçün. Stative feillərlə (know, want, like) işlənmir.",
      form: "subject + am/is/are + verb-ing",
      examples: [
        { en: "I'm reading a great book at the moment." },
        { en: "They are staying with friends this week.", note: "temporary" },
        { en: "We're meeting Tom tomorrow.", note: "future arrangement" },
      ],
      pitfall: "Stative feillər continuous-da gəlmir: 'I am knowing' YOX → 'I know'.",
    },
    {
      title: "Past Simple",
      level: "B1",
      explanation:
        "Use it for finished actions at a specific time in the past. The time is known or stated (yesterday, in 2010, last week).",
      azNote:
        "Keçmişdə bitmiş, vaxtı bəlli iş üçün. Qaydalı feillərə -ed, qaydasızlar ayrıca öyrənilir.",
      form: "subject + past form (verb-ed / irregular)",
      examples: [
        { en: "I visited Rome last year." },
        { en: "She didn't call me yesterday.", note: "negative uses 'did not' + base verb" },
        { en: "Did you see the match?" },
      ],
      pitfall: "Sual/inkarda 'did' + əsas feil: 'Did you went?' YOX → 'Did you go?'.",
    },
    {
      title: "Present Perfect",
      level: "B2",
      explanation:
        "Connects the past with now: an action finished, but the time is not stated, or it still matters. Common with ever, never, already, yet, just, for, since.",
      azNote:
        "Keçmişlə indini bağlayır — vaxtı dəqiq deyil ya da nəticəsi indi vacibdir. Vaxt bildirilmir.",
      form: "subject + have/has + past participle",
      examples: [
        { en: "I have visited Rome.", note: "no time given — experience" },
        { en: "She has lived here for ten years.", note: "started in past, still true" },
        { en: "Have you finished yet?" },
      ],
      pitfall:
        "Dəqiq keçmiş vaxtla işlənmir: 'I have seen him yesterday' YOX → 'I saw him yesterday'.",
    },
    {
      title: "Present Perfect vs Past Simple",
      level: "B2",
      explanation:
        "Past Simple = finished time (yesterday, in 2019). Present Perfect = unspecified or continuing time connected to now.",
      azNote:
        "Vaxt bəllidirsə → Past Simple. Vaxt bəlli deyil ya da indiyə bağlıdırsa → Present Perfect.",
      examples: [
        { en: "I lost my keys. (Present Perfect: I still can't find them.)" },
        { en: "I lost my keys yesterday. (Past Simple: finished time.)" },
        { en: "Have you ever been to Japan? — Yes, I went there in 2018." },
      ],
      pitfall: "'When' sualı həmişə Past Simple istəyir: 'When have you arrived?' YOX → 'When did you arrive?'.",
    },
    {
      title: "Past Continuous",
      level: "B2",
      explanation:
        "Describes an action in progress at a past moment, often interrupted by a shorter Past Simple action.",
      azNote:
        "Keçmişdə müəyyən anda davam edən iş. Çox vaxt onu kəsən qısa iş Past Simple ilə gəlir.",
      form: "subject + was/were + verb-ing",
      examples: [
        { en: "I was cooking when the phone rang.", note: "longer action + interruption" },
        { en: "At 8 p.m. they were watching TV." },
      ],
      pitfall: "Uzun + qısa iş: kəsilən iş continuous, kəsən iş simple olur.",
    },
    {
      title: "Past Perfect",
      level: "B2",
      explanation:
        "Shows that one past action happened before another past action. The 'earlier past'.",
      azNote:
        "İki keçmiş işdən ƏVVƏL baş vermişi göstərir — 'keçmişdən də əvvəl'.",
      form: "subject + had + past participle",
      examples: [
        { en: "The train had already left when we arrived." },
        { en: "She had never seen snow before that trip." },
      ],
      pitfall: "Yalnız ardıcıllıq qarışanda lazımdır; sadə xronologiyada Past Simple bəs edir.",
    },
    {
      title: "Future: will vs going to",
      level: "B1",
      explanation:
        "'will' for instant decisions, promises and predictions; 'going to' for plans/intentions already made and predictions based on present evidence.",
      azNote:
        "'will' — qərarı elə indi verirsən, söz verirsən. 'going to' — əvvəlcədən planlaşdırılıb ya da gözünün qabağında dəlil var.",
      form: "will + base verb  /  am/is/are going to + base verb",
      examples: [
        { en: "It's cold — I'll close the window.", note: "instant decision" },
        { en: "We're going to paint the house next month.", note: "plan" },
        { en: "Look at those clouds — it's going to rain.", note: "evidence" },
      ],
      pitfall: "Planlaşdırılmış işdə 'will' qəribə səslənir: artıq qərar verilibsə 'going to' işlət.",
    },
    {
      title: "Present Perfect Continuous",
      level: "B2",
      explanation:
        "Emphasises the duration of an activity that started in the past and is still going on (or has just stopped), often with for/since. Focus is on the action, not the result.",
      azNote:
        "Keçmişdə başlayıb indiyə qədər davam edən (ya da indicə bitmiş) işin MÜDDƏTİnə vurğu. for/since ilə işlənir.",
      form: "subject + have/has + been + verb-ing",
      examples: [
        { en: "I have been waiting for two hours.", note: "duration emphasised" },
        { en: "It has been raining all day." },
        { en: "She's tired because she has been studying.", note: "recent activity, visible result" },
      ],
      pitfall: "Stative feillərlə işlənmir: 'I have been knowing' YOX → 'I have known'.",
    },
    {
      title: "Past Perfect Continuous",
      level: "C1",
      explanation:
        "Shows an activity that was in progress over a period before another past moment — the 'earlier past', with emphasis on duration.",
      azNote:
        "Keçmişdə müəyyən andan ƏVVƏL bir müddət davam edən iş — müddətə vurğu ilə 'keçmişdən də əvvəl'.",
      form: "subject + had + been + verb-ing",
      examples: [
        { en: "She was exhausted because she had been working all night." },
        { en: "They had been driving for hours when the car broke down." },
      ],
      pitfall: "Yalnız müddət/davam vacib olanda; sadə ardıcıllıqda Past Perfect bəs edir.",
    },
    {
      title: "Future Continuous",
      level: "B2",
      explanation:
        "Describes an action that will be in progress at a specific time in the future. Also used for polite enquiries about plans.",
      azNote:
        "Gələcəkdə müəyyən anda davam edəcək iş. Həmçinin planlar barədə nəzakətli sual üçün.",
      form: "subject + will be + verb-ing",
      examples: [
        { en: "This time tomorrow I will be flying to Rome." },
        { en: "Don't call at 8 — we will be having dinner." },
      ],
      pitfall: "Gələcəkdə davam edən an üçün sadə 'will' yox, 'will be + -ing' işlət.",
    },
    {
      title: "Future Perfect",
      level: "B2",
      explanation:
        "Shows an action that will be completed before a specific time in the future. Often with 'by' (by then, by 2030, by the time…).",
      azNote:
        "Gələcəkdə müəyyən vaxta QƏDƏR tamamlanacaq iş. Çox vaxt 'by' ilə (by 2030, by then).",
      form: "subject + will have + past participle",
      examples: [
        { en: "By next year, I will have finished my degree." },
        { en: "They will have left by the time we arrive." },
      ],
      pitfall: "'by' (qədər) ≠ 'until' (-ə kimi davam). Tamamlanma üçün 'by'.",
    },
  ],
  practice: [
    {
      type: "gap-fill",
      prompt: "Water ___ at 100 degrees. (boil)",
      answer: "boils",
      explanation: "General fact → Present Simple, he/she/it adds -s.",
    },
    {
      type: "multiple-choice",
      prompt: "I ___ Rome in 2018.",
      options: ["have visited", "visited", "visit", "am visiting"],
      answer: 1,
      explanation: "A finished, specific past time (2018) → Past Simple.",
    },
    {
      type: "multiple-choice",
      prompt: "She ___ here for ten years (and still lives here).",
      options: ["lives", "lived", "has lived", "is living"],
      answer: 2,
      explanation: "Started in the past and continues now → Present Perfect with 'for'.",
    },
    {
      type: "gap-fill",
      prompt: "I was cooking when the phone ___. (ring)",
      answer: "rang",
      explanation: "The short interrupting action takes Past Simple.",
    },
    {
      type: "multiple-choice",
      prompt: "The train ___ already left when we got to the station.",
      options: ["has", "had", "have", "was"],
      answer: 1,
      explanation: "An action before another past action → Past Perfect ('had left').",
    },
    {
      type: "multiple-choice",
      prompt: "Look at those clouds! It ___ rain.",
      options: ["will", "is going to", "rains", "would"],
      answer: 1,
      explanation: "Prediction based on present evidence → 'going to'.",
    },
    {
      type: "gap-fill",
      prompt: "My eyes hurt — I ___ been staring at the screen all day. (present perfect continuous: have)",
      answer: "have",
      explanation: "Duration up to now with a visible result → 'have been staring'.",
    },
    {
      type: "multiple-choice",
      prompt: "By next June, she ___ here for ten years.",
      options: ["will work", "will be working", "will have worked", "works"],
      answer: 2,
      explanation: "Completed by a future point ('by next June') → Future Perfect 'will have worked'.",
    },
  ],
};
