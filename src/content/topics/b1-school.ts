import type { Topic } from "../types";
export const b1School: Topic = {
  id: "b1-school", level: "B1", title: "School Days", theme: "Education",
  summary: "Talk about your school memories and learn to use the past simple (regular and irregular verbs) with time expressions like 'yesterday', 'ago', 'last year' and 'when'.",
  leadIn: ["What was your favourite subject at school?", "Did you have a strict teacher when you were young?", "How did you feel on your first day of school?"],
  vocabulary: [
    { word: "subject", definition: "an area of knowledge that you study at school, such as maths or history", example: "Geography was my favourite subject when I was twelve.", collocations: ["favourite subject", "study a subject"], azNote: "fənn, məsələn riyaziyyat və ya tarix; məktəbdə öyrəndiyimiz sahə" },
    { word: "strict", definition: "expecting people to obey rules and behave very well", example: "Our maths teacher was very strict and never let us talk.", collocations: ["strict teacher", "strict rules"], azNote: "sərt, ciddi; qaydalara dəqiq əməl olunmasını tələb edən" },
    { word: "exam", definition: "an official test of your knowledge or skill in a subject", example: "I studied all night before the history exam.", collocations: ["pass an exam", "fail an exam"], azNote: "imtahan; bilik və ya bacarığın rəsmi yoxlanışı" },
    { word: "classmate", definition: "a person who is in the same class as you at school", example: "My old classmate still sends me a message every birthday.", collocations: ["best classmate", "former classmate"], azNote: "sinif yoldaşı; eyni sinifdə oxuyan şagird" },
    { word: "schedule", definition: "a plan that shows the times when lessons or events happen", example: "Our school schedule changed every single week.", collocations: ["busy schedule", "school schedule"], azNote: "cədvəl, qrafik; dərslərin və ya hadisələrin vaxtını göstərən plan" },
    { word: "graduate", definition: "to successfully finish your studies at a school or university", example: "She graduated from high school two years ago.", collocations: ["graduate from", "graduate with honours"], azNote: "məzun olmaq; məktəbi və ya universiteti uğurla bitirmək" },
  ],
  grammar: {
    point: "Past simple (regular and irregular verbs) with time expressions",
    explanation: "We use the past simple to talk about finished actions in the past. Regular verbs add '-ed' (study became studied, walk became walked), while irregular verbs change their form (go became went, have became had). We often add a time expression such as 'yesterday', 'two years ago', 'last year' or a clause with 'when' to say exactly when the action happened.",
    azNote: "Keçmiş zamanı (past simple) bitmiş hərəkətlər üçün işlədirik. Qaydalı feillərə '-ed' əlavə olunur, qaydasız feillər isə tam dəyişir, məsələn 'go' sözü 'went' olur. Çox vaxt 'yesterday', 'ago', 'last year' kimi zaman ifadələri və ya 'when' bağlayıcısı ilə hadisənin nə vaxt baş verdiyini göstəririk.",
    examples: [
      { en: "I started school when I was six years old.", note: "irregular 'was' + 'when' clause" },
      { en: "We studied for the exam yesterday.", note: "regular verb + 'yesterday'" },
      { en: "She graduated from university two years ago.", note: "regular verb + 'ago'" },
      { en: "Our teacher gave us a lot of homework last year.", note: "irregular verb 'gave' + 'last year'" },
    ],
  },
  reading: { title: "My Best School Memory",
    text: `When I was eleven, I moved to a small school near the river, and those days were the happiest of my childhood. The building was old, but the teachers made every lesson feel exciting. My favourite subject was history, because our teacher told us amazing stories about the past. She was strict about homework, yet she always smiled when we worked hard.

Every Monday morning, we checked the new schedule on the wall. Last year I found an old copy of it in a box, and suddenly I remembered everything. We had science before lunch, and we played football in the afternoon. I still talk to one classmate from that time; we met twenty years ago, and we became friends on the very first day.

The most difficult moment came at the end of the year. We took a big exam in June, and I studied for two weeks before it. I felt nervous, but I passed with a good mark. My parents were so proud that they took me to a restaurant that evening, and I ate the biggest pizza of my life.

A few years later, I graduated from that little school and moved to the city. I changed schools many times after that, but I never forgot those early years. Yesterday I drove past the old building again, and I stopped the car to look at it. The playground was empty, the windows were dusty, and the river still flowed quietly behind it. I smiled, because school days, even the hard ones, gave me memories that I will keep forever.`,
    questions: [
      { type: "multiple-choice", prompt: "Why did the writer like the history teacher?", options: ["She gave no homework", "She told amazing stories about the past", "She let them play all day", "She lived near the river"], answer: 1, explanation: "The text says the teacher told amazing stories about the past, which is why history was the favourite subject." },
      { type: "multiple-choice", prompt: "What did the writer do for two weeks before the exam?", options: ["Played football", "Travelled to the city", "Studied", "Visited a restaurant"], answer: 2, explanation: "The writer says 'I studied for two weeks before it' (the exam)." },
      { type: "multiple-choice", prompt: "What did the writer do yesterday?", options: ["Took an exam", "Drove past the old school building", "Graduated from school", "Met an old classmate"], answer: 1, explanation: "The last paragraph says 'Yesterday I drove past the old building again'." },
    ],
  },
  speaking: ["Describe your first day at school using the past simple.", "Talk about a teacher you had years ago and why you remember them.", "Tell a partner what you did the day before your last big exam."],
  writing: { task: "Write about a favourite memory from your school days. Use the past simple with time expressions (yesterday, ago, last year, when) and at least 3 words from the vocabulary list.", minWords: 80 },
  quiz: [
    { type: "gap-fill", prompt: "I ___ (study) for my history exam yesterday.", answer: "studied", explanation: "Regular verb 'study' becomes 'studied' in the past simple; 'yesterday' shows a finished past time." },
    { type: "gap-fill", prompt: "She ___ (graduate) from high school two years ago.", answer: "graduated", explanation: "Regular verb 'graduate' becomes 'graduated'; 'ago' signals the past simple." },
    { type: "multiple-choice", prompt: "Choose the correct past simple sentence.", options: ["We go to school last year.", "We went to school last year.", "We goed to school last year.", "We have gone to school last year."], answer: 1, explanation: "'go' is irregular: its past form is 'went', and 'last year' needs the past simple." },
    { type: "multiple-choice", prompt: "Which word means 'a person in the same class as you'?", options: ["subject", "schedule", "classmate", "exam"], answer: 2, explanation: "A 'classmate' is someone who is in the same class as you at school." },
    { type: "multiple-choice", prompt: "Complete: 'Our teacher was very ___ and never let us arrive late.'", options: ["strict", "exam", "subject", "schedule"], answer: 0, explanation: "'strict' describes someone who expects people to obey the rules, which fits the sentence." },
  ],
};
