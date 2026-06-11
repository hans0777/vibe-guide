import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { DemoProfilePhoto } from "@/components/DemoProfilePhoto";
import { Sparkle, Star } from "@/components/Doodles";

export const metadata = {
  title: "완성품 미리보기 — 실행연구소 소장",
};

// 가이드를 끝내면 만들 수 있는 자기소개 페이지의 예시입니다.
const businesses = [
  {
    icon: "🎓",
    chip: "사업 1 · 교육",
    name: "실행 아카데미",
    desc: "생각만 하다 멈춘 사람들을 다시 움직이게 만드는 실행력 강의와 워크숍. 계획 세우는 법이 아니라, 오늘 시작하는 법을 가르칩니다.",
  },
  {
    icon: "🎥",
    chip: "사업 2 · 콘텐츠",
    name: "실행 기록",
    desc: "매주 직접 실행해 본 것들을 영상과 글로 기록합니다. 성공담보다 시행착오를 더 솔직하게 나누는 콘텐츠 채널.",
  },
  {
    icon: "🤝",
    chip: "사업 3 · 컨설팅",
    name: "실행 파트너스",
    desc: "작은 사업의 첫걸음을 함께 설계하고 끝까지 동행하는 컨설팅. 보고서가 아니라 실행된 결과로 말합니다.",
  },
];

export default function DemoPage() {
  return (
    <div className="max-w-5xl mx-auto px-5 py-10 space-y-8">
      {/* 예시 안내 배너 */}
      <div className="rounded-2xl bg-[#fff8e8] border border-[#f5e3b0] px-5 py-4 text-center">
        <p className="text-[#8a6d1f]">
          👀 이건 <strong>예시</strong>예요. 가이드를 끝내면 이런 페이지가{" "}
          <strong>여러분의 이름으로, 여러분의 인터넷 주소에</strong> 생깁니다.
        </p>
        <Link href="/" className="inline-block mt-1.5 font-bold text-[#3784f4] underline underline-offset-4">
          ← 가이드로 돌아가기
        </Link>
      </div>

      {/* ───────── 예시 자기소개 페이지 ───────── */}
      <div className="rounded-[2rem] overflow-hidden border border-stone-200 shadow-xl bg-white">
        {/* 히어로 */}
        <div className="relative px-7 sm:px-12 pt-12 sm:pt-16 pb-12 grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
          <Sparkle className="anim-wiggle absolute right-[44%] top-8 w-6 hidden lg:block" />
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#1d1c1b] text-white text-[14px] font-bold px-4 py-2">
              ⚡ 실행연구소
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#343433] leading-[1.15]">
              실행이
              <br />
              답이다.
            </h2>
            <p className="text-lg text-stone-500 leading-relaxed max-w-md">
              안녕하세요, <strong className="text-[#343433]">실행연구소 소장</strong>입니다.
              완벽한 계획을 다듬는 시간에 어설프게라도 한 걸음 내딛는 것 —
              그게 제가 10년 동안 확인한 유일한 성공 공식입니다.
              지금은 그 믿음으로 세 가지 사업을 운영하고 있습니다.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <span className="rounded-full bg-[#1d1c1b] text-white font-bold px-6 py-3.5 cursor-default">
                ✉️ 연락하기
              </span>
              <a
                href="#business"
                className="rounded-full bg-[#f2f0ed] hover:bg-[#e9e6e2] text-[#343433] font-bold px-6 py-3.5 btn-press"
              >
                하는 일 보기 ↓
              </a>
            </div>
          </div>

          {/* 프로필 사진 */}
          <Reveal className="relative max-w-[340px] w-full mx-auto lg:mx-0">
            <DemoProfilePhoto />
            <span className="anim-float absolute -left-4 -bottom-4 rounded-2xl bg-white shadow-lg border border-stone-100 px-4 py-2.5 font-bold text-[#343433] text-[15px]">
              실행연구소 소장 👍
            </span>
            <Star className="anim-float-slow absolute -right-3 -top-3 w-9" />
          </Reveal>
        </div>

        {/* 숫자 스트립 */}
        <div className="border-y border-stone-100 bg-[#fbfaf8]">
          <div className="grid grid-cols-3 divide-x divide-stone-100 text-center">
            {[
              { n: "3", label: "운영 중인 사업" },
              { n: "1", label: "변하지 않는 철학" },
              { n: "오늘", label: "도 실행 중" },
            ].map((s) => (
              <div key={s.label} className="py-6">
                <p className="text-3xl font-extrabold text-[#343433]">{s.n}</p>
                <p className="text-[14px] text-stone-400 font-semibold mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3가지 사업 */}
        <div id="business" className="px-7 sm:px-12 py-14">
          <Reveal>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#343433] text-center mb-10">
              실행으로 굴러가는 세 가지 사업
            </h3>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-4">
            {businesses.map((b, i) => (
              <Reveal key={b.name} delay={i * 100}>
                <div className="h-full rounded-3xl bg-[#f7f5f2] p-7 hover:-translate-y-1 transition-transform duration-300">
                  <span className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-3xl mb-4">
                    {b.icon}
                  </span>
                  <p className="text-[12.5px] font-bold text-stone-400 tracking-wide uppercase">{b.chip}</p>
                  <p className="text-xl font-extrabold text-[#343433] mt-1 mb-2">{b.name}</p>
                  <p className="text-[15px] text-stone-500 leading-relaxed">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* 철학 인용 */}
        <div className="px-7 sm:px-12 pb-14">
          <Reveal>
            <blockquote className="rounded-3xl bg-[#1d1c1b] text-white px-8 sm:px-14 py-12 text-center relative overflow-hidden">
              <Sparkle className="absolute left-8 top-8 w-6 opacity-60" color="#FFD66E" />
              <Sparkle className="absolute right-10 bottom-8 w-5 opacity-60" color="#FFD66E" />
              <p className="text-2xl sm:text-3xl font-extrabold leading-snug tracking-tight">
                &ldquo;완벽한 계획보다
                <br />
                어설픈 실행이 낫다.&rdquo;
              </p>
              <footer className="mt-5 text-stone-400 font-semibold">— 실행연구소 소장</footer>
            </blockquote>
          </Reveal>
        </div>

        <div className="bg-[#fbfaf8] border-t border-stone-100 py-4 text-center text-[13px] text-stone-400">
          이 페이지는 코딩을 1도 모르던 소장님이 AI에게 말로 시켜서 만들었습니다 (예시)
        </div>
      </div>

      {/* 하단 CTA */}
      <div className="text-center space-y-3">
        <p className="text-stone-500 font-semibold">이런 페이지, 오늘 2시간이면 여러분 것이 됩니다.</p>
        <Link
          href="/guide/0"
          className="shine-host inline-block rounded-full bg-[#1d1c1b] hover:bg-black text-white font-extrabold text-xl px-10 py-4 btn-press shadow-sm"
        >
          나도 만들어 보기 →
        </Link>
      </div>
    </div>
  );
}
