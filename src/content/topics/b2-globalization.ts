import type { Topic } from "../types";

export const b2Globalization: Topic = {
  id: "b2-globalization",
  level: "B2",
  title: "Globalization",
  theme: "Economy",
  summary:
    "Explore how the world economy is becoming more connected, and master comparative structures and linking words to compare ideas and signal contrast.",
  leadIn: [
    "How has globalization changed the products you buy every day?",
    "Do you think a connected world economy helps poorer countries more than richer ones?",
    "Is it better for a country to produce its own goods or to trade with the whole world?",
  ],
  vocabulary: [
    {
      word: "globalization",
      definition:
        "the process by which businesses, cultures and economies become closely connected across the world",
      example:
        "Globalization has made it far cheaper to move goods and ideas between continents.",
      collocations: ["the spread of globalization", "economic globalization"],
      azNote:
        "qloballaşma, yəni dünya iqtisadiyyatlarının və mədəniyyətlərinin bir-birinə bağlanması prosesidir",
    },
    {
      word: "multinational",
      definition:
        "a large company that owns offices, factories or shops in several different countries",
      example:
        "A single multinational can employ more people than many small nations.",
      collocations: ["a multinational corporation", "powerful multinationals"],
      azNote:
        "transmilli, yəni bir neçə ölkədə fəaliyyət göstərən nəhəng şirkət deməkdir",
    },
    {
      word: "to outsource",
      definition:
        "to pay another company, often in a cheaper country, to do work that was once done inside your own business",
      example:
        "Many firms outsource their customer service to call centres abroad.",
      collocations: ["outsource production", "outsource jobs overseas"],
      azNote:
        "kənar şirkətə həvalə etmək, yəni işi başqa, çox vaxt daha ucuz ölkədəki şirkətə tapşırmaq deməkdir",
    },
    {
      word: "supply chain",
      definition:
        "the whole network of people and companies that produce a product and deliver it to customers",
      example:
        "When one factory closed, the entire supply chain was disrupted for months.",
      collocations: ["a global supply chain", "a supply chain disruption"],
      azNote:
        "tədarük zənciri, yəni məhsulu istehsal edib istehlakçıya çatdıran şirkətlər şəbəkəsidir",
    },
    {
      word: "interdependent",
      definition:
        "depending on each other, so that what happens in one place strongly affects the other",
      example:
        "Modern economies are so interdependent that a crisis in one country quickly spreads.",
      collocations: ["economically interdependent", "an interdependent world"],
      azNote:
        "qarşılıqlı asılı, yəni bir-birindən asılı olub, birinin halı digərinə güclü təsir edir",
    },
    {
      word: "homogenization",
      definition:
        "the process by which different things, especially cultures, gradually become similar or the same",
      example:
        "Some critics warn that the homogenization of culture is erasing local traditions.",
      collocations: ["cultural homogenization", "the homogenization of taste"],
      azNote:
        "eyniləşmə, yəni fərqli mədəniyyətlərin tədricən bir-birinə oxşar hala gəlməsi prosesidir",
    },
  ],
  grammar: {
    point: "Comparative structures and linking words",
    explanation:
      "To say that two changes rise together, use 'the more ... the more' (e.g. 'The more we trade, the richer we become'). To make a comparison stronger, add 'much' or 'far' before a comparative ('far cheaper', 'much more connected'). Linking words signal the relationship between ideas: 'however' adds a contrast, 'therefore' shows a result, and 'whereas' contrasts two facts inside one sentence.",
    azNote:
      "İki dəyişikliyin birlikdə artdığını demək üçün 'the more ... the more' işlədilir. Müqayisəni gücləndirmək üçün comparative-dən əvvəl 'much' və ya 'far' əlavə olunur, məsələn 'far cheaper'. Bağlayıcılar isə fikirlər arasında əlaqəni göstərir: 'however' ziddiyyət, 'therefore' nəticə, 'whereas' isə müqayisə bildirir.",
    examples: [
      {
        en: "The more countries trade, the more interdependent they become.",
        note: "'the more ... the more': two changes rise together",
      },
      {
        en: "Shipping is far cheaper today than it was fifty years ago.",
        note: "'far' + comparative makes the comparison stronger",
      },
      {
        en: "Globalization creates wealth; however, it does not share it equally.",
        note: "'however' introduces a contrast, usually after a semicolon or full stop",
      },
      {
        en: "Wages are low in some regions, whereas they are very high in others.",
        note: "'whereas' contrasts two facts within a single sentence",
      },
    ],
  },
  reading: {
    title: "A smaller world",
    text: `Globalization is the process by which the economies and cultures of the world have become tightly linked. A century ago, most people bought goods that were made nearby; today, the components of a single phone may travel through a supply chain that crosses a dozen borders before it ever reaches a shop. The more efficient transport and the internet become, the more closely nations are tied together, and as a result the world feels far smaller than it once did.

The driving force behind this change is the modern multinational. Such a company will design a product in one country, outsource its manufacturing to another where labour is cheaper, and sell the finished item everywhere. This makes production much more efficient and goods far cheaper for ordinary shoppers. However, it also means that economies are now deeply interdependent: when a factory in one region shuts down, the effects ripple along the whole supply chain and are felt thousands of kilometres away.

The benefits are real. Globalization has lifted millions of people out of poverty, and consumers enjoy a wider choice than any previous generation. Whereas a shopper in the past was limited to local products, a shopper today can buy almost anything from almost anywhere. The more open a market is, the faster new ideas and technologies tend to spread.

There are serious concerns, however. Critics point to the homogenization of culture, arguing that the more the same brands and films dominate, the more local traditions disappear. Others worry that when firms outsource jobs to cheaper countries, workers at home lose their incomes. The challenge, therefore, is not to stop globalization but to manage it so that its rewards are shared far more fairly than they are today.`,
    questions: [
      {
        type: "multiple-choice",
        prompt: "According to the text, what happens as transport and the internet improve?",
        options: [
          "Nations become less connected.",
          "Nations become more closely tied together.",
          "Goods become much more expensive.",
          "The supply chain disappears.",
        ],
        answer: 1,
        explanation:
          "'The more efficient transport and the internet become, the more closely nations are tied together.'",
      },
      {
        type: "multiple-choice",
        prompt: "Why does outsourcing make goods cheaper for shoppers?",
        options: [
          "Because companies design products at home.",
          "Because manufacturing is moved to countries where labour is cheaper.",
          "Because consumers have less choice.",
          "Because local traditions disappear.",
        ],
        answer: 1,
        explanation:
          "Companies 'outsource its manufacturing to another where labour is cheaper', which makes goods far cheaper.",
      },
      {
        type: "multiple-choice",
        prompt: "What is the writer's main conclusion?",
        options: [
          "Globalization should be stopped completely.",
          "Globalization has no real benefits.",
          "Globalization should be managed so its rewards are shared more fairly.",
          "Cultural homogenization is always a good thing.",
        ],
        answer: 2,
        explanation:
          "'The challenge, therefore, is not to stop globalization but to manage it so that its rewards are shared far more fairly.'",
      },
    ],
  },
  speaking: [
    "Compare life in your country before and after globalization, using 'far' or 'much' with comparatives.",
    "Do you agree that 'the more global the world becomes, the more local identity matters'? Explain your view.",
    "Some say multinationals help poor countries, whereas others say they exploit them. Discuss both sides.",
  ],
  writing: {
    task:
      "Write an essay arguing whether globalization helps or harms ordinary people. Use 'the more ... the more', at least one 'much'/'far' comparative, and the linking words 'however', 'therefore' and 'whereas'.",
    minWords: 120,
  },
  quiz: [
    {
      type: "gap-fill",
      prompt: "___ countries trade, the more interdependent they become.",
      answer: "The more",
      accept: ["the more"],
      explanation:
        "'The more ... the more' links two changes that rise together: 'The more countries trade, the more interdependent they become.'",
    },
    {
      type: "multiple-choice",
      prompt: "Choose the correct sentence to strengthen the comparison:",
      options: [
        "Shipping is very cheaper than before.",
        "Shipping is far cheaper than before.",
        "Shipping is more cheap than before.",
        "Shipping is the cheaper than before.",
      ],
      answer: 1,
      explanation:
        "We use 'far' (or 'much') before a comparative to make it stronger: 'far cheaper'. 'Very cheaper' is incorrect.",
    },
    {
      type: "gap-fill",
      prompt:
        "Wages are low in some regions, ___ they are very high in others. (linking word for contrast within one sentence)",
      answer: "whereas",
      accept: ["whereas"],
      explanation:
        "'Whereas' contrasts two facts inside a single sentence.",
    },
    {
      type: "multiple-choice",
      prompt:
        "Globalization creates wealth; ___, it does not always share it fairly. Which word fits best?",
      options: ["therefore", "however", "because", "whereas"],
      answer: 1,
      explanation:
        "'However' introduces a contrast between two sentences; the second idea opposes the first.",
    },
    {
      type: "multiple-choice",
      prompt: "Which word means 'to pay another company to do work once done internally'?",
      options: ["to outsource", "to homogenize", "to supply", "to globalize"],
      answer: 0,
      explanation:
        "'To outsource' means to hand work over to an outside company, often in a cheaper country.",
    },
  ],
};
