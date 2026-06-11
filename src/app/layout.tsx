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
      <body className="min-h-full flex flex-col">
        <header className="border-b border-stone-200 bg-white/80 backdrop-blur sticky top-0 z-10">
          <div className="max-w-3xl mx-auto px-5 py-3.5 flex items-center justify-between">
            <Link href="/" className="font-extrabold text-lg text-stone-900">
              🐣 {site.name}
            </Link>
            <span className="text-[14px] text-stone-400 hidden sm:block">
              코딩 1도 몰라도 괜찮아요
            </span>
          </div>
        </header>
        <main className="flex-1 w-full max-w-3xl mx-auto px-5 py-8">{children}</main>
        <footer className="border-t border-stone-200 bg-white">
          <div className="max-w-3xl mx-auto px-5 py-6 text-[14px] text-stone-400 space-y-1">
            <p>
              이 가이드는 공식 사이트(claude.ai · github.com · vercel.com)만 안내하며,
              여러분의 비밀번호를 절대 묻지 않습니다.
            </p>
            <p>진행 상황은 여러분의 브라우저에만 저장됩니다.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
