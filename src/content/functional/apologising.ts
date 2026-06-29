import type { ReferenceGroup } from "../reference";
import type { FunctionalPhrase } from "../types";
import { HeartHandshake } from "lucide-react";

export const fnApologising: ReferenceGroup<FunctionalPhrase> = {
  id: "apologising",
  label: "Apologising",
  azLabel: "Üzr istəmə",
  icon: HeartHandshake,
  description:
    "Phrases for apologising sincerely and for responding kindly when someone apologises to you.",
  azDescription:
    "Bu qrup səhv etdiyiniz, kimisə narahat etdiyiniz və ya gecikdiyiniz zaman necə üzr istəməyi öyrədir. Burada həm sadə, gündəlik üzr ifadələri (sorry), həm də rəsmi və daha səmimi formalar (I do apologise, I take full responsibility) var. Eyni zamanda kiminsə üzrünə nəzakətlə cavab vermək (Don't worry about it, No harm done) də göstərilir ki, söhbəti rahat və mehriban tonda davam etdirə biləsiniz.",
  items: [
    {
      phrase: "I'm so sorry.",
      level: "B1",
      use: "a warm, everyday way to apologise for something small or personal",
      azUse:
        "Gündəlik həyatda kiçik bir səhv və ya narahatlıq üçün səmimi üzr istəmənin ən geniş yayılmış yoludur. \"So\" sözü adi \"sorry\"-dən daha güclü və ürəkdən gələn təəssüf bildirir. Dostlarla, ailə ilə və ya iş yoldaşları ilə qeyri-rəsmi situasiyalarda rahat işlədə bilərsiniz.",
      example: "I'm so sorry — I completely forgot to call you back yesterday.",
      register: "informal",
    },
    {
      phrase: "I do apologise.",
      level: "B2",
      use: "a more formal, emphatic apology, common in customer service and at work",
      azUse:
        "Rəsmi və vurğulu üzr ifadəsidir; köməkçi \"do\" feli üzrü daha ciddi və səmimi göstərir. Müştəri xidmətində, iş yerində və ya tanımadığınız adamlarla danışarkən istifadə olunur. Gündəlik dostluq söhbətlərində bir az da rəsmi səslənə bilər, ona görə əsasən peşəkar kontekstə uyğundur.",
      example: "I do apologise for the delay in getting back to you.",
      register: "formal",
    },
    {
      phrase: "It was my fault.",
      level: "B1",
      use: "to openly admit that you were the one responsible for the problem",
      azUse:
        "Səhvin günahını açıq şəkildə öz üzərinizə götürmək üçün işlədilir. Bu ifadə dürüstlük göstərir və qarşı tərəfin sizə inamını artırır, çünki bəhanə gətirmək əvəzinə məsuliyyəti qəbul edirsiniz. Həm qeyri-rəsmi, həm də iş mühitində rahat işlənir.",
      example: "It was my fault — I gave you the wrong address.",
      register: "neutral",
    },
    {
      phrase: "I take full responsibility for this.",
      level: "C1",
      use: "a formal way to accept complete responsibility, often in professional or serious situations",
      azUse:
        "Tam məsuliyyəti qəbul etdiyinizi bildirən rəsmi və ciddi ifadədir. Adətən iş yerində, rəsmi məktublarda və ya ciddi bir problem baş verəndə işlədilir. Bu söz birləşməsi sizi yetkin və etibarlı göstərir, çünki günahı başqasının üzərinə atmadığınızı vurğulayır.",
      example:
        "I take full responsibility for this mistake, and I'll make sure it doesn't happen again.",
      register: "formal",
    },
    {
      phrase: "Sorry to bother you.",
      level: "B1",
      use: "a polite way to apologise before interrupting or asking someone for help",
      azUse:
        "Kimisə narahat etməzdən, sualla yaxınlaşmazdan və ya işini kəsməzdən əvvəl nəzakət üçün işlədilən ifadədir. Adamı dincliyini pozduğunuza görə əvvəlcədən üzr istəyir və xahişinizi daha mehriban göstərir. Həm iş, həm gündəlik situasiyalarda çox geniş istifadə olunur.",
      example: "Sorry to bother you, but could you tell me where the meeting room is?",
      register: "neutral",
    },
    {
      phrase: "I owe you an apology.",
      level: "B2",
      use: "to acknowledge, often after some time, that you should apologise to someone",
      azUse:
        "Kimisə incitdiyinizi etiraf edib ona üzr borclu olduğunuzu bildirmək üçün işlədilir. Çox vaxt bir qədər vaxt keçəndən sonra, səhvinizi anlayıb söhbəti yumşaltmaq istəyəndə deyilir. Səmimi və düşünülmüş bir ton yaradır, çünki üzrün vacibliyini etiraf edirsiniz.",
      example: "I owe you an apology — I shouldn't have spoken to you like that.",
      register: "neutral",
    },
    {
      phrase: "Don't worry about it.",
      level: "B1",
      use: "a friendly way to accept someone's apology and tell them it's not a problem",
      azUse:
        "Kimsə sizdən üzr istəyəndə onu sakitləşdirmək və problemin böyük olmadığını bildirmək üçün işlədilən mehriban cavabdır. Qarşı tərəfi rahatladır və söhbəti gərginlikdən çıxarır. Əsasən qeyri-rəsmi, dostyana situasiyalarda işlənir, amma iş yerində də çox rast gəlinir.",
      example: "\"I'm sorry I'm late.\" \"Don't worry about it, we've only just started.\"",
      register: "informal",
    },
    {
      phrase: "No harm done.",
      level: "C1",
      use: "a relaxed, slightly informal way to say an apology isn't needed because nothing bad happened",
      azUse:
        "Heç bir ciddi zərər dəymədiyini bildirib üzrün lazım olmadığını göstərən rahat və bir az qeyri-rəsmi ifadədir. Qarşı tərəfi tamamilə rahatladır və vəziyyəti yüngülləşdirir. Dostlarla, tanışlarla və ya yumşaq iş söhbətlərində işlədilir; çox rəsmi məqamlar üçün uyğun deyil.",
      example: "\"Sorry, I think I gave you the wrong file.\" \"No harm done — I've got the right one now.\"",
      register: "informal",
    },
  ],
  practice: [
    {
      type: "multiple-choice",
      prompt: "Which phrase is the most formal way to apologise?",
      options: ["I'm so sorry.", "I do apologise.", "No harm done."],
      answer: 1,
      explanation:
        "\"I do apologise\" uses the emphatic \"do\" and is formal — ideal for work or customer service. \"I'm so sorry\" is warm but informal, and \"No harm done\" is a reply to an apology, not an apology.",
    },
    {
      type: "multiple-choice",
      prompt: "Someone says \"I'm sorry I'm late.\" Which is a friendly way to accept the apology?",
      options: ["I take full responsibility.", "Don't worry about it.", "Sorry to bother you."],
      answer: 1,
      explanation:
        "\"Don't worry about it\" reassures the person that it's not a problem. The other options are apologies you make yourself, not responses to someone else's apology.",
    },
    {
      type: "multiple-choice",
      prompt: "Which phrase openly admits that you caused the problem?",
      options: ["It was my fault.", "No harm done.", "Sorry to bother you."],
      answer: 0,
      explanation:
        "\"It was my fault\" directly accepts the blame. \"No harm done\" downplays a problem and \"Sorry to bother you\" is used before interrupting someone.",
    },
    {
      type: "gap-fill",
      prompt: "Sorry to ___ you, but could you help me for a moment? (interrupt politely)",
      answer: "bother",
      explanation:
        "\"Sorry to bother you\" is a polite way to apologise before interrupting someone or asking for help.",
    },
    {
      type: "gap-fill",
      prompt: "I take full ___ for this mistake. (accepting it completely)",
      answer: "responsibility",
      explanation:
        "\"I take full responsibility for this\" is a formal way to accept complete responsibility in serious or professional situations.",
    },
    {
      type: "gap-fill",
      prompt: "I ___ you an apology — I shouldn't have said that. (admitting you should apologise)",
      answer: "owe",
      explanation:
        "\"I owe you an apology\" acknowledges that you should apologise, often after some time has passed.",
    },
  ],
};
