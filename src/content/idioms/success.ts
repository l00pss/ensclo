import type { ReferenceGroup } from "../reference";
import type { Idiom } from "../types";
import { Trophy } from "lucide-react";

export const idiomSuccess: ReferenceGroup<Idiom> = {
  id: "success",
  label: "Success & Failure",
  azLabel: "Uğur və uğursuzluq",
  icon: Trophy,
  description:
    "Common English idioms about succeeding, failing, achieving goals and giving up.",
  azDescription:
    "Bu qrup uğur qazanmaq, məqsədə çatmaq, eləcə də uğursuzluğa uğramaq və əl çəkmək mövzusundakı gündəlik idiomları toplayır. İdiomlar həm danışıqda, həm də yazıda işin yaxşı və ya pis nəticələnməsini, bir adamın çalışıb-çalışmadığını və ya təslim olub-olmadığını canlı şəkildə ifadə etmək üçün istifadə olunur. Onları öyrənməklə imtahan və işgüzar mühitdə nəticələri daha təbii və ifadəli şəkildə təsvir edə bilərsən.",
  items: [
    {
      idiom: "pass with flying colours",
      level: "B1",
      meaning: "to succeed at something or pass a test very easily and with a high result",
      azMeaning:
        "Bir imtahanı və ya sınağı çox yüksək nəticə ilə, asanlıqla keçmək; sadəcə keçmək yox, parlaq, mükəmməl nəticə göstərmək. Adətən imtahan, müsahibə və ya çətin sınaqdan əla nəticə ilə çıxmaq mənasında işlənir.",
      example: "She studied hard all year and passed her final exams with flying colours.",
      register: "neutral",
      azNote:
        "Çox vaxt 'pass' feli ilə birlikdə gəlir, amma 'come through with flying colours' (sınaqdan üzüağ çıxmaq) variantı da mövcuddur. Müsbət, tərifedici çalara malikdir.",
    },
    {
      idiom: "hit the jackpot",
      level: "B1",
      meaning: "to be very successful or lucky, often suddenly",
      azMeaning:
        "Böyük uğur və ya bəxt qazanmaq, çox vaxt gözlənilmədən və birdən-birə; 'qızıl mədəninə düşmək' kimi. İlk olaraq qumarda böyük məbləğ udmaqdan gəlir, amma indi istənilən böyük uğur və ya tapıntı üçün işlənir.",
      example: "When they found a flat that was cheap, central and quiet, they knew they had hit the jackpot.",
      register: "informal",
      azNote:
        "Pul, iş, münasibət — istənilən sahədə 'tam uyğun, gözəl variant tapmaq' mənasında işlədilə bilər. Gündəlik, qeyri-rəsmi dildə geniş yayılıb.",
    },
    {
      idiom: "go the extra mile",
      level: "B2",
      meaning: "to make more effort than is expected of you to achieve something",
      azMeaning:
        "Gözləniləndən, tələb olunandan daha çox səy göstərmək; işi yarımçıq qoymayıb əlavə zəhmət çəkmək. Bir nəticə əldə etmək və ya kimisə razı salmaq üçün adi həddi aşıb daha artıq çalışmaq deməkdir.",
      example: "Our team always goes the extra mile to make sure every customer leaves happy.",
      register: "neutral",
      azNote:
        "İş və xidmət mühitində çox işlənir; əməkdaşın səylərini tərifləmək üçün ideal ifadədir. Müsbət məna daşıyır.",
    },
    {
      idiom: "fall flat",
      level: "B2",
      meaning: "to fail completely, especially in a way that is disappointing",
      azMeaning:
        "Tam uğursuzluğa uğramaq, gözlənilən təsiri yaratmamaq; xüsusən zarafat, plan və ya çıxış 'tutmayanda', heç bir reaksiya doğurmayanda işlənir. Bir şeyin gözlənilən nəticəni vermədən boşa çıxması mənasını verir.",
      example: "His joke fell flat because nobody in the room understood the reference.",
      register: "informal",
      azNote:
        "Tez-tez 'joke', 'plan', 'presentation', 'idea' sözləri ilə birlikdə gəlir. Uğursuzluğun mahiyyəti odur ki, nəticə gözləntiləri doğrultmur.",
    },
    {
      idiom: "throw in the towel",
      level: "B2",
      meaning: "to give up or admit that you have been defeated",
      azMeaning:
        "Mübarizədən əl çəkmək, məğlubiyyəti qəbul etmək, davam etməyi dayandırmaq; 'dəsmalı atmaq' kimi. İdiomun kökü boksdan gəlir — məşqçi döyüşü dayandırmaq üçün ringə dəsmal atır.",
      example: "After months of trying to save the failing business, they finally threw in the towel.",
      register: "informal",
      azNote:
        "Təslim olmaq, çətinlik qarşısında dayanmaq mənasında işlənir. 'Give up' ifadəsinin daha obrazlı, canlı qarşılığıdır.",
    },
    {
      idiom: "come up short",
      level: "B2",
      meaning: "to fail to reach a required or hoped-for level or amount",
      azMeaning:
        "Tələb olunan və ya ümid edilən həddə çatmamaq, çatışmazlıqla üzləşmək; çalışmağına baxmayaraq hədəfə bir az çatmamaq. Çox vaxt 'az qaldı, amma alınmadı' çalarını daşıyır.",
      example: "The team played well but came up short in the final, losing by a single point.",
      register: "neutral",
      azNote:
        "İdmanda, satışda, maliyyə hədəflərində geniş işlənir. 'Fall short (of something)' variantı da eyni mənanı verir.",
    },
    {
      idiom: "make the grade",
      level: "C1",
      meaning: "to reach the necessary standard or succeed in something difficult",
      azMeaning:
        "Lazımi səviyyəyə çatmaq, tələb olunan standartı ödəmək, sınaqdan uğurla çıxmaq; bir işin öhdəsindən gəlib qəbul olunacaq həddə yetişmək. Çox vaxt inkar formada — 'didn't make the grade' (tələbə cavab vermədi) — işlənir.",
      example: "Only a few of the candidates made the grade and were offered a place on the programme.",
      register: "neutral",
      azNote:
        "İş seçimi, qəbul prosesləri və keyfiyyət standartları kontekstində istifadə olunur. Bir az rəsmiyə yaxın, lakin gündəlik dildə də normaldır.",
    },
    {
      idiom: "go down in flames",
      level: "C1",
      meaning: "to fail suddenly and in a very dramatic or spectacular way",
      azMeaning:
        "Birdən-birə və çox kəskin, gözə çarpan şəkildə uğursuzluğa uğramaq; nəticələnməyən cəhdin tam, dramatik məğlubiyyətlə bitməsi. Adi uğursuzluqdan fərqli olaraq, böyük və əzəmətli bir çöküşü vurğulayır.",
      example: "His ambitious start-up went down in flames after it ran out of money in less than a year.",
      register: "informal",
      azNote:
        "Çox dramatik, vurğulu bir ifadədir; layihə, kampaniya və ya münasibətin gurultu ilə dağılmasını təsvir etmək üçün işlənir.",
    },
  ],
  practice: [
    {
      type: "gap-fill",
      prompt: "She revised every evening and passed all her exams with flying ___ .",
      answer: "colours",
      accept: ["colors"],
      explanation:
        "'Pass with flying colours' — çox yüksək nəticə ilə, asanlıqla imtahandan keçmək deməkdir.",
    },
    {
      type: "gap-fill",
      prompt: "Our staff always go the extra ___ to keep customers happy.",
      answer: "mile",
      explanation:
        "'Go the extra mile' — gözləniləndən daha çox səy göstərmək, əlavə zəhmət çəkmək.",
    },
    {
      type: "gap-fill",
      prompt: "After years of struggling with the project, they finally threw in the ___ .",
      answer: "towel",
      explanation:
        "'Throw in the towel' — təslim olmaq, mübarizədən əl çəkmək (boksdan gələn ifadə).",
    },
    {
      type: "multiple-choice",
      prompt: "What does 'fall flat' mean?",
      options: [
        "to fail completely and disappoint",
        "to succeed beyond expectations",
        "to make extra effort to win",
      ],
      answer: 0,
      explanation:
        "'Fall flat' tam uğursuzluğa uğramaq, gözlənilən təsiri yaratmamaq deməkdir (məs. tutmayan zarafat).",
    },
    {
      type: "multiple-choice",
      prompt: "Which idiom means 'to fail to reach a required level or amount'?",
      options: ["hit the jackpot", "come up short", "make the grade"],
      answer: 1,
      explanation:
        "'Come up short' — tələb olunan və ya ümid edilən həddə çatmamaq, çatışmazlıqla üzləşmək.",
    },
    {
      type: "multiple-choice",
      prompt: "Choose the idiom that means 'to be very successful or lucky, often suddenly'.",
      options: ["go down in flames", "throw in the towel", "hit the jackpot"],
      answer: 2,
      explanation:
        "'Hit the jackpot' — gözlənilmədən böyük uğur və ya bəxt qazanmaq, ideal variant tapmaq.",
    },
  ],
};
