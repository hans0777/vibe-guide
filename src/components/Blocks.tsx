"use client";

import { useState } from "react";
import Link from "next/link";
import type { Block } from "@/lib/content/types";

function CopyBox({ label, text, note }: { label: string; text: string; note?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // 클립보드 권한이 없는 환경 대비 — 구식 방법으로 한 번 더 시도
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  return (
    <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 overflow-hidden">
      <div className="flex items-center justify-between gap-3 px-4 py-2.5 bg-amber-100/70">
        <span className="font-bold text-amber-900 text-[15px]">📋 {label}</span>
        <button
          onClick={copy}
          className={`shrink-0 rounded-xl px-4 py-2 font-bold text-[15px] transition-colors ${
            copied
              ? "bg-green-600 text-white"
              : "bg-amber-500 text-white hover:bg-amber-600"
          }`}
        >
          {copied ? "✅ 복사됐어요!" : "복사하기"}
        </button>
      </div>
      <pre className="px-4 py-3 whitespace-pre-wrap break-words font-sans text-[17px] leading-relaxed text-stone-800">
        {text}
      </pre>
      {note && (
        <p className="px-4 pb-3 text-[15px] text-amber-800">👉 {note}</p>
      )}
    </div>
  );
}

function Shot({ captureId, caption }: { captureId: string; caption: string }) {
  const [missing, setMissing] = useState(false);

  if (missing) {
    return (
      <figure className="rounded-2xl border-2 border-dashed border-stone-300 bg-stone-50 px-5 py-8 text-center">
        <div className="text-4xl mb-2">🖼️</div>
        <figcaption className="font-semibold text-stone-600">{caption}</figcaption>
        <p className="mt-1 text-sm text-stone-400">화면 그림 준비 중 ({captureId})</p>
      </figure>
    );
  }
  return (
    <figure className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/shots/${captureId}.png`}
        alt={caption}
        className="w-full"
        onError={() => setMissing(true)}
      />
      <figcaption className="px-4 py-2.5 bg-stone-100 text-[15px] text-stone-600">
        {caption}
      </figcaption>
    </figure>
  );
}

function Callout({
  tone,
  text,
}: {
  tone: "tip" | "safe" | "warn";
  text: string;
}) {
  const styles = {
    tip: { box: "bg-sky-50 border-sky-200", icon: "💡", label: "알아두면 좋아요", labelColor: "text-sky-800" },
    safe: { box: "bg-emerald-50 border-emerald-200", icon: "🛡️", label: "안심하세요", labelColor: "text-emerald-800" },
    warn: { box: "bg-orange-50 border-orange-300", icon: "⚠️", label: "미리 알아두세요", labelColor: "text-orange-800" },
  }[tone];

  return (
    <div className={`rounded-2xl border-2 px-4 py-3.5 ${styles.box}`}>
      <p className={`font-bold text-[15px] mb-1 ${styles.labelColor}`}>
        {styles.icon} {styles.label}
      </p>
      <p className="text-stone-700 leading-relaxed">{text}</p>
    </div>
  );
}

function BigLink({ href, label, urlCheck }: { href: string; label: string; urlCheck?: string }) {
  const isExternal = href.startsWith("http");
  const inner = (
    <span className="block rounded-2xl bg-stone-800 hover:bg-stone-700 text-white text-center font-bold text-lg px-6 py-4 transition-colors">
      {label} {isExternal ? "↗" : "→"}
    </span>
  );
  return (
    <div className="space-y-2">
      {isExternal ? (
        <a href={href} target="_blank" rel="noopener noreferrer">{inner}</a>
      ) : (
        <Link href={href} target="_blank">{inner}</Link>
      )}
      {urlCheck && (
        <p className="text-center text-[15px] text-stone-500">
          🔍 열린 화면의 주소창에 <strong className="text-stone-700">{urlCheck}</strong> 가 있는지 확인하세요
        </p>
      )}
    </div>
  );
}

function VideoSlot({ youtubeId, title }: { youtubeId?: string; title: string }) {
  if (!youtubeId) return null; // 영상이 준비되면 youtubeId만 넣으면 나타납니다
  return (
    <figure className="rounded-2xl overflow-hidden border border-stone-200">
      <div className="aspect-video">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          allowFullScreen
        />
      </div>
      <figcaption className="px-4 py-2.5 bg-stone-100 text-[15px] text-stone-600">▶️ {title}</figcaption>
    </figure>
  );
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-4">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "p":
            return (
              <p key={i} className="text-stone-800 leading-[1.8]">
                {b.text}
              </p>
            );
          case "list":
            return b.ordered ? (
              <ol key={i} className="space-y-2.5 my-2">
                {b.items.map((item, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="shrink-0 w-7 h-7 rounded-full bg-amber-500 text-white font-bold text-[15px] flex items-center justify-center mt-0.5">
                      {j + 1}
                    </span>
                    <span className="text-stone-800 leading-[1.7]">{item}</span>
                  </li>
                ))}
              </ol>
            ) : (
              <ul key={i} className="space-y-2 my-2">
                {b.items.map((item, j) => (
                  <li key={j} className="flex gap-2.5">
                    <span className="shrink-0 text-amber-500 font-bold">•</span>
                    <span className="text-stone-800 leading-[1.7]">{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "copy":
            return <CopyBox key={i} label={b.label} text={b.text} note={b.note} />;
          case "shot":
            return <Shot key={i} captureId={b.captureId} caption={b.caption} />;
          case "tip":
          case "safe":
          case "warn":
            return <Callout key={i} tone={b.type} text={b.text} />;
          case "link":
            return <BigLink key={i} href={b.href} label={b.label} urlCheck={b.urlCheck} />;
          case "video":
            return <VideoSlot key={i} youtubeId={b.youtubeId} title={b.title} />;
        }
      })}
    </div>
  );
}
