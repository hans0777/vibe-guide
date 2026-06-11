import Link from "next/link";

export const metadata = {
  title: "완성품 미리보기 — 예시 자기소개 페이지",
};

// 가이드를 끝내면 만들게 되는 자기소개 페이지의 예시입니다.
// 가상의 인물 "김영희"님의 페이지예요.
export default function DemoPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-amber-50 border-2 border-amber-200 px-5 py-4 text-center">
        <p className="text-amber-900">
          👀 이건 <strong>예시</strong>예요. 가이드를 끝내면 이런 페이지가{" "}
          <strong>여러분의 이름으로, 여러분의 인터넷 주소에</strong> 생깁니다.
        </p>
        <Link href="/" className="inline-block mt-2 font-bold text-amber-700 underline underline-offset-4">
          ← 가이드로 돌아가기
        </Link>
      </div>

      {/* 예시 자기소개 페이지 */}
      <div className="rounded-3xl overflow-hidden border border-stone-200 shadow-md bg-gradient-to-b from-rose-50 to-white">
        <div className="px-6 py-14 text-center space-y-5">
          <div className="w-32 h-32 mx-auto rounded-full bg-stone-200 flex items-center justify-center text-5xl">
            🌷
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-stone-900">김영희</h2>
            <p className="text-lg text-stone-500 mt-2">꽃과 산책을 좋아하는 사람</p>
          </div>
          <div className="max-w-md mx-auto text-stone-600 leading-[1.9]">
            <p>
              안녕하세요! 서울에 사는 김영희입니다. 주말마다 동네 뒷산을 걷고,
              계절마다 피는 꽃을 사진으로 남기는 게 취미예요. 올해는 새로운 것에
              도전해 보고 싶어서, 난생처음 제 웹페이지를 만들어 봤습니다.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {["🌸 꽃 사진", "🥾 산책", "📚 독서", "☕ 커피"].map((t) => (
              <span key={t} className="rounded-full bg-white border border-rose-200 px-4 py-1.5 text-[15px] text-stone-700">
                {t}
              </span>
            ))}
          </div>
          <div className="pt-2">
            <span className="inline-block rounded-2xl bg-rose-400 text-white font-bold px-7 py-3.5 cursor-default">
              ✉️ 연락하기
            </span>
          </div>
        </div>
        <div className="bg-white border-t border-stone-100 py-3 text-center text-[13px] text-stone-400">
          2시간 전까지 코딩을 몰랐던 김영희님이 만들었습니다 (예시)
        </div>
      </div>

      <div className="text-center">
        <Link
          href="/guide/0"
          className="inline-block rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-xl px-10 py-4 transition-colors"
        >
          나도 만들어 보기 →
        </Link>
      </div>
    </div>
  );
}
