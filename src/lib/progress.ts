"use client";

// 진행 상황을 브라우저에 저장합니다(localStorage).
// 서버에 아무것도 보내지 않으므로 개인정보 걱정이 없습니다.

import { chapters } from "./content";

const KEY = "vibe-guide-progress-v1";

export type Progress = {
  /** 챕터 slug → 완료한 단계 수 */
  done: Record<string, number>;
};

export function loadProgress(): Progress {
  if (typeof window === "undefined") return { done: {} };
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return { done: {} };
    const parsed = JSON.parse(raw) as Progress;
    return parsed && typeof parsed.done === "object" ? parsed : { done: {} };
  } catch {
    return { done: {} };
  }
}

export function saveStepDone(chapterSlug: string, stepCount: number) {
  if (typeof window === "undefined") return;
  const p = loadProgress();
  p.done[chapterSlug] = Math.max(p.done[chapterSlug] ?? 0, stepCount);
  window.localStorage.setItem(KEY, JSON.stringify(p));
}

export function resetProgress() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(KEY);
}

export function chapterDoneSteps(p: Progress, slug: string): number {
  return p.done[slug] ?? 0;
}

export function isChapterComplete(p: Progress, slug: string): boolean {
  const ch = chapters.find((c) => c.slug === slug);
  if (!ch) return false;
  return chapterDoneSteps(p, slug) >= ch.steps.length;
}

/** 전체 진행률(%) */
export function overallPercent(p: Progress): number {
  const total = chapters.reduce((n, c) => n + c.steps.length, 0);
  const done = chapters.reduce(
    (n, c) => n + Math.min(chapterDoneSteps(p, c.slug), c.steps.length),
    0
  );
  return total === 0 ? 0 : Math.round((done / total) * 100);
}

/** 이어하기 위치 — 처음으로 완료되지 않은 챕터와 단계 */
export function resumePoint(p: Progress): { slug: string; step: number } | null {
  for (const c of chapters) {
    const done = chapterDoneSteps(p, c.slug);
    if (done < c.steps.length) {
      return { slug: c.slug, step: done };
    }
  }
  return null; // 전부 완료
}
