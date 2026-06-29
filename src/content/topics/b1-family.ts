import type { Topic } from "../types";
export const b1Family: Topic = {
  id: "b1-family",
  level: "B1",
  title: "Family and Relationships",
  theme: "Relationships",
  summary: "Talk about family life and learn to use the present perfect with 'for' and 'since' to describe how long relationships have lasted.",
  leadIn: [
    "How many people are there in your family?",
    "Who are you closest to in your family, and why?",
    "How long have you known your best friend?",
  ],
  vocabulary: [
    { word: "relative", definition: "a person who belongs to your family, such as an aunt or cousin", example: "Every summer we visit a relative who lives by the sea.", collocations: ["close relative", "distant relative"], azNote: "qohum, ailə üzvü deməkdir, məsələn xala və ya əmioğlu, dəqiq tərcüməyə diqqət edin." },
    { word: "raise", definition: "to look after and help a child grow up", example: "My grandparents helped raise me when I was young.", collocations: ["raise a child", "raise a family"], azNote: "uşaq böyütmək, tərbiyə vermək mənasındadır, 'rise' (qalxmaq) ilə qarışdırmayın." },
    { word: "support", definition: "to help someone, especially during a difficult time", example: "Good families support each other when things go wrong.", collocations: ["support each other", "emotional support"], azNote: "dəstək olmaq, kömək etmək deməkdir, həm maddi həm mənəvi mənada işlənir." },
    { word: "argue", definition: "to speak angrily with someone because you disagree", example: "My brother and I sometimes argue about small things.", collocations: ["argue with someone", "argue about money"], azNote: "mübahisə etmək, höcətləşmək deməkdir, çox vaxt 'about' və ya 'with' ilə gəlir." },
    { word: "bond", definition: "a strong feeling of friendship or love that connects people", example: "There is a special bond between the twins.", collocations: ["strong bond", "form a bond"], azNote: "bağlılıq, ürək bağı, insanları birləşdirən güclü hiss deməkdir." },
    { word: "reunion", definition: "a meeting of people who have not seen each other for a long time", example: "Our family reunion brings together more than forty people.", collocations: ["family reunion", "happy reunion"], azNote: "görüş, qovuşma, uzun müddət görüşməyən insanların bir araya gəlməsi deməkdir." },
  ],
  grammar: {
    point: "Present perfect with 'for' and 'since'",
    explanation: "We use the present perfect (have/has + past participle) with 'for' and 'since' to talk about something that started in the past and is still true now. Use 'for' with a period of time, and use 'since' with a point in time.",
    azNote: "'for' müddət bildirir, məsələn 'for ten years' (on ildir), 'since' isə başlanğıc nöqtəsi bildirir, məsələn 'since 2010' (2010-cu ildən). Hər ikisi indiyə qədər davam edən hərəkət üçün present perfect ilə işlənir.",
    examples: [
      { en: "I have known her for ten years.", note: "'for' + a period of time" },
      { en: "We have lived in this house since 2010.", note: "'since' + a point in time" },
      { en: "They have been married for twenty years.", note: "still married now" },
      { en: "She has supported me since I was a child.", note: "'since' + a past moment" },
    ],
  },
  reading: {
    title: "A Family That Stays Close",
    text: `Maria comes from a large family, and she has loved big gatherings since she was a little girl. Her parents helped raise four children in a small town, and they always taught them to support one another. "We have been a close family for as long as I can remember," Maria says with a smile.

Every relative on her mother's side tries to meet once a year. The family reunion has happened every summer since 1995, and it grows bigger each time. Cousins, aunts, and grandparents travel from different cities to share food, music, and old stories. The strong bond between them has stayed alive for decades, even though many of them now live far apart.

Of course, no family is perfect. Maria admits that she and her sister sometimes argue about silly things, and they have disagreed about money since they were teenagers. However, these small fights never last long. "We have learned to forgive each other quickly," she explains. "A real argument has not divided us for many years, because family matters more than being right."

Maria believes that the secret is simple: spend time together and always be there in hard moments. She has watched her parents support every relative who needed help, and now she does the same for her own children. For her, family is not only about blood. It is about the people who have stood beside you for years, since the very beginning of your life.`,
    questions: [
      { type: "multiple-choice", prompt: "How long has the family reunion happened every summer?", options: ["Since Maria was born", "Since 1995", "For ten years", "Since last year"], answer: 1, explanation: "The text says the family reunion has happened every summer since 1995." },
      { type: "multiple-choice", prompt: "What does Maria say about arguments with her sister?", options: ["They never argue at all", "Their fights last a very long time", "Their small fights never last long", "They stopped speaking to each other"], answer: 2, explanation: "Maria admits they argue about silly things, but these small fights never last long." },
      { type: "multiple-choice", prompt: "According to Maria, what is family really about?", options: ["Only people who share your blood", "Living in the same town", "Winning every argument", "People who have stood beside you for years"], answer: 3, explanation: "Maria says family is about the people who have stood beside you for years." },
    ],
  },
  speaking: [
    "Describe a family member you have known for your whole life.",
    "How long have you lived in your current home? Use 'for' or 'since'.",
    "Do you think families should always support each other, even during arguments?",
  ],
  writing: { task: "Write about an important relationship in your life. Use the present perfect with 'for' and 'since', and include at least three of the topic words.", minWords: 80 },
  quiz: [
    { type: "gap-fill", prompt: "I have known my best friend ___ ten years.", answer: "for", explanation: "We use 'for' with a period of time, such as 'ten years'." },
    { type: "gap-fill", prompt: "We have lived in this city ___ 2015.", answer: "since", explanation: "We use 'since' with a point in time, such as a year." },
    { type: "multiple-choice", prompt: "Choose the correct sentence.", options: ["She has been married since five years.", "She has been married for five years.", "She is married for five years.", "She married for five years."], answer: 1, explanation: "'for' is used with a period of time, and we need the present perfect 'has been'." },
    { type: "multiple-choice", prompt: "Which word means 'a meeting of people who have not seen each other for a long time'?", options: ["bond", "relative", "reunion", "support"], answer: 2, explanation: "A 'reunion' is a meeting of people after a long time apart." },
    { type: "gap-fill", prompt: "My grandparents helped ___ me when I was young.", answer: "raise", explanation: "'raise' means to look after and help a child grow up." },
  ],
};
