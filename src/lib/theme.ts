import {
  Briefcase,
  GraduationCap,
  Heart,
  Leaf,
  type LucideIcon,
  Plane,
  Cpu,
  Drama,
  UtensilsCrossed,
  BookOpen,
  Brain,
  PawPrint,
  Rocket,
  Mountain,
  Landmark,
  Coins,
  Languages,
  Atom,
  TrendingUp,
  MessagesSquare,
  Newspaper,
  Building2,
} from "lucide-react";
import type { Level } from "../content/types";

// Səviyyə meta-sı — rəng həmişə ad/ikonla işlənir (WCAG 1.4.1). Hər sahə tam
// className-dir; light + dark variantları daxildir.
export const LEVEL_META: Record<
  Level,
  {
    label: string;
    /** Badge (soft fon + mətn + halqa) */
    badge: string;
    /** Vurğu mətn rəngi (proqres ringi, başlıqlar) */
    accent: string;
    /** Solid zolaq / dolu fon */
    bar: string;
  }
> = {
  B1: {
    label: "Beginner+",
    badge:
      "bg-emerald-100 text-emerald-700 ring-emerald-600/20 dark:bg-emerald-500/15 dark:text-emerald-300 dark:ring-emerald-400/20",
    accent: "text-emerald-600 dark:text-emerald-400",
    bar: "bg-emerald-500",
  },
  B2: {
    label: "Intermediate",
    badge:
      "bg-blue-100 text-blue-700 ring-blue-600/20 dark:bg-blue-500/15 dark:text-blue-300 dark:ring-blue-400/20",
    accent: "text-blue-600 dark:text-blue-400",
    bar: "bg-blue-500",
  },
  C1: {
    label: "Advanced",
    badge:
      "bg-violet-100 text-violet-700 ring-violet-600/20 dark:bg-violet-500/15 dark:text-violet-300 dark:ring-violet-400/20",
    accent: "text-violet-600 dark:text-violet-400",
    bar: "bg-violet-500",
  },
};

// Mövzuya görə lucide ikon (vizual tanınma).
const THEME_ICONS: Record<string, LucideIcon> = {
  Travel: Plane,
  Work: Briefcase,
  Environment: Leaf,
  Food: UtensilsCrossed,
  Health: Heart,
  Technology: Cpu,
  Education: GraduationCap,
  Culture: Drama,
  Science: Atom,
  Animals: PawPrint,
  Space: Rocket,
  Nature: Mountain,
  History: Landmark,
  Money: Coins,
  Language: Languages,
  Psychology: Brain,
  Business: TrendingUp,
  Communication: MessagesSquare,
  Media: Newspaper,
  Society: Building2,
};

export function themeIcon(theme: string): LucideIcon {
  return THEME_ICONS[theme] ?? BookOpen;
}
