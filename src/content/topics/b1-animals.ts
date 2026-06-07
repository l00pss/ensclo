import type { Topic } from "../types";

export const b1Animals: Topic = {
  id: "b1-animals",
  level: "B1",
  title: "The World's Strangest Animals",
  theme: "Animals",
  summary:
    "Meet some of the strangest creatures on Earth, and learn to compare things with comparatives and superlatives.",
  leadIn: [
    "What is the most unusual animal you have ever seen?",
    "Which animal do you think is the most intelligent? Why?",
    "Are you more afraid of spiders or snakes?",
  ],
  vocabulary: [
    {
      word: "creature",
      definition: "any living thing that can move, such as an animal",
      example: "The deep ocean is full of strange creatures.",
      collocations: ["a strange creature", "sea creature"],
      azNote: "canlı / məxluq",
    },
    {
      word: "survive",
      definition: "to continue to live, especially in a difficult situation",
      example: "Some animals can survive for months without water.",
      collocations: ["survive the winter", "survive without food"],
      azNote: "sağ qalmaq / yaşamağı bacarmaq",
    },
    {
      word: "poisonous",
      definition: "containing a substance that can harm or kill you",
      example: "The poison dart frog is one of the most poisonous animals in the world.",
      collocations: ["highly poisonous", "a poisonous snake"],
      azNote: "zəhərli",
    },
    {
      word: "tiny",
      definition: "extremely small",
      example: "The bee hummingbird is tiny — smaller than your thumb.",
      collocations: ["a tiny insect", "tiny amount"],
      azNote: "balaca / çox kiçik",
    },
    {
      word: "weird",
      definition: "very strange or unusual",
      example: "The axolotl has a weird smile and can grow new body parts.",
      collocations: ["really weird", "a weird sound"],
      azNote: "qəribə / acaib",
    },
    {
      word: "predator",
      definition: "an animal that hunts and eats other animals",
      example: "Sharks are powerful predators, but they rarely attack humans.",
      collocations: ["a top predator", "natural predator"],
      azNote: "yırtıcı (ovlayan heyvan)",
    },
  ],
  grammar: {
    point: "Comparatives & superlatives",
    explanation:
      "For short adjectives, add -er / -est: 'small → smaller → the smallest'. For long adjectives, use 'more' / 'the most': 'dangerous → more dangerous → the most dangerous'. We use 'than' to compare two things ('A is bigger than B') and 'the ...-est / the most ...' to compare one with all the others. Some are irregular: good → better → the best; bad → worse → the worst.",
    azNote:
      "Comparative (iki şeyi müqayisə): qısa sifət +er + 'than' (bigger than), uzun sifət 'more ... than'. Superlative (hamısı içində ən): 'the ...-est' (the biggest) və ya 'the most ...'. Qaydasızlar: good→better→best, bad→worse→worst.",
    examples: [
      { en: "A cheetah is faster than a lion.", note: "comparative + than" },
      { en: "The blue whale is the biggest animal on Earth.", note: "superlative: the biggest" },
      { en: "This frog is more poisonous than that snake.", note: "long adjective: more ... than" },
      {
        en: "The cheetah is the most dangerous predator here.",
        note: "superlative: the most ...",
      },
    ],
  },
  reading: {
    title: "Stranger than you think",
    text: `Our planet is home to millions of animals, but some are much stranger than others. From the deepest oceans to the highest mountains, nature has created creatures that look almost impossible.

Take the axolotl, a weird little creature from Mexico. It looks like it is always smiling, and it has an amazing skill: if it loses a leg, it can simply grow a new one. Few animals in the world are stranger than this.

Then there is the bee hummingbird, the smallest bird on the planet. It is tinier than many insects and weighs less than a coin, yet it can fly faster than your eyes can follow. Being so tiny is dangerous, but it also helps the small bird hide from larger predators.

Some animals are strange because they are deadly. The poison dart frog is brighter and more colourful than most frogs, but it is also one of the most poisonous animals on Earth. Its bright colours are a warning: "Don't touch me!"

Perhaps the toughest of all is the tardigrade, a microscopic animal smaller than a grain of sand. It can survive in space, in boiling water and in ice. Scientists say it is the most difficult creature in the world to kill. The natural world is far weirder — and far more wonderful — than most people imagine.`,
    questions: [
      {
        type: "multiple-choice",
        prompt: "What special skill does the axolotl have?",
        options: [
          "It can fly.",
          "It can grow a new leg.",
          "It can change colour.",
          "It can live for 200 years.",
        ],
        answer: 1,
        explanation: "'if it loses a leg, it can simply grow a new one'.",
      },
      {
        type: "multiple-choice",
        prompt: "Why are the poison dart frog's colours bright?",
        options: [
          "To attract other frogs",
          "As a warning to stay away",
          "To hide in flowers",
          "Because it is sick",
        ],
        answer: 1,
        explanation: "'Its bright colours are a warning: \"Don't touch me!\"'",
      },
      {
        type: "multiple-choice",
        prompt: "What does the text say about the tardigrade?",
        options: [
          "It is the largest animal on Earth.",
          "It is the most difficult creature to kill.",
          "It can only live in the ocean.",
          "It is a kind of bird.",
        ],
        answer: 1,
        explanation: "'it is the most difficult creature in the world to kill'.",
      },
    ],
  },
  speaking: [
    "Compare two animals you know well. Which is bigger, faster, or more dangerous?",
    "Which of the animals in the text do you find the most interesting, and why?",
    "What is the best pet to have in a small flat? Explain your choice.",
  ],
  writing: {
    task: "Write a short description comparing three animals. Use at least two comparatives (with 'than') and two superlatives, plus three words from this topic.",
    minWords: 80,
  },
  quiz: [
    {
      type: "gap-fill",
      prompt: "A cheetah is ___ (fast) than a lion.",
      answer: "faster",
      explanation: "Short adjective comparative: fast → faster (+ than).",
    },
    {
      type: "gap-fill",
      prompt: "The blue whale is the ___ (big) animal on Earth.",
      answer: "biggest",
      explanation: "Superlative of a short adjective: big → the biggest (double the g).",
    },
    {
      type: "gap-fill",
      prompt: "This frog is ___ (poisonous) than that snake.",
      answer: "more poisonous",
      explanation: "Long adjective comparative: more poisonous + than.",
    },
    {
      type: "multiple-choice",
      prompt: "Choose the correct superlative:",
      options: [
        "It is the most dangerous predator.",
        "It is the dangerousest predator.",
        "It is the more dangerous predator.",
        "It is most dangerous predator.",
      ],
      answer: 0,
      explanation: "Long adjective superlative: 'the most dangerous'.",
    },
    {
      type: "multiple-choice",
      prompt: "'tiny' means:",
      options: ["very large", "extremely small", "very fast", "very loud"],
      answer: 1,
      explanation: "'tiny' = extremely small.",
    },
  ],
};
