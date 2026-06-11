import Link from "next/link";
import { ChapterList } from "@/components/ChapterList";
import { Reveal } from "@/components/Reveal";
import { FAQ } from "@/components/FAQ";
import {
  CloudBuddy,
  GreenBuddy,
  RedBuddy,
  Flower,
  Star,
  Sparkle,
  Heart,
  Coin,
  CursorArrow,
} from "@/components/Doodles";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <div>
      {/* ───────── 히어로 ───────── */}
      <section className="relative max-w-7xl mx-auto px-5 pt-16 pb-24 sm:pt-24 sm:pb-32">
        {/* 왼쪽 일러스트 무리 */}
        <div aria-hidden className="hidden lg:block absolute left-0 top-8 w-[300px] h-[420px] pointer-events-none">
          <Flower className="anim-float-slow absolute left-0 top-10 w-20" />
          <Star className="anim-float absolute left-36 top-0 w-10" />
          <CloudBuddy className="anim-float absolute left-16 top-28 w-44" />
          <Heart className="anim-float-slow absolute left-56 top-20 w-12" />
          <Coin className="anim-float absolute left-2 top-64 w-12" />
          <Sparkle className="anim-wiggle absolute left-52 top-72 w-8" />
          <Star className="anim-float-slow absolute left-24 top-80 w-9" />
        </div>
        {/* 오른쪽 일러스트 무리 */}
        <div aria-hidden className="hidden lg:block absolute right-0 top-8 w-[300px] h-[420px] pointer-events-none">
          <GreenBuddy className="anim-float absolute right-44 top-6 w-32" />
          <RedBuddy className="anim-float-slow absolute right-4 top-24 w-32" />
          <Flower petal="#6FC3FF" center="#FFD66E" className="anim-float-slow absolute right-2 top-2 w-14" />
          <CursorArrow className="anim-float absolute right-56 top-52 w-12" />
          <Coin className="anim-float-slow absolute right-40 top-72 w-12" />
          <Star className="anim-wiggle absolute right-10 top-64 w-10" />
          <Sparkle className="anim-float absolute right-64 top-0 w-7" color="#FFB13C" />
        </div>

        <div className="relative max-w-2xl mx-auto text-center space-y-6">
          <h1 className="anim-fade-up text-[2.7rem] leading-[1.12] sm:text-6xl font-extrabold tracking-tight text-[#343433]">
            나의 첫 웹페이지,
            <br />
            오늘 만들 수 있어요.
          </h1>
          <p className="anim-fade-up text-lg text-stone-500 leading-relaxed max-w-md mx-auto" style={{ animationDelay: "100ms" }}>
            코딩 1도 몰라도 괜찮아요. 화면 그림을 따라 2시간이면, 내가 만든
            자기소개 페이지가 전 세계에 공개됩니다.
          </p>
          <div className="anim-fade-up flex flex-wrap justify-center gap-3 pt-2" style={{ animationDelay: "200ms" }}>
            <Link
              href="/guide/0"
              className="rounded-full bg-[#1d1c1b] hover:bg-black text-white font-bold text-[17px] px-7 py-4 btn-press shadow-sm"
            >
              ▶ &nbsp;무료로 시작하기
            </Link>
            <Link
              href="/demo"
              className="rounded-full bg-[#f2f0ed] hover:bg-[#e9e6e2] text-[#343433] font-bold text-[17px] px-7 py-4 btn-press"
            >
              완성품 미리보기
            </Link>
          </div>
          <p className="anim-fade-up text-[14px] text-stone-400" style={{ animationDelay: "280ms" }}>
            8개 챕터 · 약 95분 · 진행 상황 자동 저장
          </p>
        </div>
      </section>

      {/* ───────── 특징 카드 그리드 ───────── */}
      <section className="max-w-6xl mx-auto px-5 pb-24">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#343433] text-center mb-12">
            완전히 새로운 방식의 시작.
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* 쉬워요 */}
          <Reveal>
            <div className="h-full rounded-3xl bg-[#f7f5f2] overflow-hidden hover:-translate-y-1 transition-transform duration-300">
              <div className="h-48 flex items-center justify-center px-8 pt-8">
                <div className="w-full max-w-[240px] rounded-2xl bg-[#1d1c1b] p-2 shadow-lg space-y-1">
                  {[
                    { icon: "💬", bg: "bg-blue-500", t: "말로 시키기", s: "한국어로 부탁하면 끝" },
                    { icon: "📋", bg: "bg-green-500", t: "복사-붙여넣기", s: "준비된 문장을 그대로" },
                    { icon: "🖼️", bg: "bg-pink-500", t: "그림 따라하기", s: "화면과 똑같이 누르기" },
                  ].map((r) => (
                    <div key={r.t} className="flex items-center gap-2.5 rounded-xl px-3 py-2">
                      <span className={`w-7 h-7 rounded-full ${r.bg} flex items-center justify-center text-[13px]`}>{r.icon}</span>
                      <span className="min-w-0">
                        <span className="block text-white text-[13.5px] font-bold leading-tight">{r.t}</span>
                        <span className="block text-stone-400 text-[11.5px] leading-tight">{r.s}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-7 py-6">
                <p className="font-bold text-[#343433]">쉬워요</p>
                <p className="text-[15px] text-stone-500 mt-1 leading-relaxed">따라 누르고, 붙여넣기만 하세요. 코드는 AI가 씁니다.</p>
              </div>
            </div>
          </Reveal>

          {/* 안전해요 */}
          <Reveal delay={80}>
            <div className="h-full rounded-3xl bg-[#f7f5f2] overflow-hidden hover:-translate-y-1 transition-transform duration-300">
              <div className="h-48 flex items-center justify-center">
                <span className="rounded-full border-[3px] border-[#2ec77f]/40 p-1.5">
                  <span className="flex items-center gap-2 rounded-full border-2 border-[#2ec77f] bg-white px-6 py-3 text-[#16a35f] font-bold text-lg">
                    <span className="w-4 h-4 rounded-full border-[3px] border-[#2ec77f] border-t-transparent inline-block anim-wiggle" />
                    안전 확인 중
                  </span>
                </span>
              </div>
              <div className="px-7 py-6">
                <p className="font-bold text-[#343433]">안전해요</p>
                <p className="text-[15px] text-stone-500 mt-1 leading-relaxed">공식 사이트만 안내하고, 모든 단계에 되돌리는 법이 있어요.</p>
              </div>
            </div>
          </Reveal>

          {/* 빨라요 */}
          <Reveal delay={160}>
            <div className="h-full rounded-3xl bg-[#f7f5f2] overflow-hidden hover:-translate-y-1 transition-transform duration-300">
              <div className="h-48 flex items-center justify-center px-8">
                <div className="w-full max-w-[240px] rounded-2xl bg-white shadow-sm p-4">
                  {[
                    { label: "페이지 제작", state: "done", time: "20분" },
                    { label: "인터넷 공개", state: "now", time: "15분" },
                    { label: "자랑하기", state: "todo", time: "" },
                  ].map((r, i, arr) => (
                    <div key={r.label} className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <span
                          className={`w-4 h-4 rounded-full border-[3px] ${
                            r.state === "done"
                              ? "bg-[#3784f4] border-[#3784f4]"
                              : r.state === "now"
                              ? "border-[#3784f4] bg-white"
                              : "border-stone-300 bg-white"
                          }`}
                        />
                        {i < arr.length - 1 && <span className="w-0.5 flex-1 bg-stone-200 my-0.5" />}
                      </div>
                      <div className="flex-1 flex justify-between pb-3">
                        <span className={`text-[14px] font-bold ${r.state === "todo" ? "text-stone-400" : "text-[#3784f4]"}`}>{r.label}</span>
                        <span className="text-[13px] text-stone-400">{r.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-7 py-6">
                <p className="font-bold text-[#343433]">빨라요</p>
                <p className="text-[15px] text-stone-500 mt-1 leading-relaxed">긴 강의 없이, 오늘 안에 결과물이 나옵니다.</p>
              </div>
            </div>
          </Reveal>

          {/* 막혀도 괜찮아요 */}
          <Reveal>
            <div className="h-full rounded-3xl bg-[#f7f5f2] overflow-hidden hover:-translate-y-1 transition-transform duration-300">
              <div className="h-48 flex flex-col items-center justify-center gap-3">
                <span className="rounded-2xl bg-white border-2 border-rose-300 text-rose-600 font-bold px-7 py-3.5 shadow-sm">😢 막혔어요</span>
                <span className="text-[13px] text-stone-400">누르면 해결책이 바로 나와요</span>
              </div>
              <div className="px-7 py-6">
                <p className="font-bold text-[#343433]">막혀도 괜찮아요</p>
                <p className="text-[15px] text-stone-500 mt-1 leading-relaxed">자주 막히는 지점의 해결책을 미리 다 준비해 뒀어요.</p>
              </div>
            </div>
          </Reveal>

          {/* 합리적이에요 */}
          <Reveal delay={80}>
            <div className="h-full rounded-3xl bg-[#f7f5f2] overflow-hidden hover:-translate-y-1 transition-transform duration-300">
              <div className="h-48 flex items-center justify-center">
                <div className="flex items-center">
                  <Coin className="w-16 anim-float" />
                  <Coin className="w-16 -ml-5 anim-float-slow" />
                  <span className="ml-4 text-2xl font-extrabold text-[#343433]">
                    월 3만원<span className="block text-[13px] font-semibold text-stone-400">AI 비서 고용 비용</span>
                  </span>
                </div>
              </div>
              <div className="px-7 py-6">
                <p className="font-bold text-[#343433]">합리적이에요</p>
                <p className="text-[15px] text-stone-500 mt-1 leading-relaxed">가이드·GitHub·Vercel은 무료. AI 구독만 있으면 돼요.</p>
              </div>
            </div>
          </Reveal>

          {/* 재밌어요 */}
          <Reveal delay={160}>
            <div className="h-full rounded-3xl bg-[#f7f5f2] overflow-hidden hover:-translate-y-1 transition-transform duration-300">
              <div className="h-48 flex items-center justify-center gap-3">
                {[
                  { e: "🎉", bg: "bg-[#56B4FF]" },
                  { e: "🚀", bg: "bg-[#FF6249]" },
                  { e: "🤖", bg: "bg-[#FFBE4C]" },
                ].map((c, i) => (
                  <span
                    key={c.e}
                    className={`w-16 h-16 rounded-full ${c.bg} flex items-center justify-center text-3xl anim-float shadow-sm`}
                    style={{ animationDelay: `${i * 500}ms` }}
                  >
                    {c.e}
                  </span>
                ))}
              </div>
              <div className="px-7 py-6">
                <p className="font-bold text-[#343433]">재밌어요</p>
                <p className="text-[15px] text-stone-500 mt-1 leading-relaxed">챕터를 끝낼 때마다 폭죽이 터져요. 작은 성공의 연속.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────── 여정 + 챕터 목록 ───────── */}
      <section className="max-w-3xl mx-auto px-5 pb-24">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#343433] text-center mb-3">
            설치부터 공개까지.
            <br />
            전부 한곳에서.
          </h2>
          <p className="text-center text-stone-500 mb-10">8개 챕터, 약 95분. 중간에 쉬어도 이어집니다.</p>
        </Reveal>
        <ChapterList />
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="max-w-6xl mx-auto px-5 pb-24">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-16">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#343433]">
              자주 묻는
              <br />
              질문
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <FAQ />
          </Reveal>
        </div>
      </section>

      {/* ───────── 마무리 CTA ───────── */}
      <section className="bg-[#f7f5f2]">
        <div className="max-w-6xl mx-auto px-5 py-16 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#343433]">{site.name}</h2>
              <p className="text-stone-500 leading-relaxed max-w-md">
                {site.name}은 코딩을 전혀 모르는 분을 위해 만들어진 바이브 코딩
                시작 가이드입니다. 겁먹지 않아도 되도록, 한 단계씩 함께합니다.
              </p>
              <div className="flex flex-wrap items-center gap-5 pt-1">
                <Link href="/guide/0" className="font-bold text-[#3784f4] hover:text-[#2b6fd6] transition-colors">
                  지금 시작하기 →
                </Link>
                {site.youtubeChannelUrl && (
                  <a
                    href={site.youtubeChannelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#ff5310] hover:text-[#e04200] transition-colors"
                  >
                    ▶ 유튜브로 같이 보기 →
                  </a>
                )}
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div aria-hidden className="relative h-44 sm:h-52">
              <Flower className="anim-float-slow absolute left-[8%] bottom-6 w-20" />
              <Flower petal="#6FC3FF" center="#FFD66E" className="anim-float absolute left-[26%] bottom-2 w-12" />
              <GreenBuddy className="anim-float absolute left-[40%] bottom-4 w-28" />
              <Sparkle className="anim-wiggle absolute left-[62%] top-2 w-8" />
              <CloudBuddy className="anim-float-slow absolute right-[6%] bottom-2 w-36" />
              <Star className="anim-float absolute right-[2%] top-0 w-9" />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
