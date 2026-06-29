import type { ReferenceGroup } from "../reference";
import type { Idiom } from "../types";
import { UtensilsCrossed } from "lucide-react";

export const idiomFood: ReferenceGroup<Idiom> = {
  id: "food",
  label: "Food Idioms",
  azLabel: "Yemək idiomları",
  icon: UtensilsCrossed,
  description: "Common English idioms built from food and cooking words.",
  azDescription:
    "Bu qrup yemək, içki və mətbəx sözlərindən (cake, beans, egg, salt, pie və s.) yaranan idiomları əhatə edir. Belə ifadələr gündəlik danışıqda, filmlərdə və yazışmalarda çox tez-tez işlənir, lakin sözlərin hərfi mənası ilə əlaqəsi olmur. Hər idiomu kontekstdə öyrənmək onların əsl mənasını və harada işlənəcəyini başa düşməyə kömək edir.",
  items: [
    {
      idiom: "a piece of cake",
      level: "B1",
      meaning: "something very easy to do",
      azMeaning:
        "Çox asan, heç bir çətinlik tələb etməyən iş deməkdir. Azərbaycanca \"su içmək kimi asan\" və ya \"ən asan iş\" mənasını verir; bir tapşırığın sənin üçün heç bir problem olmadığını bildirmək üçün işlədilir.",
      example: "Don't worry about the exam — for you it'll be a piece of cake.",
      register: "informal",
      azNote:
        "Adətən müsbət, rahatladıcı tonla deyilir: kimisə narahat olmamağa çağırarkən və ya bir işi nə qədər asan etdiyini vurğulamaq üçün istifadə olunur.",
    },
    {
      idiom: "spill the beans",
      level: "B1",
      meaning: "to reveal a secret, often accidentally",
      azMeaning:
        "Gizli saxlanmalı olan bir məlumatı, çox vaxt təsadüfən və ya vaxtından əvvəl açıb danışmaq deməkdir. Azərbaycanca \"sirri açmaq\", \"ağzından qaçırmaq\" mənasına uyğun gəlir.",
      example: "We wanted it to be a surprise, but Tom spilled the beans about the party.",
      register: "informal",
      azNote:
        "Çox vaxt sürpriz, plan və ya sirrin istəmədən açılması kontekstində işlənir; bilərəkdən açıqlama üçün də deyilə bilər.",
    },
    {
      idiom: "in a nutshell",
      level: "B2",
      meaning: "in a very brief and clear way; summarising",
      azMeaning:
        "Bir fikri və ya vəziyyəti çox qısa, yığcam şəkildə xülasə edib çatdırmaq deməkdir. Azərbaycanca \"qısacası\", \"bir sözlə desək\" mənasını verir və uzun izahı bir-iki cümləyə yığmaq üçün işlədilir.",
      example: "In a nutshell, the project failed because we ran out of time and money.",
      register: "neutral",
      azNote:
        "Çox vaxt cümlənin əvvəlində, xülasəyə keçərkən deyilir; həm danışıqda, həm də yazıda təbii səslənir.",
    },
    {
      idiom: "the icing on the cake",
      level: "B2",
      meaning: "an extra good thing that makes a good situation even better",
      azMeaning:
        "Onsuz da yaxşı olan bir şeyi daha da gözəlləşdirən əlavə müsbət detal deməkdir. Azərbaycanca \"üstündən bal tökmək\" və ya \"sevincin üstünə sevinc\" kimi başa düşülə bilər; əsas yaxşılığın üzərinə gələn bonus.",
      example: "Winning the match was great, and scoring the final goal was the icing on the cake.",
      register: "informal",
      azNote:
        "Demək olar ki, həmişə müsbət kontekstdə işlənir; əsas hadisə artıq yaxşıdır, bu isə onu mükəmməl edən əlavədir.",
    },
    {
      idiom: "a hot potato",
      level: "B2",
      meaning: "a controversial issue that is awkward to deal with",
      azMeaning:
        "Həll edilməsi çətin, mübahisəli və çox vaxt narahatlıq yaradan, heç kimin öhdəsinə götürmək istəmədiyi məsələ deməkdir. Azərbaycanca \"odlu kömür\" kimi, yəni əldə tutmaq çətin və riskli bir mövzu.",
      example: "The question of higher taxes is a political hot potato that no one wants to discuss.",
      register: "informal",
      azNote:
        "Adətən siyasi və ya ictimai mübahisəli mövzular üçün işlənir; insanlar belə məsələdən qaçmağa və ya onu başqasına ötürməyə çalışır.",
    },
    {
      idiom: "bring home the bacon",
      level: "B2",
      meaning: "to earn money to support one's family",
      azMeaning:
        "Ailəni dolandırmaq üçün pul qazanmaq, çörək pulu gətirmək deməkdir. Azərbaycanca \"ailənin çörəyini qazanmaq\", \"evə ruzi gətirmək\" mənasını verir və əsas qazanc gətirən şəxs barədə deyilir.",
      example: "Since she got promoted, she's the one who brings home the bacon in their family.",
      register: "informal",
      azNote:
        "Çox vaxt ailədə əsas pul qazanan adamı təsvir etmək üçün işlənir; bəzən ümumiyyətlə uğur qazanmaq mənasında da deyilir.",
    },
    {
      idiom: "take something with a pinch of salt",
      level: "C1",
      meaning: "to not completely believe something; to be sceptical",
      azMeaning:
        "Eşitdiyin və ya oxuduğun bir məlumata tam inanmamaq, ona şübhə ilə yanaşmaq deməkdir. Azərbaycanca \"ehtiyatla qarşılamaq\", \"hər deyilənə inanmamaq\" mənasını verir; məlumatın şişirdilmiş və ya yanlış ola biləcəyini nəzərə almaq.",
      example: "He tends to exaggerate, so take his stories with a pinch of salt.",
      register: "informal",
      azNote:
        "Amerika ingiliscəsində çox vaxt \"with a grain of salt\" formasında işlənir; mənbəyə tam etibar etmədikdə deyilir.",
    },
    {
      idiom: "have bigger fish to fry",
      level: "C1",
      meaning: "to have more important things to deal with",
      azMeaning:
        "Daha vacib, daha böyük işlərin olduğu üçün kiçik və ya əhəmiyyətsiz bir məsələ ilə məşğul olmağa vaxtın və ya istəyin olmaması deməkdir. Azərbaycanca \"daha vacib işlərim var\", \"başqa qayğılarım var\" mənasını verir.",
      example: "I can't worry about a small typo right now — I have bigger fish to fry.",
      register: "informal",
      azNote:
        "Bir şeyi əhəmiyyətsiz sayıb kənara qoyduğunu, diqqətini daha mühüm məsələyə yönəltdiyini bildirmək üçün işlənir.",
    },
  ],
  practice: [
    {
      type: "gap-fill",
      prompt: "The test was so easy — it was a piece of ___ .",
      answer: "cake",
      explanation:
        "\"A piece of cake\" çox asan bir iş deməkdir; boşluğa \"cake\" düşür.",
    },
    {
      type: "gap-fill",
      prompt: "Please don't spill the ___ about the surprise party.",
      answer: "beans",
      explanation:
        "\"Spill the beans\" sirri açmaq deməkdir; ifadə \"beans\" sözü ilə tamamlanır.",
    },
    {
      type: "gap-fill",
      prompt: "His claims sound exaggerated, so take them with a pinch of ___ .",
      answer: "salt",
      explanation:
        "\"Take something with a pinch of salt\" bir şeyə şübhə ilə yanaşmaq deməkdir; boşluğa \"salt\" yazılır.",
    },
    {
      type: "multiple-choice",
      prompt: "What does \"in a nutshell\" mean?",
      options: ["in great detail", "very briefly; summarising", "in a difficult way"],
      answer: 1,
      explanation:
        "\"In a nutshell\" qısaca, yığcam şəkildə xülasə etmək deməkdir — doğru cavab ikincidir.",
    },
    {
      type: "multiple-choice",
      prompt: "If something is \"a hot potato\", it is ...",
      options: [
        "a controversial issue no one wants to handle",
        "a very tasty meal",
        "an easy task to finish",
      ],
      answer: 0,
      explanation:
        "\"A hot potato\" həll edilməsi çətin, mübahisəli məsələdir — doğru cavab birincidir.",
    },
    {
      type: "multiple-choice",
      prompt: "Someone who \"brings home the bacon\" ...",
      options: [
        "cooks dinner every night",
        "earns money to support the family",
        "tells a lot of jokes",
      ],
      answer: 1,
      explanation:
        "\"Bring home the bacon\" ailəni dolandırmaq üçün pul qazanmaq deməkdir — doğru cavab ikincidir.",
    },
  ],
};
