import type { Level, Topic } from "./types";
import { b1Travel } from "./topics/b1-travel";
import { b1Chocolate } from "./topics/b1-chocolate";
import { b1Dreams } from "./topics/b1-dreams";
import { b1Animals } from "./topics/b1-animals";
import { b1Festivals } from "./topics/b1-festivals";
import { b1SolarSystem } from "./topics/b1-solar-system";
import { b1Volcanoes } from "./topics/b1-volcanoes";
import { b1Inventions } from "./topics/b1-inventions";
import { b1Sleep } from "./topics/b1-sleep";
import { b1Money } from "./topics/b1-money";
import { b1Languages } from "./topics/b1-languages";
import { b2Work } from "./topics/b2-work";
import { b2Habits } from "./topics/b2-habits";
import { b2Internet } from "./topics/b2-internet";
import { b2Happiness } from "./topics/b2-happiness";
import { b2Ai } from "./topics/b2-ai";
import { b2Advertising } from "./topics/b2-advertising";
import { b2BodyLanguage } from "./topics/b2-body-language";
import { b2Music } from "./topics/b2-music";
import { b2FakeNews } from "./topics/b2-fake-news";
import { b2Cities } from "./topics/b2-cities";
import { b2AncientWonders } from "./topics/b2-ancient-wonders";
import { c1Environment } from "./topics/c1-environment";

// Yeni topic əlavə etmək üçün: faylı yarat, idxal et və bu siyahıya əlavə et.
export const topics: Topic[] = [
  b1Travel,
  b1Chocolate,
  b1Dreams,
  b1Animals,
  b1Festivals,
  b1SolarSystem,
  b1Volcanoes,
  b1Inventions,
  b1Sleep,
  b1Money,
  b1Languages,
  b2Work,
  b2Habits,
  b2Internet,
  b2Happiness,
  b2Ai,
  b2Advertising,
  b2BodyLanguage,
  b2Music,
  b2FakeNews,
  b2Cities,
  b2AncientWonders,
  c1Environment,
];

export const LEVELS: Level[] = ["B1", "B2", "C1"];

export function getTopic(id: string): Topic | undefined {
  return topics.find((t) => t.id === id);
}

export function getThemes(): string[] {
  return Array.from(new Set(topics.map((t) => t.theme))).sort();
}
