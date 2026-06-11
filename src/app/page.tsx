import Link from "next/link";
import { ChapterList } from "@/components/ChapterList";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* 히어로 */}
      <section className="relative text-center space-y-5 pt-8 pb-2">
        {/* 배경 장식 — 은은하게 떠다니는 빛 덩어리 */}
        <div aria-hidden className="absolute inset-0 -z-10 overflow-visible pointer-events-none">
          <div className="anim-blob absolute -top-16 left-1/2 -translate-x-1/2 w-[480px] h-[300px] rounded-full bg-gradient-to-tr from-amber-200/60 via-orange-100/50 to-rose-100/60 blur-3xl" />
          <div className="anim-float-slow absolute top-6 left-[6%] text-3xl opacity-80">✨</div>
          <div className="anim-float absolute top-24 right-[8%] text-3xl opacity-80">🚀</div>
          <div className="anim-float-slow absolute -bottom-2 left-[14%] text-2xl opacity-60">💛</div>
        </div>

        <div className="anim-fade-up">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-amber-200 shadow-sm shadow-amber-100 px-4 py-1.5 text-[14px] font-bold text-amber-700">
            🌱 왕초보 전용 · 단계별 검증 가이드
          </span>
        </div>

        <h1 className="anim-fade-up text-3xl sm:text-[2.6rem] font-extrabold text-stone-900 leading-tight" style={{ animationDelay: "80ms" }}>
          코딩 1도 몰라도,
          <br />
          2시간 뒤엔{" "}
          <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
            내 웹페이지
          </span>
          가 인터넷에
        </h1>

        <p className="anim-fade-up text-stone-600 leading-relaxed max-w-xl mx-auto" style={{ animationDelay: "160ms" }}>
          영어도, 컴퓨터도 자신 없으셔도 괜찮아요. 화면 그림을 보며 한 단계씩
          따라 하면, 오늘 안에 나만의 자기소개 페이지를 전 세계에 공개할 수
          있습니다.
        </p>

        <div className="anim-fade-up" style={{ animationDelay: "240ms" }}>
          <Link
            href="/demo"
            className="inline-flex items-center gap-1.5 text-amber-700 font-bold bg-white border-2 border-amber-200 hover:border-amber-400 rounded-full px-5 py-2.5 btn-press shadow-sm"
          >
            👀 완성품 미리 구경하기 →
          </Link>
        </div>
      </section>

      {/* 안심 3종 */}
      <section className="grid sm:grid-cols-3 gap-3">
        {[
          { icon: "🖥️", title: "컴퓨터 안 망가져요", desc: "설치하는 프로그램은 단 1개. 언제든 3초 만에 지울 수 있어요." },
          { icon: "🛡️", title: "해킹 걱정 없어요", desc: "공식 사이트만 안내하고, 안전한지 확인하는 습관까지 알려드려요." },
          { icon: "🙋", title: "막혀도 괜찮아요", desc: "단계마다 '막혔어요' 버튼이 있어요. 해결책을 미리 다 준비해 뒀어요." },
        ].map((c, i) => (
          <Reveal key={c.title} delay={i * 110}>
            <div className="h-full rounded-3xl bg-white border border-stone-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-6 text-center">
              <div className="text-4xl mb-3 inline-block anim-float-slow" style={{ animationDelay: `${i * 700}ms` }}>
                {c.icon}
              </div>
              <p className="font-bold text-stone-900 mb-1.5">{c.title}</p>
              <p className="text-[15px] text-stone-500 leading-relaxed">{c.desc}</p>
            </div>
          </Reveal>
        ))}
      </section>

      {/* 여정 한눈에 보기 */}
      <Reveal>
        <section className="rounded-3xl bg-gradient-to-br from-white to-amber-50/60 border border-amber-100 p-6 sm:p-7">
          <p className="font-bold text-stone-900 mb-4 text-center">오늘의 여정 한눈에 보기</p>
          <div className="flex items-center justify-between gap-1 text-center">
            {[
              { icon: "🤝", label: "계정 만들기" },
              { icon: "💻", label: "앱 설치" },
              { icon: "🎨", label: "페이지 제작" },
              { icon: "📦", label: "작품 올리기" },
              { icon: "🌍", label: "세상에 공개" },
            ].map((s, i, arr) => (
              <div key={s.label} className="contents">
                <div className="flex flex-col items-center gap-1.5 min-w-0">
                  <span className="w-12 h-12 rounded-2xl bg-white border border-amber-200 shadow-sm flex items-center justify-center text-xl">
                    {s.icon}
                  </span>
                  <span className="text-[12.5px] font-semibold text-stone-600 whitespace-nowrap">{s.label}</span>
                </div>
                {i < arr.length - 1 && (
                  <span className="flex-1 h-0.5 rounded bg-gradient-to-r from-amber-200 to-orange-200 mb-5" />
                )}
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* 시작/이어하기 + 챕터 목록 */}
      <section>
        <Reveal>
          <h2 className="text-xl font-extrabold text-stone-900 mb-4">전체 여정 — 8개 챕터, 약 95분</h2>
        </Reveal>
        <ChapterList />
      </section>

      {/* 채널 연계 (src/lib/site.ts에 주소를 넣으면 표시됨) */}
      {site.youtubeChannelUrl && (
        <Reveal>
          <section className="rounded-3xl bg-stone-900 text-white p-7 text-center space-y-3 shadow-lg">
            <p className="font-bold text-lg">영상으로 같이 보면 더 쉬워요</p>
            <a
              href={site.youtubeChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-2xl bg-red-600 hover:bg-red-500 font-bold px-6 py-3 btn-press"
            >
              ▶ {site.youtubeChannelName || "유튜브 채널"} 보러 가기
            </a>
          </section>
        </Reveal>
      )}
    </div>
  );
}
