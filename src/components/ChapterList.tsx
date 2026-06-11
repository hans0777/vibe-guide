"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { chapters } from "@/lib/content";
import {
  chapterDoneSteps,
  isChapterComplete,
  loadProgress,
  overallPercent,
  resumePoint,
  type Progress,
} from "@/lib/progress";

export function ChapterList() {
  const [progress, setProgress] = useState<Progress>({ done: {} });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setProgress(loadProgress());
    setReady(true);
  }, []);

  const percent = overallPercent(progress);
  const resume = resumePoint(progress);
  const started = percent > 0;

  return (
    <div className="space-y-6">
      {/* 이어하기 */}
      {ready && (
        <div className="rounded-3xl bg-amber-500 text-white p-6 sm:p-8 shadow-md">
          {started && resume ? (
            <>
              <p className="font-bold text-amber-100 mb-1">지금까지 {percent}% 왔어요. 잘하고 있어요!</p>
              <div className="w-full h-3 rounded-full bg-amber-300/50 mb-4">
                <div
                  className="h-3 rounded-full bg-white transition-all"
                  style={{ width: `${Math.max(percent, 4)}%` }}
                />
              </div>
              <Link
                href={`/guide/${resume.slug}`}
                className="block text-center rounded-2xl bg-white text-amber-600 font-extrabold text-xl px-6 py-4 hover:bg-amber-50 transition-colors"
              >
                하던 곳부터 이어하기 →
              </Link>
            </>
          ) : !started ? (
            <>
              <p className="font-bold text-amber-100 mb-3">
                준비물은 딱 두 가지 — 윈도우 컴퓨터와 1~2시간. 나머지는 저희가 다 안내해요.
              </p>
              <Link
                href="/guide/0"
                className="block text-center rounded-2xl bg-white text-amber-600 font-extrabold text-xl px-6 py-4 hover:bg-amber-50 transition-colors"
              >
                ▶ 시작하기
              </Link>
            </>
          ) : (
            <>
              <p className="font-bold text-xl mb-1">🎓 모든 챕터를 끝내셨어요!</p>
              <p className="text-amber-100">필요할 때 언제든 다시 찾아보세요.</p>
            </>
          )}
        </div>
      )}

      {/* 챕터 목록 */}
      <ol className="space-y-3">
        {chapters.map((c) => {
          const done = chapterDoneSteps(progress, c.slug);
          const complete = isChapterComplete(progress, c.slug);
          const inProgress = done > 0 && !complete;
          return (
            <li key={c.slug}>
              <Link
                href={`/guide/${c.slug}`}
                className="flex items-center gap-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-sm p-4 sm:p-5 transition-all"
              >
                <span
                  className={`shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center font-extrabold text-lg ${
                    complete
                      ? "bg-emerald-100 text-emerald-700"
                      : inProgress
                      ? "bg-amber-100 text-amber-700"
                      : "bg-stone-100 text-stone-500"
                  }`}
                >
                  {complete ? "✓" : c.number}
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block font-bold text-stone-900 text-lg leading-snug">
                    {c.title}
                  </span>
                  <span className="block text-[15px] text-stone-500 mt-0.5">
                    {c.summary}
                  </span>
                </span>
                <span className="shrink-0 text-right">
                  <span className="block text-[14px] text-stone-400">약 {c.minutes}분</span>
                  {inProgress && (
                    <span className="block text-[14px] font-bold text-amber-600 mt-0.5">
                      {done}/{c.steps.length} 진행 중
                    </span>
                  )}
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
