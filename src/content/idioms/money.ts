import type { ReferenceGroup } from "../reference";
import type { Idiom } from "../types";
import { Banknote } from "lucide-react";

export const idiomMoney: ReferenceGroup<Idiom> = {
  id: "money",
  label: "Money & Business",
  azLabel: "Pul və biznes",
  icon: Banknote,
  description:
    "Common English idioms about money, spending, saving, prices, debt and business decisions.",
  azDescription:
    "Bu qrupda pulla, xərcləmə və qənaətlə, qiymətlərlə, borc və biznes qərarları ilə bağlı ən çox işlənən idiomlar toplanıb. Onlar gündəlik söhbətlərdə, alış-veriş zamanı və iş yerində maliyyə mövzularından danışarkən çox rast gəlinir. Bu ifadələri bilmək sizə həm təbii danışmağa, həm də ingiliscə xəbər və biznes mətnlərini anlamağa kömək edəcək.",
  items: [
    {
      idiom: "cost an arm and a leg",
      level: "B1",
      meaning: "to be very expensive",
      azMeaning:
        "çox baha olmaq, böyük pul aparmaq; hərfən 'bir qol və bir ayağa başa gəlmək', yəni nəyinsə qiyməti həddən artıq yüksək olanda işlənir. Adətən bir şeyin gözlədiyimizdən qat-qat bahalı olmasından şikayətlənərkən deyilir.",
      example: "I'd love that new phone, but it costs an arm and a leg.",
      register: "informal",
      azNote:
        "Çox vaxt 'cost' feli ilə işlənir, amma 'pay an arm and a leg (for something)' formasında da rast gəlinir. Danışıqda yüksək qiymətə təəccüb və narazılıq bildirir.",
    },
    {
      idiom: "make ends meet",
      level: "B1",
      meaning: "to have just enough money to pay for the things you need",
      azMeaning:
        "güc-bəla ilə dolanmaq, ucu-ucuna çatdırmaq; qazandığın pul yalnız əsas ehtiyaclara çatanda işlənir. Yəni gəlir və xərclərin ucundan-ucundan kəsişməsini, çətinliklə baş-başa gətirməyi bildirir.",
      example:
        "After the rent went up, the family could barely make ends meet.",
      register: "neutral",
      azNote:
        "Çox vaxt 'barely', 'struggle to' və ya 'hard to' sözləri ilə birlikdə işlənir və maddi çətinliyi vurğulayır.",
    },
    {
      idiom: "a rip-off",
      level: "B1",
      meaning: "something that is too expensive or not worth the price",
      azMeaning:
        "soyğunçuluq, dələduzluq qiymət; bir şeyin dəyərinə görə həddən artıq baha satılması, müştərinin aldadılması mənasında işlənir. Yəni verdiyin pula görə aldığın şeyin buna dəyməməsini bildirir.",
      example: "Ten dollars for a small coffee? That's a complete rip-off!",
      register: "informal",
      azNote:
        "İsim kimi 'a rip-off' işlənir; feil forması isə 'to rip someone off' (kimisə soymaq, aldatmaq) şəklindədir.",
    },
    {
      idiom: "tighten your belt",
      level: "B2",
      meaning: "to spend less money because you have less than before",
      azMeaning:
        "kəmərini sıxmaq, yəni xərcləri azaltmaq və daha qənaətlə yaşamaq; pul az olanda və ya çətin maliyyə dövründə tələbatları kiçildib az xərcləmək mənasında işlənir. Çox vaxt iqtisadi çətinlik və ya gəlir azalması fonunda deyilir.",
      example:
        "When he lost his job, the whole family had to tighten their belts.",
      register: "informal",
      azNote:
        "İyelik əvəzliyi şəxsə uyğun dəyişir: 'tighten my/your/their belt(s)'. Tez-tez böhran və ya büdcə kəsintisi kontekstində işlənir.",
    },
    {
      idiom: "break the bank",
      level: "B2",
      meaning: "to cost too much money or use up all your money",
      azMeaning:
        "cibə ağır oturmaq, bütün pulu xərcləməyə məcbur etmək; bir şeyin qiymətinin imkanları aşması mənasında işlənir. Maraqlıdır ki, çox vaxt inkar formasında — 'won't break the bank' (cibinə ziyan vurmaz) — kimi sərfəli olduğunu demək üçün işlədilir.",
      example:
        "Let's go somewhere nice for dinner that won't break the bank.",
      register: "informal",
      azNote:
        "Çox vaxt 'won't' və ya 'doesn't' ilə işlənərək nəyinsə əlçatan və münasib qiymətli olduğunu bildirir.",
    },
    {
      idiom: "cut corners",
      level: "B2",
      meaning: "to do something cheaply or quickly, ignoring quality or rules",
      azMeaning:
        "küncləri kəsmək, yəni vaxt və ya puldan qənaət etmək üçün işi yarımçıq, ucuz və keyfiyyətsiz görmək; lazımi addımları və ya qaydaları ötürüb-keçmək mənasında işlənir. Adətən mənfi çalarda — keyfiyyətin və ya təhlükəsizliyin qurban verilməsindən danışarkən — istifadə olunur.",
      example:
        "The builders cut corners to save money, and now the roof leaks.",
      register: "neutral",
      azNote:
        "Biznes və istehsalda tez-tez işlənir; ucuz başa gəlsin deyə keyfiyyətdən güzəştə getməyi tənqid etmək üçün ideal ifadədir.",
    },
    {
      idiom: "the bottom line",
      level: "C1",
      meaning:
        "the most important fact to consider, or a company's final profit or loss",
      azMeaning:
        "ən vacib məqam, əsas nəticə; biznesdə isə şirkətin son mənfəət və ya zərər rəqəmi mənasında işlənir. Yəni uzun müzakirədən sonra 'ən mühüm olan budur' deyib əsas fikrə gələndə və ya maliyyə nəticəsindən danışanda istifadə olunur.",
      example:
        "The bottom line is that we cannot afford to hire more staff this year.",
      register: "formal",
      azNote:
        "İki mənası var: gündəlik danışıqda 'əsas məsələ budur', maliyyə mətnlərində isə hesabatın aşağısındakı yekun mənfəət/zərər rəqəmi.",
    },
    {
      idiom: "in the red",
      level: "C1",
      meaning: "owing money or having spent more than you have earned",
      azMeaning:
        "borc içində olmaq, hesabı mənfiyə düşmək; bir şirkətin və ya şəxsin qazandığından çox xərcləməsi, yəni zərərdə olması mənasında işlənir. Adı tarixən mühasibatda borc rəqəmlərinin qırmızı rənglə yazılmasından gəlir; əksi isə mənfəətdə olmaq deməyə gələn 'in the black'-dir.",
      example:
        "The company has been in the red for three years and may close soon.",
      register: "formal",
      azNote:
        "Antonimi 'in the black' (mənfəətdə, müsbət balansda) olmaqdır. Biznes və maliyyə xəbərlərində çox işlənir.",
    },
  ],
  practice: [
    {
      type: "gap-fill",
      prompt: "That laptop is amazing, but it costs an arm and a ___ .",
      answer: "leg",
      explanation:
        "'Cost an arm and a leg' bir şeyin çox baha olduğunu bildirir.",
    },
    {
      type: "gap-fill",
      prompt:
        "Prices keep rising, so it is getting harder to make ends ___ .",
      answer: "meet",
      explanation:
        "'Make ends meet' güc-bəla ilə dolanmaq, ucu-ucuna çatdırmaq deməkdir.",
    },
    {
      type: "gap-fill",
      prompt:
        "We don't need anything fancy — a small party won't break the ___ .",
      answer: "bank",
      explanation:
        "'Break the bank' çox baha başa gəlmək deməkdir; 'won't break the bank' isə sərfəli, münasib qiymətli mənasını verir.",
    },
    {
      type: "multiple-choice",
      prompt: "What does 'cut corners' mean?",
      options: [
        "to do something cheaply or quickly, ignoring quality",
        "to earn a lot of extra money",
        "to save money in a bank account",
      ],
      answer: 0,
      explanation:
        "'Cut corners' keyfiyyətə və ya qaydalara məhəl qoymadan işi ucuz/tez görmək deməkdir.",
    },
    {
      type: "multiple-choice",
      prompt: "If a company is 'in the red', it is:",
      options: [
        "making a big profit",
        "owing money or losing money",
        "paying its staff on time",
      ],
      answer: 1,
      explanation:
        "'In the red' borc içində və ya zərərdə olmaq deməkdir; əksi 'in the black'dir.",
    },
    {
      type: "multiple-choice",
      prompt: "Your friend says a shop sold them a fake watch for $200. It was a:",
      options: ["rip-off", "bottom line", "tight belt"],
      answer: 0,
      explanation:
        "'A rip-off' dəyərinə görə həddən artıq baha və ya aldadıcı satış deməkdir.",
    },
    {
      type: "gap-fill",
      prompt:
        "After losing some clients, the firm had to tighten its ___ and cut spending.",
      answer: "belt",
      explanation:
        "'Tighten your belt' xərcləri azaldıb daha qənaətlə yaşamaq deməkdir.",
    },
  ],
};
