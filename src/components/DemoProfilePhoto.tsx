"use client";

import { useState } from "react";

/**
 * 데모 페이지 프로필 사진.
 * public/demo/profile.jpg 파일을 넣으면 사진이 표시되고,
 * 없으면 깔끔한 자리 표시가 나옵니다.
 */
export function DemoProfilePhoto() {
  const [missing, setMissing] = useState(false);

  if (missing) {
    return (
      <div className="aspect-[3/4] w-full rounded-3xl bg-gradient-to-b from-[#f7f5f2] to-[#efedea] flex flex-col items-center justify-center gap-3">
        <span className="text-7xl">🙋‍♂️</span>
        <span className="text-stone-400 font-semibold text-[15px]">프로필 사진 자리</span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/demo/profile.jpg"
      alt="실행연구소 소장 프로필 사진"
      className="aspect-[3/4] w-full rounded-3xl object-cover object-top"
      onError={() => setMissing(true)}
    />
  );
}
