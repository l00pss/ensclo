import type { Level, Topic } from "./types";
import { b1Travel } from "./topics/b1-travel";
import { b2Work } from "./topics/b2-work";
import { c1Environment } from "./topics/c1-environment";

// Yeni topic əlavə etmək üçün: faylı yarat, idxal et və bu siyahıya əlavə et.
export const topics: Topic[] = [b1Travel, b2Work, c1Environment];

export const LEVELS: Level[] = ["B1", "B2", "C1"];

export function getTopic(id: string): Topic | undefined {
  return topics.find((t) => t.id === id);
}

export function getThemes(): string[] {
  return Array.from(new Set(topics.map((t) => t.theme))).sort();
}
