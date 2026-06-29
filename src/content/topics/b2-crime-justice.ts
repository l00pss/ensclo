import type { Topic } from "../types";

export const b2CrimeJustice: Topic = {
  id: "b2-crime-justice",
  level: "B2",
  title: "Crime and Justice",
  theme: "Society",
  summary:
    "Explore how crimes are investigated and judged, and learn to express certainty and possibility with modals of deduction such as 'must', 'can't' and 'might'.",
  leadIn: [
    "What do you think makes a justice system fair?",
    "Should people who commit serious crimes always go to prison, or are there better options?",
    "Have you ever watched a detective film and worked out who was guilty before the ending?",
  ],
  vocabulary: [
    {
      word: "suspect",
      definition: "a person who is thought to have committed a crime",
      example: "The police questioned the main suspect for several hours.",
      collocations: ["a prime suspect", "to arrest a suspect"],
      azNote: "şübhəli şəxs (cinayətdə şübhə altında olan adam)",
    },
    {
      word: "evidence",
      definition: "the facts or objects that show whether something is true, used in court",
      example: "There was not enough evidence to keep him in prison.",
      collocations: ["strong evidence", "to collect evidence"],
      azNote: "sübut, dəlil (məhkəmədə istifadə olunan faktlar)",
    },
    {
      word: "witness",
      definition: "a person who saw a crime happen and can describe it",
      example: "A witness claimed she had seen the car leave at midnight.",
      collocations: ["a key witness", "an eyewitness"],
      azNote: "şahid (cinayəti öz gözü ilə görən adam)",
    },
    {
      word: "trial",
      definition: "the legal process in which a court decides if someone is guilty",
      example: "The trial lasted three weeks and attracted huge public attention.",
      collocations: ["a fair trial", "to stand trial"],
      azNote: "məhkəmə prosesi, mühakimə (təqsirin müəyyən edildiyi proses)",
    },
    {
      word: "verdict",
      definition: "the official decision made by a court about whether someone is guilty",
      example: "Everyone waited nervously for the jury to announce its verdict.",
      collocations: ["to reach a verdict", "a guilty verdict"],
      azNote: "hökm, qərar (məhkəmənin rəsmi qərarı)",
    },
    {
      word: "convict",
      definition: "to officially decide in a court that someone is guilty of a crime",
      example: "It is wrong to convict a person without reliable proof.",
      collocations: ["to convict someone of", "a convicted criminal"],
      azNote: "təqsirli bilmək, məhkum etmək (rəsmi olaraq günahkar elan etmək)",
    },
  ],
  grammar: {
    point: "Modals of deduction (must, can't, might/could)",
    explanation:
      "We use modal verbs to say how certain we are about something, based on the evidence we have. For the present, use 'must + infinitive' when we are sure something is true, 'can't + infinitive' when we are sure it is impossible, and 'might', 'may' or 'could + infinitive' when something is only possible. For the past, we add 'have + past participle': 'She must have lied' (sure it happened), 'He can't have done it' (sure it did not happen) and 'They might have left' (possible).",
    azNote:
      "Modal felləri nə qədər əmin olduğumuzu bildirmək üçün işlədirik, dəlilə əsaslanaraq. İndiki zaman üçün: əminiksə 'must', mümkün deyilsə 'can't', sadəcə ehtimal varsa 'might/could' işlədirik. Keçmiş üçün isə 'have + past participle' əlavə edirik: 'She must have lied', 'He can't have done it', 'They might have left'.",
    examples: [
      { en: "The suspect must be guilty; his fingerprints are everywhere.", note: "present, sure it is true" },
      { en: "She can't be the thief; she was abroad all week.", note: "present, sure it is impossible" },
      { en: "The witness might be mistaken about the time.", note: "present, only possible" },
      { en: "Someone must have entered through the window.", note: "past, 'must have' + past participle" },
    ],
  },
  reading: {
    title: "Reading the clues",
    text: `Late one evening, a valuable painting disappeared from a small city gallery, and the next morning a detective arrived to study the scene. There were no broken locks and no signs of force, so she quickly decided that the thief must have known the building well. "An ordinary stranger can't have walked in unnoticed," she told her team. "Whoever did this might even work here."

The first suspect was the night guard, who insisted he had seen nothing unusual. Yet the detective noticed that the alarm had been switched off from the inside. He must have been involved, she thought, or at least he must have been careless. The man could be lying to protect a colleague, or he might simply be afraid of losing his job. Without firm evidence, however, she refused to accuse anyone too soon.

By midday a useful witness appeared: a cleaner who remembered a delivery van parked behind the gallery at a strange hour. "That van can't have been a normal delivery," the detective said. "Nobody collects furniture at two in the morning." The detail mattered, because it suggested the crime must have been planned for days, not decided in a moment.

Weeks later, the case finally reached a trial. The lawyers argued for hours, and the jury studied every piece of evidence before they had to reach a verdict. In the end the court chose to convict the guard's brother, a former employee who knew the alarm codes. The detective was not surprised. "He had the knowledge and the motive," she said calmly. "It must have been him all along."`,
    questions: [
      {
        type: "multiple-choice",
        prompt: "Why did the detective conclude that the thief knew the building well?",
        options: [
          "Because a witness named the thief",
          "Because there were no broken locks or signs of force",
          "Because the painting was cheap",
          "Because the guard confessed immediately",
        ],
        answer: 1,
        explanation: "'There were no broken locks and no signs of force, so she quickly decided that the thief must have known the building well.'",
      },
      {
        type: "multiple-choice",
        prompt: "What did the cleaner's information suggest about the crime?",
        options: [
          "That it was an accident",
          "That it had been planned for days",
          "That nothing had been stolen",
          "That the painting was still inside",
        ],
        answer: 1,
        explanation: "The strange delivery van 'suggested the crime must have been planned for days, not decided in a moment'.",
      },
      {
        type: "multiple-choice",
        prompt: "Who did the court finally decide was guilty?",
        options: [
          "The night guard",
          "The cleaner",
          "The guard's brother, a former employee",
          "The detective",
        ],
        answer: 2,
        explanation: "'The court chose to convict the guard's brother, a former employee who knew the alarm codes.'",
      },
    ],
  },
  speaking: [
    "Look at a confusing situation (e.g. a friend who is suddenly very busy) and make deductions using 'must', 'can't' and 'might'.",
    "Describe a crime story from a film or the news and explain who you think must have done it and why.",
    "Do you think juries of ordinary people, or professional judges, should decide a verdict? Explain your view.",
  ],
  writing: {
    task: "Write a short mystery scene in which a detective examines a crime. Use at least four modals of deduction (e.g. 'must have', 'can't have', 'might'), plus three words from this topic.",
    minWords: 110,
  },
  quiz: [
    {
      type: "gap-fill",
      prompt: "The lights are on, so someone ___ be at home. (you are sure it is true)",
      answer: "must",
      explanation: "We use 'must' for a present deduction when we are sure something is true.",
    },
    {
      type: "multiple-choice",
      prompt: "She was in another country that night, so she ___ the crime.",
      options: [
        "can't have committed",
        "must have committed",
        "might commit",
        "can commit",
      ],
      answer: 0,
      explanation: "We are sure it was impossible, so we use 'can't have + past participle'.",
    },
    {
      type: "gap-fill",
      prompt: "We are not sure where he is; he ___ have gone home, but nobody knows. (only possible)",
      answer: "might",
      accept: ["may", "could"],
      explanation: "For a past possibility we use 'might/may/could have + past participle'.",
    },
    {
      type: "multiple-choice",
      prompt: "Choose the correct past deduction: 'The door was unlocked. Someone ___ the key.'",
      options: [
        "must have had",
        "must has had",
        "must had",
        "must have has",
      ],
      answer: 0,
      explanation: "Past deduction with certainty uses 'must have + past participle': 'must have had'.",
    },
    {
      type: "gap-fill",
      prompt: "A person who saw the crime and can describe it is called a ___.",
      answer: "witness",
      explanation: "'witness' = a person who saw a crime happen and can describe it.",
    },
  ],
};
