# 바이브 첫걸음 (vibe-guide)

코딩을 전혀 모르는 한국 왕초보를 위한 바이브 코딩 시작 가이드 사이트.
설계 문서: 상위 폴더의 `바이브코딩-가이드-설계서.md`

## 내 컴퓨터에서 열어보기

```
npm install
npm run dev
```

브라우저에서 http://localhost:3000 접속.

## 자주 하게 될 수정

| 하고 싶은 것 | 고칠 파일 |
|---|---|
| 사이트 이름·유튜브 채널 주소 바꾸기 | `src/lib/site.ts` |
| 챕터 내용(글) 고치기 | `src/lib/content/chapters/ch0.ts` ~ `ch7.ts` |
| 스크린샷 넣기 | `public/shots/` 폴더에 PNG 넣기 — `캡처목록.md` 참고 |
| 막혔어요 항목 추가 | 각 챕터 파일의 `checkpoint.stuck` 배열에 추가 |
| 유튜브 영상 연결 | 챕터 파일의 `{ type: "video", ... }` 블록에 `youtubeId` 추가 |

콘텐츠 블록 종류(문단, 복사 상자, 스크린샷, 팁/안심/주의, 링크, 영상)는
`src/lib/content/types.ts`에 설명이 있습니다.

## 구조

- `src/app/page.tsx` — 홈 (챕터 목록, 이어하기)
- `src/app/guide/[slug]/page.tsx` — 챕터 진행 화면
- `src/app/demo/page.tsx` — 완성품 예시(김영희) 페이지
- `src/components/StepPlayer.tsx` — 단계 진행·확인 질문·막혔어요 패널
- `src/components/Blocks.tsx` — 콘텐츠 블록 렌더링(복사 버튼, 스크린샷 등)
- `src/lib/progress.ts` — 진행 상황 저장 (브라우저 localStorage, 서버 전송 없음)

## 배포 (Vercel)

이 저장소를 GitHub에 올리고 Vercel에서 Import → Deploy 하면 끝.
별도 환경 변수나 설정이 필요 없습니다.

## 출시 전 남은 일 (설계서 Phase 3~4)

1. `캡처목록.md`의 스크린샷 20장 채우기
2. 실제 왕초보 3명에게 베타 테스트 → 막힌 곳을 챕터의 `stuck`에 반영
3. `src/lib/site.ts`에 최종 사이트 이름과 유튜브 채널 주소 입력
