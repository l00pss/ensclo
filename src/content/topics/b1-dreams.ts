import type { Topic } from "../types";

export const b1Dreams: Topic = {
  id: "b1-dreams",
  level: "B1",
  title: "Why Do We Dream?",
  theme: "Science",
  summary:
    "Explore the mystery of dreams, and learn to talk about things that are possible but not certain with 'may', 'might' and 'could'.",
  leadIn: [
    "Do you usually remember your dreams? Describe one you remember.",
    "Why do you think people dream?",
    "Do you believe dreams have a meaning?",
  ],
  vocabulary: [
    {
      word: "brain",
      definition: "the organ inside your head that controls your body and thoughts",
      example: "Your brain is very active while you sleep.",
      collocations: ["the human brain", "use your brain"],
      azNote: "beyin",
    },
    {
      word: "memory",
      definition: "something you remember, or your ability to remember",
      example: "Some scientists think dreams help us store memories.",
      collocations: ["a good memory", "store a memory"],
      azNote: "yaddaş / xatirə",
    },
    {
      word: "to imagine",
      definition: "to form a picture of something in your mind",
      example: "In a dream, you can imagine flying or visiting strange places.",
      collocations: ["imagine that...", "hard to imagine"],
      azNote: "təsəvvür etmək",
    },
    {
      word: "nightmare",
      definition: "a frightening or unpleasant dream",
      example: "She woke up suddenly after a terrible nightmare.",
      collocations: ["have a nightmare", "a terrible nightmare"],
      azNote: "qarabasma / qorxulu yuxu",
    },
    {
      word: "to solve",
      definition: "to find the answer to a problem",
      example: "People sometimes solve a problem while they are asleep.",
      collocations: ["solve a problem", "solve a mystery"],
      azNote: "həll etmək",
    },
    {
      word: "mystery",
      definition: "something strange that is difficult to understand or explain",
      example: "Dreams are still a mystery, even for scientists.",
      collocations: ["a complete mystery", "solve a mystery"],
      azNote: "sirr / müəmma",
    },
  ],
  grammar: {
    point: "Modals of possibility: may, might, could",
    explanation:
      "When we are not sure about something, we use 'may', 'might' or 'could' + infinitive (without 'to') to say it is possible: 'Dreams may help us remember.' All three have a similar meaning here. For the negative, we use 'may not' or 'might not' (but not 'could not' for this meaning).",
    azNote:
      "'may / might / could' = bəlkə, ola bilər (əmin deyilik). Hamısı eyni mənanı verir: 'It might rain' = 'It may rain' = 'It could rain' (yağış yağa bilər). İnkar: 'may not / might not' (bu mənada 'couldn't' işlənmir).",
    examples: [
      { en: "Dreams might help the brain store memories.", note: "possible, not certain" },
      { en: "A nightmare may come from stress.", note: "may = it's possible" },
      { en: "Dreams could be a way of solving problems.", note: "could = it's possible" },
      {
        en: "We might not remember most of our dreams.",
        note: "negative possibility: might not",
      },
    ],
  },
  reading: {
    title: "The science of dreams",
    text: `Every night, while you are sleeping, your brain creates strange little films called dreams. You might fly over a city, talk to someone famous, or run away from a monster. But why do we dream at all? The truth is that nobody knows for certain, and dreams are still one of the biggest mysteries in science.

Scientists have several ideas. One theory says that dreams may help the brain organise and store memories. During the day, we collect a huge amount of information, and at night the brain might decide what to keep and what to forget. This could be why students who sleep well often remember their lessons better.

Another idea is that dreams could be a kind of practice. When you imagine running from danger in a nightmare, your brain may be training you to react quickly in real life. Some scientists even believe that dreams help us solve problems: you go to bed worried about something, and in the morning the answer might suddenly appear.

Of course, these are only theories. Two people can have completely different dreams on the same night, and we usually forget most of them within minutes of waking up. One day, science may finally explain why we dream — but for now, every night your brain creates a mystery that even the experts cannot fully understand.`,
    questions: [
      {
        type: "multiple-choice",
        prompt: "What does the text say about the reason we dream?",
        options: [
          "Scientists know exactly why we dream.",
          "Nobody knows for certain.",
          "Only children dream.",
          "Dreams have no purpose.",
        ],
        answer: 1,
        explanation: "'nobody knows for certain, and dreams are still one of the biggest mysteries'.",
      },
      {
        type: "multiple-choice",
        prompt: "According to one theory, dreams may help us with:",
        options: ["growing taller", "storing memories", "losing weight", "speaking languages"],
        answer: 1,
        explanation: "'dreams may help the brain organise and store memories'.",
      },
      {
        type: "multiple-choice",
        prompt: "What happens to most of our dreams?",
        options: [
          "We remember them perfectly.",
          "We forget them within minutes.",
          "We write them down.",
          "We share them with others.",
        ],
        answer: 1,
        explanation: "'we usually forget most of them within minutes of waking up'.",
      },
    ],
  },
  speaking: [
    "Why do you think we forget most of our dreams? Give your ideas using 'may', 'might' or 'could'.",
    "Describe a strange or funny dream. What do you think it might mean?",
    "Do you think machines or computers could ever dream? Why / why not?",
  ],
  writing: {
    task: "Write a short paragraph giving your own ideas about why people dream. Use 'may', 'might' and 'could' at least once each, plus three words from this topic.",
    minWords: 80,
  },
  quiz: [
    {
      type: "multiple-choice",
      prompt: "Choose the correct sentence:",
      options: [
        "Dreams might to help us remember.",
        "Dreams might help us remember.",
        "Dreams might helping us remember.",
        "Dreams might helps us remember.",
      ],
      answer: 1,
      explanation: "After a modal (might) we use the infinitive without 'to': 'might help'.",
    },
    {
      type: "gap-fill",
      prompt: "I'm not sure, but it ___ rain later. (possible — one modal)",
      answer: "might",
      accept: ["may", "could"],
      explanation: "'might', 'may' or 'could' all show possibility here.",
    },
    {
      type: "gap-fill",
      prompt: "We ___ (might / not) remember our dreams in the morning.",
      answer: "might not",
      accept: ["may not"],
      explanation: "Negative possibility → 'might not' or 'may not'.",
    },
    {
      type: "gap-fill",
      prompt: "A bad dream is also called a ___.",
      answer: "nightmare",
      explanation: "A frightening dream is a 'nightmare'.",
    },
    {
      type: "multiple-choice",
      prompt: "'mystery' means:",
      options: [
        "something easy to explain",
        "something difficult to understand or explain",
        "a kind of food",
        "a happy feeling",
      ],
      answer: 1,
      explanation: "A 'mystery' is something strange and hard to explain.",
    },
  ],
};
