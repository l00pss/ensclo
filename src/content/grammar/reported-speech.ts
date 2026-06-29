import type { GrammarGroup } from "../types";

export const reportedSpeech: GrammarGroup = {
  id: "reported-speech",
  description:
    "Reported (indirect) speech tells someone what another person said without quoting them. Tenses usually shift 'one step back' and pronouns and time words change.",
  azDescription:
    "Dolayı nitq başqasının dediyini sitat gətirmədən çatdırır. Zaman adətən 'bir addım geriyə' sürüşür, əvəzliklər və vaxt sözləri dəyişir.",
  rules: [
    {
      title: "Backshift of tenses",
      level: "B2",
      explanation:
        "When the reporting verb is in the past (said, told), the verb usually moves one tense back: present → past, past → past perfect, will → would.",
      azNote:
        "Reporting feili keçmişdədirsə (said, told), feil bir zaman geri sürüşür: present → past, will → would.",
      form: "said (that) + clause (one tense back)",
      examples: [
        { en: '"I am tired." → He said he was tired.' },
        { en: '"I will call you." → She said she would call me.' },
        { en: '"I saw it." → He said he had seen it.' },
      ],
      pitfall: "Ümumi/həmişə doğru faktlarda backshift məcburi deyil: 'She said the Earth is round.'",
    },
    {
      title: "say vs tell",
      level: "B1",
      explanation:
        "'tell' needs a person object (tell someone); 'say' does not (say something). Don't mix them up.",
      azNote:
        "'tell' insan obyekti istəyir (tell me), 'say' istəmir (say something). Qarışdırma.",
      form: "tell + somebody + that …  ·  say (that) …",
      examples: [
        { en: "She told me that she was busy.", note: "tell + person" },
        { en: "She said that she was busy.", note: "say (no person)" },
      ],
      pitfall: "'She said me' YOX → 'She told me' ya da 'She said to me'.",
    },
    {
      title: "Pronouns & time/place words",
      level: "B2",
      explanation:
        "Pronouns change to fit the new speaker, and time/place words shift: now → then, today → that day, tomorrow → the next day, here → there.",
      azNote:
        "Əvəzliklər yeni danışana uyğunlaşır; vaxt/yer sözləri dəyişir: now→then, tomorrow→the next day, here→there.",
      examples: [
        { en: '"I\'ll see you here tomorrow." → He said he\'d see me there the next day.' },
        { en: '"I did it today." → She said she had done it that day.' },
      ],
      pitfall: "Yalnız feili dəyişib əvəzlik/vaxt sözünü unutma — hamısı dəyişir.",
    },
    {
      title: "Reported questions",
      level: "B2",
      explanation:
        "Use 'if/whether' for yes/no questions and the question word for wh-questions. The word order becomes statement order (subject + verb), with NO auxiliary 'do' and no question mark.",
      azNote:
        "Yes/no sualda 'if/whether', wh-sualda sual sözü. Söz sırası TƏSDİQ kimi olur, 'do' və sual işarəsi yoxdur.",
      form: "asked (+ object) + if/whether/wh- + subject + verb",
      examples: [
        { en: '"Where do you live?" → She asked where I lived.' },
        { en: '"Are you ready?" → He asked if I was ready.' },
      ],
      pitfall: "Sual sırasını saxlama: 'She asked where did I live' YOX → 'where I lived'.",
    },
    {
      title: "Reported commands & requests",
      level: "B2",
      explanation:
        "Use 'tell/ask someone (not) to + verb' for orders and requests — no backshift needed.",
      azNote:
        "Əmr/xahiş üçün 'tell/ask somebody (not) to + feil'. Burada backshift lazım deyil.",
      form: "told/asked + somebody + (not) to + base verb",
      examples: [
        { en: '"Sit down." → The teacher told us to sit down.' },
        { en: '"Please don\'t be late." → She asked me not to be late.' },
      ],
      pitfall: "İnkar əmrdə 'not' məsdərdən əvvəl: 'told me to not go' deyil → 'told me not to go'.",
    },
  ],
  practice: [
    {
      type: "multiple-choice",
      prompt: '"I am hungry," he said. → He said he ___ hungry.',
      options: ["is", "was", "has been", "would be"],
      answer: 1,
      explanation: "Backshift: present 'am' → past 'was'.",
    },
    {
      type: "multiple-choice",
      prompt: "She ___ me that the meeting was cancelled.",
      options: ["said", "told", "asked", "spoke"],
      answer: 1,
      explanation: "With a person object you need 'told' (tell someone).",
    },
    {
      type: "multiple-choice",
      prompt: '"I\'ll help you," she said. → She said she ___ help me.',
      options: ["will", "would", "had", "is going to"],
      answer: 1,
      explanation: "Backshift: 'will' → 'would'.",
    },
    {
      type: "gap-fill",
      prompt: 'He asked me where I ___. ("Where do you work?") (work, backshifted)',
      answer: "worked",
      explanation: "Reported question: statement order + backshift → 'where I worked'.",
    },
    {
      type: "multiple-choice",
      prompt: '"Are you tired?" → She asked me ___ I was tired.',
      options: ["that", "if", "what", "do"],
      answer: 1,
      explanation: "Yes/no question reported → 'if' (or 'whether').",
    },
    {
      type: "multiple-choice",
      prompt: '"Don\'t touch it!" → He told me ___ touch it.',
      options: ["to not", "not to", "don't", "to don't"],
      answer: 1,
      explanation: "Negative command → 'not to + verb'.",
    },
  ],
};
