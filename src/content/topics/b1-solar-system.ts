import type { Topic } from "../types";

export const b1SolarSystem: Topic = {
  id: "b1-solar-system",
  level: "B1",
  title: "The Solar System",
  theme: "Space",
  summary:
    "Take a journey through our solar system, and learn to talk about the future with 'will' and 'going to'.",
  leadIn: [
    "Would you like to travel into space one day? Why / why not?",
    "Do you think people are going to live on another planet in the future?",
    "Which planet would you most like to visit?",
  ],
  vocabulary: [
    {
      word: "planet",
      definition: "a large round object in space that moves around a star",
      example: "Earth is the third planet from the Sun.",
      collocations: ["a distant planet", "planet Earth"],
      azNote: "planet",
    },
    {
      word: "orbit",
      definition: "to move around something larger in space; the path of this movement",
      example: "The Moon orbits the Earth once a month.",
      collocations: ["orbit the Sun", "in orbit"],
      azNote: "orbit / fırlanmaq (ətrafında)",
    },
    {
      word: "gravity",
      definition: "the natural force that pulls objects towards each other",
      example: "On the Moon, gravity is much weaker, so you can jump higher.",
      collocations: ["the force of gravity", "low gravity"],
      azNote: "cazibə qüvvəsi",
    },
    {
      word: "astronaut",
      definition: "a person who travels and works in space",
      example: "The astronauts are going to spend six months on the space station.",
      collocations: ["become an astronaut", "train as an astronaut"],
      azNote: "kosmonavt / astronavt",
    },
    {
      word: "distance",
      definition: "the amount of space between two places",
      example: "The distance from Earth to the Sun is about 150 million kilometres.",
      collocations: ["a long distance", "the distance between"],
      azNote: "məsafə",
    },
    {
      word: "explore",
      definition: "to travel through a place to learn about it",
      example: "Scientists want to explore the surface of Mars.",
      collocations: ["explore space", "explore a planet"],
      azNote: "kəşf etmək / araşdırmaq",
    },
  ],
  grammar: {
    point: "The future: will & going to",
    explanation:
      "Use 'going to' for plans and intentions decided before now, and for predictions based on what we can see: 'They are going to land a robot on Mars.' Use 'will' for predictions, promises, and quick decisions made at the moment of speaking: 'One day, people will live on the Moon.' For general future facts and opinions, both are often possible.",
    azNote:
      "'going to' = əvvəlcədən planlaşdırılmış niyyət, və ya gözlə gördüyümüzə əsaslanan proqnoz ('Look at those clouds — it's going to rain'). 'will' = proqnoz, vəd, və danışan an verilən qərar ('I think people will live on Mars'). Ümumi gələcək proqnozlarda çox vaxt ikisi də olar.",
    examples: [
      { en: "NASA is going to send a new robot to Mars.", note: "a fixed plan → going to" },
      { en: "I think humans will visit Mars before 2050.", note: "prediction/opinion → will" },
      { en: "Look at that rocket — it's going to launch!", note: "prediction from evidence → going to" },
      {
        en: "One day, space travel will be cheaper.",
        note: "general prediction → will",
      },
    ],
  },
  reading: {
    title: "Our home in space",
    text: `Our solar system is an amazing place. At its centre is the Sun, a giant star, and eight planets orbit around it. Earth, our home, is the only planet where we know life exists — but scientists believe this is going to change the way we explore space in the future.

The planets are very different from each other. Mercury, the closest to the Sun, is burning hot, while Neptune, far away in the cold and dark, is freezing. Between them is Mars, a red, dusty world. Many scientists think that one day humans will walk on Mars, and several space companies are already going to send robots and people there.

Travelling in space is not easy. The distances are enormous, and gravity works differently on each planet. On Mars, you will weigh much less than on Earth, so you will be able to jump higher and carry heavier things. Astronauts have to train for years before they are ready.

What will the future of space travel look like? Nobody knows for certain, but many experts believe that space tourism is going to grow quickly. Perhaps, in your lifetime, ordinary people will buy a ticket to orbit the Earth. One thing is sure: we are only just beginning to explore the universe around us.`,
    questions: [
      {
        type: "multiple-choice",
        prompt: "How many planets orbit the Sun?",
        options: ["Six", "Seven", "Eight", "Nine"],
        answer: 2,
        explanation: "'eight planets orbit around it'.",
      },
      {
        type: "multiple-choice",
        prompt: "What happens to your weight on Mars?",
        options: [
          "You weigh much more.",
          "You weigh much less.",
          "Your weight stays the same.",
          "You become weightless.",
        ],
        answer: 1,
        explanation: "'On Mars, you will weigh much less than on Earth'.",
      },
      {
        type: "multiple-choice",
        prompt: "What do many experts believe about space tourism?",
        options: [
          "It will disappear.",
          "It is going to grow quickly.",
          "It is impossible.",
          "It only happens on the Moon.",
        ],
        answer: 1,
        explanation: "'space tourism is going to grow quickly'.",
      },
    ],
  },
  speaking: [
    "What do you think space travel is going to be like in 50 years? (use 'going to' and 'will')",
    "If you could explore one planet, which would you choose, and what do you think you will find?",
    "Some people say we should spend money on Earth's problems, not on space. Do you agree?",
  ],
  writing: {
    task: "Write a short paragraph with your predictions about the future of space travel. Use 'will' and 'going to' at least twice each, and three words from this topic.",
    minWords: 80,
  },
  quiz: [
    {
      type: "gap-fill",
      prompt: "Look at that rocket — it ___ (launch) any second now! (evidence)",
      answer: "is going to launch",
      accept: ["is going to launch"],
      explanation: "Prediction based on what we can see → 'going to'.",
    },
    {
      type: "gap-fill",
      prompt: "I think humans ___ (visit) Mars before 2050. (opinion / prediction)",
      answer: "will visit",
      accept: ["will visit", "'ll visit"],
      explanation: "Prediction/opinion → 'will' + infinitive.",
    },
    {
      type: "multiple-choice",
      prompt: "Choose the best sentence for a fixed plan:",
      options: [
        "NASA will maybe send a robot, it is going to decide now.",
        "NASA is going to send a robot to Mars next year.",
        "NASA going to send a robot to Mars.",
        "NASA will sending a robot to Mars.",
      ],
      answer: 1,
      explanation: "A decided plan → 'is going to send'.",
    },
    {
      type: "gap-fill",
      prompt: "The Moon ___ (orbit) the Earth. (general fact)",
      answer: "orbits",
      explanation: "A general scientific fact → Present Simple (orbits).",
    },
    {
      type: "multiple-choice",
      prompt: "'gravity' is:",
      options: [
        "the light from the Sun",
        "the force that pulls objects together",
        "the distance to a planet",
        "a type of rocket",
      ],
      answer: 1,
      explanation: "'gravity' is the natural force that pulls objects towards each other.",
    },
  ],
};
