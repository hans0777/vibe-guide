"use client";

import { useState } from "react";

const items: { q: string; a: string }[] = [
  {
    q: "정말 코딩을 1도 몰라도 되나요?",
    a: "네. 이 가이드에서 여러분이 하는 일은 화면 그림과 똑같이 따라 누르기, 준비된 문장 복사해서 붙여넣기 — 단 두 가지입니다. 코드는 AI가 대신 작성해요.",
  },
  {
    q: "돈이 드나요?",
    a: "AI 비서(Claude Pro) 구독료 월 $20(약 3만 원)만 들어요. 나머지 — GitHub, Vercel, 그리고 이 가이드 — 는 전부 무료입니다. 구독은 언제든 클릭 두 번으로 해지할 수 있어요.",
  },
  {
    q: "컴퓨터가 망가지지 않을까요?",
    a: "망가지지 않아요. 전체 과정에서 설치하는 프로그램은 단 1개(Claude 앱)이고, 윈도우 설정 > 앱에서 3초 만에 완전히 지울 수 있습니다. 컴퓨터의 다른 파일은 전혀 건드리지 않아요.",
  },
  {
    q: "막히면 어떻게 하나요?",
    a: "모든 단계에 '😢 막혔어요' 버튼이 있어요. 누르면 그 단계에서 자주 막히는 상황별 해결책이 바로 나옵니다. 거기에도 없는 문제라면, AI에게 직접 물어보는 방법까지 알려드려요.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-stone-200/80">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center gap-4 py-5 text-left group"
          >
            <span
              className={`shrink-0 text-[#ff5310] text-2xl font-light leading-none transition-transform duration-300 ${
                open === i ? "rotate-45" : ""
              }`}
            >
              +
            </span>
            <span className="font-semibold text-[#343433] text-lg group-hover:text-black transition-colors">
              {item.q}
            </span>
          </button>
          <div
            className={`grid transition-all duration-300 ease-out ${
              open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="pb-6 pl-10 pr-2 text-stone-600 leading-relaxed">{item.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
