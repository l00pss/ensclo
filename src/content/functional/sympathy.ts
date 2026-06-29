import type { ReferenceGroup } from "../reference";
import type { FunctionalPhrase } from "../types";
import { PartyPopper } from "lucide-react";

export const fnSympathy: ReferenceGroup<FunctionalPhrase> = {
  id: "sympathy",
  label: "Sympathy & Congratulations",
  azLabel: "Başsağlığı və təbrik",
  icon: PartyPopper,
  description:
    "Phrases for congratulating people on good news and offering sympathy or condolences when something bad happens.",
  azDescription:
    "Bu qrup həyatın iki əks anında — sevincli xəbər zamanı təbrik etmək, kədərli hadisə zamanı isə başsağlığı və hüzn bildirmək üçün ifadələri əhatə edir. İngiliscə bu cür anlarda doğru sözü seçmək çox vacibdir, çünki səhv ton (məsələn, kədərli xəbərə həddən artıq şən cavab) qarşı tərəfi incidə bilər. Burada həm toy, iş, uğur kimi xoş hallarda işlənən təbrik ifadələri, həm də ölüm, itki, xəstəlik kimi ağır anlarda deyilən rəsmi və səmimi başsağlığı ifadələri var; hər birinin rəsmilik və yaxınlıq səviyyəsi izah olunur.",
  items: [
    {
      phrase: "Congratulations on your new job!",
      level: "B1",
      use: "a standard, warm way to congratulate someone on an achievement or good news",
      azUse:
        "Kiminsə nailiyyətini, yeni işini, imtahanı, toyunu və ya hər hansı uğurunu təbrik etmək üçün ən geniş işlənən ifadədir. \"Congratulations on + isim/-ing\" qəlibi ilə nəyə görə təbrik etdiyini dəqiq bildirirsən. Diqqət: söz həmişə cəm formada — \"congratulations\" (sonunda \"s\" ilə) yazılır; həm rəsmi, həm qeyri-rəsmi mühitdə təhlükəsiz işlənir.",
      example: "Congratulations on your new job! You really earned it.",
      register: "neutral",
    },
    {
      phrase: "Well done!",
      level: "B1",
      use: "a short, friendly way to praise someone for doing something well",
      azUse:
        "Kiminsə bir işi yaxşı gördüyünü, uğur qazandığını qısa və səmimi şəkildə təriflə bildirmək üçün işlənir — \"afərin!\", \"əla oldu!\" mənasında. Qeyri-rəsmi və mehriban səslənir, gündəlik söhbətdə, məsələn, imtahan verən və ya tapşırığı bitirən birinə deyilir. Amma diqqət: bəzən böyüklərə (rəhbərə) deyilərsə, bir az himayədarlıq kimi səslənə bilər, ona görə əsasən bərabər və ya kiçiklərə işlədilir.",
      example: "You passed all your exams? Well done!",
      register: "informal",
    },
    {
      phrase: "I'm so happy for you!",
      level: "B1",
      use: "to share someone's joy and show you are genuinely pleased about their good news",
      azUse:
        "Kiminsə sevincini bölüşdüyünü, onun xoş xəbərinə səmimi qəlbdən sevindiyini bildirmək üçün işlənir — \"sənin üçün çox sevinirəm!\" deməkdir. Bu, sadəcə təbrikdən daha emosional və istidir, çünki öz hisslərini ortaya qoyursan. Dostlar, ailə və yaxın adamlarla qeyri-rəsmi mühitdə təbii səslənir; \"happy for you\" hissəsi sevincin onların xeyrinə olduğunu vurğulayır.",
      example: "You're getting married? I'm so happy for you!",
      register: "informal",
    },
    {
      phrase: "Congratulations on the well-deserved promotion.",
      level: "B2",
      use: "a slightly more formal congratulation, often in writing or at work",
      azUse:
        "İş yerində və ya yazılı mesajda (e-mail, kart) kiminsə vəzifə yüksəlişini bir qədər rəsmi və hörmətli şəkildə təbrik etmək üçün işlənir. \"Well-deserved\" \"layiqincə qazanılmış\" deməkdir və təbrikə dəyər qatır, qarşı tərəfin zəhmətini etiraf edir. Həmkar, rəhbər və ya az tanıdığın peşəkar şəxslərə uyğun gəlir; \"I'm so happy for you\" ilə müqayisədə daha təmkinli və işgüzar səslənir.",
      example: "Congratulations on the well-deserved promotion — the whole team is delighted for you.",
      register: "formal",
    },
    {
      phrase: "I'm so sorry for your loss.",
      level: "B1",
      use: "the standard, respectful way to offer condolences after someone has died",
      azUse:
        "Kiminsə yaxınını itirdiyini öyrənəndə başsağlığı vermək üçün ən çox işlənən, ən təhlükəsiz ifadədir — \"itkinizə görə çox təəssüflənirəm\", yəni \"başınız sağ olsun\" mənasını verir. Burada \"sorry\" \"bağışlayın\" yox, \"təəssüf edirəm, halınıza acıyıram\" deməkdir. Həm rəsmi, həm qeyri-rəsmi mühitdə, tanış və yad adamlara işlədilə bilər; ölüm mövzusunda ən hörmətli və universal ifadədir.",
      example: "I heard about your father. I'm so sorry for your loss.",
      register: "neutral",
    },
    {
      phrase: "That's terrible. / That's awful.",
      level: "B1",
      use: "a natural, informal reaction to show sympathy when you hear bad news",
      azUse:
        "Pis bir xəbər eşidəndə təəssüf və həmrəylik bildirmək üçün işlənən təbii, qeyri-rəsmi reaksiyadır — \"nə dəhşət!\", \"çox pisdir\" mənasında. Bu, ağır hadisəyə (xəstəlik, qəza, problem) ani emosional cavabdır və qarşı tərəfə onu dinlədiyini, vəziyyətin ciddiliyini başa düşdüyünü göstərir. Dostlar və yaxınlarla işlənir; çox rəsmi və ölüm kimi ağır hallarda tək başına bir az yüngül qala bilər, ona görə daha səmimi sözlərlə tamamlanır.",
      example: "\"My flat was flooded last night.\" \"Oh no, that's terrible!\"",
      register: "informal",
    },
    {
      phrase: "Please accept my deepest condolences.",
      level: "C1",
      use: "a very formal expression of sympathy, used in writing or official settings after a death",
      azUse:
        "Ölüm zamanı çox rəsmi və təntənəli şəkildə dərin hüzn bildirmək üçün işlənir — \"ən dərin başsağlığımı qəbul edin\" deməkdir. Əsasən yazılı formada (rəsmi məktub, başsağlığı kartı, rəsmi mərasim) və ya az tanıdığın, hörmət tələb edən şəxslərə deyilir. \"Condolences\" sözü \"başsağlığı\" deməkdir və demək olar ki, həmişə cəm formada işlənir; gündəlik dost söhbətində bu qədər rəsmi ifadə bir az soyuq səslənə bilər.",
      example: "On behalf of the entire company, please accept my deepest condolences.",
      register: "formal",
    },
    {
      phrase: "If there's anything I can do, just let me know.",
      level: "B2",
      use: "to offer practical support and care to someone going through a hard time",
      azUse:
        "Çətin gün keçirən birinə real dəstək təklif etmək, \"əlimdən gələn bir şey varsa, mütləq de\" demək üçün işlənir. Başsağlığı və ya təsəlli sözlərindən sonra deyilir və sözün arxasında əməli kömək niyyəti olduğunu göstərir, ona görə təkcə formal yox, səmimi səslənir. Həm dostlara, həm həmkarlara uyğun gəlir; mehriban, qayğıkeş bir ton yaradır və qarşı tərəfi tək olmadığına inandırır.",
      example: "I'm so sorry you're going through this. If there's anything I can do, just let me know.",
      register: "neutral",
    },
    {
      phrase: "Wishing you all the best in this new chapter.",
      level: "B2",
      use: "a warm, slightly formal way to send good wishes when someone starts something new",
      azUse:
        "Kiminsə həyatında yeni bir mərhələyə — yeni iş, evlilik, başqa şəhərə köçmək, təqaüdə çıxmaq — başlayanda xoş arzular göndərmək üçün işlənir; \"bu yeni mərhələdə sənə hər xeyiri arzulayıram\" deməkdir. \"New chapter\" (yeni fəsil) ifadəsi həyatın yeni dövrünü obrazlı şəkildə bildirir və ifadəyə isti, ürəkdən gələn bir ton qatır. Həm kartlarda, həm yazılı mesajlarda, həm də az tanıdığın peşəkar şəxslərə uyğun gəlir; rəsmi ilə səmimi arasında balanslı, hörmətli səslənir.",
      example: "Congratulations on your retirement — wishing you all the best in this new chapter.",
      register: "neutral",
    },
    {
      phrase: "You should be really proud of yourself.",
      level: "B2",
      use: "to congratulate someone by encouraging them to recognise their own achievement",
      azUse:
        "Kiminsə qazandığı uğuru təbrik edərkən, eyni zamanda onu öz nailiyyəti ilə fəxr etməyə təşviq etmək üçün işlənir — \"həqiqətən özünlə fəxr etməlisən\" deməkdir. Sadə təbrikdən fərqli olaraq, bu ifadə diqqəti qarşı tərəfin zəhmətinə və əməyinə yönəldir, ona görə daha dəstəkləyici və ürəkləndirici səslənir. Dostlara, ailə üzvlərinə, tələbələrə və ya komanda yoldaşlarına yarışan qeyri-rəsmi və mehriban tonu var; bir az daha böyük və ya təcrübəli birinə deyiləndə də səmimi qəbul olunur.",
      example: "You finished the marathon on your first try? You should be really proud of yourself.",
      register: "informal",
    },
    {
      phrase: "My thoughts are with you and your family during this difficult time.",
      level: "C1",
      use: "a formal, compassionate expression of sympathy during a period of grief or hardship",
      azUse:
        "Kiminsə ağır itki, xəstəlik və ya çətin dövr keçirdiyini biləndə rəsmi və şəfqətli şəkildə həmrəylik bildirmək üçün işlənir — \"bu çətin günlərdə düşüncələrim səninlə və ailənlədir\" deməkdir. \"My thoughts are with you\" qəlibi birbaşa \"sorry\" deməkdən daha incə və təntənəlidir, ona görə rəsmi məktublarda, başsağlığı kartlarında və iş mühitində geniş işlənir. Tanış olmayan və ya hörmət tələb edən şəxslərə də uyğun gəlir; soyuq yox, hörmətli və mehriban bir ton yaradır.",
      example: "I was so saddened to hear the news. My thoughts are with you and your family during this difficult time.",
      register: "formal",
    },
    {
      phrase: "Take all the time you need.",
      level: "B1",
      use: "to reassure someone going through grief or stress that there is no pressure to recover quickly",
      azUse:
        "Yas, stress və ya çətin vəziyyət yaşayan birinə tələsmədən, lazım olduğu qədər vaxt götürə biləcəyini bildirmək üçün işlənir — \"nə qədər vaxt lazımdırsa, götür\" deməkdir. Bu ifadə qarşı tərəfin üzərindən təzyiqi götürür və onun hisslərinə hörmət etdiyini, tələsdirmədiyini göstərir. Həm dostlara, həm həmkarlara, həm də işçiyə deyilə bilər; mehriban, anlayışlı və qayğıkeş bir ton daşıyır, başsağlığı və ya dəstək sözlərindən sonra təbii səslənir.",
      example: "Don't worry about the deadline right now — take all the time you need.",
      register: "neutral",
    },
    {
      phrase: "That's fantastic news — you must be over the moon!",
      level: "C1",
      use: "an enthusiastic, idiomatic way to celebrate someone's exciting good news",
      azUse:
        "Kiminsə çox sevindirici xəbərinə coşqulu və səmimi reaksiya vermək üçün işlənir — \"əla xəbərdir, yəqin sevincdən uçursan!\" mənasını verir. \"Over the moon\" idiomu \"həddən artıq xoşbəxt, sevincdən özünə yer tapa bilməyən\" deməkdir və ifadəyə canlı, danışıq dilinə xas bir ton qatır. Dostlar və yaxınlarla qeyri-rəsmi mühitdə təbii səslənir; çox rəsmi və ya işgüzar yazışmada bu qədər coşqulu idiom bir az yüngül qala bilər, ona görə əsasən səmimi münasibətlərdə işlədilir.",
      example: "You got into your dream university? That's fantastic news — you must be over the moon!",
      register: "informal",
    },
  ],
  practice: [
    {
      type: "multiple-choice",
      prompt: "Which phrase is the correct way to offer condolences after someone has died?",
      options: [
        "Well done!",
        "I'm so sorry for your loss.",
        "I'm so happy for you!",
      ],
      answer: 1,
      explanation:
        "\"I'm so sorry for your loss\" is the standard, respectful way to offer condolences. The other two are for good news, not a death.",
    },
    {
      type: "multiple-choice",
      prompt: "Which phrase is the MOST formal expression of sympathy after a death?",
      options: [
        "That's terrible.",
        "Please accept my deepest condolences.",
        "Oh no, that's awful!",
      ],
      answer: 1,
      explanation:
        "\"Please accept my deepest condolences\" is very formal and used in writing or official settings. The others are informal reactions.",
    },
    {
      type: "multiple-choice",
      prompt: "Your friend just got married. Which response best shares their joy?",
      options: [
        "I'm so sorry for your loss.",
        "That's awful.",
        "I'm so happy for you!",
      ],
      answer: 2,
      explanation:
        "\"I'm so happy for you!\" shows genuine, warm joy at good news. The other two are for bad news and would sound completely wrong.",
    },
    {
      type: "gap-fill",
      prompt: "___ on your new job! You really earned it. (the word used to praise good news, ends in -s)",
      answer: "Congratulations",
      explanation:
        "\"Congratulations\" is always plural (with -s) and is the standard way to congratulate someone on an achievement.",
    },
    {
      type: "gap-fill",
      prompt: "I'm so sorry for your ___. (the word meaning the death of a loved one)",
      answer: "loss",
      explanation:
        "\"I'm so sorry for your loss\" is the fixed phrase for offering condolences after someone has died.",
    },
    {
      type: "gap-fill",
      prompt: "Please accept my deepest ___. (the formal word meaning 'sympathy after a death')",
      answer: "condolences",
      explanation:
        "\"Condolences\" means an expression of sympathy after a death and is almost always used in the plural.",
    },
  ],
};
