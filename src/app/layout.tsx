import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { site } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

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
    <html lang="ko" className={`h-full antialiased ${inter.variable}`}>
      <head>
        {/* 한국어 고품질 웹폰트 Pretendard — 필요한 글자만 내려받는 동적 서브셋 */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <header className="bg-white/85 backdrop-blur-md sticky top-0 z-20">
          <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-bold text-[17px] text-[#343433] group">
              <span className="inline-flex w-8 h-8 items-center justify-center rounded-lg bg-[#343433] text-white text-sm group-hover:rotate-12 transition-transform">
                🐣
              </span>
              {site.name}
            </Link>
            <nav className="flex items-center gap-2.5">
              <Link
                href="/demo"
                className="rounded-full bg-[#f2f0ed] hover:bg-[#e9e6e2] text-[#343433] font-semibold text-[15px] px-4.5 py-2.5 btn-press hidden sm:block"
              >
                완성품 보기
              </Link>
              <Link
                href="/guide/0"
                className="rounded-full bg-[#1d1c1b] hover:bg-black text-white font-semibold text-[15px] px-5 py-2.5 btn-press"
              >
                시작하기
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1 w-full">{children}</main>
        <footer className="bg-white border-t border-stone-100">
          <div className="max-w-6xl mx-auto px-5 py-8 space-y-3">
            <div className="flex flex-wrap gap-2">
              {[
                "🔒 공식 사이트만 안내해요",
                "🙅 비밀번호를 절대 묻지 않아요",
                "💾 진행 상황은 내 브라우저에만 저장돼요",
              ].map((t) => (
                <span
                  key={t}
                  className="text-[13px] font-semibold text-stone-500 bg-[#f7f5f2] rounded-full px-3.5 py-1.5"
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
