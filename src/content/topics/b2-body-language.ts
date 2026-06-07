import type { Topic } from "../types";

export const b2BodyLanguage: Topic = {
  id: "b2-body-language",
  level: "B2",
  title: "The Secrets of Body Language",
  theme: "Communication",
  summary:
    "Discover how we 'speak' without words, and use modals of deduction (must, can't, might) to guess what people are feeling.",
  leadIn: [
    "How can you tell when someone is nervous, even if they don't say so?",
    "Do you think you are good at reading other people's emotions?",
    "How might body language differ from one culture to another?",
  ],
  vocabulary: [
    {
      word: "gesture",
      definition: "a movement of the hands, head or body that shows a meaning",
      example: "A simple gesture, like a thumbs-up, can mean different things in different countries.",
      collocations: ["a friendly gesture", "make a gesture"],
      azNote: "jest / əl-qol hərəkəti",
    },
    {
      word: "posture",
      definition: "the way you hold your body when standing or sitting",
      example: "Good posture can make you appear more confident.",
      collocations: ["good posture", "an open posture"],
      azNote: "duruş / bədən vəziyyəti",
    },
    {
      word: "to reveal",
      definition: "to show or make known something that was hidden",
      example: "Our faces often reveal feelings that we are trying to hide.",
      collocations: ["reveal the truth", "reveal a secret"],
      azNote: "üzə çıxarmaq / açmaq",
    },
    {
      word: "confident",
      definition: "feeling sure about yourself and your abilities",
      example: "People who make eye contact usually seem more confident.",
      collocations: ["feel confident", "a confident manner"],
      azNote: "özünə güvənən / əmin",
    },
    {
      word: "subtle",
      definition: "not obvious; difficult to notice unless you pay attention",
      example: "A subtle change in someone's expression can reveal a lot.",
      collocations: ["a subtle difference", "subtle signs"],
      azNote: "incə / gözə çarpmayan",
    },
    {
      word: "to express",
      definition: "to show what you think or feel through words or actions",
      example: "We express far more with our bodies than we realise.",
      collocations: ["express an emotion", "express yourself"],
      azNote: "ifadə etmək / büruzə vermək",
    },
  ],
  grammar: {
    point: "Modals of deduction (present): must, can't, might",
    explanation:
      "We use modal verbs to make logical guesses about the present. Use 'must' when we are almost sure something is true: 'She's smiling — she must be happy.' Use 'can't' when we are almost sure it is not true: 'He can't be telling the truth.' Use 'might', 'may' or 'could' when something is only possible: 'They might be nervous.' All are followed by the infinitive without 'to' (or 'be + -ing' for actions now).",
    azNote:
      "Modals of deduction = indiki vəziyyət haqqında məntiqi təxmin. 'must' = demək olar ki, əminik (müsbət): 'He must be tired.' 'can't' = demək olar ki, əminik (mənfi): 'She can't be serious.' 'might/may/could' = sadəcə mümkündür. Hamısından sonra sadə feil (və ya 'be + -ing' indiki hərəkət üçün).",
    examples: [
      { en: "He's yawning — he must be tired.", note: "almost certain (positive) → must" },
      { en: "She can't be angry; she's laughing.", note: "almost certain (negative) → can't" },
      { en: "They might be feeling nervous before the interview.", note: "possible → might" },
      {
        en: "You've worked all day — you must be exhausted.",
        note: "logical conclusion from evidence",
      },
    ],
  },
  reading: {
    title: "Talking without words",
    text: `Imagine watching two people through a window, too far away to hear them. Even without a single word, you can probably guess a great deal. One of them keeps looking at the floor and crossing their arms, so they must be feeling uncomfortable. The other is leaning forward and smiling, so they can't be bored. This is the power of body language: we are constantly sending messages that we never actually speak.

Experts believe that a large part of human communication is non-verbal. Our gestures, our posture and the expressions on our faces often reveal what we really think, even when our words say something different. If someone tells you they are fine but avoids eye contact and keeps touching their face, they might not be telling the whole truth.

Some signals are surprisingly reliable. A genuine smile, for example, uses the muscles around the eyes, not just the mouth. If a person is smiling only with their lips, they may not be as happy as they seem. Confident people tend to stand tall and take up space, while someone who makes themselves small could be feeling anxious.

However, we should be careful. Body language is subtle, and a single gesture rarely proves anything. A person with crossed arms might simply be cold, not defensive. Signals also vary between cultures: a gesture that is polite in one country can be rude in another. Reading body language well, then, is not about quick judgements. It is about noticing patterns and remembering that everyone expresses their feelings in slightly different ways.`,
    questions: [
      {
        type: "multiple-choice",
        prompt: "What does the text say about human communication?",
        options: [
          "It is entirely verbal.",
          "A large part of it is non-verbal.",
          "It only works face to face.",
          "It depends only on words.",
        ],
        answer: 1,
        explanation: "'a large part of human communication is non-verbal'.",
      },
      {
        type: "multiple-choice",
        prompt: "How can you recognise a genuine smile?",
        options: [
          "It uses only the mouth.",
          "It uses the muscles around the eyes.",
          "It is always very wide.",
          "It lasts a long time.",
        ],
        answer: 1,
        explanation: "'A genuine smile ... uses the muscles around the eyes, not just the mouth.'",
      },
      {
        type: "multiple-choice",
        prompt: "Why should we be careful when reading body language?",
        options: [
          "Because it is always wrong",
          "Because a single gesture rarely proves anything and signals vary between cultures",
          "Because nobody uses it",
          "Because it is illegal",
        ],
        answer: 1,
        explanation: "'a single gesture rarely proves anything ... Signals also vary between cultures'.",
      },
    ],
  },
  speaking: [
    "Look at people around you (or imagine a scene). Make guesses about how they feel using 'must', 'can't' and 'might'.",
    "Describe how your own body language changes when you are nervous or confident.",
    "Do you think we can really trust body language? Why or why not?",
  ],
  writing: {
    task: "Describe a photo or scene of people and guess what they are feeling. Use 'must', 'can't' and 'might' at least twice each, plus three words from this topic.",
    minWords: 110,
  },
  quiz: [
    {
      type: "gap-fill",
      prompt: "He's yawning and his eyes are closing — he ___ be very tired. (almost sure)",
      answer: "must",
      explanation: "Almost certain positive deduction → 'must'.",
    },
    {
      type: "gap-fill",
      prompt: "She's laughing happily, so she ___ be angry. (almost sure it's NOT true)",
      answer: "can't",
      accept: ["cannot", "can not"],
      explanation: "Almost certain negative deduction → 'can't'.",
    },
    {
      type: "multiple-choice",
      prompt: "Choose the correct sentence:",
      options: [
        "They must to be nervous.",
        "They must being nervous.",
        "They might be feeling nervous.",
        "They might to feel nervous.",
      ],
      answer: 2,
      explanation: "After a modal use the infinitive without 'to'; for an action now use 'be + -ing'.",
    },
    {
      type: "gap-fill",
      prompt: "A small, hard-to-notice change in expression is a ___ change. (not obvious)",
      answer: "subtle",
      explanation: "'subtle' = not obvious; difficult to notice.",
    },
    {
      type: "multiple-choice",
      prompt: "'to reveal' means:",
      options: [
        "to hide something",
        "to show or make known something hidden",
        "to forget something",
        "to destroy something",
      ],
      answer: 1,
      explanation: "'to reveal' = to show or make known something that was hidden.",
    },
  ],
};
