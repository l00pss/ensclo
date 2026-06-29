import type { Topic } from "../types";

export const b1Fashion: Topic = {
  id: "b1-fashion",
  level: "B1",
  title: "Clothes and Fashion",
  theme: "Fashion",
  summary:
    "Talk about clothes and style, and learn the correct order of adjectives before a noun together with this, that, these and those.",
  leadIn: [
    "What kind of clothes do you usually wear?",
    "Do you prefer comfortable clothes or trendy clothes?",
    "How often do you buy new clothes?",
  ],
  vocabulary: [
    {
      word: "outfit",
      definition: "a set of clothes that you wear together",
      example: "She wore a beautiful outfit to the party.",
      collocations: ["a stylish outfit", "put together an outfit"],
      azNote: "geyim dəsti / komplekt (bir yerdə geyilən paltarlar)",
    },
    {
      word: "trendy",
      definition: "very fashionable and modern at the moment",
      example: "That shop sells trendy clothes for young people.",
      collocations: ["a trendy jacket", "look trendy"],
      azNote: "dəbdə olan / modern, son moda",
    },
    {
      word: "comfortable",
      definition: "pleasant to wear and not tight or painful",
      example: "These shoes are very comfortable for long walks.",
      collocations: ["comfortable clothes", "feel comfortable"],
      azNote: "rahat (geyinməsi xoş, sıxmayan)",
    },
    {
      word: "brand",
      definition: "the name of a company that makes a product",
      example: "He only buys clothes from expensive brands.",
      collocations: ["a famous brand", "a brand name"],
      azNote: "marka / brend (məhsul istehsal edən şirkətin adı)",
    },
    {
      word: "secondhand",
      definition: "already used or owned by someone else before",
      example: "I found this secondhand coat in a small shop.",
      collocations: ["secondhand clothes", "buy secondhand"],
      azNote: "işlənmiş / ikinci əl (əvvəl başqası tərəfindən istifadə olunmuş)",
    },
    {
      word: "wardrobe",
      definition: "all the clothes that a person owns",
      example: "She wants to change her whole wardrobe this spring.",
      collocations: ["a summer wardrobe", "update your wardrobe"],
      azNote: "qarderob (insanın bütün paltarları)",
    },
  ],
  grammar: {
    point: "Order of adjectives + this / that / these / those",
    explanation:
      "When we use more than one adjective before a noun, we usually follow this order: opinion, size, age, colour, material, then the noun (for example, 'a lovely small old blue cotton jacket'). We rarely use all of them at once, but the order stays the same. We also use 'this' and 'these' for things that are near us, and 'that' and 'those' for things that are far away; 'this/that' go with one thing and 'these/those' go with more than one.",
    azNote:
      "İsimdən əvvəl bir neçə sifət olanda sıra belədir: rəy, ölçü, yaş, rəng, material, sonra isim — məsələn 'a small old blue jacket'. 'This/these' yaxın şeylər, 'that/those' uzaq şeylər üçündür; 'this/that' təkdə, 'these/those' cəmdə işlənir.",
    examples: [
      { en: "I love this beautiful little red silk dress.", note: "opinion-size-colour-material, near + singular" },
      { en: "Those old leather boots are very comfortable.", note: "age-material, far + plural" },
      { en: "She bought a lovely big black wool coat.", note: "opinion-size-colour-material order" },
      { en: "These trendy new white trainers are a famous brand.", note: "near + plural with several adjectives" },
    ],
  },
  reading: {
    title: "A wardrobe that tells a story",
    text: `Maya loves clothes, but she does not like spending a lot of money. Every weekend she visits the small secondhand shops near her flat. "I can find amazing things here," she says. "Last month I bought a lovely little black cotton jacket for almost nothing. It is the best piece in my whole wardrobe."

Many young people today want trendy clothes from famous brands, but Maya thinks differently. She believes that an interesting outfit does not need an expensive brand name. "Look at this beautiful old red silk scarf," she says, holding it up. "Nobody else has one like it. New shops sell the same boring shirts to everyone."

Maya also says that comfort matters more than fashion. "These soft grey wool jumpers are warm and comfortable, and I can wear them for years. Those tight new shoes in the window look nice, but you cannot walk in them all day." For Maya, a good outfit must feel as good as it looks.

Her advice is simple. Before you buy anything, open your wardrobe and look at what you already have. Try to build outfits from old and new pieces together. Choose one or two good brands that you really trust, and do not throw away clothes that are still in good condition. A secondhand jacket or a comfortable pair of trousers can last for many years. In the end, Maya says, real style is not about money or labels. It is about choosing clothes that feel right and telling your own story through them.`,
    questions: [
      {
        type: "multiple-choice",
        prompt: "Where does Maya usually buy her clothes?",
        options: [
          "In expensive brand shops",
          "In small secondhand shops",
          "Only on the internet",
          "From her friends",
        ],
        answer: 1,
        explanation: "'Every weekend she visits the small secondhand shops near her flat.'",
      },
      {
        type: "multiple-choice",
        prompt: "What does Maya think an interesting outfit needs?",
        options: [
          "An expensive brand name",
          "Lots of new clothes",
          "Comfort and personal style, not a famous brand",
          "Only black colours",
        ],
        answer: 2,
        explanation:
          "She believes an interesting outfit does not need an expensive brand, and that comfort matters more than fashion.",
      },
      {
        type: "multiple-choice",
        prompt: "What is Maya's main advice before buying clothes?",
        options: [
          "Always buy the most trendy items",
          "Look at the wardrobe you already have",
          "Only buy clothes from one brand",
          "Never buy secondhand clothes",
        ],
        answer: 1,
        explanation: "'Before you buy anything, open your wardrobe and look at what you already have.'",
      },
    ],
  },
  speaking: [
    "Describe your favourite outfit using two or three adjectives in the correct order.",
    "Would you wear secondhand clothes? Why or why not?",
    "Is it more important for clothes to be trendy or comfortable? Explain your opinion.",
  ],
  writing: {
    task: "Describe three pieces of clothing in your wardrobe. Use adjectives in the correct order and use 'this', 'that', 'these' or 'those', plus three words from this topic.",
    minWords: 80,
  },
  quiz: [
    {
      type: "multiple-choice",
      prompt: "Choose the sentence with the correct order of adjectives:",
      options: [
        "She bought a lovely small old blue cotton jacket.",
        "She bought a cotton blue old small lovely jacket.",
        "She bought a blue lovely cotton small old jacket.",
        "She bought an old cotton lovely blue small jacket.",
      ],
      answer: 0,
      explanation: "The order is opinion-size-age-colour-material: lovely (opinion), small (size), old (age), blue (colour), cotton (material).",
    },
    {
      type: "gap-fill",
      prompt: "Look at ___ trousers over there; they are too long for me.",
      answer: "those",
      explanation: "'those' is for more than one thing that is far away.",
    },
    {
      type: "gap-fill",
      prompt: "I really like ___ jacket I am wearing right now.",
      answer: "this",
      explanation: "'this' is for one thing that is near you.",
    },
    {
      type: "multiple-choice",
      prompt: "Which means 'already used by someone else'?",
      options: ["trendy", "secondhand", "comfortable", "brand"],
      answer: 1,
      explanation: "'secondhand' = already used or owned by someone before.",
    },
    {
      type: "gap-fill",
      prompt: "All the clothes that a person owns are called a ___.",
      answer: "wardrobe",
      explanation: "A 'wardrobe' is all the clothes you own.",
    },
  ],
};
