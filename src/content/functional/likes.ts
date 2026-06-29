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
    {
      phrase: "If it were up to me, I'd ...",
      level: "C1",
      use: "to express a personal preference while acknowledging the decision isn't only yours",
      azUse:
        "Qərarın yalnız sənə bağlı olmadığını etiraf edərək öz şəxsi üstünlüyünü nəzakətli şəkilde bildirmək üçün işlənən ifadədir — \"mənlik olsaydı\", \"məndən asılı olsaydı\" mənasını verir. Şərti cümlə qurluşu fikri yumşaldır və başqalarının da rəyi olduğunu nəzərə alır, ona görə müzakirələrdə və iş yerində çox uyğun gəlir. Ardınca \"would\"-lu cümlə gəlir: \"If it were up to me, I'd choose the quieter venue\".",
      example: "If it were up to me, I'd start the meeting an hour later.",
      register: "formal",
    },
    {
      phrase: "I much prefer ... to ...",
      level: "B2",
      use: "to emphasise a clear, strong preference between two specific things",
      azUse:
        "İki konkret şey arasında güclü və aydın üstünlüyü vurğulamaq üçün işlənir — \"qat-qat üstün tuturam\", \"çox daha çox xoşlayıram\" mənasını verir. \"Much\" sözü üstünlüyü gücləndirir və adi \"I prefer\"-dən daha qətiyyətli səslənir. Diqqət: müqayisədə \"than\" yox, \"to\" işlənir və ardınca isim ya da -ing formalı feil gəlir: \"I much prefer reading to watching TV\".",
      example: "I much prefer working from home to commuting every day.",
      register: "neutral",
    },
    {
      phrase: "I'm dying to ...",
      level: "B2",
      use: "an informal, very enthusiastic way to say you really want to do something",
      azUse:
        "Bir şeyi etmək üçün böyük səbirsizlik və həvəs bildirmək üçün işlənən qeyri-rəsmi, emosional ifadədir — \"ölürəm ki\", \"can atıram\", \"lap həvəslənmişəm\" mənasını verir. Hərfi \"ölmək\" mənası yoxdur, sadəcə arzunun çox güclü olduğunu mübaliğəli şəkilde göstərir. Ardınca \"to\"-lu feil gəlir və yalnız dostlar arasında, qeyri-rəsmi söhbətdə işlət: \"I'm dying to see that film\".",
      example: "I'm dying to try that new ramen place everyone's talking about.",
      register: "informal",
    },
    {
      phrase: "I have a soft spot for ...",
      level: "C1",
      use: "to say you have a special, often sentimental, fondness for something or someone",
      azUse:
        "Bir şeyə və ya kimisə xüsusi, çox vaxt hissi və ürəkdən gələn zəiflik duyduğunu bildirmək üçün işlənən idiomatik ifadədir — \"zəif yerim var\", \"ürəyimde xüsusi yeri var\" mənasını verir. Adətən məntiqdən çox emosiyaya əsaslanan, izah etməsi çətin bir bağlılığı təsvir edir. İsti və səmimi tona malikdir; ardınca \"for\" və isim gəlir: \"I have a soft spot for stray cats\".",
      example: "I have a soft spot for old black-and-white films.",
      register: "neutral",
    },
    {
      phrase: "I wouldn't say no to ...",
      level: "B1",
      use: "a light, polite way to accept or hint that you'd welcome something",
      azUse:
        "Bir təklifi yüngül və nəzakətli şəkilde qəbul etdiyini, yaxud bir şeyi məmnuniyyətlə istədiyini eyhamla bildirmək üçün işlənir — \"yox deməzdim\", \"pis olmazdı\" mənasını verir. İnkarla qurulan bu ifadə birbaşa \"yes, I want it\" deməkdən daha təvazökar və zarafatyana səslənir. Çox vaxt yemək-içmək təklifinə yumşaq razılıq kimi işlənir: \"I wouldn't say no to a cup of tea\".",
      example: "I wouldn't say no to a second slice of that cake.",
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
