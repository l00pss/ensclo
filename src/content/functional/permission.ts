import type { ReferenceGroup } from "../reference";
import type { FunctionalPhrase } from "../types";
import { Key } from "lucide-react";

export const fnPermission: ReferenceGroup<FunctionalPhrase> = {
  id: "permission",
  label: "Permission",
  azLabel: "İcazə",
  icon: Key,
  description:
    "Phrases for asking for, giving and refusing permission politely in different situations.",
  azDescription:
    "Bu qrup nəyisə etməyə icazə istəmək, icazə vermək və ya nəzakətlə icazə verməmək üçün lazım olan ifadələri əhatə edir. İngiliscə icazə istəyəndə birbaşa \"I will do this\" demək yox, \"Can I...?\", \"Do you mind if I...?\" kimi sual formaları işlədilir; icazə verəndə isə \"Of course, go ahead\" kimi qısa, mehriban cavablar standartdır. Burada həm rəsmi (müdir, müəllim, tanımadığın adam), həm də qeyri-rəsmi (dost, ailə) kontekstlər üçün ifadələr var və hər birinin nəzakət səviyyəsi ilə birlikdə icazəni necə rədd etməyin yumşaq yolları da göstərilib.",
  items: [
    {
      phrase: "Can I ...?",
      level: "B1",
      use: "a simple, common way to ask for permission",
      azUse:
        "İcazə istəməyin ən sadə və geniş yayılmış yoludur; \"...edə bilərəm?\" mənasını verir. Gündəlik, qeyri-rəsmi söhbətlərdə — dostlar, ailə, tanış adamlarla — tamamilə təbii səslənir. Rəsmi mühitdə isə bir az birbaşa qaldığı üçün əvəzinə \"Could I...?\" və ya \"May I...?\" işlətmək daha nəzakətli olur.",
      example: "Can I open the window? It's really hot in here.",
      register: "informal",
    },
    {
      phrase: "Could I possibly ...?",
      level: "B1",
      use: "a more polite, tentative way to ask permission",
      azUse:
        "\"Can I...?\" ifadəsinin daha nəzakətli və ehtiyatlı variantıdır; \"possibly\" sözü xahişi daha da yumşaldır və \"əgər mümkünsə\" mənası qatır. Az tanıdığın adamlarla və ya bir qədər böyük, narahatlıq yarada biləcək bir şey istəyəndə uyğundur. Həm rəsmi, həm yarı-rəsmi kontekstdə rahat işlənir.",
      example: "Could I possibly leave a bit early today? I have a doctor's appointment.",
      register: "neutral",
    },
    {
      phrase: "May I ...?",
      level: "B2",
      use: "a formal and polite way to ask for permission",
      azUse:
        "İcazə istəməyin ən rəsmi və nəzakətli formalarından biridir; \"İcazə verərsinizmi...?\" mənasını daşıyır. Rəsmi mühitlərdə — iş görüşləri, müştərilər, müəllim və ya yaşlı, hörmətli adamlarla — istifadə olunur. Gündəlik dostyana söhbətdə bir qədər həddən artıq rəsmi səslənə bilər, ona görə yerini düzgün seçmək vacibdir.",
      example: "May I ask you a personal question?",
      register: "formal",
    },
    {
      phrase: "Do you mind if I ...?",
      level: "B2",
      use: "to ask permission politely, checking it won't bother the other person",
      azUse:
        "Hərfi mənada \"...etsəm sizə narahatlıq yaradarmı?\" deməkdir, ona görə də icazə vermək üçün cavab \"No\" (yox, narahatlıq yoxdur) olur, \"Yes\" deyil — bu, azərbaycanlılar üçün tez-tez çaşdırıcıdır. Bu strukturdan sonra fel sadə indiki zamanda gəlir (Do you mind if I sit...). Çox nəzakətli səslənir və həm rəsmi, həm qeyri-rəsmi hallarda işlənir.",
      example: "Do you mind if I sit here? All the other tables are taken.",
      register: "neutral",
    },
    {
      phrase: "Is it OK if I ...?",
      level: "B1",
      use: "an informal, friendly way to check if something is allowed",
      azUse:
        "Qeyri-rəsmi və mehriban şəkildə nəyinsə olarmı deyə soruşmaq üçün işlənir; \"...etsəm olar?\" mənasını verir. Dostlar, kollegalar və tanış adamlar arasında çox təbii səslənir. \"Do you mind if I...?\" ilə müqayisədə daha sadə və rahatdır; bundan sonra fel sadə indiki zamanda gəlir (Is it OK if I bring...).",
      example: "Is it OK if I bring a friend to the party?",
      register: "informal",
    },
    {
      phrase: "Of course, go ahead.",
      level: "B1",
      use: "to give permission in a friendly, encouraging way",
      azUse:
        "İcazəni mehriban və dəstəkləyici şəkildə vermək üçün işlənən standart cavabdır; \"Əlbəttə, buyurun / davam edin\" mənasını verir. \"Go ahead\" burada \"davam et, et onu\" demək olub icazəni aydın və səmimi göstərir. Həm rəsmi, həm qeyri-rəsmi hallarda işlənə bilər və qarşı tərəfi rahat hiss etdirir.",
      example: "\"Can I use your phone?\" \"Of course, go ahead.\"",
      register: "neutral",
    },
    {
      phrase: "I'd rather you didn't, if that's OK.",
      level: "C1",
      use: "to refuse permission gently and politely",
      azUse:
        "İcazəni nəzakətlə və yumşaq şəkildə rədd etmək üçün işlənir; hərfi mənada \"sən bunu etməsən üstün tutardım\" deməkdir. Diqqət: \"I'd rather you\" strukturundan sonra fel keçmiş zamanda gəlir (didn't), baxmayaraq ki söhbət indidən və ya gələcəkdən gedir. \"If that's OK\" əlavəsi rəddi daha yumşaq və üzrxahlıqla göstərir; rəsmi və qeyri-rəsmi hər iki halda işlənir.",
      example: "\"Can I smoke in here?\" \"I'd rather you didn't, if that's OK.\"",
      register: "neutral",
    },
    {
      phrase: "Sorry, I'm afraid that's not allowed.",
      level: "B2",
      use: "to formally refuse permission by referring to rules",
      azUse:
        "İcazəni rəsmi şəkildə rədd etmək üçün işlənir və rədd səbəbini şəxsi yox, qaydalara bağlayır; \"Bağışlayın, təəssüf ki, buna icazə verilmir\" mənasını daşıyır. \"I'm afraid\" üzr və narahatlıq bildirərək cavabı yumşaldır, \"that's not allowed\" isə günahı qaydalara yıxır, ona görə də şəxsi kimi qəbul edilmir. İş yerində, ictimai məkanlarda və müştərilərlə danışanda çox uyğundur.",
      example: "Sorry, I'm afraid that's not allowed — this is a non-smoking area.",
      register: "formal",
    },
    {
      phrase: "Would it be possible for me to ...?",
      level: "B2",
      use: "a very polite, formal way to ask permission, often for bigger requests",
      azUse:
        "İcazə istəməyin çox nəzakətli və rəsmi yoludur; \"...mənim üçün mümkün olardımı?\" mənasını verir və adətən bir qədər böyük və ya narahatlıq yarada biləcək xahişlər üçün işlənir. Müdir, müştəri və ya az tanıdığın rəsmi şəxslərlə danışanda çox uyğundur, çünki xahişi dolayı və yumşaq şəkildə çatdırır. Strukturdan sonra məsdər (to + fel) gəlir, ona görə \"Would it be possible for me to leave...\" deyilir.",
      example: "Would it be possible for me to start an hour later on Fridays?",
      register: "formal",
    },
    {
      phrase: "Would you mind if I ...?",
      level: "C1",
      use: "a polite, tentative way to ask permission, very common in conversation",
      azUse:
        "\"Do you mind if I...?\" ifadəsinin daha nəzakətli və ehtiyatlı variantıdır; \"would\" sözü xahişi daha yumşaq və fərziyyəli edir. Diqqət: bu strukturdan sonra fel keçmiş zamanda gəlir (Would you mind if I opened...), baxmayaraq ki söhbət indidən gedir. İcazə vermək üçün cavab yenə \"No, not at all\" olur, çünki sual hərfi mənada \"narahat olardınızmı?\" deməkdir; həm rəsmi, həm yarı-rəsmi mühitdə təbii səslənir.",
      example: "Would you mind if I turned the music down a little?",
      register: "neutral",
    },
    {
      phrase: "Feel free to ...",
      level: "B1",
      use: "to give permission in a warm, relaxed way, inviting someone to do something",
      azUse:
        "İcazəni isti və rahat şəkildə vermək, hətta qarşı tərəfi həvəsləndirmək üçün işlənir; \"çəkinmə, rahat ol və et\" mənasını daşıyır. Dostlar, qonaqlar və kollegalarla çox təbii səslənir və adamı sərbəst hiss etdirir. Strukturdan sonra məsdər (to + fel) gəlir, məsələn \"Feel free to help yourself\".",
      example: "Feel free to help yourself to anything in the fridge.",
      register: "informal",
    },
    {
      phrase: "I don't see why not.",
      level: "B2",
      use: "to give permission in a relaxed way, suggesting there's no reason to refuse",
      azUse:
        "İcazəni rahat şəkildə, \"rədd etmək üçün heç bir səbəb görmürəm\" mənasında vermək üçün işlənir; sərbəst tərcüməsi \"olar, niyə olmasın\" deməkdir. Tam həvəsli \"of course\" qədər güclü deyil, daha çox sakit razılıq bildirir, ona görə qeyri-rəsmi və yarı-rəsmi söhbətlərə uyğundur. Cavab kimi tək başına işlənə bilər və mehriban, açıq səslənir.",
      example: "\"Can I bring my dog along?\" \"I don't see why not.\"",
      register: "neutral",
    },
    {
      phrase: "Unfortunately, that's against our policy.",
      level: "B2",
      use: "to refuse permission formally by referring to official rules or policy",
      azUse:
        "İcazəni rəsmi şəkildə rədd etmək və səbəbi şəxsi yox, qurumun qaydalarına bağlamaq üçün işlənir; \"təəssüf ki, bu bizim qaydalarımıza ziddir\" mənasını verir. \"Unfortunately\" üzr və narahatlıq bildirərək cavabı yumşaldır, \"our policy\" isə məsuliyyəti rəsmi qaydalara yıxdığı üçün rədd şəxsi qəbul edilmir. İş yerində, otel, bank və ya müştəri xidmətlərində danışanda çox uyğundur.",
      example: "Unfortunately, that's against our policy — we can't offer refunds after 30 days.",
      register: "formal",
    },
  ],
  practice: [
    {
      type: "multiple-choice",
      prompt: "Which phrase is the most formal way to ask for permission?",
      options: [
        "Can I sit here?",
        "May I sit here?",
        "Is it OK if I sit here?",
      ],
      answer: 1,
      explanation:
        "\"May I ...?\" is the most formal and polite way to ask for permission. \"Can I ...?\" and \"Is it OK if I ...?\" are more informal.",
    },
    {
      type: "multiple-choice",
      prompt:
        "Someone asks: 'Do you mind if I open the window?' You are happy for them to do it. What do you say?",
      options: [
        "Yes, of course.",
        "No, not at all.",
        "Yes, I do mind.",
      ],
      answer: 1,
      explanation:
        "\"Do you mind if I ...?\" literally asks if it bothers you, so agreeing means saying 'No' (it doesn't bother me). 'Yes' would mean you refuse.",
    },
    {
      type: "multiple-choice",
      prompt: "Which phrase politely REFUSES permission?",
      options: [
        "Of course, go ahead.",
        "I'd rather you didn't, if that's OK.",
        "Sure, no problem.",
      ],
      answer: 1,
      explanation:
        "\"I'd rather you didn't\" gently refuses permission. The other two give permission.",
    },
    {
      type: "gap-fill",
      prompt:
        "\"Can I use your laptop?\" \"Of course, go ___.\" (give permission in a friendly way)",
      answer: "ahead",
      explanation:
        "\"Go ahead\" is a friendly way to give permission, meaning 'yes, do it'.",
    },
    {
      type: "gap-fill",
      prompt:
        "Do you ___ if I bring a friend to dinner? (polite way to ask permission)",
      answer: "mind",
      explanation:
        "\"Do you mind if I ...?\" is a polite way to ask permission, checking it won't bother the other person.",
    },
    {
      type: "gap-fill",
      prompt:
        "Sorry, I'm afraid that's not ___ in this building. (formally refuse by referring to rules)",
      answer: "allowed",
      explanation:
        "\"That's not allowed\" formally refuses permission by referring to a rule rather than a personal choice.",
    },
  ],
};
