// ---------------------------------------------------------------------------
// Grammar (Qrammatika) — müstəqil bölmənin YEGANƏ giriş nöqtəsi.
//
// Connectors kimi: data sərhədlidir, ona görə hamısı birbaşa (eager) idxal
// olunur — lazy-load/manifest yoxdur. Kateqoriyalar `order` sahəsinə görə
// PEDAQOJİ ardıcıllıqla (B1 təməl → B2 → C1) düzülür. Yeni qayda əlavə etmək:
// müvafiq `grammar/*.ts` faylına bir obyekt əlavə et, vəssalam.
// ---------------------------------------------------------------------------
import {
  Clock,
  Type,
  Sigma,
  TrendingUp,
  Palette,
  MessagesSquare,
  KeyRound,
  History,
  Combine,
  Repeat,
  Wrench,
  GitFork,
  Sparkles,
  Link2,
  Quote,
  Compass,
  Puzzle,
  Gem,
  type LucideIcon,
} from "lucide-react";
import type { GrammarCategory, GrammarGroup } from "./types";

import { tenses } from "./grammar/tenses";
import { articles } from "./grammar/articles";
import { quantifiers } from "./grammar/quantifiers";
import { comparatives } from "./grammar/comparatives";
import { adjectivesAdverbs } from "./grammar/adjectives-adverbs";
import { questions } from "./grammar/questions";
import { modals } from "./grammar/modals";
import { habits } from "./grammar/habits";
import { gerundInfinitive } from "./grammar/gerund-infinitive";
import { passive } from "./grammar/passive";
import { causative } from "./grammar/causative";
import { conditionals } from "./grammar/conditionals";
import { wishes } from "./grammar/wishes";
import { relativeClauses } from "./grammar/relative-clauses";
import { reportedSpeech } from "./grammar/reported-speech";
import { prepositions } from "./grammar/prepositions";
import { phrasalVerbs } from "./grammar/phrasal-verbs";
import { advanced } from "./grammar/advanced";

/**
 * Kateqoriya meta-sı — etiket (bilingual), ikon və göstərmə sırası.
 * Qrup faylları bunu TƏKRARLAMIR; ad/ikon/sıra burada bir yerdədir.
 * `order` — sadədən mürəkkəbə öyrənmə ardıcıllığı.
 */
export const GRAMMAR_META: Record<
  GrammarCategory,
  { label: string; azLabel: string; icon: LucideIcon; order: number }
> = {
  tenses: { label: "Tenses", azLabel: "Zamanlar", icon: Clock, order: 1 },
  articles: { label: "Articles", azLabel: "Artikllar", icon: Type, order: 2 },
  quantifiers: { label: "Quantifiers & nouns", azLabel: "Kəmiyyət sözləri", icon: Sigma, order: 3 },
  comparatives: {
    label: "Comparatives",
    azLabel: "Müqayisə dərəcələri",
    icon: TrendingUp,
    order: 4,
  },
  "adjectives-adverbs": {
    label: "Adjectives & adverbs",
    azLabel: "Sifət və zərflər",
    icon: Palette,
    order: 5,
  },
  questions: { label: "Questions", azLabel: "Sual formaları", icon: MessagesSquare, order: 6 },
  modals: { label: "Modal verbs", azLabel: "Modal feillər", icon: KeyRound, order: 7 },
  habits: { label: "Past habits", azLabel: "Keçmiş vərdişlər", icon: History, order: 8 },
  "gerund-infinitive": {
    label: "Gerund & Infinitive",
    azLabel: "Gerund və məsdər",
    icon: Combine,
    order: 9,
  },
  passive: { label: "Passive voice", azLabel: "Passiv səs", icon: Repeat, order: 10 },
  causative: { label: "Causative", azLabel: "Causative (etdirmə)", icon: Wrench, order: 11 },
  conditionals: { label: "Conditionals", azLabel: "Şərt cümlələri", icon: GitFork, order: 12 },
  wishes: { label: "Wishes & regrets", azLabel: "Arzular və peşmançılıq", icon: Sparkles, order: 13 },
  "relative-clauses": {
    label: "Relative clauses",
    azLabel: "Nisbi budaq cümlələr",
    icon: Link2,
    order: 14,
  },
  "reported-speech": {
    label: "Reported speech",
    azLabel: "Dolayı nitq",
    icon: Quote,
    order: 15,
  },
  prepositions: { label: "Prepositions", azLabel: "Sözönləri", icon: Compass, order: 16 },
  "phrasal-verbs": {
    label: "Phrasal verbs",
    azLabel: "Frazal feillər",
    icon: Puzzle,
    order: 17,
  },
  advanced: { label: "Advanced structures", azLabel: "Mürəkkəb strukturlar", icon: Gem, order: 18 },
};

/** Bütün kateqoriyalar — GRAMMAR_META sırasına görə düzülür. */
export const grammarGroups: GrammarGroup[] = [
  tenses,
  articles,
  quantifiers,
  comparatives,
  adjectivesAdverbs,
  questions,
  modals,
  habits,
  gerundInfinitive,
  passive,
  causative,
  conditionals,
  wishes,
  relativeClauses,
  reportedSpeech,
  prepositions,
  phrasalVerbs,
  advanced,
].sort((a, b) => GRAMMAR_META[a.id].order - GRAMMAR_META[b.id].order);

/** id → qrup, O(1) axtarış. */
const groupById = new Map<GrammarCategory, GrammarGroup>(
  grammarGroups.map((g) => [g.id, g]),
);

export function getGrammarGroup(id: string): GrammarGroup | undefined {
  return groupById.get(id as GrammarCategory);
}

/** Ümumi qrammatika qaydası sayı (dashboard / hero üçün). */
export const totalGrammarRules = grammarGroups.reduce((n, g) => n + g.rules.length, 0);
