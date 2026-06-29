import type { ReferenceGroup } from "../reference";
import type { FunctionalPhrase } from "../types";
import { Gift } from "lucide-react";

export const fnThanking: ReferenceGroup<FunctionalPhrase> = {
  id: "thanking",
  label: "Thanking",
  azLabel: "Təşəkkür",
  icon: Gift,
  description:
    "Phrases for thanking people warmly and for responding politely when someone thanks you.",
  azDescription:
    "Bu qrup kiməsə minnətdarlıq bildirməyin və təşəkkürə nəzakətlə cavab verməyin müxtəlif yollarını öyrədir. Burada həm sadə, gündəlik təşəkkür ifadələri (Thanks a lot), həm də daha rəsmi və səmimi formalar (I really appreciate it) var. Eyni zamanda kiminsə təşəkkürünə cavab vermək (You're welcome, No problem, Don't mention it) də göstərilir ki, söhbəti mehriban və təbii tonda davam etdirə biləsiniz.",
  items: [
    {
      phrase: "Thank you so much.",
      level: "B1",
      use: "a warm, everyday way to thank someone sincerely",
      azUse:
        "Gündəlik həyatda səmimi təşəkkür bildirməyin ən geniş yayılmış yoludur. \"So much\" sözü adi \"thank you\"-dan daha güclü və ürəkdən gələn minnətdarlıq göstərir. Həm dostlarla, ailə ilə, həm də iş yoldaşları ilə rahat işlədilə bilər, çünki həm mehriban, həm də nəzakətli səslənir.",
      example: "Thank you so much for helping me move all those boxes yesterday.",
      register: "neutral",
    },
    {
      phrase: "Thanks a lot.",
      level: "B1",
      use: "a friendly, casual way to thank someone",
      azUse:
        "Dostyana və qeyri-rəsmi situasiyalarda işlədilən rahat təşəkkür ifadəsidir. Tanışlarla, dostlarla və ya yüngül iş söhbətlərində uyğundur. Diqqət edin: bəzən kinayə (sarkazm) ilə də deyilə bilər, ona görə tonunuza fikir verin ki, səmimi səslənsin.",
      example: "Thanks a lot for the lift — you saved me a long walk.",
      register: "informal",
    },
    {
      phrase: "I really appreciate it.",
      level: "B2",
      use: "to show genuine, heartfelt gratitude for someone's help or kindness",
      azUse:
        "Kiminsə köməyini və ya xeyirxahlığını həqiqətən qiymətləndirdiyinizi bildirən səmimi ifadədir. \"Thank you\"-dan bir az daha güclüdür, çünki sadəcə təşəkkür etmir, həm də etdiklərinin sizin üçün dəyərli olduğunu vurğulayır. Həm qeyri-rəsmi, həm də iş mühitində çox rahat işlənir.",
      example: "Thanks for staying late to finish the report — I really appreciate it.",
      register: "neutral",
    },
    {
      phrase: "I can't thank you enough.",
      level: "B2",
      use: "an emphatic way to express deep gratitude for something important",
      azUse:
        "Çox böyük və əhəmiyyətli bir kömək üçün dərin minnətdarlıq bildirən vurğulu ifadədir. Mənası odur ki, təşəkkürünüz heç vaxt kifayət etməyəcək qədər güclüdür. Ciddi bir köməkdən, məsələn, çətin anda dəstək olan birinə deyildikdə xüsusilə təsirli səslənir.",
      example: "You've been there for me through everything — I can't thank you enough.",
      register: "neutral",
    },
    {
      phrase: "I'm very grateful for your help.",
      level: "C1",
      use: "a formal way to express sincere thanks, common in professional or written contexts",
      azUse:
        "Rəsmi və ciddi minnətdarlıq ifadəsidir; \"grateful\" sözü dərin və səmimi təşəkkür bildirir. Adətən iş yerində, rəsmi məktublarda, e-poçtlarda və ya tanımadığınız adamlarla danışarkən işlədilir. Sizi nəzakətli və peşəkar göstərir, ona görə gündəlik dostluq söhbətlərindən çox rəsmi kontekstə uyğundur.",
      example: "I'm very grateful for your help in preparing the presentation on such short notice.",
      register: "formal",
    },
    {
      phrase: "You're welcome.",
      level: "B1",
      use: "the standard, polite way to respond when someone thanks you",
      azUse:
        "Kimsə sizə təşəkkür edəndə verilən ən standart və nəzakətli cavabdır. Demək olar ki, bütün situasiyalarda — həm rəsmi, həm qeyri-rəsmi — işlədilə bilər. Mənası \"buyurun, dəyməz\" kimidir və qarşı tərəfə köməyin sizin üçün xoş olduğunu bildirir.",
      example: "\"Thanks for the coffee.\" \"You're welcome!\"",
      register: "neutral",
    },
    {
      phrase: "No problem.",
      level: "B1",
      use: "a relaxed, friendly way to respond to thanks and say it was no trouble",
      azUse:
        "Təşəkkürə rahat və dostyana cavab verməyin geniş yayılmış yoludur; mənası \"problem deyil, narahat olma\" kimidir. Etdiyiniz işin sizə heç bir çətinlik yaratmadığını bildirir. Əsasən qeyri-rəsmi situasiyalarda işlənir, amma müasir iş mühitində də çox rast gəlinir.",
      example: "\"Thanks for waiting for me.\" \"No problem, I wasn't in a hurry.\"",
      register: "informal",
    },
    {
      phrase: "Don't mention it.",
      level: "B2",
      use: "a modest, friendly way to play down what you did when thanked",
      azUse:
        "Təşəkkürə təvazökar cavabdır; mənası \"dəyməz, bunu xatırlatmağa belə dəyməz\" kimidir. Etdiyiniz köməyin kiçik və adi olduğunu göstərir, qarşı tərəfi rahatlaşdırır. Dostlarla, tanışlarla və yüngül iş söhbətlərində işlədilir; səmimi və mehriban bir ton yaradır.",
      example: "\"Thank you for fixing my laptop.\" \"Don't mention it — it only took a minute.\"",
      register: "informal",
    },
  ],
  practice: [
    {
      type: "multiple-choice",
      prompt: "Which phrase is the most formal way to thank someone?",
      options: ["Thanks a lot.", "I'm very grateful for your help.", "No problem."],
      answer: 1,
      explanation:
        "\"I'm very grateful for your help\" is formal and sincere — ideal for work or written contexts. \"Thanks a lot\" is casual, and \"No problem\" is a response to thanks, not a way to thank someone.",
    },
    {
      type: "multiple-choice",
      prompt: "Someone says \"Thanks for the coffee.\" Which is the standard polite reply?",
      options: ["I can't thank you enough.", "You're welcome.", "I really appreciate it."],
      answer: 1,
      explanation:
        "\"You're welcome\" is the standard polite response to thanks. The other options are ways of thanking someone yourself, not replies to a thank you.",
    },
    {
      type: "multiple-choice",
      prompt: "Which phrase modestly plays down the help you gave when someone thanks you?",
      options: ["Don't mention it.", "Thank you so much.", "I'm very grateful for your help."],
      answer: 0,
      explanation:
        "\"Don't mention it\" downplays your help in a friendly, modest way. The other two phrases are used to express your own thanks, not to respond to it.",
    },
    {
      type: "gap-fill",
      prompt: "I really ___ it — you've been such a big help. (value it sincerely)",
      answer: "appreciate",
      explanation:
        "\"I really appreciate it\" shows genuine, heartfelt gratitude for someone's help or kindness.",
    },
    {
      type: "gap-fill",
      prompt: "\"Thanks for waiting.\" \"No ___, I wasn't in a hurry.\" (it was no trouble)",
      answer: "problem",
      explanation:
        "\"No problem\" is a relaxed, friendly way to respond to thanks and say that it was no trouble at all.",
    },
    {
      type: "gap-fill",
      prompt: "You've done so much for me — I can't thank you ___. (it could never be enough)",
      answer: "enough",
      explanation:
        "\"I can't thank you enough\" is an emphatic way to express deep gratitude when someone has helped you a great deal.",
    },
  ],
};
