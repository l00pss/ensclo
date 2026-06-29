import type { Topic } from "../types";

export const b1Homes: Topic = {
  id: "b1-homes", level: "B1", title: "Homes Around the World", theme: "Lifestyle",
  summary: "Explore different kinds of homes around the world, and learn to describe rooms with 'there is / there are' and prepositions of place.",
  leadIn: ["What kind of home do you live in?", "Is there a garden near your home?", "What is your favourite room in the house?"],
  vocabulary: [
    { word: "apartment", definition: "a set of rooms for living in, usually on one floor of a larger building", example: "They live in a small apartment on the third floor.", collocations: ["rent an apartment", "modern apartment"], azNote: "mənzil — adətən çoxmərtəbəli binada bir mərtəbədəki yaşayış yeri" },
    { word: "cottage", definition: "a small, simple house, usually in the countryside", example: "My grandparents have a quiet cottage in the village.", collocations: ["country cottage", "old cottage"], azNote: "kiçik kənd evi, adətən sakit yerdə yerləşir" },
    { word: "neighbourhood", definition: "an area of a town or city where people live", example: "It is a friendly neighbourhood with many shops.", collocations: ["quiet neighbourhood", "safe neighbourhood"], azNote: "məhəllə, qonşuluq — insanların yaşadığı şəhər ərazisi" },
    { word: "rooftop", definition: "the flat top of a building, often used as an open space", example: "In summer they have dinner on the rooftop.", collocations: ["rooftop garden", "rooftop terrace"], azNote: "damüstü, binanın düz damı — çox vaxt açıq sahə kimi istifadə olunur" },
    { word: "spacious", definition: "having a lot of space inside", example: "The new house is bright and spacious.", collocations: ["spacious living room", "spacious kitchen"], azNote: "geniş, içində çoxlu yer olan" },
    { word: "traditional", definition: "following the old customs or style of a place", example: "They built the house in a traditional style.", collocations: ["traditional house", "traditional design"], azNote: "ənənəvi — bir yerin köhnə adət və üslubuna uyğun" },
  ],
  grammar: {
    point: "there is / there are and prepositions of place",
    explanation: "We use 'there is' for one thing (singular) and 'there are' for more than one thing (plural). In questions and negatives we often use 'any', and in positive sentences we use 'some'. To say where things are, we use prepositions of place such as 'in', 'on', 'under', 'next to', 'between' and 'behind'.",
    azNote: "Bir şey üçün 'there is', bir neçə şey üçün 'there are' işlədirik. Müsbət cümlədə çox vaxt 'some', sual və inkarda 'any' gəlir. Yerini göstərmək üçün 'in, on, under, next to, between, behind' kimi yer ön sözlərindən istifadə edirik.",
    examples: [
      { en: "There is a sofa in the living room.", note: "singular, one sofa" },
      { en: "There are some plants on the rooftop.", note: "plural with 'some'" },
      { en: "Is there any furniture in the new apartment?", note: "question with 'any'" },
      { en: "The cat is under the table, next to the chair.", note: "prepositions of place" },
    ],
  },
  reading: {
    title: "Homes Around the World",
    text: `Homes are not the same everywhere. In a big city, many people live in an apartment. There is usually a kitchen, a bathroom and one or two bedrooms inside, and there are often other families living next to you. The rooms can be small, but a good apartment near the centre is very useful because the shops and offices are close.

In the countryside, life is different. My uncle lives in an old cottage between two green hills. It is a traditional building with thick walls and a small garden behind it. There is a wooden table in the kitchen and there are some old photos on the walls. It is not a spacious home, but it feels warm and friendly.

In hot countries, the roof of the house is very important. There are chairs and plants on the rooftop, and in the evening the family sits there to enjoy the cool air. Under the roof, the rooms stay cool during the day. Many people also keep food and water in a cool room behind the kitchen.

The neighbourhood around your home matters too. A quiet, safe neighbourhood with a park next to the houses makes life better. Some people want a spacious house with many rooms, while others prefer a small, traditional home close to their friends. There is no perfect home for everyone, but there are many interesting ways to live around the world.`,
    questions: [
      { type: "multiple-choice", prompt: "Where do many people in a big city live?", options: ["In a cottage", "In an apartment", "On a rooftop", "Under a hill"], answer: 1, explanation: "The text says that in a big city many people live in an apartment." },
      { type: "multiple-choice", prompt: "What is the uncle's cottage like?", options: ["Large and modern", "Traditional with thick walls", "On a busy street", "Without any garden"], answer: 1, explanation: "The cottage is a traditional building with thick walls and a small garden." },
      { type: "multiple-choice", prompt: "Why is the rooftop important in hot countries?", options: ["The family sits there in the evening", "It is the only bedroom", "There are no other rooms", "It keeps the food warm"], answer: 0, explanation: "In the evening the family sits on the rooftop to enjoy the cool air." },
    ],
  },
  speaking: ["Describe your home and the rooms inside it.", "What is good and bad about living in an apartment?", "Would you prefer a spacious house in the countryside or a small home in the city centre?"],
  writing: { task: "Describe your home and your neighbourhood. Use 'there is / there are', at least three prepositions of place, and three words from this lesson.", minWords: 80 },
  quiz: [
    { type: "gap-fill", prompt: "There ___ a big kitchen in our new house.", answer: "is", explanation: "We use 'there is' with one singular thing (a kitchen)." },
    { type: "gap-fill", prompt: "There ___ some plants on the rooftop.", answer: "are", explanation: "We use 'there are' with a plural noun (plants)." },
    { type: "multiple-choice", prompt: "Choose the correct sentence.", options: ["Is there any chairs in the room?", "Are there any chairs in the room?", "Are there some chairs in the room?", "Is there some chairs in the room?"], answer: 1, explanation: "We use 'are there' with plural 'chairs' and 'any' in questions." },
    { type: "gap-fill", prompt: "The lamp is ___ the table, so we have light to read.", answer: "on", explanation: "'On' shows that the lamp rests on the surface of the table." },
    { type: "multiple-choice", prompt: "Which word means 'having a lot of space inside'?", options: ["traditional", "spacious", "bitter", "narrow"], answer: 1, explanation: "'Spacious' means having a lot of space inside." },
  ],
};
