import type { GrammarGroup } from "../types";

export const habits: GrammarGroup = {
  id: "habits",
  description:
    "Talking about past habits and about being or getting accustomed to things.",
  azDescription:
    "Bu mövzu keçmişdəki vərdişlər haqqında danışmağı və bir şeyə alışmış olmağı və ya yavaş-yavaş alışmağı ifadə etməyi öyrədir. İngiliscədə bunlar üçün 'used to', 'would', 'be used to' və 'get used to' strukturlarından istifadə olunur. Bu strukturlar bir-birinə çox oxşadığı üçün asanlıqla qarışdırılır, ona görə də hər birinin nə vaxt və hansı mənada işləndiyini ayrıca öyrənmək vacibdir.",
  rules: [
    {
      title: "used to + base verb (past habits and states)",
      level: "B1",
      explanation:
        "Use 'used to' for habits or states that were true in the past but are not true now.",
      azNote:
        "'used to + feilin əsas forması' keçmişdə müntəzəm olan, amma indi artıq davam etməyən vərdişi və ya o vaxt mövcud olub indi mövcud olmayan halı bildirir. Yəni keçmişlə indi arasında dəyişiklik olduğunu göstərir: 'I used to smoke' (əvvəllər çəkirdim, indi yox). Həm təkrarlanan hərəkətlər, həm də uzunmüddətli vəziyyətlər (məsələn, harada yaşamaq) üçün işlədilir.",
      form: "subject + used to + base verb",
      examples: [
        { en: "I used to smoke, but I quit last year.", note: "past habit, now over" },
        { en: "She used to live in Ganja.", note: "past state, not true now" },
        { en: "We used to play outside every day.", note: "repeated past action" },
      ],
      pitfall:
        "Sualda və inkarda 'd' düşür: 'Did you use to...?', 'I didn't use to...'.",
    },
    {
      title: "would + base verb (repeated past actions)",
      level: "B2",
      explanation:
        "Use 'would' for repeated past actions, like a story about routines. Do not use it for past states.",
      azNote:
        "'would + feilin əsas forması' keçmişdə təkrar-təkrar baş verən hərəkətləri, adətən xatirə danışarkən təsvir etmək üçün işlədilir: 'Every summer we would visit our grandparents'. Burada 'would' təxminən 'edərdik' mənasını verir. Diqqət: bu struktur yalnız hərəkət bildirən feillərlə işlənir; hal və vəziyyət bildirən feillərlə (have, be, know, like kimi) işlənmir, onların yerinə 'used to' istifadə olunur.",
      form: "subject + would + base verb",
      examples: [
        { en: "Every summer we would visit our grandparents.", note: "repeated action" },
        { en: "He would always bring sweets for the children.", note: "habitual action" },
        { en: "On Fridays my father would cook for everyone.", note: "regular routine" },
      ],
      pitfall:
        "Hal feilləri ilə olmaz: 'I would have a car' səhvdir, 'I used to have a car' düzdür.",
    },
    {
      title: "be used to + noun / -ing (be accustomed to)",
      level: "B2",
      explanation:
        "Use 'be used to' to say something is normal and familiar for you now. It is followed by a noun or the -ing form.",
      azNote:
        "'be used to' (am/is/are used to) bir şeyin hazırda sənin üçün adi, tanış və normal olduğunu bildirir, yəni artıq ona alışmısan: 'I am used to the cold weather' (soyuq havaya öyrəşmişəm). Burada 'to' köməkçi feil deyil, ön sözdür, ona görə də ondan sonra ya isim, ya da feilin -ing forması gəlir. Bunu keçmiş haqqında olan 'used to' ilə qarışdırma.",
      form: "subject + be (am/is/are) + used to + noun / -ing",
      examples: [
        { en: "I am used to the cold weather here.", note: "noun after 'used to'" },
        { en: "She is used to working long hours.", note: "-ing form after 'used to'" },
        { en: "They are used to noise because they live in the city.", note: "familiar now" },
      ],
      pitfall:
        "'to' sözündən sonra məsdər yox, -ing forması gəlir: 'used to working', 'used to work' yox.",
    },
    {
      title: "get used to + noun / -ing (become accustomed to)",
      level: "B2",
      explanation:
        "Use 'get used to' to describe the process of becoming accustomed to something new over time.",
      azNote:
        "'get used to' yeni bir şeyə zaman keçdikcə yavaş-yavaş alışmaq, öyrəşmək prosesini bildirir: 'It took me a month to get used to the new job' (yeni işə alışmağım bir ay çəkdi). Fərqə diqqət et: 'be used to' artıq alışmış olmağı, 'get used to' isə alışma prosesini göstərir. Burada da 'to' ön söz olduğu üçün ondan sonra isim və ya feilin -ing forması gəlir.",
      form: "subject + get used to + noun / -ing",
      examples: [
        { en: "It took me a month to get used to the new job.", note: "process of adapting" },
        { en: "You will get used to driving on the left.", note: "-ing form after 'used to'" },
        { en: "She is getting used to her new school.", note: "ongoing process" },
      ],
      pitfall:
        "'be used to' = artıq alışmısan; 'get used to' = alışırsan/alışacaqsan. Qarışdırma.",
    },
    {
      title: "used to vs be used to (the key contrast)",
      level: "B2",
      explanation:
        "'used to + base verb' talks about the past. 'be used to + noun/-ing' talks about familiarity now. Watch the form after them.",
      azNote:
        "Bu iki strukturu qarışdırmamaq üçün əsas fərqi yadda saxla: 'used to + feilin əsas forması' keçmişdəki vərdiş və ya halı bildirir ('I used to get up early' - əvvəllər tez qalxardım). 'be used to + isim/-ing' isə indi bir şeyin sənin üçün tanış və adi olduğunu bildirir ('I am used to getting up early' - tez qalxmağa öyrəşmişəm). Yoxlamaq üçün cümlədə 'be' (am/is/are) feilinin olub-olmadığına bax.",
      form: "used to + base verb  |  be used to + noun / -ing",
      examples: [
        { en: "I used to get up early.", note: "past habit, now changed" },
        { en: "I am used to getting up early.", note: "it is normal for me now" },
        { en: "He used to drive to work, but now he walks.", note: "past habit" },
        { en: "He is used to driving in heavy traffic.", note: "familiar now" },
      ],
      pitfall:
        "'be' feili olub-olmamağına bax: 'be' varsa sonra -ing, yoxdursa sonra məsdər gəlir.",
    },
  ],
  practice: [
    {
      type: "gap-fill",
      prompt: "I ___ to live in London, but now I live in Baku. (past state)",
      answer: "used",
      explanation: "Past state no longer true uses 'used to live'.",
    },
    {
      type: "multiple-choice",
      prompt: "After a month, she got used to ___ early.",
      options: ["get up", "getting up", "got up"],
      answer: 1,
      explanation: "'get used to' is followed by the -ing form, so 'getting up'.",
    },
    {
      type: "gap-fill",
      prompt: "Every summer we ___ visit our grandparents in the village. (repeated past action)",
      answer: "would",
      explanation: "'would' describes repeated past actions.",
    },
    {
      type: "multiple-choice",
      prompt: "Which sentence is correct for a past state?",
      options: [
        "I would have long hair when I was young.",
        "I used to have long hair when I was young.",
        "I am used to have long hair when I was young.",
      ],
      answer: 1,
      explanation: "States use 'used to', not 'would'. 'I used to have long hair' is correct.",
    },
    {
      type: "gap-fill",
      prompt: "She is used to ___ long hours at the hospital. (work)",
      answer: "working",
      explanation: "After 'be used to' we use the -ing form, so 'working'.",
    },
    {
      type: "multiple-choice",
      prompt: "It was hard at first, but he ___ the new climate quickly.",
      options: ["got used to", "used to", "would"],
      answer: 0,
      explanation: "Becoming accustomed to something new uses 'get used to', so 'got used to'.",
    },
    {
      type: "gap-fill",
      prompt: "Did you ___ to play football as a child? (question form)",
      answer: "use",
      explanation: "In questions the 'd' is dropped: 'Did you use to play...?'.",
    },
    {
      type: "multiple-choice",
      prompt: "I ___ getting up at 5 a.m.; it feels normal now.",
      options: ["used to", "am used to", "would"],
      answer: 1,
      explanation: "Familiarity now uses 'be used to' plus -ing, so 'am used to getting up'.",
    },
  ],
};
