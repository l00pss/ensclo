import type { ReferenceGroup } from "../reference";
import type { Idiom } from "../types";
import { Hammer } from "lucide-react";

export const idiomEffort: ReferenceGroup<Idiom> = {
  id: "effort",
  label: "Work & Effort",
  azLabel: "İş və səy",
  icon: Hammer,
  description:
    "Idioms about working hard, trying your best, putting in effort, and being lazy.",
  azDescription:
    "Bu qrup zəhmət, çalışqanlıq və tənbəlliklə bağlı idiomları toplayır. Burada insanın işə nə qədər güc və səy qoymasını, var qüvvəsiylə çalışmasını və ya əksinə, heç nə etmədən boş dayanmasını təsvir edən ifadələr var. Bu idiomlar həm iş yerində, həm məktəbdə, həm də gündəlik söhbətlərdə birinin əməyini və ya tənbəlliyini təbii şəkildə vurğulamaq üçün işlənir.",
  items: [
    {
      idiom: "pull your weight",
      level: "B2",
      meaning: "to do your fair share of the work in a group",
      azMeaning:
        "Öz payına düşən işi layiqincə görmək, yəni komandada başqalarına yük olmadan öz hissəni vicdanla yerinə yetirmək. Bu ifadə adətən birinin kollektivdə kifayət qədər çalışıb-çalışmadığından danışarkən işlənir.",
      example:
        "If everyone pulls their weight, we'll finish the project before the weekend.",
      register: "informal",
      azNote:
        "Çox vaxt mənfi formada işlənir: 'he's not pulling his weight' — o, öz işini görmür, başqalarının üstünə yük qoyur.",
    },
    {
      idiom: "go the extra mile",
      level: "B2",
      meaning: "to make more effort than is expected of you",
      azMeaning:
        "Gözləniləndən artıq səy göstərmək, yəni adi tələbatla kifayətlənməyib bir addım da irəli getmək. Bu ifadə insanın işinə əlavə zəhmət və qayğı qatdığını, minimumu deyil, daha çoxunu etdiyini bildirir.",
      example:
        "Our staff always go the extra mile to make sure customers are happy.",
      register: "neutral",
    },
    {
      idiom: "put your back into it",
      level: "B2",
      meaning: "to use a lot of physical effort to do something",
      azMeaning:
        "Bir işə bütün fiziki gücünü qoymaq, yəni var qüvvə ilə çalışmaq. Bu ifadə adətən kiməsə daha güclü və enerjili işləməyi tövsiyə edərkən və ya tələb edərkən deyilir.",
      example:
        "Come on, put your back into it — we need to move this table before lunch!",
      register: "informal",
      azNote:
        "Çox vaxt əmr şəklində, kimisə həvəsləndirmək və ya tələsdirmək üçün işlənir.",
    },
    {
      idiom: "burn the midnight oil",
      level: "C1",
      meaning: "to work late into the night",
      azMeaning:
        "Gecə yarısına qədər, gec saatlara qədər işləmək və ya oxumaq. Bu ifadə insanın bir işi bitirmək naminə yuxusundan keçib uzun saatlar zəhmət çəkdiyini bildirir.",
      example:
        "She had to burn the midnight oil for a week to finish her thesis on time.",
      register: "neutral",
      azNote:
        "Adətən imtahan, layihə və ya son tarix (deadline) yaxınlaşanda göstərilən zəhmətdən danışarkən işlənir.",
    },
    {
      idiom: "roll up your sleeves",
      level: "B2",
      meaning: "to get ready to start working hard",
      azMeaning:
        "Qollarını çırmalamaq, yəni ciddi işə başlamağa hazırlaşmaq və qətiyyətlə işə girişmək. Bu ifadə danışmağı bir kənara qoyub əməli işə keçmək məqamını təsvir edir.",
      example:
        "There's a lot to do, so let's roll up our sleeves and get started.",
      register: "informal",
    },
    {
      idiom: "work your fingers to the bone",
      level: "C1",
      meaning: "to work extremely hard for a long time",
      azMeaning:
        "Əldən düşənə qədər, canı bahasına çox ağır işləmək. Bu ifadə uzun müddət, tükənənə qədər zəhmət çəkməyi, çox vaxt da bunun layiqincə qiymətləndirilmədiyini bildirir.",
      example:
        "My grandmother worked her fingers to the bone to give her children a better life.",
      register: "informal",
      azNote:
        "Çox vaxt çəkilən zəhmətə görə şikayət və ya təəssüf çaları ilə işlənir.",
    },
    {
      idiom: "twiddle your thumbs",
      level: "C1",
      meaning: "to waste time doing nothing while waiting",
      azMeaning:
        "Boş-boş oturmaq, heç nə etmədən vaxtı keçirmək, əl-qolunu yığıb gözləmək. Bu ifadə insanın işsiz qaldığını və ya görüləsi iş olmadığı üçün vaxtını faydasız keçirdiyini bildirir.",
      example:
        "While the manager kept changing his mind, the whole team just sat there twiddling their thumbs.",
      register: "informal",
    },
    {
      idiom: "couch potato",
      level: "B1",
      meaning: "a lazy person who spends a lot of time sitting and watching TV",
      azMeaning:
        "Günün çoxunu divanda uzanıb televizora baxmaqla keçirən tənbəl adam. Bu ifadə heç bir fəal iş görməyən, az hərəkət edən və boş vaxtını passiv keçirən insanı təsvir edir.",
      example:
        "Since he stopped playing football, he's become a real couch potato.",
      register: "informal",
      azNote:
        "Yüngül zarafat çaları daşıyır; adətən tənbəlliyi və az hərəkətliliyi vurğulamaq üçün işlənir.",
    },
  ],
  practice: [
    {
      type: "gap-fill",
      prompt:
        "There's a lot to do, so let's roll up our ___ and get started.",
      answer: "sleeves",
      explanation:
        "'Roll up your sleeves' — qollarını çırmalamaq, yəni ciddi işə başlamağa hazırlaşmaq.",
    },
    {
      type: "gap-fill",
      prompt:
        "If everyone pulls their ___ , we'll finish the project before the weekend.",
      answer: "weight",
      explanation:
        "'Pull your weight' — öz payına düşən işi layiqincə görmək.",
    },
    {
      type: "multiple-choice",
      prompt: "What does 'go the extra mile' mean?",
      options: [
        "to make more effort than is expected",
        "to travel a long distance",
        "to give up on a difficult task",
      ],
      answer: 0,
      explanation:
        "'Go the extra mile' — gözləniləndən artıq səy göstərmək, bir addım da irəli getmək.",
    },
    {
      type: "multiple-choice",
      prompt: "What does 'burn the midnight oil' mean?",
      options: [
        "to relax after a hard day",
        "to work late into the night",
        "to waste money on luxuries",
      ],
      answer: 1,
      explanation:
        "'Burn the midnight oil' — gec saatlara qədər işləmək və ya oxumaq.",
    },
    {
      type: "multiple-choice",
      prompt: "Which idiom describes a lazy person who watches a lot of TV?",
      options: ["couch potato", "couch surfer", "potato head"],
      answer: 0,
      explanation:
        "'Couch potato' — divanda oturub televizora baxmaqla vaxt keçirən tənbəl adam.",
    },
    {
      type: "gap-fill",
      prompt:
        "While the manager kept changing his mind, the team just sat there twiddling their ___ .",
      answer: "thumbs",
      explanation:
        "'Twiddle your thumbs' — heç nə etmədən boş-boş gözləmək, vaxtı faydasız keçirmək.",
    },
    {
      type: "multiple-choice",
      prompt: "What does 'work your fingers to the bone' mean?",
      options: [
        "to injure your hands at work",
        "to learn a skill very quickly",
        "to work extremely hard for a long time",
      ],
      answer: 2,
      explanation:
        "'Work your fingers to the bone' — əldən düşənə qədər çox ağır işləmək.",
    },
  ],
};
