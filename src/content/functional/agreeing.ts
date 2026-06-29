import type { ReferenceGroup } from "../reference";
import type { FunctionalPhrase } from "../types";
import { Scale } from "lucide-react";

export const fnAgreeing: ReferenceGroup<FunctionalPhrase> = {
  id: "agreeing",
  label: "Agreeing & Disagreeing",
  azLabel: "Razılaşma və etiraz",
  icon: Scale,
  description:
    "Phrases for agreeing, partly agreeing, and politely disagreeing in discussions, meetings, and debates.",
  azDescription:
    "Bu qrup müzakirə, iclas və mübahisələrdə başqasının fikri ilə razılaşmaq, qismən razılaşmaq və ya nəzakətlə etiraz etmək üçün ifadələri əhatə edir. İngiliscə birbaşa \"No, you are wrong\" demək çox kobud səslənir; ona görə də etirazı yumşaltmaq və qarşı tərəfin fikrinə hörmət göstərmək üçün xüsusi ifadələrdən istifadə olunur. Burada həm güclü razılaşma, həm \"həm hə, həm yox\" tipli qismən razılaşma, həm də nəzakətli etiraz nümunələri var və hər birinin rəsmilik səviyyəsi fərqlidir.",
  items: [
    {
      phrase: "I couldn't agree more.",
      level: "B2",
      use: "to express strong, complete agreement with someone",
      azUse:
        "Kiminləsə tam və güclü şəkildə razılaşdığını bildirmək üçün işlənir. Hərfən \"daha çox razılaşa bilməzdim\" deməkdir, yəni \"bundan da çox razı ola bilmərəm\" — yəni 100% razıyam. Diqqət: bu müsbət mənalıdır, çoxları səhvən onu mənfi kimi başa düşür; neytral və qeyri-rəsmi söhbətlərdə geniş işlənir.",
      example: "\"This city needs better public transport.\" \"I couldn't agree more.\"",
      register: "neutral",
    },
    {
      phrase: "You have a point there.",
      level: "B1",
      use: "to admit that someone's argument is valid, often before adding your own view",
      azUse:
        "Qarşı tərəfin fikrində məntiq olduğunu, doğru bir məqama toxunduğunu etiraf etmək üçün işlənir. Çox vaxt tam razılaşmadan əvvəl və ya öz fikrini əlavə etməzdən qabaq \"haqlısan, amma...\" mənasında deyilir. Qeyri-rəsmi və mehriban səslənir, gündəlik söhbətlərdə rahat işlədilir.",
      example: "\"We should leave earlier to avoid traffic.\" \"You have a point there.\"",
      register: "informal",
    },
    {
      phrase: "That's exactly how I feel.",
      level: "B1",
      use: "to show warm, personal agreement with what someone said",
      azUse:
        "Kiminsə dediyi şeyin sənin də düşündüyünlə eyni olduğunu, hisslərinə tərcüman olduğunu bildirmək üçün işlənir. Daha emosional və səmimi razılaşmadır — yalnız məntiqlə deyil, hisslə də razı olduğunu göstərir. Dostlarla və qeyri-rəsmi mühitdə təbii səslənir.",
      example: "\"Honestly, I'm exhausted by this project.\" \"That's exactly how I feel.\"",
      register: "informal",
    },
    {
      phrase: "I see what you mean, but...",
      level: "B1",
      use: "to acknowledge someone's point before politely disagreeing or adding a different view",
      azUse:
        "Etiraz etməzdən əvvəl qarşı tərəfin fikrini başa düşdüyünü göstərmək üçün işlənir — etirazı yumşaldan çox güclü bir vasitədir. Əvvəlcə \"nə demək istədiyini başa düşürəm\" deyib sonra \"amma\" ilə öz fərqli fikrini bildirirsən, beləliklə kobud səslənmirsən. Həm rəsmi iclasda, həm gündəlik söhbətdə işlədilə bilər.",
      example: "I see what you mean, but I think the deadline is still too tight.",
      register: "neutral",
    },
    {
      phrase: "I'm afraid I disagree.",
      level: "B2",
      use: "to disagree politely and a little formally",
      azUse:
        "Nəzakətli, bir qədər rəsmi şəkildə razı olmadığını bildirmək üçün işlənir. \"I'm afraid\" hissəsi burada \"qorxuram\" yox, \"təəssüf ki\" mənasını verir və etirazı yumşaldır, üzr istəyirmiş kimi səs verir. İş yerində, iclaslarda və hörmətli söhbətlərdə fikir ayrılığını bildirməyin ən təhlükəsiz yollarından biridir.",
      example: "I'm afraid I disagree — the data doesn't support that conclusion.",
      register: "formal",
    },
    {
      phrase: "I take your point, but I'd argue that...",
      level: "C1",
      use: "to concede part of an argument while making a counter-argument, often in formal debate",
      azUse:
        "Qarşı tərəfin arqumentini qəbul etdiyini göstərib, dərhal öz əks-arqumentini irəli sürmək üçün işlənir — rəsmi müzakirə və debatlarda çox təsirli səslənir. \"I take your point\" \"fikrini qəbul edirəm\", \"I'd argue that\" isə \"mən isə iddia edərdim ki\" deməkdir. Akademik və işgüzar mühitdə savadlı, balanslı etiraz təəssüratı yaradır.",
      example:
        "I take your point about the cost, but I'd argue that the long-term savings outweigh it.",
      register: "formal",
    },
    {
      phrase: "I beg to differ.",
      level: "C1",
      use: "a formal, sometimes slightly ironic way to say you disagree",
      azUse:
        "Razı olmadığını çox rəsmi, bəzən bir az kinayəli şəkildə bildirmək üçün işlənir — \"icazənizlə, fikrim fərqlidir\" mənasını verir. Rəsmi mühitdə hörmətli, dostlar arasında isə yüngül zarafatla deyilə bilər, ona görə tonu kontekstdən asılıdır. Gündəlik adi söhbətdə nadir, daha çox yazıda və ciddi müzakirələrdə rast gəlinir.",
      example: "You say the plan is flawless, but I beg to differ.",
      register: "formal",
    },
    {
      phrase: "No way! / Come off it!",
      level: "B2",
      use: "to disagree strongly and informally, often with friends",
      azUse:
        "Çox qeyri-rəsmi və güclü şəkildə razı olmadığını, hətta inanmadığını bildirmək üçün işlənir — \"əsla!\", \"yox ey, boş ver!\" mənasında. Yalnız dostlar və yaxın adamlarla rahat söhbətdə işlədilir; iş yerində və ya hörmət tələb edən mühitdə çox kobud səslənər. \"Come off it!\" əlavə olaraq \"saçmalama, ciddi ola bilməzsən\" çaları daşıyır.",
      example: "\"This is the best film ever made.\" \"No way! It was so boring.\"",
      register: "informal",
    },
  ],
  practice: [
    {
      type: "multiple-choice",
      prompt: "Which phrase expresses the STRONGEST agreement?",
      options: [
        "I couldn't agree more.",
        "You have a point there.",
        "I see what you mean, but...",
      ],
      answer: 0,
      explanation:
        "\"I couldn't agree more\" means you agree completely — it cannot be stronger. The other two only partly agree or set up a disagreement.",
    },
    {
      type: "multiple-choice",
      prompt: "Which phrase is the MOST polite/formal way to disagree?",
      options: ["No way!", "I'm afraid I disagree.", "Come off it!"],
      answer: 1,
      explanation:
        "\"I'm afraid I disagree\" softens the disagreement and is suitable for meetings. \"No way!\" and \"Come off it!\" are strong and informal.",
    },
    {
      type: "multiple-choice",
      prompt: "You want to accept part of an argument before giving a counter-argument. Which fits best?",
      options: [
        "That's exactly how I feel.",
        "I take your point, but I'd argue that...",
        "I couldn't agree more.",
      ],
      answer: 1,
      explanation:
        "\"I take your point, but I'd argue that...\" concedes a point and then introduces a counter-argument. The others only express agreement.",
    },
    {
      type: "gap-fill",
      prompt: "I see what you ___, but I think the deadline is too tight. (understand someone's meaning)",
      answer: "mean",
      explanation:
        "\"I see what you mean, but...\" acknowledges the other person before politely disagreeing.",
    },
    {
      type: "gap-fill",
      prompt: "I'm ___ I disagree — the data doesn't support that. (a polite softener: 'I'm sorry to say')",
      answer: "afraid",
      explanation:
        "Here \"afraid\" doesn't mean scared; \"I'm afraid\" softens bad news or disagreement and sounds polite.",
    },
    {
      type: "gap-fill",
      prompt: "You have a ___ there — we really should leave earlier. (a valid argument)",
      answer: "point",
      explanation:
        "\"You have a point there\" admits that someone's argument is valid.",
    },
  ],
};
