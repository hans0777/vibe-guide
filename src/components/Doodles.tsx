/* Family 스타일의 귀여운 SVG 일러스트 캐릭터들 — 외부 이미지 없이 직접 그림 */

export function CloudBuddy({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 130" fill="none" className={className} aria-hidden>
      <circle cx="60" cy="35" r="26" fill="#56B4FF" />
      <circle cx="32" cy="55" r="24" fill="#56B4FF" />
      <circle cx="88" cy="55" r="24" fill="#56B4FF" />
      <circle cx="45" cy="80" r="24" fill="#56B4FF" />
      <circle cx="75" cy="80" r="24" fill="#56B4FF" />
      <circle cx="60" cy="60" r="30" fill="#56B4FF" />
      <rect x="42" y="44" width="36" height="34" rx="9" fill="#2D9CFF" />
      <circle cx="52" cy="58" r="4.5" fill="#26241F" />
      <circle cx="68" cy="58" r="4.5" fill="#26241F" />
      <path d="M53 69 Q60 75 67 69" stroke="#26241F" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M48 103 L45 117" stroke="#26241F" strokeWidth="5" strokeLinecap="round" />
      <path d="M72 103 L75 117" stroke="#26241F" strokeWidth="5" strokeLinecap="round" />
      <path d="M45 118 L36 119" stroke="#F6B73C" strokeWidth="8" strokeLinecap="round" />
      <path d="M75 118 L84 119" stroke="#F6B73C" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}

export function GreenBuddy({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 130" fill="none" className={className} aria-hidden>
      <circle cx="60" cy="45" r="30" fill="#34C77B" />
      <circle cx="38" cy="68" r="24" fill="#34C77B" />
      <circle cx="82" cy="68" r="24" fill="#34C77B" />
      <circle cx="60" cy="75" r="28" fill="#34C77B" />
      <path d="M45 60 Q50 53 55 60" stroke="#19311F" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M65 60 Q70 53 75 60" stroke="#19311F" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M53 70 Q60 77 67 70" stroke="#19311F" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M48 100 L45 115" stroke="#19311F" strokeWidth="5" strokeLinecap="round" />
      <path d="M72 100 L75 115" stroke="#19311F" strokeWidth="5" strokeLinecap="round" />
      <path d="M45 116 L36 117" stroke="#FF6A5C" strokeWidth="8" strokeLinecap="round" />
      <path d="M75 116 L84 117" stroke="#FF6A5C" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}

export function RedBuddy({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden>
      <circle cx="60" cy="40" r="24" fill="#FF6249" />
      <circle cx="36" cy="58" r="20" fill="#FF6249" />
      <circle cx="84" cy="58" r="20" fill="#FF6249" />
      <circle cx="48" cy="78" r="20" fill="#FF6249" />
      <circle cx="72" cy="78" r="20" fill="#FF6249" />
      <circle cx="60" cy="60" r="26" fill="#FF6249" />
      <path d="M47 58 Q52 63 57 58" stroke="#3A1410" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M63 58 Q68 63 73 58" stroke="#3A1410" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M54 70 Q60 74 66 70" stroke="#3A1410" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

export function Flower({
  className = "",
  petal = "#FFC56F",
  center = "#FF4E1F",
}: {
  className?: string;
  petal?: string;
  center?: string;
}) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden>
      <circle cx="50" cy="24" r="17" fill={petal} />
      <circle cx="76" cy="42" r="17" fill={petal} />
      <circle cx="66" cy="72" r="17" fill={petal} />
      <circle cx="34" cy="72" r="17" fill={petal} />
      <circle cx="24" cy="42" r="17" fill={petal} />
      <circle cx="50" cy="50" r="14" fill={center} />
    </svg>
  );
}

export function Star({ className = "", color = "#FFD66E" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden>
      <path
        d="M50 6 L60.5 37.5 L93 38.5 L67 58.5 L76.5 90 L50 71.5 L23.5 90 L33 58.5 L7 38.5 L39.5 37.5 Z"
        fill={color}
      />
    </svg>
  );
}

export function Sparkle({ className = "", color = "#FFD66E" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden>
      <path d="M50 4 L59 41 L96 50 L59 59 L50 96 L41 59 L4 50 L41 41 Z" fill={color} />
    </svg>
  );
}

export function Heart({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden>
      <path
        d="M50 86 C22 64 10 46 19 30 C28 15 47 18 50 32 C53 18 72 15 81 30 C90 46 78 64 50 86 Z"
        fill="#FF5C5C"
      />
    </svg>
  );
}

export function Coin({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden>
      <circle cx="50" cy="50" r="44" fill="#FFD66E" />
      <circle cx="50" cy="50" r="32" fill="none" stroke="#EBA93C" strokeWidth="5" />
    </svg>
  );
}

export function CursorArrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden>
      <path d="M76 70 L48 56 L60 86 L52 89 L40 58 L18 78 L24 16 L80 62 Z" fill="#37C871" />
    </svg>
  );
}
