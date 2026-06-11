"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import type { Chapter, StuckPoint } from "@/lib/content/types";
import { chapters } from "@/lib/content";
import { Blocks } from "@/components/Blocks";
import { chapterDoneSteps, loadProgress, saveStepDone } from "@/lib/progress";

function RiskBadge({ risk }: { risk: NonNullable<Chapter["steps"][number]["risk"]> }) {
  return (
    <div className="rounded-2xl bg-stone-50 border border-stone-200 px-4 py-3 text-[15px] space-y-1">
      <p className="text-stone-700">
        {risk.level === "safe" ? "🟢" : "🟡"}{" "}
        <strong>이 단계가 컴퓨터에 하는 일:</strong> {risk.what}
      </p>
      {risk.undo && (
        <p className="text-stone-600">
          🔙 <strong>되돌리는 방법:</strong> {risk.undo}
        </p>
      )}
    </div>
  );
}

function Accordion({
  title,
  open,
  onToggle,
  children,
}: {
  title: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl bg-white border border-rose-200 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full text-left px-4 py-3 font-semibold text-stone-800 hover:bg-rose-50 flex justify-between items-center gap-2 transition-colors"
      >
        <span>❓ {title}</span>
        <span
          className={`text-stone-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          ▼
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-4 pb-4 pt-1 border-t border-rose-100">{children}</div>
        </div>
      </div>
    </div>
  );
}

function StuckPanel({ stuck }: { stuck: StuckPoint[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="anim-fade-up mt-4 rounded-2xl border-2 border-rose-200 bg-rose-50/60 p-4 space-y-2">
      <p className="font-bold text-rose-900 text-lg">😢 막혔군요. 괜찮아요, 같이 해결해요.</p>
      <p className="text-[15px] text-rose-800 mb-2">아래에서 지금 상황과 비슷한 것을 눌러 보세요.</p>
      {stuck.map((s, i) => (
        <Accordion key={i} title={s.symptom} open={open === i} onToggle={() => setOpen(open === i ? null : i)}>
          <Blocks blocks={s.solution} />
        </Accordion>
      ))}
      <Accordion
        title="여기에 없는 문제예요"
        open={open === -1}
        onToggle={() => setOpen(open === -1 ? null : -1)}
      >
        <Blocks
          blocks={[
            {
              type: "p",
              text: "그럴 땐 AI에게 직접 물어보는 게 가장 빠릅니다. 지금 보이는 화면의 문구나 오류 메시지를 마우스로 드래그해 복사(Ctrl+C)한 다음, Claude에게 붙여넣고(Ctrl+V) 이렇게 물어보세요.",
            },
            {
              type: "copy",
              label: "Claude에게 물어볼 말 (복사한 메시지 뒤에 붙이세요)",
              text: "위 내용은 지금 내 화면에 나온 거야. 나는 코딩을 모르는 초보야. 무슨 상황이고 어떻게 하면 되는지 아주 쉬운 한국어로, 한 단계씩 알려줘.",
            },
            {
              type: "tip",
              text: "스스로 AI에게 질문해서 해결하는 것 — 사실 이게 바이브 코딩의 가장 중요한 기술입니다. 지금 그걸 연습할 기회를 만난 거예요.",
            },
          ]}
        />
      </Accordion>
    </div>
  );
}

/** 챕터 완료 시 폭죽 효과 */
function fireConfetti(big: boolean) {
  const base = { spread: 70, ticks: 220, gravity: 0.9, scalar: 1.05, zIndex: 50 };
  confetti({ ...base, particleCount: big ? 160 : 90, origin: { y: 0.7 } });
  if (big) {
    setTimeout(() => confetti({ ...base, particleCount: 80, angle: 60, origin: { x: 0, y: 0.8 } }), 250);
    setTimeout(() => confetti({ ...base, particleCount: 80, angle: 120, origin: { x: 1, y: 0.8 } }), 450);
  }
}

export function StepPlayer({ chapter }: { chapter: Chapter }) {
  const [idx, setIdx] = useState(0);
  const [showStuck, setShowStuck] = useState(false);
  const [finished, setFinished] = useState(false);
  const [ready, setReady] = useState(false);

  // 저장된 진행 상황에서 이어하기
  useEffect(() => {
    const done = chapterDoneSteps(loadProgress(), chapter.slug);
    if (done >= chapter.steps.length) {
      setIdx(chapter.steps.length - 1);
    } else {
      setIdx(done);
    }
    setReady(true);
  }, [chapter]);

  useEffect(() => {
    setShowStuck(false);
    window.scrollTo({ top: 0 });
  }, [idx, finished]);

  const nextChapter = chapters.find((c) => c.number === chapter.number + 1);
  const isGraduation = finished && !nextChapter;

  // 완료 화면이 뜨면 폭죽
  useEffect(() => {
    if (finished) fireConfetti(isGraduation);
  }, [finished, isGraduation]);

  if (!ready) {
    return <div className="py-24 text-center text-stone-400">불러오는 중…</div>;
  }

  const step = chapter.steps[idx];
  const isLast = idx === chapter.steps.length - 1;

  function goNext() {
    saveStepDone(chapter.slug, idx + 1);
    if (isLast) {
      setFinished(true);
    } else {
      setIdx(idx + 1);
    }
  }

  if (finished) {
    return (
      <div className="text-center py-12 space-y-6">
        <div className="anim-pop text-7xl">{isGraduation ? "🎓" : "🎉"}</div>
        <h2 className="anim-fade-up text-2xl font-extrabold text-stone-900" style={{ animationDelay: "120ms" }}>
          {isGraduation
            ? "졸업을 축하합니다! 당신은 이제 바이브 코더예요."
            : `챕터 ${chapter.number} 완료! 잘하고 있어요.`}
        </h2>
        <p className="anim-fade-up text-stone-600" style={{ animationDelay: "220ms" }}>
          {isGraduation
            ? "막히면 언제든 이 가이드로 돌아오세요. 진행 기록은 그대로 남아 있어요."
            : "진행 상황이 저장됐어요. 지금 이어서 해도 되고, 쉬었다가 와도 됩니다."}
        </p>
        <div className="anim-fade-up flex flex-col sm:flex-row gap-3 justify-center" style={{ animationDelay: "320ms" }}>
          {nextChapter && (
            <Link
              href={`/guide/${nextChapter.slug}`}
              className="shine-host rounded-full bg-[#1d1c1b] hover:bg-black text-white font-bold text-lg px-8 py-4 btn-press shadow-sm"
            >
              다음: 챕터 {nextChapter.number}. {nextChapter.title} →
            </Link>
          )}
          <Link
            href="/"
            className="rounded-full bg-[#f2f0ed] hover:bg-[#e9e6e2] text-[#343433] font-bold text-lg px-8 py-4 btn-press"
          >
            전체 목차로
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {/* 챕터 안의 단계 진행 표시 */}
      <div className="flex items-center gap-2">
        {chapter.steps.map((s, i) => (
          <div
            key={s.id}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              i < idx
                ? "bg-[#2ec77f] flex-1"
                : i === idx
                ? "bg-[#1d1c1b] flex-[2]"
                : "bg-stone-200 flex-1"
            }`}
          />
        ))}
      </div>
      <p className="text-[15px] text-stone-500">
        챕터 {chapter.number} · {idx + 1} / {chapter.steps.length} 단계
      </p>

      {/* key={idx} — 단계가 바뀔 때마다 부드럽게 등장 */}
      <div key={idx} className="anim-fade-up rounded-3xl bg-white border border-stone-200/80 shadow-sm p-6 sm:p-8 space-y-5">
        <h2 className="text-2xl font-extrabold text-stone-900 leading-snug">{step.title}</h2>
        {step.risk && <RiskBadge risk={step.risk} />}
        <Blocks blocks={step.blocks} />

        {/* 확인 질문 또는 다음 버튼 */}
        <div className="pt-2 border-t border-stone-100">
          {step.checkpoint ? (
            <div className="space-y-3 pt-3">
              <p className="font-bold text-lg text-stone-900">✋ {step.checkpoint.question}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={goNext}
                  className="shine-host flex-1 rounded-full bg-[#1d1c1b] hover:bg-black text-white font-bold text-lg px-6 py-4 btn-press shadow-sm"
                >
                  ✅ 네! 다음으로
                </button>
                <button
                  onClick={() => setShowStuck(!showStuck)}
                  className="flex-1 rounded-full bg-white border-2 border-rose-300 text-rose-600 hover:bg-rose-50 font-bold text-lg px-6 py-4 btn-press"
                >
                  😢 막혔어요
                </button>
              </div>
              {showStuck && <StuckPanel stuck={step.checkpoint.stuck} />}
            </div>
          ) : (
            <div className="pt-3">
              <button
                onClick={goNext}
                className="shine-host w-full rounded-full bg-[#1d1c1b] hover:bg-black text-white font-bold text-lg px-6 py-4 btn-press shadow-sm"
              >
                {isLast ? "✅ 이 챕터 끝내기" : "다음 단계 →"}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 이전으로 */}
      <div className="flex justify-between text-[15px]">
        {idx > 0 ? (
          <button onClick={() => setIdx(idx - 1)} className="text-stone-500 hover:text-stone-800 font-semibold transition-colors">
            ← 이전 단계 다시 보기
          </button>
        ) : (
          <span />
        )}
        <Link href="/" className="text-stone-400 hover:text-stone-700 transition-colors">
          목차로 나가기 (저장돼요)
        </Link>
      </div>
    </div>
  );
}
