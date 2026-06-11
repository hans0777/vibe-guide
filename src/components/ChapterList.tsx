"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { chapters } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
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
      {/* 이어하기 / 시작하기 */}
      {ready && (
        <Reveal>
          <div className="shine-host rounded-3xl bg-[#1d1c1b] text-white p-6 sm:p-8 shadow-lg">
            {started && resume ? (
              <>
                <p className="font-bold text-stone-300 mb-2">
                  지금까지 <span className="text-white text-xl font-extrabold">{percent}%</span> 왔어요. 잘하고
                  있어요! 👏
                </p>
                <div className="w-full h-3 rounded-full bg-white/15 mb-5 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#2ec77f] transition-all duration-1000 ease-out"
                    style={{ width: `${Math.max(percent, 4)}%` }}
                  />
                </div>
                <Link
                  href={`/guide/${resume.slug}`}
                  className="block text-center rounded-full bg-white text-[#1d1c1b] font-extrabold text-lg px-6 py-4 btn-press"
                >
                  하던 곳부터 이어하기 →
                </Link>
              </>
            ) : !started ? (
              <>
                <p className="font-bold text-stone-300 mb-4 text-center sm:text-left">
                  준비물은 딱 두 가지 — 윈도우 컴퓨터와 1~2시간. 나머지는 저희가 다 안내해요.
                </p>
                <Link
                  href="/guide/0"
                  className="block text-center rounded-full bg-white text-[#1d1c1b] font-extrabold text-lg px-6 py-4 btn-press"
                >
                  ▶ 시작하기
                </Link>
              </>
            ) : (
              <>
                <p className="font-bold text-xl mb-1">🎓 모든 챕터를 끝내셨어요!</p>
                <p className="text-stone-300">필요할 때 언제든 다시 찾아보세요.</p>
              </>
            )}
          </div>
        </Reveal>
      )}

      {/* 챕터 목록 */}
      <ol className="space-y-3">
        {chapters.map((c, i) => {
          const done = chapterDoneSteps(progress, c.slug);
          const complete = isChapterComplete(progress, c.slug);
          const inProgress = done > 0 && !complete;
          return (
            <li key={c.slug}>
              <Reveal delay={Math.min(i * 70, 350)}>
                <Link
                  href={`/guide/${c.slug}`}
                  className="group flex items-center gap-4 rounded-2xl bg-[#f7f5f2] hover:bg-[#f1eeea] hover:-translate-y-0.5 p-4 sm:p-5 transition-all duration-300"
                >
                  <span
                    className={`shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center font-extrabold text-lg transition-transform duration-300 group-hover:scale-110 ${
                      complete
                        ? "bg-[#2ec77f] text-white"
                        : inProgress
                        ? "bg-[#ffbe4c] text-[#343433]"
                        : "bg-white text-stone-500 shadow-sm"
                    }`}
                  >
                    {complete ? "✓" : c.number}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block font-bold text-[#343433] text-lg leading-snug">{c.title}</span>
                    <span className="block text-[15px] text-stone-500 mt-0.5">{c.summary}</span>
                  </span>
                  <span className="shrink-0 text-right">
                    <span className="block text-[14px] text-stone-400">약 {c.minutes}분</span>
                    {inProgress && (
                      <span className="block text-[14px] font-bold text-[#c98a14] mt-0.5">
                        {done}/{c.steps.length} 진행 중
                      </span>
                    )}
                    <span className="block text-[#3784f4] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 mt-0.5">
                      →
                    </span>
                  </span>
                </Link>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
