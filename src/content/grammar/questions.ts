import type { GrammarGroup } from "../types";

export const questions: GrammarGroup = {
  id: "questions",
  description: "Questions ask for information by inverting the subject and an auxiliary or 'be'.",
  azDescription: "Suallar köməkçi feil və ya 'be' ilə mübtədanı yerini dəyişərək məlumat istəyir.",
  rules: [
    {
      title: "Yes/no questions (auxiliary or be inversion)",
      level: "B1",
      explanation:
        "To make a yes/no question, put the auxiliary or 'be' before the subject. Use 'do/does/did' for simple tenses, 'be' for continuous and adjectives, and 'have' for the present perfect.",
      azNote: "Bəli/xeyr sualında köməkçi feil və ya 'be' mübtədadan əvvələ keçir.",
      form: "Aux/Be + subject + main verb? (Do you work? Are you ready? Have you eaten?)",
      examples: [
        { en: "Do you live near here?", note: "present simple uses 'do'" },
        { en: "Are you tired?", note: "with 'be' no extra auxiliary" },
        { en: "Have you finished the report?", note: "present perfect uses 'have'" },
      ],
      pitfall: "'Do' ilə əsas feil əsas formada qalır: 'Do you like' (yox 'Do you likes').",
    },
    {
      title: "Wh- questions (question word + auxiliary + subject)",
      level: "B1",
      explanation:
        "Put the wh- word first, then the auxiliary or 'be', then the subject. The pattern after the wh- word is the same as a yes/no question.",
      azNote: "Wh- sözü əvvələ gəlir, sonra köməkçi feil və mübtəda.",
      form: "Wh- + aux/be + subject + verb? (Where do you live? Why is she late?)",
      examples: [
        { en: "Where do you work?", note: "wh- word plus 'do'" },
        { en: "When did they arrive?", note: "past simple uses 'did'" },
        { en: "How are you feeling today?", note: "'be' as the auxiliary" },
      ],
      pitfall: "Köməkçi feili unutma: 'Where you live?' səhvdir, 'Where do you live?' düzdür.",
    },
    {
      title: "Subject vs object questions",
      level: "B2",
      explanation:
        "When the wh- word is the subject (who/what does the action), use no 'do' and keep normal word order. When it is the object, use the auxiliary like a normal question.",
      azNote: "Mübtəda sualında 'do' işlənmir; obyekt sualında köməkçi feil lazımdır.",
      form: "Subject: Who broke it? | Object: Who did you see?",
      examples: [
        { en: "Who broke the window?", note: "subject question, no 'do'" },
        { en: "What happened next?", note: "subject question, normal order" },
        { en: "Who did you invite?", note: "object question, uses 'did'" },
      ],
      pitfall: "Mübtəda sualına 'do' əlavə etmə: 'Who did break it?' yox, 'Who broke it?'.",
    },
    {
      title: "Question tags (positive and negative rule)",
      level: "B2",
      explanation:
        "Add a short tag to confirm something. A positive statement takes a negative tag, and a negative statement takes a positive tag. The tag repeats the auxiliary or 'be'.",
      azNote: "Müsbət cümləyə mənfi tag, mənfi cümləyə müsbət tag əlavə olunur.",
      form: "Positive statement, negative tag? / Negative statement, positive tag?",
      examples: [
        { en: "It's cold today, isn't it?", note: "positive statement, negative tag" },
        { en: "You don't smoke, do you?", note: "negative statement, positive tag" },
        { en: "She can swim, can't she?", note: "tag repeats the modal" },
      ],
      pitfall: "Tag mübtədası həmişə əvəzlikdir: 'Tom is here, isn't he?'.",
    },
    {
      title: "Indirect / polite questions",
      level: "B2",
      explanation:
        "After phrases like 'Could you tell me' or 'Do you know', use statement word order with no 'do', and use 'if/whether' for yes/no questions.",
      azNote: "Nəzakətli suallarda mübtəda-feil sırası düz qalır, 'do' işlənmir.",
      form: "Could you tell me + (wh-/if) + subject + verb? (Could you tell me where the station is?)",
      examples: [
        { en: "Could you tell me where the station is?", note: "statement order, no 'do'" },
        { en: "Do you know if the shop is open?", note: "'if' for a yes/no question" },
        { en: "I wonder what time it starts.", note: "indirect question as a statement" },
      ],
      pitfall: "Düz suala qayıtma: 'where is the station' yox, 'where the station is'.",
    },
    {
      title: "Negative questions",
      level: "B2",
      explanation:
        "Negative questions express surprise or expect agreement. They are formed by adding 'n't' to the auxiliary or 'be' before the subject.",
      azNote: "Mənfi suallar təəccüb bildirir və ya razılıq gözləyir.",
      form: "Aux/Be + n't + subject + verb? (Don't you like it? Isn't it great?)",
      examples: [
        { en: "Don't you like coffee?", note: "expressing mild surprise" },
        { en: "Isn't it a beautiful day?", note: "expecting agreement" },
        { en: "Haven't we met before?", note: "checking a belief" },
      ],
      pitfall: "Razılaşanda cavab diqqətli ver: 'Don't you like it?' - 'No, I don't' mənfi mənadır.",
    },
  ],
  practice: [
    {
      type: "gap-fill",
      prompt: "___ you live near the office? (yes/no question, present simple)",
      answer: "do",
      explanation: "Present simple yes/no questions use 'do' before the subject.",
    },
    {
      type: "multiple-choice",
      prompt: "___ broke the vase? (the subject is unknown)",
      options: ["Who did", "Who", "Whom did", "Who does"],
      answer: 1,
      explanation: "Subject questions use no 'do': 'Who broke the vase?'",
    },
    {
      type: "gap-fill",
      prompt: "Where ___ you go last weekend? (past simple wh- question)",
      answer: "did",
      explanation: "Past simple questions use 'did' plus the base verb.",
    },
    {
      type: "multiple-choice",
      prompt: "Could you tell me where ___?",
      options: ["is the bank", "the bank is", "does the bank", "is the bank located at"],
      answer: 1,
      explanation: "Indirect questions use statement word order: 'where the bank is'.",
    },
    {
      type: "gap-fill",
      prompt: "It's a great film, ___ it? (question tag)",
      answer: "isn't",
      explanation: "A positive statement takes a negative tag: 'isn't it?'",
    },
    {
      type: "multiple-choice",
      prompt: "Choose the correct negative question expecting agreement.",
      options: ["Don't you think it's hot?", "You don't think it's hot?", "Do not you think it's hot?", "Think you it's hot?"],
      answer: 0,
      explanation: "Negative questions add 'n't' to the auxiliary before the subject: 'Don't you think...?'",
    },
    {
      type: "gap-fill",
      prompt: "You don't eat meat, ___ you? (question tag for a negative statement)",
      answer: "do",
      explanation: "A negative statement takes a positive tag: 'do you?'",
    },
    {
      type: "multiple-choice",
      prompt: "Which is the correct object question?",
      options: ["Who saw you?", "Who did you see?", "Who you saw?", "Who do saw you?"],
      answer: 1,
      explanation: "Object questions use the auxiliary: 'Who did you see?'",
    },
  ],
};
