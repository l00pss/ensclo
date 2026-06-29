import type { ReferenceGroup } from "../reference";
import type { FunctionalPhrase } from "../types";
import { ThumbsUp } from "lucide-react";

export const fnLikes: ReferenceGroup<FunctionalPhrase> = {
  id: "likes",
  label: "Likes & Preferences",
  azLabel: "Bəyənmə və üstünlük",
  icon: ThumbsUp,
  description:
    "Phrases for expressing what you like, dislike and prefer in a natural, varied way.",
  azDescription:
    "Bu ifadələr bir şeyi sevdiyini, sevmədiyini və ya birini digərinə üstün tutduğunu təbii şəkilde bildirmək üçün lazımdır — hər dəfə \"I like\" və \"I don't like\" demək nitqi yeknəsək və zəif göstərir. Burada həm güclü bəyənməni (\"I'm really into\", \"I'm a big fan of\"), həm üstünlüyü (\"I'd prefer\", \"I'd rather\"), həm de xoşlamamağı (\"It's not really my thing\", \"I can't stand\") bildirən ifadələr var. Gündəlik söhbətdə, restoranda sifariş verəndə, plan qurarkən və ya zövqlərini müzakirə edərkən düzgün ton və registr seçmək üçün işlənir.",
  items: [
    {
      phrase: "I'm really into ...",
      level: "B2",
      use: "an informal way to say you enjoy something a lot, often a hobby",
      azUse:
        "Bir şeydən, xüsusən hobbi və ya maraqdan çox zövq aldığını bildirmək üçün işlənən qeyri-rəsmi ifadədir — \"çox aludəyəm\", \"çox xoşlayıram\" mənasını verir. Adətən isim və ya -ing formalı feildən əvvəl gəlir: \"I'm really into photography\". Dostlarla söhbətdə təbii səslənir, lakin rəsmi yazıda istifadə etmə.",
      example: "I'm really into hiking these days — I go every weekend.",
      register: "informal",
    },
    {
      phrase: "I'm a big fan of ...",
      level: "B1",
      use: "to say you like something or someone a great deal",
      azUse:
        "Bir şeyi və ya kimisə çox bəyəndiyini bildirmək üçün işlənir — hərfi mənada \"böyük pərəstişkarıyam\", amma gündəlik dildə sadəcə \"çox xoşlayıram\" deməkdir. Həm musiqiçi, komanda kimi şəxslər, həm də yemək, fəaliyyət kimi şeylər üçün işlənə bilər: \"I'm a big fan of Italian food\". Neytral registrdir, demək olar ki, hər kontekstdə uyğundur.",
      example: "I'm a big fan of their early albums, but the new one is weak.",
      register: "neutral",
    },
    {
      phrase: "I'm quite fond of ...",
      level: "C1",
      use: "a slightly formal way to say you like something gently",
      azUse:
        "Bir şeyi mülayim və ürəkdən xoşladığını bildirmək üçün işlənən bir qədər rəsmi və zərif ifadədir — \"olduqca xoşlayıram\", \"ürəyimə yatır\" mənasını verir. Çox vaxt köhnə vərdişlər, yerlər və ya insanlar haqqında isti, sakit bir tonla işlənir. \"Fond of\"-dan sonra isim və ya -ing formalı feil gəlir: \"I'm fond of cooking\".",
      example: "I'm quite fond of the little café on the corner.",
      register: "formal",
    },
    {
      phrase: "I'd prefer ... (rather than ...)",
      level: "B1",
      use: "to state a preference between options politely",
      azUse:
        "İki və ya daha çox seçim arasından birini nəzakətli şəkilde üstün tutduğunu bildirmək üçün işlənir — \"üstün tuturam\", \"daha çox istərdim\" mənasını verir. \"I'd\" əslinde \"I would\"-dur və ifadəni birbaşa \"I want\"-dan daha yumşaq edir. Ardınca isim (\"I'd prefer tea\") və ya \"to\"-lu feil (\"I'd prefer to stay\") gəlir; müqayisə üçün \"rather than\" əlavə edilir.",
      example: "I'd prefer to meet in the morning rather than after lunch.",
      register: "neutral",
    },
    {
      phrase: "I'd rather ... (than ...)",
      level: "B1",
      use: "an informal way to say which option you prefer",
      azUse:
        "Hansı variantı seçdiyini qısa və təbii şəkilde bildirmək üçün geniş işlənən danışıq ifadəsidir — \"daha yaxşı olar\", \"...-mağı üstün tutaram\" mənasını verir. Diqqət: \"I'd rather\"-dan sonra feil \"to\"-suz gəlir — \"I'd rather stay home\", \"I'd rather go\" yox \"I'd rather to go\". Müqayisə üçün \"than\" işlənir: \"I'd rather walk than wait for the bus\".",
      example: "I'd rather stay in tonight than go to a crowded bar.",
      register: "informal",
    },
    {
      phrase: "It's not really my thing.",
      level: "B2",
      use: "a polite, soft way to say you don't enjoy something",
      azUse:
        "Bir şeyi xoşlamadığını kobud səslənmədən, yumşaq şəkilde bildirmək üçün işlənən qeyri-rəsmi ifadədir — \"o, mənlik deyil\", \"o qədər də xoşum gəlmir\" mənasını verir. Birbaşa \"I hate it\" deməkdənsə bunu işlətmək söhbəti nəzakətli saxlayır və qarşı tərəfi incitmir. Adətən təklifi və ya zövqü mehribancasına rədd edəndə istifadə olunur.",
      example: "Thanks, but clubbing isn't really my thing.",
      register: "informal",
    },
    {
      phrase: "I'm not too keen on ...",
      level: "B2",
      use: "a mild, polite way to express dislike",
      azUse:
        "Bir şeyi o qədər də sevmədiyini mülayim və nəzakətli şəkilde bildirmək üçün işlənir — \"o qədər həvəsli deyiləm\", \"xoşlamıram\" mənasını verir. \"Keen on\" bir şeyə həvəs göstərmək deməkdir, ona görə \"not too keen on\" həvəssizliyi yumşaq ifadə edir. Britaniya İngilisinde çox yayılıb; ardınca isim və ya -ing formalı feil gəlir: \"I'm not keen on waiting\".",
      example: "I'm not too keen on spicy food, to be honest.",
      register: "neutral",
    },
    {
      phrase: "I can't stand ...",
      level: "B2",
      use: "a strong, informal way to say you really dislike something",
      azUse:
        "Bir şeyə güclü nifrət və ya dözümsüzlük bildirmək üçün işlənən qüvvətli, qeyri-rəsmi ifadədir — \"dözə bilmirəm\", \"zəhləm gedir\" mənasını verir. Tonu çox güclü olduğu üçün yalnız doğrudan da bezdiyin şeylər haqqında və qeyri-rəsmi şəraitdə işlət. Ardınca isim və ya -ing formalı feil gəlir: \"I can't stand waiting in queues\".",
      example: "I can't stand people who are late for everything.",
      register: "informal",
    },
  ],
  practice: [
    {
      type: "multiple-choice",
      prompt: "Which phrase expresses the strongest dislike?",
      options: [
        "It's not really my thing.",
        "I'm not too keen on it.",
        "I can't stand it.",
      ],
      answer: 2,
      explanation:
        "\"I can't stand it\" is a strong, informal way to say you really dislike something. The other two are mild and polite.",
    },
    {
      type: "multiple-choice",
      prompt: "Which phrase is a soft, polite way to say you don't enjoy something?",
      options: [
        "I can't stand it.",
        "It's not really my thing.",
        "I'm a big fan of it.",
      ],
      answer: 1,
      explanation:
        "\"It's not really my thing\" softly declines or expresses dislike without sounding rude.",
    },
    {
      type: "multiple-choice",
      prompt: "Which phrase says you enjoy a hobby a lot, informally?",
      options: [
        "I'm really into it.",
        "I'd rather not.",
        "I'm not too keen on it.",
      ],
      answer: 0,
      explanation:
        "\"I'm really into ...\" is an informal way to say you enjoy something, often a hobby, a great deal.",
    },
    {
      type: "gap-fill",
      prompt: "I'd ___ stay home than go out tonight. (prefer; followed by a bare verb)",
      answer: "rather",
      explanation:
        "After \"I'd rather\" the verb has no \"to\": \"I'd rather stay\". Use \"than\" for the comparison.",
    },
    {
      type: "gap-fill",
      prompt: "I'm a big ___ of jazz music. (someone who likes it a lot)",
      answer: "fan",
      explanation:
        "The fixed phrase is \"a big fan of\", meaning you like something or someone a great deal.",
    },
    {
      type: "gap-fill",
      prompt: "Sorry, hiking isn't really my ___. (a soft way to say you don't enjoy it)",
      answer: "thing",
      explanation:
        "\"It's not really my thing\" politely says you don't enjoy something.",
    },
  ],
};
