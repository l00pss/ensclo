import type { Topic } from "../types";

export const b2Cinema: Topic = {
  id: "b2-cinema",
  level: "B2",
  title: "Film and Storytelling",
  theme: "Culture",
  summary:
    "Explore how films tell powerful stories, and learn to use reported speech to say what directors, critics and characters told us.",
  leadIn: [
    "What is the last film that genuinely stayed in your mind, and why?",
    "Do you prefer a clever plot or memorable characters? Explain your choice.",
    "When a friend recommends a film to you, what exactly do they usually tell you about it?",
  ],
  vocabulary: [
    {
      word: "plot",
      definition: "the series of connected events that make up the main story of a film or book",
      example: "Critics complained that the plot was confusing and far too slow.",
      collocations: ["a gripping plot", "the plot unfolds"],
      azNote: "süjet, hadisələr zənciri",
    },
    {
      word: "character",
      definition: "a person represented in a film, novel or play",
      example: "Audiences loved the film because every character felt believable and complex.",
      collocations: ["a main character", "develop a character"],
      azNote: "personaj, surət (filmdəki obraz)",
    },
    {
      word: "narrative",
      definition: "the way in which a story is told and organised",
      example: "The director chose a non-linear narrative that jumps between past and present.",
      collocations: ["a powerful narrative", "narrative structure"],
      azNote: "hekayələmə, povest quruluşu",
    },
    {
      word: "twist",
      definition: "a sudden, unexpected change in a story",
      example: "Nobody saw the final twist coming, and the whole cinema gasped.",
      collocations: ["a plot twist", "an unexpected twist"],
      azNote: "gözlənilməz dönüş, sürpriz son",
    },
    {
      word: "dialogue",
      definition: "the words that the characters in a film or play say to one another",
      example: "The dialogue felt natural, as if you were overhearing real conversations.",
      collocations: ["sharp dialogue", "write dialogue"],
      azNote: "dialoq, personajların danışığı",
    },
    {
      word: "to portray",
      definition: "to show or represent someone or something in a film, painting or book",
      example: "The actress was praised for the honest way she portrayed grief on screen.",
      collocations: ["portray a character", "realistically portray"],
      azNote: "təsvir etmək, canlandırmaq (rol oynamaq)",
    },
  ],
  grammar: {
    point: "Reported speech (backshift, say vs tell, reported questions)",
    explanation:
      "When we report what someone said earlier, the verb usually moves one tense back: present simple becomes past simple, present continuous becomes past continuous, and 'will' becomes 'would'. We use 'tell' when we mention the listener ('He told me that...'), but 'say' when we do not ('He said that...'). In reported questions we keep normal word order and drop the question mark; for yes/no questions we use 'if' or 'whether'.",
    azNote:
      "Kiminsə dediyini sonradan çatdıranda feil adətən bir zaman geri çəkilir: present simple past simple olur, 'will' isə 'would' olur. Dinləyəni qeyd edəndə 'tell' işlədirik ('He told me'), qeyd etməyəndə 'say' ('He said'). Sual çatdıranda söz sırası adi cümlədəki kimi qalır, sual işarəsi düşür, bəli/xeyr suallarında isə 'if' ya 'whether' işlədirik.",
    examples: [
      { en: "The director said that the film was a love story.", note: "say + that, present → past" },
      { en: "She told us that she would change the ending.", note: "tell + listener, will → would" },
      { en: "He asked me whether I had seen the sequel.", note: "reported yes/no question with 'whether'" },
      { en: "The critic asked why the plot felt so slow.", note: "reported wh-question, normal word order" },
    ],
  },
  reading: {
    title: "What the storytellers told us",
    text: `At a recent film festival, several directors were invited to explain how they build a story, and what they said revealed just how carefully a film is constructed. One award-winning director told the audience that a good plot was never an accident. He explained that he always knew the ending before he wrote a single line of dialogue, because every scene had to point quietly towards it.

A screenwriter sitting beside him disagreed. She said that the most important element was not the plot at all, but the people inside it. She argued that audiences forgive a slow story if they care about even one character, and she told us that her job was to portray ordinary people so honestly that strangers in the dark would recognise themselves. When a journalist asked her whether she ever based characters on real friends, she laughed and admitted that she did, although she would never confess which ones.

The conversation then turned to surprise. A young director claimed that modern viewers had become too clever, and that they could guess a twist long before it arrived. He said that the solution was not to hide information but to control the narrative, slowly revealing the truth so that the ending felt both shocking and inevitable. Another panellist asked him how he tested this, and he replied that he showed early versions to small audiences and watched their faces.

By the end, the directors agreed on one idea. They told the listeners that technology would keep changing, but that the basic rules of storytelling would survive. Stories, they insisted, are how human beings have always made sense of the world, and no new screen would ever change that.`,
    questions: [
      {
        type: "multiple-choice",
        prompt: "What did the award-winning director say about the plot?",
        options: [
          "That it was always an accident",
          "That a good plot was never an accident and he knew the ending first",
          "That endings do not matter",
          "That dialogue should come before the story",
        ],
        answer: 1,
        explanation:
          "He told the audience that a good plot was never an accident, and that he knew the ending before writing dialogue.",
      },
      {
        type: "multiple-choice",
        prompt: "Why did the screenwriter say characters matter more than plot?",
        options: [
          "Because plots are easy to write",
          "Because audiences forgive a slow story if they care about a character",
          "Because she dislikes complex stories",
          "Because critics demand it",
        ],
        answer: 1,
        explanation:
          "She argued that audiences forgive a slow story if they care about even one character.",
      },
      {
        type: "multiple-choice",
        prompt: "According to the young director, how should a writer handle a twist?",
        options: [
          "Hide all information from viewers",
          "Avoid twists completely",
          "Control the narrative so the ending feels shocking yet inevitable",
          "Copy older films",
        ],
        answer: 2,
        explanation:
          "He said the solution was to control the narrative, revealing the truth so the ending felt shocking and inevitable.",
      },
    ],
  },
  speaking: [
    "Tell a partner about a film you saw recently, reporting what other people said about it ('My friend told me that...').",
    "Describe a character or a plot twist that surprised you, and explain why it worked so well.",
    "Some people say streaming has ruined the cinema experience. Report both sides of the argument using 'said' and 'told'.",
  ],
  writing: {
    task: "Write a short review of a film you have seen. Report what at least two people (a friend, a critic or a character) said about it, using reported speech with both 'say' and 'tell', and include three words from this topic.",
    minWords: 120,
  },
  quiz: [
    {
      type: "gap-fill",
      prompt: "Direct: 'The plot is brilliant.' Reported: She said that the plot ___ brilliant.",
      answer: "was",
      explanation: "Present simple 'is' backshifts to past simple 'was' in reported speech.",
    },
    {
      type: "multiple-choice",
      prompt: "Choose the correct sentence:",
      options: [
        "He said me that the film was long.",
        "He told that the film was long.",
        "He told me that the film was long.",
        "He said me the film was long.",
      ],
      answer: 2,
      explanation: "'tell' needs the listener ('told me'); 'say' does not take the listener directly.",
    },
    {
      type: "gap-fill",
      prompt: "Direct: 'I will change the ending.' Reported: She said she ___ change the ending.",
      answer: "would",
      explanation: "'will' backshifts to 'would' in reported speech.",
    },
    {
      type: "multiple-choice",
      prompt: "Report this question correctly: 'Have you seen the sequel?'",
      options: [
        "He asked me have I seen the sequel.",
        "He asked me whether I had seen the sequel.",
        "He asked me whether had I seen the sequel?",
        "He asked me did I see the sequel.",
      ],
      answer: 1,
      explanation:
        "Reported yes/no questions use 'if/whether', normal word order, no question mark, and 'have' backshifts to 'had'.",
    },
    {
      type: "gap-fill",
      prompt: "The unexpected change at the end of a story is called a plot ___.",
      answer: "twist",
      explanation: "'twist' = a sudden, unexpected change in a story.",
    },
  ],
};
