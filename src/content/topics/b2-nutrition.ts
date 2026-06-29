import type { Topic } from "../types";

export const b2Nutrition: Topic = {
  id: "b2-nutrition",
  level: "B2",
  title: "Food, Diet and Nutrition",
  theme: "Health",
  summary:
    "Explore what it really means to eat well, and master quantifiers (too much/too many, (not) enough, a little/a few) together with so and such.",
  leadIn: [
    "How balanced would you say your own diet is, and why?",
    "Do you eat too much of anything, or not enough of something healthy?",
    "Is it better to follow strict food rules or to eat everything in moderation?",
  ],
  vocabulary: [
    {
      word: "nutrient",
      definition: "a substance in food that living things need to grow, repair themselves and stay healthy",
      example: "Vegetables are packed with nutrients that keep the body working well.",
      collocations: ["essential nutrients", "rich in nutrients"],
      azNote: "qida maddəsi, orqanizmin böyüməsi və sağlamlığı üçün lazım olan maddə",
    },
    {
      word: "processed",
      definition: "(of food) changed from its natural state, often by adding sugar, salt or chemicals",
      example: "Heavily processed snacks usually contain more salt than we realise.",
      collocations: ["processed food", "highly processed"],
      azNote: "emal olunmuş qida, təbii halından dəyişdirilmiş, şəkər və ya duz əlavə edilmiş",
    },
    {
      word: "balanced",
      definition: "containing the right amounts of different things in sensible proportions",
      example: "A balanced diet includes protein, vegetables, fruit and whole grains.",
      collocations: ["a balanced diet", "well balanced"],
      azNote: "balanslaşdırılmış, müxtəlif maddələrin düzgün nisbətdə olduğu",
    },
    {
      word: "portion",
      definition: "the amount of food that is served to one person at one time",
      example: "Restaurants often serve such a large portion that nobody can finish it.",
      collocations: ["portion size", "a large portion"],
      azNote: "porsiya, bir adama bir dəfəyə verilən yemək miqdarı",
    },
    {
      word: "deficiency",
      definition: "a lack of something the body needs, especially a particular nutrient",
      example: "An iron deficiency can make you feel tired and weak.",
      collocations: ["a vitamin deficiency", "an iron deficiency"],
      azNote: "çatışmazlıq, orqanizmin ehtiyac duyduğu maddənin, məsələn vitaminin, əskikliyi",
    },
    {
      word: "moderation",
      definition: "the practice of doing or having something in sensible, limited amounts",
      example: "Sweets are fine in moderation, but not every single day.",
      collocations: ["in moderation", "eat in moderation"],
      azNote: "ölçülülük, mötədillik, nəyisə ağıllı və məhdud miqdarda etmək",
    },
  ],
  grammar: {
    point: "Quantifiers (too much/too many, (not) enough, a little/a few) and so/such",
    explanation:
      "Use 'too much' with uncountable nouns and 'too many' with countable nouns to say there is more than we want: 'too much sugar', 'too many calories'. '(not) enough' means the right amount or less than we need; it goes before a noun but after an adjective: 'enough vegetables', 'not healthy enough'. Use 'a little' with uncountable nouns and 'a few' with countable nouns for small positive amounts. For emphasis, use 'so + adjective/adverb' and 'such (a/an) + (adjective +) noun': 'so tired', 'such a good idea'.",
    azNote:
      "'too much' sayılmayan, 'too many' isə sayılan isimlərlə işlənir və lazım olandan çox olduğunu bildirir. 'enough' kifayət qədər deməkdir, isimdən əvvəl, sifətdən isə sonra gəlir, məsələn 'enough food', 'good enough'. 'a little' sayılmayan, 'a few' sayılan isimlərlə kiçik müsbət miqdar üçündür. Vurğu üçün 'so' sifət və ya zərflə, 'such' isə isimlə işlənir.",
    examples: [
      { en: "We eat too much sugar and too many snacks.", note: "too much + uncountable, too many + countable" },
      { en: "I don't get enough sleep, and my diet isn't healthy enough.", note: "'enough' before a noun, after an adjective" },
      { en: "Add a little salt and a few vegetables.", note: "a little + uncountable, a few + countable" },
      { en: "The meal was so delicious that I ate such a big portion.", note: "so + adjective, such + a + adjective + noun" },
    ],
  },
  reading: {
    title: "Eating well in a busy world",
    text: `Most people know that what they eat matters, yet very few of us manage to follow a truly balanced diet. We are so busy that we grab whatever is quick, and far too often that means heavily processed food full of sugar, salt and fat. These products are designed to taste so good that we eat too much of them without noticing, and at the same time we rarely get enough of the vitamins and minerals our bodies actually need.

A nutrient is any substance in food that the body uses to grow, repair itself and produce energy. We need a lot of some nutrients, such as protein and carbohydrates, but only a little of others, like certain minerals. When we do not eat enough of a particular nutrient over a long period, we can develop a deficiency. An iron deficiency, for example, leaves so many people feeling tired and weak, even though they may be eating too many calories overall.

The good news is that a few small changes make a big difference. Nutritionists rarely tell us to give up everything we love; instead, they recommend moderation. A few biscuits at the weekend will not ruin your health, but eating too many every single day certainly will. Controlling your portion size is one of the simplest tricks: serving a little less food on a smaller plate helps most people avoid overeating, and it is such a simple habit that anyone can build it.

In the end, there is no magic food and no perfect diet. The aim is balance — enough fruit and vegetables, not too much sugar, and just a few treats to keep life enjoyable. It is such an obvious idea that we often ignore it, yet people who eat with moderation, watch their portion sizes and choose fewer processed products tend to feel so much better.`,
    questions: [
      {
        type: "multiple-choice",
        prompt: "Why do many people fail to follow a balanced diet, according to the first paragraph?",
        options: [
          "They dislike the taste of healthy food.",
          "They are so busy that they choose quick, processed food.",
          "Healthy food is impossible to find.",
          "Doctors advise them to eat processed snacks.",
        ],
        answer: 1,
        explanation: "'We are so busy that we grab whatever is quick, and far too often that means heavily processed food'.",
      },
      {
        type: "multiple-choice",
        prompt: "What does the text say can happen when we do not eat enough of a nutrient?",
        options: [
          "We gain weight immediately.",
          "We stop feeling hungry.",
          "We can develop a deficiency.",
          "Our portion sizes increase.",
        ],
        answer: 2,
        explanation: "'When we do not eat enough of a particular nutrient over a long period, we can develop a deficiency.'",
      },
      {
        type: "multiple-choice",
        prompt: "Which strategy does the text recommend for eating well?",
        options: [
          "Giving up everything you enjoy",
          "Eating as much fruit as possible",
          "Moderation and controlling portion sizes",
          "Counting only calories",
        ],
        answer: 2,
        explanation: "'they recommend moderation' and 'Controlling your portion size is one of the simplest tricks'.",
      },
    ],
  },
  speaking: [
    "Describe a typical day of eating for you. Do you get enough vegetables, or do you eat too much of something unhealthy?",
    "Some people say there is too much processed food in shops today. Do you agree, and why?",
    "How easy is it to eat in moderation when you are busy or stressed? What helps you keep a balanced diet?",
  ],
  writing: {
    task: "Write a paragraph giving advice on how to eat more healthily. Use quantifiers (too much/too many, (not) enough, a little/a few), at least one 'so/such' sentence, and three words from this topic.",
    minWords: 110,
  },
  quiz: [
    {
      type: "gap-fill",
      prompt: "Fizzy drinks contain far too ___ sugar to be a healthy choice.",
      answer: "much",
      explanation: "'sugar' is uncountable, so we use 'too much'.",
    },
    {
      type: "gap-fill",
      prompt: "When I was a child, I didn't eat ___ (enough) vegetables.",
      answer: "enough",
      accept: ["enough"],
      explanation: "'enough' before a noun means the right amount or less than we need.",
    },
    {
      type: "multiple-choice",
      prompt: "Choose the correct sentence:",
      options: [
        "There were too much calories in that meal.",
        "There were too many calories in that meal.",
        "There were a little calories in that meal.",
        "There were enough much calories in that meal.",
      ],
      answer: 1,
      explanation: "'calories' is countable and plural, so we use 'too many'.",
    },
    {
      type: "multiple-choice",
      prompt: "Complete the sentence: The portion was ___ big that I couldn't finish it.",
      options: ["so", "such", "such a", "too many"],
      answer: 0,
      explanation: "Use 'so' before an adjective ('big'); 'such' would need a noun, as in 'such a big portion'.",
    },
    {
      type: "multiple-choice",
      prompt: "A 'deficiency' is:",
      options: [
        "a lack of something the body needs",
        "a very large meal",
        "a type of cooking oil",
        "a balanced diet",
      ],
      answer: 0,
      explanation: "'deficiency' = a lack of something the body needs, especially a nutrient.",
    },
  ],
};
