import type { Topic } from "../types";

export const b2Advertising: Topic = {
  id: "b2-advertising",
  level: "B2",
  title: "The Art of Advertising",
  theme: "Business",
  summary:
    "Learn the tricks that advertisers use to influence us, and practise reported speech to tell others what people said.",
  leadIn: [
    "What is the most memorable advertisement you have ever seen? Why?",
    "Do you think advertising influences what you buy? Be honest!",
    "Should there be stricter rules about advertising to children?",
  ],
  vocabulary: [
    {
      word: "to persuade",
      definition: "to make someone decide to do or believe something",
      example: "A good advert does not just inform; it persuades.",
      collocations: ["persuade someone to", "try to persuade"],
      azNote: "inandırmaq / razı salmaq",
    },
    {
      word: "brand",
      definition: "a product or company name that customers recognise",
      example: "People will often pay more for a brand they trust.",
      collocations: ["a famous brand", "build a brand"],
      azNote: "brend / marka",
    },
    {
      word: "consumer",
      definition: "a person who buys goods or services",
      example: "Advertisers study how consumers make decisions.",
      collocations: ["the average consumer", "consumer behaviour"],
      azNote: "istehlakçı / alıcı",
    },
    {
      word: "to claim",
      definition: "to say that something is true, often without proof",
      example: "The company claimed that its product was completely natural.",
      collocations: ["claim that", "a false claim"],
      azNote: "iddia etmək",
    },
    {
      word: "to influence",
      definition: "to have an effect on the way someone thinks or behaves",
      example: "Bright colours and music influence us more than we realise.",
      collocations: ["influence a decision", "a strong influence"],
      azNote: "təsir etmək",
    },
    {
      word: "tempting",
      definition: "attractive in a way that makes you want to have or do something",
      example: "The advert made the holiday look incredibly tempting.",
      collocations: ["a tempting offer", "look tempting"],
      azNote: "cəzbedici / şirnikdirici",
    },
  ],
  grammar: {
    point: "Reported speech",
    explanation:
      "When we report what someone said, we usually move the tense 'one step back': present → past, will → would, can → could. Pronouns and time words may also change. 'I love this product' → She said (that) she loved that product. For questions, we use 'asked' and normal word order: 'Do you want it?' → He asked if I wanted it.",
    azNote:
      "Reported speech = başqasının dediyini ötürmək. Zaman bir addım geri çəkilir: present→past, will→would, can→could. Əvəzliklər və vaxt sözləri də dəyişə bilər. 'I am tired' → She said (that) she was tired. Suallarda 'asked' + düz söz sırası: 'Are you ready?' → He asked if I was ready.",
    examples: [
      { en: '"We use only natural ingredients." → They said they used only natural ingredients.', note: "present → past" },
      { en: '"This will change your life." → The advert claimed it would change your life.', note: "will → would" },
      { en: '"Do you want the deal?" → She asked if I wanted the deal.', note: "question → asked if + normal order" },
      {
        en: '"Buy it now!" → He told me to buy it.',
        note: "commands → told someone to + infinitive",
      },
    ],
  },
  reading: {
    title: "How adverts get inside our heads",
    text: `We like to believe that we make our own decisions, but advertisers know better. Every year, companies spend enormous sums trying to persuade us to choose one brand instead of another, and most of the time we do not even notice it happening.

One classic technique is the promise of happiness. Adverts rarely sell the product itself; they sell a feeling. A drinks company once told viewers that its soda would bring friends together and make every moment special. It did not say that the drink tasted good — it claimed that the drink would improve their lives. That is a much more tempting message.

Another trick is to use trusted faces. When a famous athlete says that they wear a particular brand, consumers feel that the product must be good. Researchers asked shoppers why they had chosen certain trainers, and many replied that they had seen their favourite player wearing them. They did not realise how much the advert had influenced them.

Advertisers also create a sense of urgency. They tell us that an offer will end soon, or that only a few items are left. A clothing website might announce that the sale would finish at midnight, even when it would quietly start again the next day. This pressure makes us buy quickly, before we have time to think.

Understanding these techniques does not make us immune to them, but it helps. The next time an advert tells you that a product will make you happier, healthier or more popular, it is worth asking one simple question: is that really true, or is someone just trying to sell me something?`,
    questions: [
      {
        type: "multiple-choice",
        prompt: "According to the text, what do adverts usually sell?",
        options: ["The product itself", "A feeling", "Only information", "Lower prices"],
        answer: 1,
        explanation: "'Adverts rarely sell the product itself; they sell a feeling.'",
      },
      {
        type: "multiple-choice",
        prompt: "Why do advertisers use famous faces?",
        options: [
          "Because celebrities work for free",
          "Because consumers feel the product must be good",
          "Because it is cheaper",
          "Because it is required by law",
        ],
        answer: 1,
        explanation: "'consumers feel that the product must be good'.",
      },
      {
        type: "multiple-choice",
        prompt: "How does 'a sense of urgency' make us behave?",
        options: [
          "We wait and compare prices.",
          "We buy quickly, before we have time to think.",
          "We never buy anything.",
          "We complain to the company.",
        ],
        answer: 1,
        explanation: "'This pressure makes us buy quickly, before we have time to think.'",
      },
    ],
  },
  speaking: [
    "Report an advert you remember: what did it say or claim about the product?",
    "Tell a partner about a time someone persuaded you to buy something. What did they say?",
    "Do you think advertising is mostly harmful or mostly useful? Explain your view.",
  ],
  writing: {
    task: "Describe an advertisement and report what it said using reported speech (e.g. 'The advert claimed that...', 'It said that...'). Use at least four reported-speech sentences and three words from this topic.",
    minWords: 110,
  },
  quiz: [
    {
      type: "gap-fill",
      prompt: 'Direct: "We use natural ingredients." → They said they ___ (use) natural ingredients.',
      answer: "used",
      explanation: "Reported speech moves present → past: 'use' becomes 'used'.",
    },
    {
      type: "gap-fill",
      prompt: 'Direct: "This will change your life." → The advert claimed it ___ (will) change your life.',
      answer: "would",
      explanation: "In reported speech, 'will' becomes 'would'.",
    },
    {
      type: "multiple-choice",
      prompt: 'Report this question: "Do you want the deal?"',
      options: [
        "She asked do I want the deal.",
        "She asked if I wanted the deal.",
        "She asked if did I want the deal.",
        "She asked that I wanted the deal.",
      ],
      answer: 1,
      explanation: "Reported questions: 'asked if' + normal word order + backshift ('wanted').",
    },
    {
      type: "gap-fill",
      prompt: "A person who buys goods or services is a ___.",
      answer: "consumer",
      explanation: "'consumer' = a person who buys goods or services.",
    },
    {
      type: "multiple-choice",
      prompt: "'to persuade' means:",
      options: [
        "to make someone decide to do or believe something",
        "to ignore someone",
        "to sell something cheaply",
        "to tell the truth",
      ],
      answer: 0,
      explanation: "'to persuade' = to make someone decide to do or believe something.",
    },
  ],
};
