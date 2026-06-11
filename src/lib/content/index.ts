import type { Chapter } from "./types";
import { ch0 } from "./chapters/ch0";
import { ch1 } from "./chapters/ch1";
import { ch2 } from "./chapters/ch2";
import { ch3 } from "./chapters/ch3";
import { ch4 } from "./chapters/ch4";
import { ch5 } from "./chapters/ch5";
import { ch6 } from "./chapters/ch6";
import { ch7 } from "./chapters/ch7";

export const chapters: Chapter[] = [ch0, ch1, ch2, ch3, ch4, ch5, ch6, ch7];

export const totalSteps = chapters.reduce((n, c) => n + c.steps.length, 0);

export function getChapter(slug: string): Chapter | undefined {
  return chapters.find((c) => c.slug === slug);
}
