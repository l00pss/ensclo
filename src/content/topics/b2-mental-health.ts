import type { Topic } from "../types";
export const b2MentalHealth: Topic = {
  id: "b2-mental-health", level: "B2", title: "Mental Health and Wellbeing", theme: "Health",
  summary: "Explore how to protect your mental health, and learn to use gerunds and infinitives after different verbs and prepositions.",
  leadIn: ["What helps you relax when you feel stressed?", "How do you think modern life affects mental health?", "Do you enjoy spending time alone or with others?"],
  vocabulary: [
    { word: "resilience", definition: "the ability to recover quickly from difficulties or stress", example: "Building resilience helps people cope with setbacks without giving up.", collocations: ["build resilience", "emotional resilience"], azNote: "çətinliklərdən sonra özünü toplaya bilmək, yəni dözümlülük deməkdir." },
    { word: "burnout", definition: "extreme tiredness caused by working too hard for too long", example: "She avoided burnout by learning to say no to extra projects.", collocations: ["avoid burnout", "suffer burnout"], azNote: "həddən artıq işləməkdən yaranan tükənmişlik, yorğunluq halıdır." },
    { word: "mindfulness", definition: "the practice of paying calm attention to the present moment", example: "Many people keep practising mindfulness to reduce anxiety.", collocations: ["practise mindfulness", "mindfulness exercise"], azNote: "indiki ana sakit şəkildə diqqət yetirmək təcrübəsi, yəni şüurlu fərqindəlikdir." },
    { word: "coping", definition: "dealing successfully with a difficult situation or feeling", example: "Talking to a friend is a healthy coping strategy.", collocations: ["coping strategy", "coping mechanism"], azNote: "çətin vəziyyətlə uğurla başa çıxmaq, onunla mübarizə aparmaq mənasını verir." },
    { word: "stigma", definition: "strong social disapproval connected with a particular situation", example: "We must keep challenging the stigma around asking for help.", collocations: ["social stigma", "reduce stigma"], azNote: "müəyyən bir vəziyyətlə bağlı cəmiyyətin damğası, mənfi münasibətidir." },
    { word: "wellbeing", definition: "the state of being comfortable, healthy and happy", example: "Companies are starting to care about employee wellbeing.", collocations: ["emotional wellbeing", "improve wellbeing"], azNote: "rahat, sağlam və xoşbəxt olma vəziyyəti, yəni rifah deməkdir." },
  ],
  grammar: {
    point: "Gerunds and infinitives",
    explanation: "Some verbs are followed by a gerund (-ing), such as 'enjoy', 'avoid' and 'keep', while others are followed by 'to' + infinitive, such as 'want', 'decide' and 'need'. After a preposition we always use the -ing form. Choosing the right form is essential for natural, accurate B2 writing.",
    azNote: "'enjoy', 'avoid', 'keep' kimi fellərdən sonra '-ing' formasından istifadə edirik, 'want', 'decide', 'need' kimi fellərdən sonra isə 'to' məsdərindən istifadə edirik. Sözönlərdən sonra həmişə '-ing' formasını işlədirik, məsələn 'good at running'.",
    examples: [
      { en: "I enjoy practising mindfulness every morning.", note: "enjoy + -ing" },
      { en: "She decided to speak to a counsellor about her stress.", note: "decide + to infinitive" },
      { en: "You should avoid working late every single night.", note: "avoid + -ing" },
      { en: "He improved his wellbeing by exercising regularly.", note: "preposition 'by' + -ing" },
    ],
  },
  reading: { title: "Looking After the Mind",
    text: `For a long time, society talked about physical health far more openly than about the mind, and a heavy stigma stopped many people from admitting that they were struggling. Today, attitudes are slowly changing. Schools, hospitals and workplaces are beginning to treat emotional wellbeing as seriously as a broken leg, and more people feel able to speak honestly about how they really feel.

One of the biggest modern threats is burnout. Many employees keep working long hours without resting, and they often avoid taking the breaks their minds desperately need. Experts advise people to notice the early warning signs, because anyone who wants to stay healthy needs to protect their energy. Learning to say no, and choosing to switch off devices in the evening, can make an enormous difference over time.

Building resilience is another important goal. Resilience does not mean never feeling sad; it means recovering after difficult moments instead of giving up. Psychologists encourage practising mindfulness, a calm way of paying attention to the present, because it helps the brain slow down. By breathing slowly and noticing their thoughts, people gradually develop stronger coping skills that support them through hard times.

Finally, nobody should face problems alone. Asking for help is a sign of strength, not weakness, and good friends are worth keeping close. If you decide to talk to someone, you have already taken a brave first step. Each honest conversation helps to reduce the stigma further, so that future generations will grow up expecting to care for the mind exactly as they care for the body.`,
    questions: [
      { type: "multiple-choice", prompt: "Why did many people hide their struggles in the past?", options: ["Because of social stigma", "Because of high costs", "Because of long working hours", "Because of poor hospitals"], answer: 0, explanation: "The text says a heavy stigma stopped people from admitting they were struggling." },
      { type: "multiple-choice", prompt: "What does the text say about resilience?", options: ["It means never feeling sad", "It means recovering after difficult moments", "It only matters at work", "It replaces friendship"], answer: 1, explanation: "Resilience means recovering after difficult moments instead of giving up." },
      { type: "multiple-choice", prompt: "According to the article, asking for help is described as", options: ["a weakness", "a waste of time", "a sign of strength", "an old habit"], answer: 2, explanation: "The final paragraph states that asking for help is a sign of strength." },
    ],
  },
  speaking: ["Describe one thing you do to protect your mental health.", "Why do you think people avoid talking about their feelings?", "How could schools or workplaces improve employee wellbeing?"],
  writing: { task: "Write about how people can look after their mental health. Use gerunds and infinitives and at least 3 topic words.", minWords: 120 },
  quiz: [
    { type: "gap-fill", prompt: "I really enjoy ___ (practise) mindfulness before work.", answer: "practising", explanation: "'enjoy' is followed by the gerund (-ing) form." },
    { type: "gap-fill", prompt: "She decided ___ (talk) to a counsellor about her stress.", answer: "to talk", explanation: "'decide' is followed by 'to' + infinitive." },
    { type: "multiple-choice", prompt: "Choose the correct sentence.", options: ["You should avoid to work late.", "You should avoid working late.", "You should avoid worked late.", "You should avoid work late."], answer: 1, explanation: "'avoid' is followed by the gerund (-ing) form." },
    { type: "multiple-choice", prompt: "He improved his wellbeing by ___ regularly.", options: ["exercise", "to exercise", "exercising", "exercised"], answer: 2, explanation: "After the preposition 'by' we use the -ing form." },
    { type: "multiple-choice", prompt: "Which word means 'extreme tiredness caused by overwork'?", options: ["burnout", "resilience", "stigma", "wellbeing"], answer: 0, explanation: "'burnout' is extreme tiredness caused by working too hard for too long." },
  ],
};
