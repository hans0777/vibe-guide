import Link from "next/link";
import { ChapterList } from "@/components/ChapterList";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <div className="space-y-10">
      {/* 히어로 */}
      <section className="text-center space-y-4 pt-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 leading-tight">
          코딩 1도 몰라도,
          <br />
          2시간 뒤엔 <span className="text-amber-500">내 웹페이지</span>가
          인터넷에
        </h1>
        <p className="text-stone-600 leading-relaxed max-w-xl mx-auto">
          영어도, 컴퓨터도 자신 없으셔도 괜찮아요. 화면 그림을 보며 한 단계씩
          따라 하면, 오늘 안에 나만의 자기소개 페이지를 전 세계에 공개할 수
          있습니다.
        </p>
        <p>
          <Link href="/demo" className="text-amber-600 font-bold underline underline-offset-4 hover:text-amber-700">
            완성품 미리 구경하기 →
          </Link>
        </p>
      </section>

      {/* 안심 3종 */}
      <section className="grid sm:grid-cols-3 gap-3">
        {[
          { icon: "🖥️", title: "컴퓨터 안 망가져요", desc: "설치하는 프로그램은 단 1개. 언제든 3초 만에 지울 수 있어요." },
          { icon: "🛡️", title: "해킹 걱정 없어요", desc: "공식 사이트만 안내하고, 안전한지 확인하는 습관까지 알려드려요." },
          { icon: "🙋", title: "막혀도 괜찮아요", desc: "단계마다 '막혔어요' 버튼이 있어요. 해결책을 미리 다 준비해 뒀어요." },
        ].map((c) => (
          <div key={c.title} className="rounded-2xl bg-white border border-stone-200 p-5 text-center">
            <div className="text-3xl mb-2">{c.icon}</div>
            <p className="font-bold text-stone-900 mb-1">{c.title}</p>
            <p className="text-[15px] text-stone-500 leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </section>

      {/* 시작/이어하기 + 챕터 목록 */}
      <section>
        <h2 className="text-xl font-extrabold text-stone-900 mb-4">전체 여정 — 8개 챕터, 약 95분</h2>
        <ChapterList />
      </section>

      {/* 채널 연계 (src/lib/site.ts에 주소를 넣으면 표시됨) */}
      {site.youtubeChannelUrl && (
        <section className="rounded-3xl bg-stone-800 text-white p-6 text-center space-y-3">
          <p className="font-bold text-lg">영상으로 같이 보면 더 쉬워요</p>
          <a
            href={site.youtubeChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-2xl bg-red-600 hover:bg-red-700 font-bold px-6 py-3 transition-colors"
          >
            ▶ {site.youtubeChannelName || "유튜브 채널"} 보러 가기
          </a>
        </section>
      )}
    </div>
  );
}
