import type { ReferenceGroup } from "../reference";
import type { Idiom } from "../types";
import { Hand } from "lucide-react";

export const idiomBody: ReferenceGroup<Idiom> = {
  id: "body",
  label: "Body Idioms",
  azLabel: "Bədən idiomları",
  icon: Hand,
  description:
    "Common English idioms built around body parts such as hand, head, heart, foot, and eye.",
  azDescription:
    "Bu qrup bədən üzvlərinin (əl, baş, ürək, ayaq, göz) adından düzələn ən çox işlənən ingilis idiomlarını toplayır. Belə idiomlar gündəlik danışıqda və yazıda hisslərimizi, qərarlarımızı və davranışlarımızı obrazlı şəkildə ifadə etmək üçün istifadə olunur. Sözlərin hərfi mənasını yox, məcazi mənasını öyrənmək vacibdir, çünki onlar tam fərqli bir məna daşıyır.",
  items: [
    {
      idiom: "give someone a hand",
      level: "B1",
      meaning: "to help someone do something",
      azMeaning:
        "kiməsə kömək etmək, əl tutmaq; ağır və ya çətin bir işi tək görən adama yardım göstərmək mənasında işlənir. Burada 'hand' (əl) sözü hərfi mənada yox, 'yardım' mənasında başa düşülür.",
      example: "Could you give me a hand with these heavy boxes, please?",
      register: "informal",
      azNote:
        "Diqqət: 'give someone a hand' həm də 'alqışlamaq' (əl çalmaq) mənasında işlənə bilər, məsələn: 'Let's give her a big hand!' Kontekstə görə mənanı ayırd etmək lazımdır.",
    },
    {
      idiom: "off the top of my head",
      level: "B2",
      meaning: "from memory, without checking or thinking carefully",
      azMeaning:
        "yoxlamadan və ya dərindən düşünmədən, birbaşa yaddaşdan demək; cavabın dəqiq olmaya da bilər deyə əvvəlcədən xəbərdarlıq kimi işlənir. Adətən kimsə dəqiq rəqəm və ya ad soruşanda, 'dəqiq bilmirəm, amma elə-belə deyirəm' mənasında istifadə olunur.",
      example:
        "Off the top of my head, I think the meeting is at three, but let me check the calendar.",
      register: "informal",
      azNote:
        "Bu ifadə cavabın təxmini olduğunu bildirir, ona görə də rəsmi mətnlərdən çox danışıqda işlənir.",
    },
    {
      idiom: "learn something by heart",
      level: "B1",
      meaning: "to memorize something so well you can repeat it perfectly",
      azMeaning:
        "bir şeyi əzbər öyrənmək, ürəkdən bilmək; mətni, şeiri və ya nömrəni tam yadda saxlayıb baxmadan təkrar edə bilmək. Burada 'heart' (ürək) sözü yaddaşın dərinliyini, möhkəm öyrənməyi vurğulayır.",
      example:
        "When I was at school, we had to learn a long poem by heart for the exam.",
      register: "neutral",
      azNote:
        "Sinonim ifadə 'know something by heart'-dır, yəni artıq əzbər bilmək: 'I know her phone number by heart.'",
    },
    {
      idiom: "put your foot in your mouth",
      level: "B2",
      meaning: "to say something embarrassing or tactless by accident",
      azMeaning:
        "bilmədən yersiz və ya utandırıcı bir söz demək, ağzından söz qaçırmaq; başqasını incidən və ya özünü pis vəziyyətə salan nəyisə təsadüfən demək. Hərfi tərcüməsi 'ayağını ağzına qoymaq' olsa da, mənası tamamilə fərqlidir.",
      example:
        "I really put my foot in my mouth when I asked her about her husband — they got divorced last month.",
      register: "informal",
      azNote:
        "Adətən sonradan peşman olunan, fikirləşmədən deyilən sözlər üçün işlənir.",
    },
    {
      idiom: "keep an eye on something",
      level: "B1",
      meaning: "to watch or look after something carefully",
      azMeaning:
        "bir şeyə və ya kiməsə göz-qulaq olmaq, nəzarət etmək; nəyinsə təhlükəsiz qalması və ya pis bir şey baş verməməsi üçün diqqətlə izləmək. 'Eye' (göz) sözü burada davamlı müşahidə və qayğı mənasını verir.",
      example:
        "Can you keep an eye on my luggage while I go and buy a coffee?",
      register: "informal",
      azNote:
        "Oxşar ifadə 'keep an eye out for'-dur, yəni gözləyib axtarmaq: 'Keep an eye out for a taxi.'",
    },
    {
      idiom: "get cold feet",
      level: "B2",
      meaning: "to suddenly become nervous and lose courage before an event",
      azMeaning:
        "son anda qorxub fikrindən daşınmaq, ürəyini saxlaya bilməmək; mühüm bir hadisədən (toy, çıxış, imtahan) əvvəl birdən-birə həyəcanlanıb cəsarətini itirmək. Hərfən 'ayaqların soyuması' deməkdir, amma əsl mənası 'qorxudan geri çəkilmək'dir.",
      example:
        "He was going to ask for a pay rise, but he got cold feet at the last minute.",
      register: "informal",
      azNote:
        "Çox vaxt vacib bir qərardan və ya öhdəlikdən qorxub imtina etmək mənasında işlənir.",
    },
    {
      idiom: "see eye to eye",
      level: "C1",
      meaning: "to agree completely with someone",
      azMeaning:
        "kiminləsə tam razılaşmaq, eyni fikirdə olmaq, dil tapmaq; bir məsələdə iki nəfərin baxışlarının üst-üstə düşməsi. Adətən inkar formasında, yəni 'razı gəlməmək' mənasında daha çox işlənir: 'We don't see eye to eye.'",
      example:
        "My brother and I don't always see eye to eye on politics, but we still respect each other.",
      register: "neutral",
      azNote:
        "Diqqət: bu ifadə 'göz-gözə baxmaq' yox, 'eyni fikirdə olmaq' deməkdir.",
    },
    {
      idiom: "get something off your chest",
      level: "C1",
      meaning:
        "to tell someone about something that has been worrying you, so you feel better",
      azMeaning:
        "ürəyini boşaltmaq, içindəki narahatlığı kiməsə danışıb rahatlamaq; uzun müddət səni narahat edən bir fikri və ya sirri deyib yüngülləşmək. 'Chest' (sinə/köks) sözü burada insanın daxili yükünü, gizli dərdini simvolizə edir.",
      example:
        "I finally told my boss how unhappy I was, and it felt great to get it off my chest.",
      register: "informal",
      azNote:
        "Adətən narahatlıq, gileyi və ya günahkarlıq hissini açıb danışmaq mənasında işlənir.",
    },
  ],
  practice: [
    {
      type: "gap-fill",
      prompt: "Could you give me a ___ with these heavy boxes?",
      answer: "hand",
      explanation:
        "'Give someone a hand' kiməsə kömək etmək deməkdir, ona görə boşluğa 'hand' gəlir.",
    },
    {
      type: "multiple-choice",
      prompt: "What does 'get cold feet' mean?",
      options: [
        "to suddenly become nervous and lose courage",
        "to feel physically cold",
        "to walk a very long distance",
      ],
      answer: 0,
      explanation:
        "'Get cold feet' son anda qorxub cəsarətini itirmək deməkdir; ayaqların həqiqətən soyuması ilə əlaqəsi yoxdur.",
    },
    {
      type: "gap-fill",
      prompt: "Can you keep an ___ on my luggage while I buy a coffee?",
      answer: "eye",
      explanation:
        "'Keep an eye on something' bir şeyə göz-qulaq olmaq deməkdir, ona görə boşluğa 'eye' gəlir.",
    },
    {
      type: "multiple-choice",
      prompt: "If two people 'don't see eye to eye', they...",
      options: [
        "do not agree with each other",
        "cannot see each other clearly",
        "are exactly the same height",
      ],
      answer: 0,
      explanation:
        "'See eye to eye' tam razılaşmaq deməkdir, ona görə inkar forması 'razı gəlməmək' mənasını verir.",
    },
    {
      type: "gap-fill",
      prompt: "We had to learn the whole poem by ___ for the exam.",
      answer: "heart",
      explanation:
        "'Learn something by heart' bir şeyi əzbər öyrənmək deməkdir, ona görə boşluğa 'heart' gəlir.",
    },
    {
      type: "multiple-choice",
      prompt: "Choose the situation where someone 'put their foot in their mouth'.",
      options: [
        "They accidentally said something tactless and embarrassing.",
        "They ran quickly to catch a bus.",
        "They learned a speech perfectly.",
      ],
      answer: 0,
      explanation:
        "'Put your foot in your mouth' bilmədən yersiz, utandırıcı bir söz demək deməkdir.",
    },
    {
      type: "gap-fill",
      prompt:
        "I finally told my boss how I felt, and it was good to get it off my ___ .",
      answer: "chest",
      explanation:
        "'Get something off your chest' ürəyini boşaltmaq, narahatlığı danışıb rahatlamaq deməkdir.",
    },
  ],
};
