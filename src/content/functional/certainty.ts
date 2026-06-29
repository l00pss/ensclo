import type { ReferenceGroup } from "../reference";
import type { FunctionalPhrase } from "../types";
import { Percent } from "lucide-react";

export const fnCertainty: ReferenceGroup<FunctionalPhrase> = {
  id: "certainty",
  label: "Certainty & Probability",
  azLabel: "Əminlik və ehtimal",
  icon: Percent,
  description:
    "Phrases for showing how sure you are about something, from total certainty to serious doubt.",
  azDescription:
    "Bu ifadələr bir şeyə nə qədər əmin olduğunu dəqiq göstərmək üçündür — bir hadisənin 100% baş verəcəyini, böyük ehtimalla baş verəcəyini, yoxsa şübhəli olduğunu fərqləndirməyə imkan verir. İngilis dilində hər şeyi qəti \"yes/no\" ilə demək təbii deyil; bunun yerine \"It's likely\", \"I doubt it\", \"I'm positive\" kimi ifadələrlə əminlik dərəcəni çalarlandırmaq lazımdır. İclaslarda, proqnoz verərkən, mübahisədə və gündəlik söhbətdə fikrini həddən artıq iddialı və ya həddən artıq qeyri-müəyyən göstərməmək üçün düzgün ifadəni seçmək çox vacibdir.",
  items: [
    {
      phrase: "I'm absolutely certain (that) ...",
      level: "B2",
      use: "to express total, 100% certainty about something",
      azUse:
        "Bir şeyə tam, 100% əmin olduğunu bildirmək üçün işlənir — \"tamamilə əminəm ki\" mənasını verir. \"Absolutely\" sözü adi \"I'm certain\"-i daha da gücləndirir, ona görə yalnız heç bir şübhən olmayanda işlət. Həm rəsmi iclaslarda, həm də gündəlik söhbətdə uyğundur; ardınca \"that\" çox vaxt buraxılır: \"I'm absolutely certain it'll work\".",
      example: "I'm absolutely certain that I locked the door before we left.",
      register: "neutral",
    },
    {
      phrase: "I'm positive (about that).",
      level: "B1",
      use: "an everyday way to say you are completely sure",
      azUse:
        "Gündəlik danışıqda \"yüz faiz əminəm\", \"tam əminəm\" demək üçün işlənir — burada \"positive\" \"müsbət\" yox, \"əmin\" mənasını daşıyır. Çox vaxt kimsə fikrini sual altına alanda təsdiq üçün deyilir: \"Are you sure? — Yes, I'm positive.\". Səmimi və qeyri-rəsmi səslənir, dostlarla və iş yoldaşları ilə rahat işlənir.",
      example: "\"Did you send the email?\" \"Yes, I'm positive. I saw it go.\"",
      register: "informal",
    },
    {
      phrase: "It's bound to happen.",
      level: "B2",
      use: "to say something is almost certain or inevitable",
      azUse:
        "Bir şeyin az qala qaçılmaz, mütləq baş verəcəyini bildirmək üçün işlənir — \"hökmən olacaq\", \"qaçılmazdır\" mənasını verir. \"Bound to\" ardınca həmişə məsdər (to + fel) gəlir: \"It's bound to rain\", \"She's bound to find out\". Adətən natiq bunu məntiqi nəticə kimi, demək olar ki, əmin halda söyleyir; həm müsbət, həm mənfi hadisələr üçün işlənir.",
      example: "If you keep driving that fast, you're bound to get a ticket.",
      register: "neutral",
    },
    {
      phrase: "It's (highly) likely that ...",
      level: "B2",
      use: "to say there is a strong probability of something",
      azUse:
        "Bir şeyin böyük ehtimalla baş verəcəyini bildirmək üçün işlənir — \"böyük ehtimalla\", \"çox güman ki\" mənasını verir. \"Highly\" sözü ehtimal dərəcəni daha da artırır. Rəsmi və yarı-rəsmi kontekstdə, xüsusən proqnoz, hesabat və analizlerde çox işlənir; \"that\" buraxıla bilər: \"It's likely we'll finish on time\".",
      example: "It's highly likely that prices will rise again next year.",
      register: "formal",
    },
    {
      phrase: "There's a good chance (that) ...",
      level: "B1",
      use: "an informal way to say something is quite probable",
      azUse:
        "Bir şeyin baş vermə ehtimalının yaxşı olduğunu qeyri-rəsmi şəkilde bildirmək üçün işlənir — \"yaxşı şans var\", \"böyük ehtimal var ki\" mənasını verir. Gündəlik söhbətdə nikbin, lakin qəti olmayan proqnoz vermək üçün idealdır. Əksini demək üçün \"There's not much chance\" işlədilir; \"that\" çox vaxt buraxılır.",
      example: "There's a good chance we'll get tickets if we book early.",
      register: "informal",
    },
    {
      phrase: "I doubt it.",
      level: "B1",
      use: "a short, common way to say you think something is unlikely",
      azUse:
        "Bir şeyin çətin baş verəcəyini, ona inanmadığını qısa şəkilde bildirmək üçün işlənir — \"şübhəliyəm\", \"çətin\", \"elə bilmirəm\" mənasını verir. Çox vaxt suala cavab kimi tək başına deyilir: \"Will he come? — I doubt it.\". Daha tam formada \"I doubt that ...\" də işlənir: \"I doubt that he'll agree\". Nəzakətli, lakin aydın şəkilde şübhə bildirir.",
      example: "\"Do you think they'll lower the price?\" \"I doubt it.\"",
      register: "neutral",
    },
    {
      phrase: "I'm not so sure (about that).",
      level: "B1",
      use: "a polite way to express doubt or mild disagreement",
      azUse:
        "Bir şeyə tam əmin olmadığını və ya yumşaq şəkilde razı olmadığını nəzakətli bildirmək üçün işlənir — \"o qədər də əmin deyiləm\", \"bilmirəm valla\" mənasını verir. Kiminsə fikrini birbaşa rədd etmədən şübhəni göstərmək üçün çox faydalıdır, ona görə müzakirələrdə münaqişəni yumşaldır. Həm rəsmi, həm qeyri-rəsmi kontekstdə işlənir.",
      example: "You say it'll save money, but I'm not so sure about that.",
      register: "neutral",
    },
    {
      phrase: "In all probability, ...",
      level: "C1",
      use: "a formal way to say something will very probably happen",
      azUse:
        "Bir şeyin çox böyük ehtimalla baş verəcəyini rəsmi, yazılı üslubda bildirmək üçün işlənir — \"çox böyük ehtimalla\", \"görünür ki\" mənasını verir. Rəsmi hesabatlarda, akademik mətnlerde və analitik çıxışlarda təbii səslənir; gündəlik söhbətdə bir qədər ağır görünə bilər. Cümlənin əvvəlinde gəlir, ardınca vergül qoyulur.",
      example: "In all probability, the project will be delayed by a few weeks.",
      register: "formal",
    },
  ],
  practice: [
    {
      type: "multiple-choice",
      prompt: "Which phrase expresses total, 100% certainty?",
      options: [
        "I'm not so sure about that.",
        "I'm absolutely certain that ...",
        "There's a good chance that ...",
      ],
      answer: 1,
      explanation:
        "\"I'm absolutely certain\" shows full, 100% certainty. \"I'm not so sure\" shows doubt and \"There's a good chance\" is only a probability.",
    },
    {
      type: "multiple-choice",
      prompt: "Which phrase means something is almost certain or inevitable?",
      options: [
        "I doubt it.",
        "It's bound to happen.",
        "I'm not so sure.",
      ],
      answer: 1,
      explanation:
        "\"It's bound to happen\" means it is almost certain / inevitable. \"I doubt it\" and \"I'm not so sure\" both express doubt.",
    },
    {
      type: "multiple-choice",
      prompt: "Which phrase politely expresses doubt or mild disagreement?",
      options: [
        "I'm positive about that.",
        "It's highly likely that ...",
        "I'm not so sure about that.",
      ],
      answer: 2,
      explanation:
        "\"I'm not so sure about that\" softly signals doubt. \"I'm positive\" is full certainty and \"It's highly likely\" states a strong probability.",
    },
    {
      type: "gap-fill",
      prompt:
        "If you keep driving that fast, you're ___ to get a ticket. (almost certain / inevitable)",
      answer: "bound",
      explanation:
        "\"to be bound to + verb\" means something is almost certain or inevitable.",
    },
    {
      type: "gap-fill",
      prompt:
        "\"Will they lower the price?\" \"I ___ it.\" (you think it is unlikely)",
      answer: "doubt",
      explanation:
        "\"I doubt it\" is a short, common way to say you think something is unlikely.",
    },
    {
      type: "gap-fill",
      prompt:
        "It's highly ___ that prices will rise again next year. (strong probability)",
      answer: "likely",
      explanation:
        "\"It's (highly) likely that ...\" expresses a strong probability that something will happen.",
    },
  ],
};
