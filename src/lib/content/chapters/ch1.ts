import type { Chapter } from "../types";

export const ch1: Chapter = {
  slug: "1",
  number: 1,
  title: "Claude 계정 만들기",
  subtitle: "내 AI 비서를 고용합니다",
  minutes: 15,
  summary: "claude.ai에 가입하고, Pro 구독(월 $20) 결제까지 한 단계씩 함께합니다.",
  steps: [
    {
      id: "open-claude",
      title: "Claude 공식 사이트 접속하기",
      blocks: [
        {
          type: "p",
          text: "Claude(클로드)는 우리가 사용할 AI의 이름입니다. 미국의 Anthropic(앤트로픽)이라는 회사가 만들었고, 전 세계 수백만 명이 쓰고 있는 믿을 수 있는 서비스예요.",
        },
        {
          type: "p",
          text: "아래 버튼을 눌러 공식 사이트로 이동하세요.",
        },
        {
          type: "link",
          href: "https://claude.ai",
          label: "Claude 공식 사이트 열기",
          urlCheck: "claude.ai",
        },
        {
          type: "safe",
          text: "여기서 좋은 습관 하나를 익혀요. 사이트가 열리면 브라우저 맨 위 주소창에 claude.ai라고 적혀 있는지 확인하세요. 앞으로 어떤 사이트든 로그인하기 전에 주소를 확인하는 것 — 이것 하나만으로 가짜 사이트 피해의 대부분을 막을 수 있습니다.",
        },
        { type: "shot", captureId: "ch1-claude-home", caption: "claude.ai 첫 화면 — 이렇게 보이면 정상이에요" },
      ],
    },
    {
      id: "signup",
      title: "구글 계정으로 가입하기",
      blocks: [
        {
          type: "p",
          text: "화면에서 \"Continue with Google\"(구글로 계속하기) 버튼을 찾아 누르세요. 구글 계정으로 가입하면 새 비밀번호를 만들고 외울 필요가 없어서 가장 편합니다.",
        },
        { type: "shot", captureId: "ch1-signup", caption: "가입 화면 — 'Continue with Google' 버튼 위치" },
        {
          type: "p",
          text: "구글 로그인 창이 뜨면 평소 쓰는 구글(Gmail) 계정을 선택하고, 비밀번호를 입력하세요. 이건 구글 공식 창이니 안심하고 입력해도 됩니다.",
        },
        {
          type: "p",
          text: "가입 과정에서 이름과 생년월일을 묻거나, 휴대폰 번호 인증을 요청할 수 있어요. 화면 안내대로 입력하면 됩니다.",
        },
      ],
      checkpoint: {
        question: "가입이 끝나고 Claude와 대화할 수 있는 화면이 보이나요?",
        stuck: [
          {
            symptom: "구글 계정이 없어요",
            solution: [
              {
                type: "p",
                text: "괜찮아요. 가입 화면에서 이메일 주소를 직접 입력하는 칸에 평소 쓰는 이메일을 넣고 \"Continue with email\"을 누르세요.",
              },
              {
                type: "p",
                text: "그러면 그 이메일로 로그인 링크(또는 인증 번호)가 와요. 메일함을 열어 Claude가 보낸 메일을 찾아 링크를 누르면 가입이 완료됩니다.",
              },
              { type: "tip", text: "메일이 안 보이면 스팸함(정크메일함)을 꼭 확인해 보세요. 처음 받는 메일은 스팸함에 들어가는 경우가 많아요." },
            ],
          },
          {
            symptom: "화면이 전부 영어라서 무서워요",
            solution: [
              {
                type: "p",
                text: "정상이에요! 가입 화면은 영어지만, 가입만 끝나면 Claude와는 한국어로 대화할 수 있습니다.",
              },
              {
                type: "tip",
                text: "영어 화면이 너무 불편하면: 화면 빈 곳에 마우스 오른쪽 버튼을 누르고 \"한국어로 번역\"을 선택하세요. 크롬·엣지 브라우저의 공짜 기능이에요.",
              },
            ],
          },
        ],
      },
    },
    {
      id: "first-chat",
      title: "Claude에게 첫 인사 해보기",
      blocks: [
        {
          type: "p",
          text: "가입이 끝났으면, 내 AI 비서가 진짜 한국말을 하는지 시험해 볼까요? 아래 문장을 복사해서 입력창에 붙여넣고 엔터를 눌러 보세요.",
        },
        {
          type: "copy",
          label: "복사해서 붙여넣을 인사말",
          text: "안녕! 나는 코딩을 전혀 모르는 사람이야. 앞으로 너랑 같이 내 웹페이지를 만들 거야. 잘 부탁해. 앞으로 모든 대답은 쉬운 한국어로 해줘.",
          note: "상자 오른쪽 [복사] 버튼 → 입력창 클릭 → Ctrl+V로 붙여넣기 → 엔터",
        },
        {
          type: "p",
          text: "Claude가 한국어로 친절하게 대답하면 성공입니다. 방금 여러분은 AI와의 첫 대화를 해냈어요!",
        },
        {
          type: "tip",
          text: "복사: 마우스로 글자를 드래그한 뒤 Ctrl+C. 붙여넣기: Ctrl+V. 이 가이드에서는 [복사] 버튼을 눌러주기만 하면 자동으로 복사돼요.",
        },
      ],
    },
    {
      id: "why-pay",
      title: "왜 유료 구독이 필요한가요?",
      blocks: [
        {
          type: "p",
          text: "무료 계정으로도 Claude와 대화는 할 수 있어요. 하지만 우리가 쓸 핵심 기능인 \"코워크(Cowork)\" — AI가 직접 내 컴퓨터에 파일을 만들어 주는 기능 — 는 Pro 구독(월 $20, 약 3만 원)부터 사용할 수 있습니다.",
        },
        {
          type: "p",
          text: "월 3만 원이면 커피 대여섯 잔 값인데, 그 돈으로 24시간 일하는 개발자 한 명을 곁에 두는 셈이에요. 웹페이지 제작을 업체에 맡기면 최소 수십만 원인 걸 생각하면, 직접 만들어 보는 비용으로는 충분히 해볼 만한 투자입니다.",
        },
        {
          type: "safe",
          text: "구독은 언제든 해지할 수 있어요. 한 달만 써 보고 \"내 길이 아니다\" 싶으면 클릭 두 번으로 해지하면 됩니다. 해지해도 위약금 같은 건 전혀 없어요.",
        },
      ],
    },
    {
      id: "subscribe",
      title: "Pro 구독 결제하기",
      risk: {
        level: "caution",
        what: "월 $20(약 3만 원)이 매달 카드에서 결제됩니다",
        undo: "설정(Settings) > 구독(Billing)에서 언제든 해지 가능",
      },
      blocks: [
        {
          type: "p",
          text: "Claude 화면 왼쪽 아래의 내 이름(또는 프로필)을 누르고, 설정으로 들어가면 업그레이드(Upgrade) 메뉴가 있어요. 화면 어딘가에 보이는 \"Upgrade\" 버튼을 눌러도 됩니다.",
        },
        { type: "shot", captureId: "ch1-upgrade", caption: "Upgrade 버튼 위치" },
        {
          type: "p",
          text: "요금제 선택 화면이 나오면 Pro(월 $20)를 선택하세요. Max라는 더 비싼 요금제도 보이지만, 시작은 Pro면 충분합니다.",
        },
        { type: "shot", captureId: "ch1-plans", caption: "요금제 선택 화면 — Pro를 고르세요" },
        {
          type: "p",
          text: "카드 입력 화면이 나오면 아래를 참고해서 채워 넣으세요. 전부 영어지만 딱 4칸입니다.",
        },
        {
          type: "list",
          items: [
            "Card number(카드 번호): 카드 앞면의 16자리 숫자",
            "Expiry / MM/YY(유효 기간): 카드 앞면의 월/년 — 예: 08/27",
            "CVC(보안 코드): 카드 뒷면 서명란 옆 3자리 숫자",
            "Name on card(카드 명의자): 카드에 적힌 영문 이름 — 예: HONG GIL DONG",
          ],
        },
        { type: "shot", captureId: "ch1-billing", caption: "카드 입력 화면 — 각 칸에 무엇을 넣는지" },
        {
          type: "warn",
          text: "달러($)로 결제되기 때문에 카드사에서 \"해외 결제\" 문자가 와요. 정상이니 놀라지 마세요. 환율에 따라 매달 청구 금액이 조금씩 다를 수 있습니다.",
        },
      ],
      checkpoint: {
        question: "결제가 완료되고 'Pro'라는 표시가 보이나요?",
        stuck: [
          {
            symptom: "카드가 거절됐어요 (declined)",
            solution: [
              {
                type: "p",
                text: "십중팔구 \"해외 결제 차단\" 때문이에요. 카드사 앱을 열어 [카드 설정 > 해외 결제]를 켜거나, 카드 뒷면의 고객센터 번호로 전화해서 \"해외 온라인 결제를 풀어 주세요\"라고 하면 1분 만에 해결됩니다.",
              },
              { type: "p", text: "차단을 푼 뒤에 결제 화면에서 다시 시도하면 됩니다. 그래도 안 되면 다른 카드로 시도해 보세요." },
            ],
          },
          {
            symptom: "Upgrade 버튼을 못 찾겠어요",
            solution: [
              {
                type: "p",
                text: "주소창에 claude.ai/upgrade 라고 직접 입력하고 엔터를 눌러 보세요. 요금제 선택 화면으로 바로 이동합니다.",
              },
            ],
          },
          {
            symptom: "결제했는데 Pro 표시가 안 보여요",
            solution: [
              { type: "p", text: "브라우저 새로고침(F5 키)을 한 번 눌러 보세요. 그래도 안 보이면 로그아웃했다가 다시 로그인하면 대부분 해결됩니다." },
              { type: "p", text: "카드사 결제 문자가 왔는지 확인해 보세요. 문자가 안 왔다면 결제가 완료되지 않은 것이니 다시 시도하면 됩니다." },
            ],
          },
        ],
      },
    },
  ],
};
