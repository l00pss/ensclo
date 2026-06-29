import type { ReferenceGroup } from "../reference";
import type { Idiom } from "../types";
import { Heart } from "lucide-react";

export const idiomEmotions: ReferenceGroup<Idiom> = {
  id: "emotions",
  label: "Feelings & Emotions",
  azLabel: "Hisslər və emosiyalar",
  icon: Heart,
  description:
    "Common English idioms for describing how people feel — happy, sad, nervous, angry or calm.",
  azDescription:
    "Bu qrup insanların daxili əhval-ruhiyyəsini — sevinc, kədər, həyəcan, qəzəb və ya rahatlığı — təbii şəkildə ifadə edən idiomları toplayır. İngilis dilində hissləri çox vaxt birbaşa 'happy' və ya 'sad' sözləri ilə yox, məcazi ifadələrlə bildirirlər. Bu idiomları öyrənmək gündəlik söhbətdə öz emosiyalarını daha canlı və təbii çatdırmağa kömək edir.",
  items: [
    {
      idiom: "on cloud nine",
      level: "B1",
      meaning: "extremely happy and excited",
      azMeaning:
        "Doqquzuncu buludun üstündə olmaq, yəni son dərəcə xoşbəxt və sevincli olmaq. Bu ifadə insanın çox böyük xoş xəbər və ya uğurdan sonra yerə-göyə sığmayan sevincini bildirir.",
      example: "Ever since she got the job offer, she has been on cloud nine.",
      register: "informal",
      azNote:
        "Çox vaxt 'be' feli ilə işlənir: be on cloud nine. Toy, doğum, imtahandan keçmək kimi böyük sevinc anlarını təsvir etmək üçün idealdır.",
    },
    {
      idiom: "down in the dumps",
      level: "B1",
      meaning: "feeling sad, low or depressed",
      azMeaning:
        "Kefsiz, qəmgin və ruhdan düşmüş olmaq. Bu idiom insanın əhval-ruhiyyəsinin aşağı düşdüyünü, içinin sıxıldığını və üzgün olduğunu bildirir.",
      example: "He has been down in the dumps since his best friend moved away.",
      register: "informal",
      azNote:
        "Adətən müvəqqəti, keçici kədəri təsvir edir, ağır depressiyanı yox. 'feel' və ya 'be' feli ilə işlənir: feel down in the dumps.",
    },
    {
      idiom: "butterflies in my stomach",
      level: "B1",
      meaning: "a nervous, fluttery feeling before something important",
      azMeaning:
        "Mədədə kəpənəklər olması, yəni mühüm bir hadisədən əvvəl hiss olunan həyəcan və narahatlıq. Bu ifadə insanın içində baş verən o titrəyişli, gərgin hissi — qarışıq sevinc və qorxunu — bildirir.",
      example:
        "Before going on stage, I always get butterflies in my stomach.",
      register: "informal",
      azNote:
        "İmtahan, çıxış, görüş və ya ilk gün kimi həyəcanlı anlardan əvvəlki hissi təsvir edir. Çox vaxt 'have' və ya 'get' feli ilə işlənir.",
    },
    {
      idiom: "see red",
      level: "B2",
      meaning: "to become suddenly and very angry",
      azMeaning:
        "Qırmızı görmək, yəni qəfildən və çox şiddətli şəkildə qəzəblənmək. Bu idiom insanın o qədər hirslənməsini bildirir ki, bir anlıq özünü idarə edə bilmir və ağlı qəzəbdən tutulur.",
      example:
        "When he saw someone kick the dog, he just saw red and shouted at them.",
      register: "informal",
      azNote:
        "Ani və güclü qəzəbi vurğulayır. Adətən hansısa ədalətsiz və ya əsəbiləşdirici hərəkətə reaksiya kimi işlənir.",
    },
    {
      idiom: "keep your cool",
      level: "B2",
      meaning: "to stay calm and not get angry or upset",
      azMeaning:
        "Soyuqqanlılığını qorumaq, yəni gərgin və ya əsəbi vəziyyətdə özünü ələ alıb sakit qalmaq. Bu ifadə insanın çətin anda hirslənməyib təmkinli davranmasını bildirir.",
      example:
        "Even when the customer was rude, the waiter managed to keep his cool.",
      register: "informal",
      azNote:
        "Əksi 'lose your cool'dur — yəni özünü ələ ala bilməyib partlamaq. Stres və münaqişə vəziyyətlərində tez-tez işlənir.",
    },
    {
      idiom: "over the moon",
      level: "B2",
      meaning: "delighted and extremely pleased about something",
      azMeaning:
        "Ayın o tayında olmaq, yəni nəyəsə görə son dərəcə sevinmək və məmnun qalmaq. Bu idiom gözlənilən və ya arzu edilən bir şeyin baş tutmasından doğan böyük xoşbəxtliyi ifadə edir.",
      example:
        "My parents were over the moon when I told them I had passed all my exams.",
      register: "informal",
      azNote:
        "'on cloud nine'ə çox yaxındır. Britaniya İngilis dilində xüsusilə geniş yayılıb və müsbət xəbərlərə reaksiya kimi işlənir.",
    },
    {
      idiom: "a nervous wreck",
      level: "B2",
      meaning: "someone who is extremely anxious and unable to relax",
      azMeaning:
        "Sinirləri tükənmiş, son dərəcə narahat və gərgin insan. Bu ifadə kiminsə həyəcandan və narahatlıqdan özünü tam itirdiyini, rahatlaşa bilmədiyini və əsəblərinin tarıma çəkildiyini bildirir.",
      example:
        "She was a nervous wreck while waiting for the doctor to call with the results.",
      register: "informal",
      azNote:
        "Adətən uzun sürən stres və ya gözləmənin nəticəsində yaranan vəziyyəti təsvir edir. 'be' feli ilə işlənir: be a nervous wreck.",
    },
    {
      idiom: "at peace with yourself",
      level: "C1",
      meaning: "feeling calm and content, without worry or inner conflict",
      azMeaning:
        "Öz-özü ilə barışıq olmaq, yəni daxili rahatlıq və məmnunluq içində olmaq. Bu ifadə insanın keçmiş seçimlərini və indiki vəziyyətini qəbul edib narahatlıq və daxili çəkişmə olmadan dinc yaşamasını bildirir.",
      example:
        "After years of stress, he finally feels at peace with himself and his choices.",
      register: "neutral",
      azNote:
        "Daha dərin, davamlı bir sakitlik halını ifadə edir. Çox vaxt həyat təcrübəsi və ya barışıqdan sonra gələn ruhi rahatlıqla bağlı işlənir.",
    },
  ],
  practice: [
    {
      type: "gap-fill",
      prompt: "When I won the award, I was on cloud ___ all evening.",
      answer: "nine",
      explanation:
        "'on cloud nine' means extremely happy and excited about something.",
    },
    {
      type: "gap-fill",
      prompt:
        "I always get butterflies in my ___ before an important interview.",
      answer: "stomach",
      explanation:
        "'butterflies in my stomach' describes the nervous, fluttery feeling before something important.",
    },
    {
      type: "gap-fill",
      prompt:
        "He has been down in the ___ ever since he failed his driving test.",
      answer: "dumps",
      explanation:
        "'down in the dumps' means feeling sad, low or depressed.",
    },
    {
      type: "multiple-choice",
      prompt: "What does it mean to 'see red'?",
      options: [
        "to feel very happy",
        "to become suddenly and very angry",
        "to feel calm and relaxed",
      ],
      answer: 1,
      explanation:
        "'see red' means to become suddenly and very angry, often losing self-control.",
    },
    {
      type: "multiple-choice",
      prompt: "If someone 'keeps their cool', they ___.",
      options: [
        "stay calm and do not get angry",
        "become a nervous wreck",
        "feel extremely happy",
      ],
      answer: 0,
      explanation:
        "'keep your cool' means to stay calm and not get angry or upset in a difficult situation.",
    },
    {
      type: "multiple-choice",
      prompt: "Which idiom means 'delighted and extremely pleased'?",
      options: ["over the moon", "down in the dumps", "a nervous wreck"],
      answer: 0,
      explanation:
        "'over the moon' means delighted and extremely pleased about something.",
    },
  ],
};
