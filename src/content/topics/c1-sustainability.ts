import type { Topic } from "../types";

export const c1Sustainability: Topic = {
  id: "c1-sustainability",
  level: "C1",
  title: "Sustainability and the Circular Economy",
  theme: "Environment",
  summary:
    "Examine how a circular economy could replace the wasteful take-make-dispose model, and learn to write with greater economy yourself using participle clauses (Having finished..., Designed to last..., products made from...).",
  leadIn: [
    "To what extent is the way we design and discard products responsible for the environmental crisis?",
    "Should manufacturers, rather than consumers, bear the cost of recycling and repairing the goods they sell?",
    "Can an economy keep growing while consuming fewer raw materials, or is that a contradiction?",
  ],
  vocabulary: [
    {
      word: "circular economy",
      definition:
        "an economic model in which materials are kept in use for as long as possible through reuse, repair and recycling, rather than being discarded after a single use",
      example:
        "Advocates of the circular economy argue that waste is simply a design flaw that can be engineered out.",
      collocations: ["transition to a circular economy", "circular economy principles"],
      azNote: "dövri iqtisadiyyat — materialların təkrar istifadə, təmir və emal yolu ilə mümkün qədər uzun müddət dövriyyədə saxlanması",
    },
    {
      word: "extraction",
      definition:
        "the process of removing raw materials such as minerals, metals or fossil fuels from the earth",
      example:
        "The relentless extraction of rare metals for electronics is damaging fragile ecosystems.",
      collocations: ["resource extraction", "the extraction of raw materials"],
      azNote: "çıxarılma, hasilat — mineral, metal və yanacağın yer altından çıxarılması",
    },
    {
      word: "to repurpose",
      definition:
        "to adapt or reuse something for a different function instead of throwing it away",
      example:
        "Architects increasingly repurpose abandoned factories as housing rather than demolishing them.",
      collocations: ["repurpose old materials", "creatively repurpose"],
      azNote: "təkrar təyinatla istifadə etmək — bir şeyi atmaq əvəzinə başqa məqsəd üçün uyğunlaşdırmaq",
    },
    {
      word: "stewardship",
      definition:
        "the responsible management and protection of something entrusted to one's care, especially natural resources",
      example:
        "Genuine environmental stewardship treats the planet's resources as a trust rather than a possession.",
      collocations: ["environmental stewardship", "a sense of stewardship"],
      azNote: "qəyyumluq, məsuliyyətli idarəçilik — təbii sərvətlərə sahib kimi deyil, qoruyan kimi yanaşmaq",
    },
    {
      word: "obsolescence",
      definition:
        "the state of becoming outdated or no longer usable, sometimes deliberately built into a product",
      example:
        "Planned obsolescence forces consumers to replace devices that could easily have lasted for years.",
      collocations: ["planned obsolescence", "built-in obsolescence"],
      azNote: "köhnəlmə, istifadədən düşmə — bəzən qəsdən məhsula yerləşdirilən qısa ömür",
    },
    {
      word: "regenerative",
      definition:
        "describing a system that not only avoids harm but actively restores and renews the natural environment it depends on",
      example:
        "A truly regenerative business leaves the surrounding ecosystem healthier than it found it.",
      collocations: ["regenerative agriculture", "regenerative design"],
      azNote: "bərpaedici — yalnız zərər verməyən deyil, asılı olduğu təbii sistemi fəal şəkildə bərpa edən sistem",
    },
  ],
  grammar: {
    point: "Participle clauses (perfect, present and reduced relative)",
    explanation:
      "Participle clauses let us compress two ideas into one elegant sentence, a hallmark of academic style. A present participle (-ing) usually shows a simultaneous action or a reason: 'Walking home, she noticed the new recycling bins.' A perfect participle (Having + past participle) shows that one action finished before another: 'Having exhausted its reserves, the firm switched to recycled inputs.' A past participle clause carries a passive meaning and can replace a relative clause: 'products made from waste' = 'products that are made from waste'. Crucially, the subject of the participle must match the subject of the main clause, or the clause 'dangles'.",
    azNote:
      "Participle clause iki fikri bir səlis cümlədə birləşdirir və akademik üsluba xasdır. -ing forması eyni zamanda baş verən hərəkəti və ya səbəbi bildirir, 'Having + V3' isə bir hərəkətin digərindən əvvəl bitdiyini göstərir. 'made from...' kimi keçmiş feli sifət passiv mənalıdır və relative clause-u əvəz edir. Diqqət: participle-in mübtədası baş cümlənin mübtədası ilə eyni olmalıdır, yoxsa cümlə səhv qurulur.",
    examples: [
      {
        en: "Having recognised the true cost of waste, manufacturers began to repurpose discarded components.",
        note: "perfect participle: the first action finished before the second",
      },
      {
        en: "Walking through a circular industrial park, one might see the waste heat of one plant warming another.",
        note: "present participle: a simultaneous action; the subject 'one' is shared",
      },
      {
        en: "Designed to be dismantled and reused, these products embody the logic of sustainability.",
        note: "past participle clause with passive meaning, fronted for emphasis",
      },
      {
        en: "Goods made from recycled materials are no longer a niche curiosity.",
        note: "reduced relative clause: 'made from...' = 'that are made from...'",
      },
    ],
  },
  reading: {
    title: "Closing the Loop: Rethinking How We Make and Use Things",
    text: `For most of the industrial era, the global economy has operated on a stubbornly linear logic: raw materials are taken from the earth, transformed into goods, and discarded the moment they cease to be useful. Premised on the assumption of limitless reserves, this take-make-dispose model has driven the relentless extraction of minerals, metals and fossil fuels at a rate the planet simply cannot sustain. Increasingly, however, economists and designers are turning to a compelling alternative: the circular economy.

Rather than treating products as disposable, the circular economy seeks to keep materials circulating for as long as possible. Designed from the outset to be repaired, upgraded and eventually dismantled, goods are no longer destined for landfill the moment a single part fails. Manufacturers, having recognised the true cost of waste, increasingly repurpose components that would once have been thrown away, feeding them back into fresh production cycles. Underpinning this shift is a renewed sense of stewardship — the conviction that we hold the earth's resources in trust rather than owning them outright.

Central to this thinking is a sustained critique of planned obsolescence, the practice of deliberately engineering products with an artificially short lifespan so that buyers are compelled to replace them. Phones rendered worthless by software that can no longer be updated, and appliances built around parts that cannot be prised open, exemplify a system optimised for consumption rather than longevity. Challenging this logic, reformers insist, is the first step towards genuine change.

The most ambitious vision goes further still, imagining an economy that is genuinely regenerative: one designed not merely to do less harm but to restore the ecosystems on which it ultimately depends. Walking through a well-planned industrial park, one might see the waste heat of one factory warming another, or water purified and quietly returned to the river from which it was drawn. Such closed loops remain the exception rather than the rule, yet they hint at a future in which lasting prosperity no longer requires the steady depletion of the living world.`,
    questions: [
      {
        type: "multiple-choice",
        prompt: "What is the central distinction the writer draws between the two economic models?",
        options: [
          "The linear model recycles materials, whereas the circular model discards them.",
          "The linear model discards materials after use, whereas the circular model keeps them in circulation.",
          "Both models depend equally on the extraction of fresh raw materials.",
          "The circular model is concerned only with manufacturing cheaper goods.",
        ],
        answer: 1,
        explanation:
          "The text contrasts the 'take-make-dispose' linear logic with a circular economy that 'seeks to keep materials circulating for as long as possible'.",
      },
      {
        type: "multiple-choice",
        prompt: "What does the writer mean by 'planned obsolescence'?",
        options: [
          "Repairing products so that they last for many years",
          "Deliberately designing products with a short lifespan to force replacement",
          "A government plan to recycle outdated electronics",
          "The natural wearing-out of any well-made product",
        ],
        answer: 1,
        explanation:
          "It is defined as 'deliberately engineering products with an artificially short lifespan so that buyers are compelled to replace them'.",
      },
      {
        type: "multiple-choice",
        prompt: "What characterises a 'genuinely regenerative' economy in the writer's most ambitious vision?",
        options: [
          "It simply causes slightly less environmental harm than before.",
          "It restores the ecosystems on which it depends rather than only limiting damage.",
          "It abandons all forms of manufacturing entirely.",
          "It relies on faster extraction to keep up with demand.",
        ],
        answer: 1,
        explanation:
          "The text describes it as 'designed not merely to do less harm but to restore the ecosystems on which it ultimately depends'.",
      },
    ],
  },
  speaking: [
    "'A circular economy is an idealistic fantasy that can never compete with cheap mass production.' How far do you agree?",
    "Describe a product you own that was clearly built to become obsolete quickly, and discuss how it could have been designed differently.",
    "What policies could a government introduce to encourage stewardship of natural resources and discourage wasteful extraction?",
  ],
  writing: {
    task: "Write a discursive essay responding to the statement: 'Manufacturers, not consumers, should be held responsible for the waste their products create.' Present both sides and reach a reasoned conclusion. Use at least three participle clauses (for example: Having considered..., Designed to..., products made from...).",
    minWords: 220,
  },
  quiz: [
    {
      type: "gap-fill",
      prompt:
        "___ exhausted its local reserves, the company was forced to rely on recycled inputs. (perfect participle, = 'After it had exhausted')",
      answer: "Having",
      explanation:
        "A perfect participle clause ('Having + past participle') shows the first action finished before the main one.",
    },
    {
      type: "gap-fill",
      prompt: "Goods ___ (make) from recycled materials are no longer a niche curiosity.",
      answer: "made",
      accept: ["made"],
      explanation:
        "A past participle in a reduced relative clause: 'made from...' = 'that are made from...' (passive meaning).",
    },
    {
      type: "multiple-choice",
      prompt: "Which sentence contains a correctly formed participle clause (with no dangling subject)?",
      options: [
        "Walking through the factory, the smell of recycled plastic was strong.",
        "Having repaired the device, the warranty was extended.",
        "Designed to be dismantled, the engineers reused every part.",
        "Having recognised the cost of waste, manufacturers began to repurpose old parts.",
      ],
      answer: 3,
      explanation:
        "Only here does the subject of the participle ('manufacturers') match the subject of the main clause; the other options dangle.",
    },
    {
      type: "gap-fill",
      prompt:
        "A truly ___ business does more than limit damage; it actively restores the ecosystems around it.",
      answer: "regenerative",
      explanation:
        "'Regenerative' describes a system that renews and restores nature, not merely one that avoids harm.",
    },
    {
      type: "multiple-choice",
      prompt: "In the context of the reading, 'extraction' most nearly means:",
      options: [
        "the removal of raw materials from the earth",
        "the repair of broken machinery",
        "the recycling of household waste",
        "the careful protection of resources",
      ],
      answer: 0,
      explanation:
        "'Extraction' refers to removing raw materials such as minerals, metals and fossil fuels from the earth.",
    },
  ],
};
