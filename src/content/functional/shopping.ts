import type { ReferenceGroup } from "../reference";
import type { FunctionalPhrase } from "../types";
import { ShoppingCart } from "lucide-react";

export const fnShopping: ReferenceGroup<FunctionalPhrase> = {
  id: "shopping",
  label: "Shopping & Services",
  azLabel: "Alış-veriş və xidmət",
  icon: ShoppingCart,
  description:
    "Phrases for shopping in stores, dining in restaurants, and dealing with customer service.",
  azDescription:
    "Bu qrup mağazalarda alış-veriş edərkən, restoranlarda yemək sifariş edərkən və müştəri xidməti ilə danışarkən lazım olan ifadələri əhatə edir. İngiliscə birbaşa \"I want this\" və ya \"Give me the bill\" demək kobud səslənir; bunun əvəzinə \"Could I...\", \"I'd like to...\" kimi nəzakətli strukturlardan istifadə olunur. Burada həm satıcı/ofisiant ilə qeyri-rəsmi söhbət, həm də şikayət və geri qaytarma kimi rəsmi vəziyyətlər üçün ifadələr var və hər birinin nəzakət səviyyəsi izah olunub.",
  items: [
    {
      phrase: "I'm just browsing, thanks.",
      level: "B1",
      use: "to politely tell a shop assistant you are only looking, not buying yet",
      azUse:
        "Mağazada satıcı \"Can I help you?\" deyə yaxınlaşanda, hələ almaq fikrin olmadığını, sadəcə baxdığını nəzakətlə bildirmək üçün işlənir; \"browse\" sözü \"sadəcə nəzər salmaq, gəzmək\" deməkdir. Bu ifadə satıcını incitmədən onu rahatca uzaqlaşdırır və səni təzyiq altında hiss etdirmir. Qeyri-rəsmi, lakin nəzakətli səslənir; sonuna \"thanks\" əlavə etmək onu daha da mehriban edir.",
      example:
        "\"Are you looking for anything in particular?\" \"I'm just browsing, thanks.\"",
      register: "informal",
    },
    {
      phrase: "Could I try this on?",
      level: "B1",
      use: "to ask permission to try on clothes in a shop",
      azUse:
        "Geyim mağazasında bir paltarı geyinib yoxlamaq (sınamaq) üçün icazə istəmək üçün işlənir; \"try on\" feli xüsusi olaraq geyimi əyninə geyib yoxlamaq mənasını verir. \"Could I...\" strukturu xahişi nəzakətli edir, sadəcə \"Can I\" demək də olar, lakin \"Could\" bir az daha kibar səslənir. Satıcıdan geyinmə kabinəsini (\"fitting room\") göstərməsini gözləyə bilərsən.",
      example: "Excuse me, could I try this on? What size is it?",
      register: "neutral",
    },
    {
      phrase: "Do you take card?",
      level: "B1",
      use: "to ask whether a shop or restaurant accepts card payments",
      azUse:
        "Ödəniş edərkən kartla ödəyə biləcəyini soruşmaq üçün işlənən qısa, gündəlik ifadədir; \"take\" burada \"qəbul etmək\" mənasındadır. Daha rəsmi variantı \"Do you accept cards?\" olsa da, bu qısa forma kafe, taksi və kiçik mağazalarda tamamilə təbii səslənir. Əksini soruşmaq üçün \"Can I pay by card?\" də deyə bilərsən.",
      example: "Do you take card, or is it cash only?",
      register: "informal",
    },
    {
      phrase: "Could we have the bill, please?",
      level: "B1",
      use: "to ask for the bill at the end of a meal in a restaurant",
      azUse:
        "Restoranda yeməyi bitirdikdən sonra ofisiantdan hesabı (çeki) gətirməsini xahiş etmək üçün işlənir; Britaniya ingiliscəsində \"the bill\", Amerika ingiliscəsində isə çox vaxt \"the check\" deyilir. \"Could we have..., please?\" strukturu çox nəzakətlidir və masadakı bütün qrup adından danışmağa imkan verir. Əl ilə yazı işarəsi etmək əvəzinə bu ifadəni demək daha mədəni sayılır.",
      example: "That was lovely. Could we have the bill, please?",
      register: "neutral",
    },
    {
      phrase: "I'd like to make a reservation.",
      level: "B2",
      use: "to formally book a table at a restaurant in advance",
      azUse:
        "Restoranda əvvəlcədən masa sifariş etmək (rezervasiya etmək) üçün, adətən telefonla və ya gələndə işlənən rəsmi ifadədir; \"I'd like to\" (= I would like to) \"istərdim\" mənasını verir və \"I want\" -dən daha nəzakətlidir. Adətən bundan sonra neçə nəfər olduğunu və saatı bildirirsən (məs. \"for two, at eight o'clock\"). Eyni struktur otel, kurs və ya bilet sifarişində də işlənə bilər.",
      example:
        "Hello, I'd like to make a reservation for four people on Saturday evening.",
      register: "formal",
    },
    {
      phrase: "Could I get a refund?",
      level: "B2",
      use: "to ask for your money back for a faulty or unwanted item",
      azUse:
        "Aldığın məhsulu qaytarıb pulunu geri almaq istədiyini bildirmək üçün işlənir; \"refund\" \"pulun geri qaytarılması\" deməkdir. Adətən məhsul qüsurlu olanda və ya sənə uyğun gəlməyəndə deyilir və çek (\"receipt\") tələb oluna bilər. \"Could I...\" forması nəzakətlidir; alternativ olaraq \"I'd like a refund\" də deyə bilərsən, amma bu bir qədər daha qətiyyətli səslənir.",
      example:
        "This shirt has a hole in it. Could I get a refund, please? Here's the receipt.",
      register: "neutral",
    },
    {
      phrase: "I'd like to exchange this for a different size.",
      level: "B2",
      use: "to ask to swap an item for another one rather than getting money back",
      azUse:
        "Aldığın əşyanı pul geri almaq əvəzinə başqası ilə dəyişmək istədiyini bildirmək üçün işlənir; \"exchange ... for ...\" \"...-i ...-ə dəyişmək\" deməkdir. Geyimlərdə ən çox ölçü (\"size\") və ya rəng (\"colour\") dəyişdirmək üçün lazım olur. Bu rəsmi və aydın ifadədir, müştəri xidmətində dəqiq nə istədiyini izah etməyə imkan verir.",
      example:
        "These shoes are too small. I'd like to exchange this for a different size.",
      register: "formal",
    },
    {
      phrase: "I'm afraid I have a complaint about ...",
      level: "C1",
      use: "to formally and politely raise a complaint about a product or service",
      azUse:
        "Bir məhsul və ya xidmətdən narazılığını rəsmi və nəzakətli şəkildə bildirmək üçün işlənir; \"I'm afraid\" burada qorxu yox, xoşagəlməz xəbəri yumşaq çatdırmaq üçün \"təəssüf ki\" mənasındadır. Bu struktur şikayəti birbaşa hücum kimi səsləndirmədən, mədəni və ciddi şəkildə qaldırmağa imkan verir. Otel, restoran və ya rəsmi müştəri xidmətində ən uyğun ifadədir.",
      example:
        "I'm afraid I have a complaint about the service I received yesterday.",
      register: "formal",
    },
  ],
  practice: [
    {
      type: "multiple-choice",
      prompt:
        "A shop assistant asks 'Can I help you?' but you only want to look. What do you say?",
      options: [
        "Could I get a refund?",
        "I'm just browsing, thanks.",
        "Do you take card?",
      ],
      answer: 1,
      explanation:
        "\"I'm just browsing, thanks.\" politely tells the assistant you are only looking, not ready to buy. The other options are about payment or refunds.",
    },
    {
      type: "multiple-choice",
      prompt:
        "Which phrase is the most formal way to raise a problem with a service?",
      options: [
        "Do you take card?",
        "Could I try this on?",
        "I'm afraid I have a complaint about the service.",
      ],
      answer: 2,
      explanation:
        "\"I'm afraid I have a complaint about ...\" is the polite, formal way to raise an issue. The others ask about payment or trying on clothes.",
    },
    {
      type: "multiple-choice",
      prompt:
        "You bought a faulty item and want your money back. What do you ask?",
      options: [
        "Could I get a refund?",
        "Could I try this on?",
        "Could we have the bill?",
      ],
      answer: 0,
      explanation:
        "\"Could I get a refund?\" asks for your money back. \"Try this on\" is for clothes, and \"the bill\" is asking to pay in a restaurant.",
    },
    {
      type: "gap-fill",
      prompt:
        "That meal was delicious. Could we have the ___, please? (the document showing what you must pay in a restaurant)",
      answer: "bill",
      explanation:
        "\"Could we have the bill, please?\" is how you ask to pay at the end of a meal in British English.",
    },
    {
      type: "gap-fill",
      prompt:
        "Hello, I'd like to make a ___ for two people at eight o'clock. (booking a table in advance)",
      answer: "reservation",
      explanation:
        "\"I'd like to make a reservation\" is the formal way to book a table in advance.",
    },
    {
      type: "gap-fill",
      prompt:
        "These jeans don't fit. I'd like to ___ them for a different size. (swap for another item, not get money back)",
      answer: "exchange",
      explanation:
        "\"Exchange this for a different size\" means swapping the item rather than getting a refund.",
    },
  ],
};
