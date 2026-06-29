import type { ReferenceGroup } from "../reference";
import type { Idiom } from "../types";
import { MessageCircle } from "lucide-react";

export const idiomCommunication: ReferenceGroup<Idiom> = {
  id: "communication",
  label: "Communication",
  azLabel: "Ünsiyyət",
  icon: MessageCircle,
  description:
    "Idioms about talking, telling the truth, gossip, getting to the point, and keeping secrets.",
  azDescription:
    "Bu qrup danışıq, ünsiyyət və insanlar arasında məlumat ötürülməsi ilə bağlı idiomları toplayır. Burada həqiqəti açıq demək, dedi-qodu yaymaq, mətləbə keçmək, sirr saxlamaq və ya sirri yaymaq kimi situasiyaları ifadə edən deyimlər var. Bu ifadələri öyrənəndə gündəlik söhbətlərdə, iş yerində və yazışmalarda fikrini daha təbii və canlı ingiliscə ilə çatdıra bilərsən.",
  items: [
    {
      idiom: "get to the point",
      level: "B1",
      meaning: "to talk about the most important thing without wasting time",
      azMeaning:
        "Mətləbə keçmək, yəni boş-boş danışmadan, müqəddiməni uzatmadan əsas məsələni, ən vacib fikri birbaşa demək. Çox vaxt kiminsə uzun-uzadı danışdığı, amma əsas mövzuya gəlmədiyi vaxt istifadə olunur.",
      example: "We don't have much time, so please get to the point.",
      register: "neutral",
      azNote:
        "Çox vaxt bir az səbirsizliyi və ya işgüzar tonu bildirir; məsələn iclasda və ya telefon söhbətində birinin mövzunu uzatmasından narahat olanda deyilir.",
    },
    {
      idiom: "beat around the bush",
      level: "B2",
      meaning: "to avoid talking about something directly",
      azMeaning:
        "Sözü dolandırmaq, əsas mətləbi açıq deməkdən qaçmaq, hey kənar mövzulardan danışıb əsl məsələyə toxunmamaq. Adətən kimsə narahatedici və ya çətin bir şeyi birbaşa deməyə cürət etmədikdə bu ifadə işlədilir.",
      example:
        "Stop beating around the bush and tell me what really happened.",
      register: "informal",
      azNote:
        "Çox vaxt 'get to the point' ifadəsinin əksidir; 'don't beat around the bush' formasında bir insanı açıq danışmağa çağırmaq üçün istifadə olunur.",
    },
    {
      idiom: "spill the beans",
      level: "B2",
      meaning: "to reveal secret information, often by accident",
      azMeaning:
        "Sirri yaymaq, gizli saxlanması lazım olan bir məlumatı açıb demək, çox vaxt təsadüfən və ya istəmədən ağzından qaçırmaq. Adətən sürpriz və ya gizli planın vaxtından əvvəl üzə çıxması haqqında işlədilir.",
      example:
        "It was supposed to be a surprise party, but Tom spilled the beans.",
      register: "informal",
      azNote:
        "Mənfi bir şey deyil, sadəcə sirrin açılmasını bildirir; çox vaxt yüngül, zarafatyana tonda işlənir.",
    },
    {
      idiom: "let the cat out of the bag",
      level: "B2",
      meaning: "to accidentally tell people a secret",
      azMeaning:
        "Sirri istəmədən açıb demək, gizli saxlanmalı olan bir məlumatı ağzından qaçırmaq. Mənaca 'spill the beans'-ə çox yaxındır, amma daha çox bir sirrin təsadüfən üzə çıxmasını vurğulayır.",
      example:
        "We wanted to keep the news quiet, but Sara let the cat out of the bag.",
      register: "informal",
      azNote:
        "Tez-tez sürpriz, hədiyyə və ya hələ elan olunmamış xəbərlə bağlı işlənir; bir dəfə deyiləndən sonra geri qaytarılması mümkün olmayan açıqlamanı bildirir.",
    },
    {
      idiom: "speak your mind",
      level: "B2",
      meaning: "to say exactly what you think, even if others may not like it",
      azMeaning:
        "Ürəyindəkini açıq demək, fikrini olduğu kimi, çəkinmədən söyləmək, başqaları xoşlamasa belə həqiqi düşüncəni bildirmək. Açıqsözlü və düz danışan insanları təsvir edərkən işlədilir.",
      example:
        "She's not afraid to speak her mind in front of the whole team.",
      register: "neutral",
      azNote:
        "Adətən müsbət bir keyfiyyət kimi qiymətləndirilir — dürüstlük və cəsarət bildirir; lakin kobudluqla qarışdırılmamalıdır.",
    },
    {
      idiom: "talk behind someone's back",
      level: "B1",
      meaning: "to say unkind things about someone when they are not present",
      azMeaning:
        "Birinin arxasınca danışmaq, o adam olmayanda onun haqqında pis və ya xoşagəlməz şeylər demək. Dedi-qodu və qeybət mənasında işlənir və mənfi davranışı bildirir.",
      example:
        "I don't trust her because she talks behind my back at work.",
      register: "informal",
      azNote:
        "Həmişə mənfi məna daşıyır; bir insanın üzünə deyilməyən, gizlində aparılan tənqid və ya qeybəti ifadə edir.",
    },
    {
      idiom: "hear it through the grapevine",
      level: "C1",
      meaning:
        "to hear news informally from other people rather than from an official source",
      azMeaning:
        "Bir xəbəri dilbədil, qeyri-rəsmi yolla, ağızdan-ağıza ötürülmə nəticəsində eşitmək, rəsmi mənbədən deyil, insanların öz aralarında danışmasından öyrənmək. Mənbəyin dəqiq kim olduğu məlum olmayan şayiə və ya xəbərlər üçün işlədilir.",
      example:
        "I heard it through the grapevine that the company is planning to move offices.",
      register: "informal",
      azNote:
        "'Grapevine' burada qeyri-rəsmi məlumat şəbəkəsini bildirir; çox vaxt iş yeri şayiələri və ya təsdiqlənməmiş xəbərlər haqqında işlədilir.",
    },
    {
      idiom: "give someone the cold shoulder",
      level: "C1",
      meaning: "to deliberately ignore someone or treat them in an unfriendly way",
      azMeaning:
        "Birinə soyuq münasibət göstərmək, qəsdən onu görməzdən gəlmək, danışmamaq və ya laqeyd, dostcasına olmayan tərzdə davranmaq. Adətən küsməyin və ya birindən narazılığın səssiz şəkildə bildirilməsini ifadə edir.",
      example:
        "After our argument, he gave me the cold shoulder for a whole week.",
      register: "informal",
      azNote:
        "Açıq mübahisədən fərqli olaraq, bu ifadə danışmamaqla, məhəl qoymamaqla ifadə olunan səssiz incikliyi və ya soyuqluğu bildirir.",
    },
  ],
  practice: [
    {
      type: "gap-fill",
      prompt: "We don't have much time, so please get to the ___ .",
      answer: "point",
      explanation:
        "'Get to the point' means to talk about the most important thing directly, without wasting time.",
    },
    {
      type: "gap-fill",
      prompt:
        "Stop beating around the ___ and tell me what really happened.",
      answer: "bush",
      explanation:
        "'Beat around the bush' means to avoid saying something directly and keep talking about other things.",
    },
    {
      type: "gap-fill",
      prompt:
        "It was supposed to be a surprise, but Tom spilled the ___ .",
      answer: "beans",
      explanation:
        "'Spill the beans' means to reveal secret information, often by accident.",
    },
    {
      type: "multiple-choice",
      prompt: "What does 'talk behind someone's back' mean?",
      options: [
        "to say unkind things about someone when they are not present",
        "to praise someone in public",
        "to speak loudly so everyone can hear",
      ],
      answer: 0,
      explanation:
        "'Talk behind someone's back' means to gossip or criticise a person when they are not there to hear it.",
    },
    {
      type: "multiple-choice",
      prompt:
        "Which idiom means to hear news informally from other people?",
      options: [
        "hear it through the grapevine",
        "give someone the cold shoulder",
        "speak your mind",
      ],
      answer: 0,
      explanation:
        "'Hear it through the grapevine' means to learn news from informal, person-to-person talk rather than an official source.",
    },
    {
      type: "multiple-choice",
      prompt:
        "If you 'give someone the cold shoulder', you ___ .",
      options: [
        "deliberately ignore them and act unfriendly",
        "help them with a difficult task",
        "tell them all your secrets",
      ],
      answer: 0,
      explanation:
        "'Give someone the cold shoulder' means to purposely ignore someone or treat them coldly.",
    },
  ],
};
