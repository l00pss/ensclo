import type { Topic } from "../types";

export const b2RemoteWork: Topic = {
  id: "b2-remote-work",
  level: "B2",
  title: "The Future of Work",
  theme: "Work",
  summary:
    "Explore how technology is reshaping where and how we work, and learn to talk about the future with will, be going to, present continuous and the future continuous.",
  leadIn: [
    "How do you think most people will be working twenty years from now?",
    "Would you prefer a remote job or a traditional office job, and why?",
    "What new skills are you going to need in your future career?",
  ],
  vocabulary: [
    {
      word: "remote",
      definition: "done from a distance, away from a central office, usually using technology",
      example: "Since the pandemic, many companies have offered remote positions to attract talent.",
      collocations: ["remote work", "work remotely"],
      azNote: "məsafədən, uzaqdan (remote work = uzaqdan iş, ofisə getmədən)",
    },
    {
      word: "commute",
      definition: "to travel regularly between your home and your place of work",
      example: "He used to commute for two hours every day before his company went fully online.",
      collocations: ["a long commute", "commute to work"],
      azNote: "işə gediş-gəliş etmək, hər gün yol qət etmək (a long commute = uzun yol)",
    },
    {
      word: "flexible",
      definition: "able to change or be changed easily to suit a new situation",
      example: "Younger employees increasingly expect flexible hours rather than a fixed schedule.",
      collocations: ["flexible hours", "flexible working"],
      azNote: "çevik, dəyişkən (flexible hours = sərbəst, çevik iş saatları)",
    },
    {
      word: "automation",
      definition: "the use of machines and computers to do work that people used to do",
      example: "Automation is expected to replace many repetitive tasks within the next decade.",
      collocations: ["increasing automation", "automation of tasks"],
      azNote: "avtomatlaşdırma (maşın və proqramların insan işini görməsi)",
    },
    {
      word: "freelance",
      definition: "working for several different companies rather than being employed by just one",
      example: "After leaving her job, she decided to go freelance and choose her own clients.",
      collocations: ["freelance work", "go freelance"],
      azNote: "sərbəst işləyən, frilanser (go freelance = sərbəst işə keçmək)",
    },
    {
      word: "productivity",
      definition: "the rate at which a person or company produces useful work",
      example: "Several studies suggest that productivity actually rises when staff work from home.",
      collocations: ["boost productivity", "high productivity"],
      azNote: "məhsuldarlıq, iş səmərəliliyi (boost productivity = məhsuldarlığı artırmaq)",
    },
  ],
  grammar: {
    point: "Future forms (will, be going to, present continuous, future continuous)",
    explanation:
      "English has several ways to talk about the future, and the choice depends on meaning. Use 'will' for predictions, instant decisions and offers; use 'be going to' for plans and intentions or predictions based on evidence; use the present continuous for fixed arrangements with other people; and use the future continuous (will be + -ing) for an action that will be in progress at a specific time in the future.",
    azNote:
      "İngiliscədə gələcəyi bildirməyin bir neçə yolu var, seçim mənadan asılıdır. 'will' proqnoz və ani qərarlar üçündür, 'be going to' plan və niyyət üçündür, present continuous razılaşdırılmış görüşlər üçündür, future continuous (will be + -ing) isə gələcəkdə müəyyən anda davam edən hərəkəti bildirir.",
    examples: [
      { en: "Experts believe robots will do most factory jobs by 2050.", note: "will: a prediction" },
      { en: "I am going to learn coding next year to stay competitive.", note: "be going to: a plan or intention" },
      { en: "We are meeting the new remote team on Monday morning.", note: "present continuous: a fixed arrangement" },
      { en: "This time next week, I will be working from a beach in another country.", note: "future continuous: in progress at a future time" },
    ],
  },
  reading: {
    title: "Where will we work tomorrow?",
    text: `Ask anyone how they think we will work in the future, and you are likely to hear the same word again and again: remote. Twenty years ago, most employees accepted a long commute as a normal part of daily life, but that assumption is quickly disappearing. Companies have discovered that staff can do their jobs perfectly well from a kitchen table, and many of them are now going to keep at least part of their workforce online permanently.

This shift is changing far more than the location of a desk. Employers are introducing flexible schedules so that parents, students and people in different time zones can all contribute. Instead of asking everyone to be present from nine to five, managers are increasingly judging people by results. As a consequence, a growing number of professionals are choosing to go freelance, selling their skills to several clients at once rather than tying themselves to a single boss for life.

Technology, of course, sits at the centre of this story. As automation takes over routine and repetitive tasks, the jobs that remain will demand creativity, judgement and emotional intelligence. Some commentators warn that machines are going to destroy millions of roles, yet history suggests that new kinds of work will appear to replace the old ones. Interestingly, several studies report that productivity does not fall when people work from home; in many cases it actually rises, because workers waste less energy on travel and office distractions.

So what is going to happen next? Nobody can be certain, but a few trends seem clear. This time next decade, many of us will be collaborating with colleagues we have never met in person, supported by tools that barely exist today. We are not simply returning to the office of the past. We are building something new, and the people who keep learning will be the ones who shape it.`,
    questions: [
      {
        type: "multiple-choice",
        prompt: "What does the text say about the long commute?",
        options: [
          "It is becoming more popular.",
          "It is quickly disappearing as a normal assumption.",
          "It improves productivity.",
          "It is required by most employers.",
        ],
        answer: 1,
        explanation:
          "The text says people once accepted a long commute as normal, 'but that assumption is quickly disappearing'.",
      },
      {
        type: "multiple-choice",
        prompt: "According to the passage, what happens to productivity when people work from home?",
        options: [
          "It always falls sharply.",
          "It stays exactly the same.",
          "It often rises rather than falls.",
          "It cannot be measured.",
        ],
        answer: 2,
        explanation:
          "The text states productivity 'does not fall' and 'in many cases it actually rises'.",
      },
      {
        type: "multiple-choice",
        prompt: "What does the writer predict about the effect of automation on jobs?",
        options: [
          "All jobs will disappear forever.",
          "Routine tasks will be taken over, but new kinds of work will appear.",
          "Nothing will change at all.",
          "Only creative jobs will be automated.",
        ],
        answer: 1,
        explanation:
          "Automation takes over routine tasks, yet 'new kinds of work will appear to replace the old ones'.",
      },
    ],
  },
  speaking: [
    "Predict how your own job or studies will be different in ten years. Use 'will' and the future continuous.",
    "Talk about your plans for the next year, using 'be going to' and the present continuous for any fixed arrangements.",
    "Do you think automation is a threat or an opportunity for workers? Explain your view.",
  ],
  writing: {
    task: "Write a short article predicting the future of work in your country. Use at least one example of 'will', 'be going to', the present continuous for arrangements and the future continuous, plus three topic words.",
    minWords: 120,
  },
  quiz: [
    {
      type: "gap-fill",
      prompt: "Look at those dark clouds! It ___ (rain) soon.",
      answer: "is going to rain",
      accept: ["is going to rain", "'s going to rain"],
      explanation: "Use 'be going to' for a prediction based on present evidence (the clouds).",
    },
    {
      type: "gap-fill",
      prompt: "This time tomorrow, I ___ (work) from home for the first time.",
      answer: "will be working",
      accept: ["will be working", "'ll be working"],
      explanation:
        "Future continuous (will be + -ing) describes an action in progress at a specific future time.",
    },
    {
      type: "multiple-choice",
      prompt: "We ___ the new remote team at 10 a.m. on Monday; it is already in our calendars.",
      options: ["will meet", "are meeting", "meet", "would meet"],
      answer: 1,
      explanation:
        "The present continuous is used for fixed future arrangements, especially ones already scheduled.",
    },
    {
      type: "multiple-choice",
      prompt: "\"The phone is ringing.\" \"Don't worry, I ___ answer it.\"",
      options: ["am going to", "will", "am answering", "answer"],
      answer: 1,
      explanation: "Use 'will' for an instant decision made at the moment of speaking.",
    },
    {
      type: "gap-fill",
      prompt: "As ___ takes over routine tasks, future jobs will need more creativity. (use of machines to do human work)",
      answer: "automation",
      explanation: "'automation' is the use of machines and computers to do work people used to do.",
    },
  ],
};
