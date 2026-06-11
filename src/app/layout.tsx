import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        {/* 한국어 고품질 웹폰트 Pretendard — 필요한 글자만 내려받는 동적 서브셋 */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <header className="border-b border-amber-100 bg-white/70 backdrop-blur-md sticky top-0 z-20">
          <div className="max-w-3xl mx-auto px-5 py-3.5 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-extrabold text-lg text-stone-900 group">
              <span className="inline-flex w-9 h-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-sm shadow-amber-200 text-base group-hover:scale-110 transition-transform">
                🐣
              </span>
              <span>
                {site.name.slice(0, site.name.length)}
              </span>
            </Link>
            <span className="text-[14px] font-semibold text-amber-700/70 bg-amber-50 border border-amber-100 rounded-full px-3.5 py-1.5 hidden sm:block">
              코딩 1도 몰라도 괜찮아요
            </span>
          </div>
        </header>
        <main className="flex-1 w-full max-w-3xl mx-auto px-5 py-8">{children}</main>
        <footer className="border-t border-stone-100 bg-white">
          <div className="max-w-3xl mx-auto px-5 py-7 space-y-3">
            <div className="flex flex-wrap gap-2">
              {[
                "🔒 공식 사이트만 안내해요",
                "🙅 비밀번호를 절대 묻지 않아요",
                "💾 진행 상황은 내 브라우저에만 저장돼요",
              ].map((t) => (
                <span
                  key={t}
                  className="text-[13px] font-semibold text-stone-500 bg-stone-50 border border-stone-200 rounded-full px-3 py-1.5"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="text-[14px] text-stone-400">
              이 가이드가 안내하는 곳: claude.ai · github.com · vercel.com — 전부 수백만 명이 쓰는 공식 서비스입니다.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
