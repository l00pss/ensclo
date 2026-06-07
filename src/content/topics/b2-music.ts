import type { Topic } from "../types";

export const b2Music: Topic = {
  id: "b2-music",
  level: "B2",
  title: "The Power of Music",
  theme: "Culture",
  summary:
    "Find out why music affects us so deeply, and master verb patterns with gerunds (-ing) and infinitives (to + verb).",
  leadIn: [
    "What kind of music do you enjoy listening to, and when?",
    "Has a song ever changed your mood completely? Describe it.",
    "Would you like to learn to play a musical instrument?",
  ],
  vocabulary: [
    {
      word: "rhythm",
      definition: "a regular, repeated pattern of sounds or beats",
      example: "It is almost impossible to stop your foot tapping to a strong rhythm.",
      collocations: ["a steady rhythm", "feel the rhythm"],
      azNote: "ritm",
    },
    {
      word: "mood",
      definition: "the way you feel at a particular time",
      example: "Listening to calm music can quickly improve your mood.",
      collocations: ["a good mood", "change your mood"],
      azNote: "əhval-ruhiyyə / kef",
    },
    {
      word: "to release",
      definition: "to let something out; (about feelings) to set free",
      example: "Dancing helps people release stress and tension.",
      collocations: ["release stress", "release a song"],
      azNote: "buraxmaq / azad etmək (stresi atmaq)",
    },
    {
      word: "powerful",
      definition: "having a strong effect on people or things",
      example: "Music is a powerful tool that can bring strangers together.",
      collocations: ["a powerful effect", "incredibly powerful"],
      azNote: "güclü / təsirli",
    },
    {
      word: "to memorise",
      definition: "to learn something so that you can remember it exactly",
      example: "Children find it easier to memorise words when they are set to music.",
      collocations: ["memorise a poem", "easy to memorise"],
      azNote: "əzbərləmək / yadda saxlamaq",
    },
    {
      word: "lyrics",
      definition: "the words of a song",
      example: "Some people enjoy the rhythm, while others focus on the lyrics.",
      collocations: ["song lyrics", "write lyrics"],
      azNote: "mahnı sözləri",
    },
  ],
  grammar: {
    point: "Gerunds & infinitives (verb patterns)",
    explanation:
      "After some verbs we use the gerund (-ing): enjoy, avoid, finish, suggest, can't help → 'I enjoy listening to jazz.' After others we use the infinitive (to + verb): want, decide, hope, learn, would like → 'I decided to learn the guitar.' After prepositions we always use the gerund: 'good at singing'. A few verbs (like, love, hate, start) can take either with little change in meaning.",
    azNote:
      "Bəzi feillərdən sonra gerund (-ing): enjoy, avoid, finish, suggest ('I enjoy dancing'). Bəzilərindən sonra infinitive (to + feil): want, decide, hope, learn ('I want to learn'). Sözönlərindən (at, of, about) sonra HƏMİŞƏ gerund ('interested in playing'). like/love/hate/start ikisini də qəbul edir.",
    examples: [
      { en: "I enjoy listening to live music.", note: "enjoy + gerund" },
      { en: "She decided to learn the violin.", note: "decide + infinitive" },
      { en: "He's really good at playing the piano.", note: "preposition (at) + gerund" },
      {
        en: "They hope to release a new album soon.",
        note: "hope + infinitive",
      },
    ],
  },
  reading: {
    title: "Why music moves us",
    text: `Every known culture in the world makes music. Long before humans learned to write, they were already singing and beating out rhythms, and we have never stopped. But why does a pattern of sounds have such a powerful effect on us? Scientists have spent years trying to answer this question, and what they have discovered is fascinating.

Part of the answer involves the brain. When we listen to music we love, the brain releases chemicals connected with pleasure — the same ones we feel when we eat good food or see a friend. This helps to explain why people enjoy playing the same favourite song again and again, and why a sad melody can somehow feel comforting rather than depressing. Music can also change our mood in seconds: a lively beat lifts our spirits, while a gentle tune calms us down.

Music also has a remarkable power over memory. Most of us find it hard to memorise a list of facts, yet we can remember the lyrics of songs we have not heard for years. Teachers have always known this: children who struggle to learn the alphabet often manage to sing it without any trouble. Setting information to a rhythm seems to help the brain hold on to it.

Perhaps most importantly, music connects people. Going to a concert, singing in a choir or simply dancing with friends creates a powerful sense of belonging. It allows us to release emotions that are difficult to put into words. Whether we want to celebrate, to relax or to forget our problems for a while, we turn to music. It may be one of the oldest human inventions, but we have never stopped needing it.`,
    questions: [
      {
        type: "multiple-choice",
        prompt: "What happens in the brain when we hear music we love?",
        options: [
          "Nothing measurable",
          "It releases chemicals connected with pleasure",
          "It stops working",
          "It only stores facts",
        ],
        answer: 1,
        explanation: "'the brain releases chemicals connected with pleasure'.",
      },
      {
        type: "multiple-choice",
        prompt: "What does the text say about music and memory?",
        options: [
          "Music makes us forget everything.",
          "Setting information to a rhythm helps the brain remember it.",
          "Only adults can remember lyrics.",
          "Memory and music are unrelated.",
        ],
        answer: 1,
        explanation: "'Setting information to a rhythm seems to help the brain hold on to it.'",
      },
      {
        type: "multiple-choice",
        prompt: "According to the text, why is music socially important?",
        options: [
          "It makes money.",
          "It creates a sense of belonging and lets us release emotions.",
          "It replaces language completely.",
          "It is only for professionals.",
        ],
        answer: 1,
        explanation: "'creates a powerful sense of belonging ... allows us to release emotions'.",
      },
    ],
  },
  speaking: [
    "Talk about the music you enjoy listening to and the music you would like to learn to play.",
    "Describe a song that always changes your mood. What is it about the rhythm or the lyrics?",
    "Some schools are cutting music lessons. Do you think this is a mistake? Why?",
  ],
  writing: {
    task: "Write a paragraph about the role of music in your life. Use at least four verbs followed by a gerund or an infinitive (e.g. 'I enjoy listening...', 'I want to learn...'), plus three words from this topic.",
    minWords: 110,
  },
  quiz: [
    {
      type: "gap-fill",
      prompt: "I really enjoy ___ (listen) to live music.",
      answer: "listening",
      explanation: "After 'enjoy' we use the gerund (-ing): listening.",
    },
    {
      type: "gap-fill",
      prompt: "She decided ___ (learn) the violin.",
      answer: "to learn",
      explanation: "After 'decide' we use the infinitive: to learn.",
    },
    {
      type: "multiple-choice",
      prompt: "Choose the correct sentence:",
      options: [
        "He's good at play the piano.",
        "He's good at to play the piano.",
        "He's good at playing the piano.",
        "He's good at plays the piano.",
      ],
      answer: 2,
      explanation: "After a preposition (at) we always use the gerund: 'playing'.",
    },
    {
      type: "gap-fill",
      prompt: "The words of a song are called the ___.",
      answer: "lyrics",
      explanation: "'lyrics' = the words of a song.",
    },
    {
      type: "multiple-choice",
      prompt: "'mood' means:",
      options: [
        "the way you feel at a particular time",
        "a type of instrument",
        "the speed of a song",
        "a concert hall",
      ],
      answer: 0,
      explanation: "'mood' = the way you feel at a particular time.",
    },
  ],
};
