import type { Topic } from "../types";

export const b2Habits: Topic = {
  id: "b2-habits",
  level: "B2",
  title: "The Psychology of Habits",
  theme: "Psychology",
  summary:
    "Understand why habits are so hard to break, and master the difference between the Present Perfect Continuous and the Present Perfect Simple.",
  leadIn: [
    "What is one good habit and one bad habit that you have?",
    "Have you ever tried to break a habit? How successful were you?",
    "Do you think it is easier to start a new habit or to stop an old one?",
  ],
  vocabulary: [
    {
      word: "trigger",
      definition: "an event or thing that causes a particular reaction or behaviour",
      example: "For many people, stress is a trigger that makes them eat junk food.",
      collocations: ["a trigger for", "trigger a reaction"],
      azNote: "tetik / səbəbkar amil (bir davranışı işə salan şey)",
    },
    {
      word: "willpower",
      definition: "the ability to control your own actions and resist temptation",
      example: "Breaking a habit takes more than willpower; it takes a good plan.",
      collocations: ["have willpower", "lack willpower"],
      azNote: "iradə gücü / özünə nəzarət",
    },
    {
      word: "routine",
      definition: "a fixed way of doing things in the same order, regularly",
      example: "She has built exercise into her morning routine.",
      collocations: ["a daily routine", "stick to a routine"],
      azNote: "gündəlik qayda / rejim",
    },
    {
      word: "to give up",
      definition: "to stop doing something, especially a habit",
      example: "He has been trying to give up smoking for years.",
      collocations: ["give up smoking", "never give up"],
      azNote: "tərk etmək / əl çəkmək (vərdişdən)",
    },
    {
      word: "craving",
      definition: "a very strong feeling of wanting something",
      example: "Late at night, she often gets a craving for something sweet.",
      collocations: ["a craving for", "resist a craving"],
      azNote: "güclü istək / həvəs",
    },
    {
      word: "gradually",
      definition: "slowly, over a period of time",
      example: "If you change your habits gradually, they are more likely to last.",
      collocations: ["change gradually", "gradually improve"],
      azNote: "tədricən / yavaş-yavaş",
    },
  ],
  grammar: {
    point: "Present Perfect Continuous vs Present Perfect Simple",
    explanation:
      "Use the Present Perfect Continuous (have/has been + -ing) to emphasise the activity itself and how long it has continued, often when it is recent or still going on: 'I've been trying to quit for months.' Use the Present Perfect Simple (have/has + past participle) to emphasise the result or a completed quantity: 'I've quit three times.' With 'for' and 'since' we can use both, but the continuous stresses duration.",
    azNote:
      "Present Perfect Continuous (have been + -ing) = prosesə, davametmə müddətinə fokus ('I've been studying for hours' — hələ də davam edir/yeni bitib). Present Perfect Simple (have + V3) = nəticəyə, miqdara fokus ('I've studied three chapters'). 'for/since' ilə ikisi də olar, amma continuous müddəti vurğulayır.",
    examples: [
      { en: "I've been exercising every morning this month.", note: "ongoing activity → continuous" },
      { en: "I've lost three kilos.", note: "finished result/quantity → simple" },
      { en: "She has been studying habits for ten years.", note: "duration → continuous" },
      {
        en: "She has written two books about them.",
        note: "completed quantity → simple",
      },
    ],
  },
  reading: {
    title: "Why habits are so powerful",
    text: `Most of us have promised ourselves that we will change. We say we will eat better, exercise more, or spend less time on our phones. Yet a few weeks later, we are back where we started. Scientists have been studying this problem for decades, and they have discovered something surprising: breaking a habit has very little to do with willpower.

A habit, researchers explain, is a loop with three parts. First there is a trigger — a time, a place, or a feeling. Then there is the routine, the action itself. Finally there is a reward, which is why the brain wants to repeat the loop. For example, you feel bored (trigger), so you check social media (routine), and you feel a little entertained (reward). Because the brain has been repeating this loop for so long, the behaviour becomes almost automatic.

This explains why simply "trying harder" rarely works. Many smokers, for example, have tried to give up dozens of times. People have been relying on willpower for years, and yet most of them have failed. A better strategy is to change one small part of the loop. If you keep the trigger and the reward but replace the routine, the habit gradually changes. Someone who has a craving for a cigarette after lunch, for instance, might go for a short walk instead.

Researchers have also learned that real change takes time. We often expect instant results, but studies suggest that a new habit needs, on average, more than two months to feel natural. The people who succeed are not those with the strongest willpower; they are the ones who have been patient enough to let small changes grow.`,
    questions: [
      {
        type: "multiple-choice",
        prompt: "According to the text, what are the three parts of a habit loop?",
        options: [
          "Trigger, routine, reward",
          "Plan, action, result",
          "Stress, food, sleep",
          "Time, place, person",
        ],
        answer: 0,
        explanation: "'First there is a trigger ... Then there is the routine ... Finally there is a reward'.",
      },
      {
        type: "multiple-choice",
        prompt: "Why does 'trying harder' rarely work?",
        options: [
          "Because habits are not real.",
          "Because willpower alone is not enough.",
          "Because people don't want to change.",
          "Because rewards are bad for us.",
        ],
        answer: 1,
        explanation: "'People have been relying on willpower for years, and yet most of them have failed.'",
      },
      {
        type: "multiple-choice",
        prompt: "What does the text say about how long change takes?",
        options: [
          "A few days",
          "About one week",
          "More than two months on average",
          "Exactly one year",
        ],
        answer: 2,
        explanation: "'a new habit needs, on average, more than two months to feel natural'.",
      },
    ],
  },
  speaking: [
    "Talk about a habit you have been trying to change. What have you done so far, and what results have you had?",
    "Describe your daily routine and explain which parts you would like to improve.",
    "Do you agree that willpower is overrated? What helps you most when you want to change?",
  ],
  writing: {
    task: "Write a paragraph about a habit you are trying to build or break. Use the Present Perfect Continuous (for the ongoing effort) and the Present Perfect Simple (for results), plus three words from this topic.",
    minWords: 110,
  },
  quiz: [
    {
      type: "gap-fill",
      prompt: "I ___ (try) to give up coffee for three weeks now, and it's hard.",
      answer: "have been trying",
      accept: ["have been trying", "'ve been trying"],
      explanation: "Ongoing activity emphasising duration → Present Perfect Continuous.",
    },
    {
      type: "gap-fill",
      prompt: "So far, she ___ (read) two books about psychology.",
      answer: "has read",
      accept: ["has read"],
      explanation: "Completed quantity (two books) → Present Perfect Simple.",
    },
    {
      type: "multiple-choice",
      prompt: "Choose the most natural sentence:",
      options: [
        "I've been losing exactly five kilos.",
        "I've lost weight because I've been exercising every day.",
        "I've lost weight because I've exercising every day.",
        "I've been lost weight every day.",
      ],
      answer: 1,
      explanation: "Result → simple ('I've lost'); ongoing activity → continuous ('I've been exercising').",
    },
    {
      type: "gap-fill",
      prompt: "A time, place or feeling that starts a habit is called a ___.",
      answer: "trigger",
      explanation: "'trigger' = something that causes a particular reaction or behaviour.",
    },
    {
      type: "multiple-choice",
      prompt: "'gradually' means:",
      options: ["very suddenly", "slowly over time", "never", "by accident"],
      answer: 1,
      explanation: "'gradually' = slowly, over a period of time.",
    },
  ],
};
