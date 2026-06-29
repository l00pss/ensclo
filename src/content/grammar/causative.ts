import type { GrammarGroup } from "../types";

export const causative: GrammarGroup = {
  id: "causative",
  description: "The causative shows that you arrange for someone else to do something for you, instead of doing it yourself.",
  azDescription: "Kauzativ (causative) quruluş işi sənin özünün deyil, başqasının gördüyünü bildirir. Yəni sən işi təşkil edir və ya sifariş verirsən, icranı isə başqa adam (məsələn usta, bərbər, fəhlə) həyata keçirir. İngiliscə bunu əsasən 'have' və ya 'get' feili ilə qururlar.",
  rules: [
    {
      title: "have something done (service by someone else)",
      level: "B2",
      explanation: "Use 'have' plus an object plus a past participle to show that another person does the work for you. You arrange the service; someone else performs it.",
      azNote: "Bu quruluş işi sənin özünün yox, başqasının (məsələn usta) gördüyünü bildirir. Forması: 'have' + obyekt + feilin üçüncü forması (past participle, məsələn serviced). Yəni sən yalnız xidməti sifariş edir və ya təşkil edirsən, işi isə başqası icra edir: 'I have my car serviced'.",
      form: "subject + have + object + past participle",
      examples: [
        { en: "I have my car serviced every spring.", note: "a mechanic does it, not me" },
        { en: "We are going to have the kitchen painted next week.", note: "painters will do the job" },
      ],
      pitfall: "Əsas feli sadə formada qoyma: 'have my car service' yox, 'serviced' (III forma) lazımdır.",
    },
    {
      title: "get something done (more informal)",
      level: "B2",
      explanation: "'get' plus an object plus a past participle has the same meaning as the 'have' structure but sounds more informal and is common in everyday speech.",
      azNote: "Bu quruluş 'have' variantı ilə eyni mənanı verir: işi başqası görür. Forması: 'get' + obyekt + feilin üçüncü forması (past participle, məsələn fixed). Fərq odur ki, 'get' daha qeyri-rəsmidir və gündəlik danışıqda çox işlənir: 'I get my phone fixed'.",
      form: "subject + get + object + past participle",
      examples: [
        { en: "I need to get my phone fixed before the trip.", note: "informal, same idea as 'have fixed'" },
        { en: "She got her hair colored at the new salon.", note: "everyday spoken English" },
      ],
      pitfall: "'get' burada 'almaq' demək deyil; işin görülməsini bildirir.",
    },
    {
      title: "Causative across tenses",
      level: "B2",
      explanation: "The causative works in any tense. Only the verb 'have' or 'get' changes form; the past participle stays the same.",
      azNote: "Kauzativ quruluşu istənilən zamanda işlətmək olar. Cümlənin zamanını yalnız 'have' və ya 'get' feili göstərir; əsas feilin üçüncü forması (past participle) isə həmişə dəyişmədən qalır. Məsələn: 'had cut' (keçmiş), 'am having repaired' (indiki davam edən), 'have had fixed' (bitmiş indiki).",
      form: "subject + (tense of have/get) + object + past participle",
      examples: [
        { en: "I had my hair cut yesterday.", note: "past simple" },
        { en: "I am having the car repaired right now.", note: "present continuous" },
        { en: "I have had the laptop fixed twice this year.", note: "present perfect" },
      ],
      pitfall: "Zamanı 'have' üzərində göstər, III formanı dəyişmə: 'had cut', 'am having repaired'.",
    },
    {
      title: "have someone do something (give a task)",
      level: "B2",
      explanation: "Use 'have' plus a person plus a base verb when you focus on the person who does the work. There is no 'to' before the verb.",
      azNote: "Bu quruluşda diqqət işi görən konkret adamın üzərindədir, yəni kimə tapşırıq verdiyini bildirirsən. Forması: 'have' + şəxs + feilin sadə (baza) forması. Vacibdir: feildən əvvəl 'to' işlənmir: 'I had the electrician check the wiring'.",
      form: "subject + have + person + base verb",
      examples: [
        { en: "I had the electrician check the wiring.", note: "base verb 'check', no 'to'" },
        { en: "The manager had her assistant book the tickets.", note: "the assistant did the booking" },
      ],
      pitfall: "Burada 'to' qoyma: 'have him to call' yox, 'have him call'.",
    },
    {
      title: "get someone to do something (persuade)",
      level: "B2",
      explanation: "Use 'get' plus a person plus 'to' plus a verb when you persuade or convince someone to do something. Note the 'to' before the verb.",
      azNote: "Bu quruluş birini razı salıb və ya inandırıb işi gördürdüyünü bildirir. Forması: 'get' + şəxs + 'to' + feil. Əvvəlki 'have someone do' quruluşundan fərqli olaraq, burada feildən əvvəl mütləq 'to' işlənir: 'I got my brother to help me'.",
      form: "subject + get + person + to + verb",
      examples: [
        { en: "I got my brother to help me move the sofa.", note: "I persuaded him" },
        { en: "She got the plumber to come on a Sunday.", note: "convinced him to do it" },
      ],
      pitfall: "'get' ilə 'to' unutma: 'get him fix it' yox, 'get him to fix it'.",
    },
    {
      title: "Causative for misfortune",
      level: "B2",
      explanation: "The 'have something done' pattern can also describe something bad that happened to you, often outside your control, such as theft or damage.",
      azNote: "Eyni 'have + obyekt + feilin üçüncü forması' quruluşu sənin başına gələn xoşagəlməz bir hadisəni də bildirə bilər (məsələn oğurluq və ya zərər). Bu halda sən işi sifariş etmirsən, hadisə sənin iradəndən asılı olmadan, çox vaxt nəzarətindən kənarda baş verir: 'I had my bag stolen' (çantamı oğurladılar).",
      form: "subject + have + object + past participle",
      examples: [
        { en: "I had my bag stolen on the train.", note: "something bad happened to me" },
        { en: "He had his phone screen broken during the game.", note: "not arranged, just happened" },
      ],
      pitfall: "Bu halda sən işi sifariş etmirsən; kontekst pis hadisəni göstərir.",
    },
  ],
  practice: [
    {
      type: "gap-fill",
      prompt: "I'm going to have my car ___ tomorrow. (repair)",
      answer: "repaired",
      explanation: "have + object + past participle, so 'repair' becomes 'repaired'.",
    },
    {
      type: "gap-fill",
      prompt: "She got her hair ___ at the new salon. (cut)",
      answer: "cut",
      explanation: "get + object + past participle; the past participle of 'cut' is 'cut'.",
    },
    {
      type: "multiple-choice",
      prompt: "Choose the correct sentence for persuading someone.",
      options: [
        "I got my brother help me.",
        "I got my brother to help me.",
        "I got my brother helped me.",
      ],
      answer: 1,
      explanation: "get + person + to + verb, so the correct form is 'to help'.",
    },
    {
      type: "multiple-choice",
      prompt: "The manager ___ her assistant book the tickets.",
      options: ["had", "got", "made to"],
      answer: 0,
      explanation: "have + person + base verb (no 'to'); 'had her assistant book' is correct.",
    },
    {
      type: "gap-fill",
      prompt: "I had my bag ___ on the train. (steal)",
      answer: "stolen",
      explanation: "Causative of misfortune uses the past participle, so 'steal' becomes 'stolen'.",
    },
    {
      type: "multiple-choice",
      prompt: "Which sentence is in the present continuous?",
      options: [
        "I had the car repaired.",
        "I am having the car repaired.",
        "I have had the car repaired.",
      ],
      answer: 1,
      explanation: "Only 'have' changes for tense; 'am having ... repaired' is present continuous.",
    },
    {
      type: "gap-fill",
      prompt: "I need to ___ my phone fixed before the trip. (informal causative verb)",
      answer: "get",
      explanation: "'get something done' is the informal causative, so 'get my phone fixed'.",
    },
    {
      type: "multiple-choice",
      prompt: "Which sentence has a mistake?",
      options: [
        "She got the plumber to come on Sunday.",
        "I had the electrician check the wiring.",
        "I had him to call me back.",
      ],
      answer: 2,
      explanation: "After 'have someone' you use a base verb with no 'to': 'had him call me back'.",
    },
  ],
};
