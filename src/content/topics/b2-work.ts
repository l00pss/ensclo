import type { Topic } from "../types";

export const b2Work: Topic = {
  id: "b2-work",
  level: "B2",
  title: "Work & Career",
  theme: "Work",
  summary:
    "Discuss jobs, ambitions and the modern workplace, and master the Passive Voice to describe processes and responsibilities.",
  leadIn: [
    "What skills are most important in your ideal job?",
    "Do you think working from home is better than working in an office? Why?",
    "How has the way people work changed in the last ten years?",
  ],
  vocabulary: [
    {
      word: "to apply for",
      definition: "to make a formal request for a job, usually in writing",
      example: "She applied for a marketing position at a tech company.",
      collocations: ["apply for a job", "apply for a position"],
      azNote: "müraciət etmək (apply FOR a job, NOT 'apply to a job')",
    },
    {
      word: "promotion",
      definition: "a move to a more important job or rank in a company",
      example: "After two years of hard work, he finally got a promotion.",
      collocations: ["get a promotion", "be up for promotion"],
      azNote: "vəzifə yüksəlişi",
    },
    {
      word: "deadline",
      definition: "a time or date by which something must be finished",
      example: "We are working hard to meet the deadline.",
      collocations: ["meet a deadline", "miss a deadline", "a tight deadline"],
      azNote: "son tarix / müddət",
    },
    {
      word: "workload",
      definition: "the amount of work that a person has to do",
      example: "My workload has increased a lot since the new project started.",
      collocations: ["heavy workload", "manage your workload"],
      azNote: "iş yükü",
    },
    {
      word: "to be in charge of",
      definition: "to have control of or responsibility for something",
      example: "She is in charge of the entire sales team.",
      collocations: ["in charge of a team", "put someone in charge"],
      azNote: "məsul olmaq / rəhbərlik etmək",
    },
    {
      word: "redundant",
      definition: "no longer needed at work and therefore losing your job",
      example: "Hundreds of workers were made redundant when the factory closed.",
      collocations: ["be made redundant", "redundancy package"],
      azNote: "ixtisara düşmüş (be made redundant = ixtisar olunmaq)",
    },
  ],
  grammar: {
    point: "The Passive Voice",
    explanation:
      "Form the passive with the correct tense of 'to be' + past participle: 'The report is written by the team.' We use the passive when the action is more important than who does it, or when the agent is unknown or obvious. To mention who does the action, use 'by': 'The decision was made by the board.'",
    azNote:
      "Passive = hərəkəti edən deyil, hərəkətin özü vacibdir. Quruluş: be + V3. 'They built the office in 2010' → 'The office was built in 2010.' Kimin etdiyini demək üçün 'by' işlədilir.",
    examples: [
      { en: "The emails are checked every morning.", note: "Present Simple passive" },
      { en: "The contract was signed yesterday.", note: "Past Simple passive" },
      { en: "A new manager has been appointed.", note: "Present Perfect passive" },
      {
        en: "The project will be completed next month.",
        note: "Future passive (will be + V3)",
      },
      {
        en: "✗ The report was wrote by John. → ✓ The report was written by John.",
        note: "always use the past participle (V3), not the past simple",
      },
    ],
  },
  reading: {
    title: "The changing workplace",
    text: `Over the past decade, the world of work has been transformed by technology. Tasks that were once done by hand are now completed by software in a matter of seconds, and meetings that used to require expensive travel are simply held online. As a result, many employees are given the freedom to work from home, at least for part of the week, and the way teams are managed has changed completely.

Take the experience of Daniel, a graphic designer. Five years ago, he applied for a junior position at a small advertising agency. At that time, every project was reviewed in person, and his work was checked by a manager who sat at the next desk. Today, he is in charge of a team of six designers who are spread across three different countries. Files are shared instantly, feedback is given through video calls, and deadlines are tracked by software that everyone can see.

However, these changes are not without their problems. Some workers report that their workload has actually increased, precisely because they are expected to be available at all hours. The line between work and home life has become blurred, and many people feel that they are never truly "off". Stress and burnout are now discussed openly in a way that they never were before.

There is also a deeper anxiety. As more and more routine tasks are automated, some employees worry that, sooner or later, their jobs will be made redundant by machines. History suggests that this fear is not entirely unreasonable: roles disappear, but new ones are created. Experts therefore argue that the workers who will be protected are those who keep learning. A promotion, in the modern workplace, is rarely given for loyalty alone; it is earned by people who adapt, who acquire new skills, and who are willing to be retrained again and again.`,
    questions: [
      {
        type: "multiple-choice",
        prompt: "According to the text, what has happened to many routine tasks?",
        options: [
          "They are now done more slowly.",
          "They are now completed by software.",
          "They have been banned.",
          "They require more travel.",
        ],
        answer: 1,
        explanation: "'Tasks that were once done by hand are now completed by software'.",
      },
      {
        type: "multiple-choice",
        prompt: "How has Daniel's role changed over five years?",
        options: [
          "He was made redundant.",
          "He now works completely alone.",
          "He is now in charge of an international team.",
          "He went back to a junior position.",
        ],
        answer: 2,
        explanation:
          "'Today, he is in charge of a team of six designers who are spread across three different countries.'",
      },
      {
        type: "multiple-choice",
        prompt: "What, according to the experts, protects workers from losing their jobs?",
        options: [
          "Working longer hours",
          "Loyalty to one company",
          "Continuously learning new skills",
          "Refusing to work from home",
        ],
        answer: 2,
        explanation:
          "'the workers who will be protected are those who keep learning'.",
      },
    ],
  },
  speaking: [
    "Describe your dream job and explain what would be expected of you in that role.",
    "Some jobs are being replaced by machines. Discuss the advantages and disadvantages of automation.",
    "Talk about a time you had a heavy workload. How did you manage it?",
  ],
  writing: {
    task: "Write a paragraph describing how a product of your choice is made. Use at least four passive sentences (e.g. 'The beans are roasted...').",
    minWords: 100,
  },
  quiz: [
    {
      type: "gap-fill",
      prompt: "The new bridge ___ (build) last year. (passive, Past Simple)",
      answer: "was built",
      accept: ["was built"],
      explanation: "Past Simple passive: was/were + past participle (built).",
    },
    {
      type: "gap-fill",
      prompt: "English ___ (speak) all over the world. (passive, Present Simple)",
      answer: "is spoken",
      accept: ["is spoken"],
      explanation: "Present Simple passive: is/are + past participle (spoken).",
    },
    {
      type: "multiple-choice",
      prompt: "Choose the correct passive sentence:",
      options: [
        "The letter was wrote by Anna.",
        "The letter is write by Anna.",
        "The letter was written by Anna.",
        "The letter has wrote by Anna.",
      ],
      answer: 2,
      explanation: "Passive uses the past participle: 'written'.",
    },
    {
      type: "gap-fill",
      prompt: "She wants to ___ ___ a senior position. (make a formal job request)",
      answer: "apply for",
      explanation: "'apply for' a position/job — note the preposition 'for'.",
    },
    {
      type: "multiple-choice",
      prompt: "Which collocation means 'to finish work on time'?",
      options: ["miss a deadline", "meet a deadline", "make a deadline", "do a deadline"],
      answer: 1,
      explanation: "We 'meet' a deadline when we finish on time; we 'miss' it when we are late.",
    },
  ],
};
