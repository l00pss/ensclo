import type { GrammarGroup } from "../types";

export const tenses: GrammarGroup = {
  id: "tenses",
  description:
    "The core verb tenses: how to talk about the present, the past, and the link between them. Getting these right is the foundation of clear English.",
  azDescription:
    "Bu bölmə ingilis dilinin əsas feil zamanlarını əhatə edir: indiki, keçmiş və gələcək hadisələrdən, həmçinin keçmişlə indini bir-birinə bağlayan zamanlardan necə danışmağı. Hər bir zaman işin nə vaxt baş verdiyini və hələ də davam edib-etmədiyini göstərir. Zamanları düzgün seçmək aydın və səlis ingiliscə danışmağın təməlidir.",
  rules: [
    {
      title: "Present Simple",
      level: "B1",
      explanation:
        "Use it for habits, routines, facts, and things that are generally true. Often used with adverbs of frequency (always, usually, often, never).",
      azNote:
        "Present Simple (Sadə İndiki Zaman) təkrarlanan vərdişlər, gündəlik işlər, faktlar və həmişə doğru olan ümumi həqiqətlər üçün istifadə olunur. Çox vaxt always (həmişə), usually (adətən), often (tez-tez), never (heç vaxt) kimi tezlik zərfləri ilə gəlir. Diqqət: üçüncü şəxs təkdə (he, she, it) feilə -s şəkilçisi əlavə olunur, məsələn: he works.",
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
        "Present Continuous (Davamlı İndiki Zaman) elə indi, danışdığımız anda və ya bu günlərdə baş verən, müvəqqəti xarakter daşıyan işləri bildirir. Onu həmçinin əvvəlcədən razılaşdırılmış gələcək planlar üçün də işlədirik. Vacib qayda: bilik və hiss bildirən stative (vəziyyət) feilləri — məsələn know (bilmək), want (istəmək), like (xoşlamaq) — bu zamanda işlənmir.",
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
        "Past Simple (Sadə Keçmiş Zaman) keçmişdə müəyyən bir vaxtda baş verib bitmiş işləri bildirir. Bu zamanı işin vaxtı bilinəndə və ya birbaşa deyiləndə işlədirik, məsələn: yesterday (dünən), in 2010 (2010-cu ildə), last week (keçən həftə). Qaydalı feillərə -ed şəkilçisi əlavə olunur, qaydasız feillərin keçmiş forması isə ayrıca əzbərlənməlidir.",
      form: "subject + past form (verb-ed / irregular)",
      examples: [
        { en: "I visited Rome last year." },
        { en: "She didn't call me yesterday.", note: "negative uses 'did not' + base verb" },
        { en: "Did you see the match?" },
      ],
      pitfall: "Sual/inkarda 'did' + əsas feil: 'Did you went?' YOX → 'Did you go?'.",
    },
    {
      title: "Past Continuous",
      level: "B2",
      explanation:
        "Describes an action in progress at a past moment, often interrupted by a shorter Past Simple action.",
      azNote:
        "Past Continuous (Davamlı Keçmiş Zaman) keçmişdə müəyyən bir anda davam etməkdə olan, hələ bitməmiş işi təsvir edir. Çox vaxt bu uzun iş gedərkən onu yarıda kəsən başqa, daha qısa bir iş baş verir və o qısa iş Past Simple (Sadə Keçmiş Zaman) ilə ifadə olunur. Məsələn: yemək bişirirdim (davamlı), telefon zəng çaldı (qısa iş).",
      form: "subject + was/were + verb-ing",
      examples: [
        { en: "I was cooking when the phone rang.", note: "longer action + interruption" },
        { en: "At 8 p.m. they were watching TV." },
      ],
      pitfall: "Uzun + qısa iş: kəsilən iş continuous, kəsən iş simple olur.",
    },
    {
      title: "Present Perfect",
      level: "B2",
      explanation:
        "Connects the past with now: an action finished, but the time is not stated, or it still matters. Common with ever, never, already, yet, just, for, since.",
      azNote:
        "Present Perfect (İndiki Bitmiş Zaman) keçmişdə baş vermiş işi indiki anla bağlayır. Onu o zaman işlədirik ki, işin dəqiq vaxtı vacib deyil ya da bilinmir, yaxud işin nəticəsi indi hələ də hiss olunur. Bu zamanda konkret keçmiş vaxt deyilmir. Çox vaxt ever (heç vaxt, sual üçün), never (heç vaxt), already (artıq), yet (hələ), just (təzəcə), for (müddət üçün), since (-dən bəri) sözləri ilə gəlir.",
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
        "Bu iki zaman arasındakı əsas fərq vaxtdır. Əgər işin baş verdiyi konkret keçmiş vaxt bilinir və ya deyilir (yesterday, in 2019), Past Simple (Sadə Keçmiş Zaman) işlədilir. Əgər vaxt deyilmirsə, ya da iş indiyə qədər davam edir və indiki anla bağlıdırsa, Present Perfect (İndiki Bitmiş Zaman) işlədilir. Qısası: vaxt vacibdirsə Past Simple, nəticə və əlaqə vacibdirsə Present Perfect.",
      examples: [
        { en: "I lost my keys. (Present Perfect: I still can't find them.)" },
        { en: "I lost my keys yesterday. (Past Simple: finished time.)" },
        { en: "Have you ever been to Japan? — Yes, I went there in 2018." },
      ],
      pitfall: "'When' sualı həmişə Past Simple istəyir: 'When have you arrived?' YOX → 'When did you arrive?'.",
    },
    {
      title: "Present Perfect Continuous",
      level: "B2",
      explanation:
        "Emphasises the duration of an activity that started in the past and is still going on (or has just stopped), often with for/since. Focus is on the action, not the result.",
      azNote:
        "Present Perfect Continuous (İndiki Bitmiş Davamlı Zaman) keçmişdə başlayıb indiyə qədər davam edən, ya da elə indicə bitmiş bir işin nə qədər müddət davam etdiyini vurğulayır. Burada diqqət işin nəticəsinə yox, prosesinə və müddətinə yönəlir. Adətən for (müddət bildirir, məsələn iki saatdır) və since (başlanğıc nöqtəsini bildirir, məsələn səhərdən) sözləri ilə işlənir.",
      form: "subject + have/has + been + verb-ing",
      examples: [
        { en: "I have been waiting for two hours.", note: "duration emphasised" },
        { en: "It has been raining all day." },
        { en: "She's tired because she has been studying.", note: "recent activity, visible result" },
      ],
      pitfall: "Stative feillərlə işlənmir: 'I have been knowing' YOX → 'I have known'.",
    },
    {
      title: "Past Perfect",
      level: "B2",
      explanation:
        "Shows that one past action happened before another past action. The 'earlier past'.",
      azNote:
        "Past Perfect (Keçmiş Bitmiş Zaman) iki keçmiş hadisədən hansının daha əvvəl baş verdiyini göstərir. Yəni keçmişdə bir iş olmuşdusa, ondan da əvvəl tamamlanmış işi bu zamanla ifadə edirik — buna sadəcə 'keçmişdən də əvvəl' demək olar. Quruluşu had sözü və feilin üçüncü forması (past participle) ilə yaranır, məsələn: had left (qatar artıq getmişdi).",
      form: "subject + had + past participle",
      examples: [
        { en: "The train had already left when we arrived." },
        { en: "She had never seen snow before that trip." },
      ],
      pitfall: "Yalnız ardıcıllıq qarışanda lazımdır; sadə xronologiyada Past Simple bəs edir.",
    },
    {
      title: "Past Perfect Continuous",
      level: "C1",
      explanation:
        "Shows an activity that was in progress over a period before another past moment — the 'earlier past', with emphasis on duration.",
      azNote:
        "Past Perfect Continuous (Keçmiş Bitmiş Davamlı Zaman) keçmişdəki müəyyən bir andan əvvəl bir müddət ərzində davam etmiş işi bildirir. Yəni 'keçmişdən də əvvəl' baş verən, lakin müddəti və davamlılığı vurğulanan işi göstərir. Məsələn: maşın xarab olanda onlar artıq saatlarla yol gedirdilər — burada yol getmənin nə qədər çəkdiyi önə çıxır.",
      form: "subject + had + been + verb-ing",
      examples: [
        { en: "She was exhausted because she had been working all night." },
        { en: "They had been driving for hours when the car broke down." },
      ],
      pitfall: "Yalnız müddət/davam vacib olanda; sadə ardıcıllıqda Past Perfect bəs edir.",
    },
    {
      title: "Future: will vs going to",
      level: "B1",
      explanation:
        "'will' for instant decisions, promises and predictions; 'going to' for plans/intentions already made and predictions based on present evidence.",
      azNote:
        "Hər ikisi gələcəkdən danışır, amma fərqli hallarda. will-i o anda, danışarkən verdiyin ani qərarlar, vədlər və ümumi proqnozlar üçün işlədirik. going to-nu isə danışmazdan əvvəl artıq qurduğun planlar, niyyətlər üçün, həmçinin gözünün qabağındakı dəlilə əsaslanan proqnozlar üçün işlədirik. Sadə dillə: indi qərar verirsənsə will, əvvəlcədən planlamısansa going to.",
      form: "will + base verb  /  am/is/are going to + base verb",
      examples: [
        { en: "It's cold — I'll close the window.", note: "instant decision" },
        { en: "We're going to paint the house next month.", note: "plan" },
        { en: "Look at those clouds — it's going to rain.", note: "evidence" },
      ],
      pitfall: "Planlaşdırılmış işdə 'will' qəribə səslənir: artıq qərar verilibsə 'going to' işlət.",
    },
    {
      title: "Future Continuous",
      level: "B2",
      explanation:
        "Describes an action that will be in progress at a specific time in the future. Also used for polite enquiries about plans.",
      azNote:
        "Future Continuous (Davamlı Gələcək Zaman) gələcəkdə müəyyən bir anda davam etməkdə olacaq işi təsvir edir — yəni o vaxt iş artıq başlamış və hələ bitməmiş olacaq. Bu zamanı həmçinin başqasının planları barədə nəzakətlə soruşmaq üçün də işlədirik. Quruluşu will be və feilin -ing formasından ibarətdir, məsələn: will be flying (uçuş halında olacağam).",
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
        "Future Perfect (Gələcək Bitmiş Zaman) gələcəkdəki müəyyən bir vaxta qədər tamamlanmış olacaq işi bildirir. Yəni o an gəlib çatanda iş artıq bitmiş olacaq. Çox vaxt by sözü ilə işlənir, məsələn: by 2030 (2030-cu ilə qədər), by then (o vaxta qədər). Quruluşu will have və feilin üçüncü forması (past participle) ilə yaranır.",
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
