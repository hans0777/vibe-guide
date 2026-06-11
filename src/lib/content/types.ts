// 가이드 콘텐츠의 구조 정의.
// 챕터 내용은 src/lib/content/chapters/ 안의 파일을 수정하면 됩니다.

export type RiskLevel = "safe" | "caution";

/** 단계 본문을 구성하는 블록들 */
export type Block =
  | { type: "p"; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  /** 복사 버튼이 달린 상자 — 프롬프트나 입력할 값 */
  | { type: "copy"; label: string; text: string; note?: string }
  /**
   * 스크린샷 자리. captureId는 캡처목록.md와 연결되는 고유 이름.
   * public/shots/{captureId}.png 파일을 넣으면 자동으로 표시되고,
   * 없으면 caption이 적힌 자리 표시 상자가 나옵니다.
   */
  | { type: "shot"; captureId: string; caption: string }
  /** 💡 알아두면 좋은 팁 */
  | { type: "tip"; text: string }
  /** 🛡️ 안심 멘트 — 공포 제거용 */
  | { type: "safe"; text: string }
  /** ⚠️ 주의 */
  | { type: "warn"; text: string }
  /** 공식 사이트로 가는 큰 버튼. urlCheck가 있으면 "주소창 확인" 안내가 붙음 */
  | { type: "link"; href: string; label: string; urlCheck?: string }
  /** 유튜브 영상 슬롯 — youtubeId가 비어 있으면 화면에 나오지 않음 */
  | { type: "video"; youtubeId?: string; title: string };

/** "막혔어요"를 눌렀을 때 보여줄 항목 하나 */
export type StuckPoint = {
  /** 증상 — "혹시 이 화면인가요?" */
  symptom: string;
  solution: Block[];
};

export type Step = {
  id: string;
  title: string;
  /** 위험도 배지 — 컴퓨터에 변화를 주는 단계에만 표시 */
  risk?: {
    level: RiskLevel;
    /** 이 단계가 컴퓨터에 하는 일 */
    what: string;
    /** 되돌리는 방법 */
    undo?: string;
  };
  blocks: Block[];
  /** 단계 끝의 확인 질문 — "이렇게 보이나요?" */
  checkpoint?: {
    question: string;
    stuck: StuckPoint[];
  };
};

export type Chapter = {
  /** 주소에 쓰이는 번호 — /guide/0 처럼 */
  slug: string;
  number: number;
  title: string;
  subtitle: string;
  /** 예상 소요 시간(분) */
  minutes: number;
  /** 챕터 목록·시작 화면에 보여줄 한 줄 설명 */
  summary: string;
  steps: Step[];
};
