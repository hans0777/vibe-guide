import type { Chapter } from "../types";

export const ch2: Chapter = {
  slug: "2",
  number: 2,
  title: "Claude 앱 설치하기",
  subtitle: "이 가이드에서 설치하는 유일한 프로그램",
  minutes: 10,
  summary: "Claude 데스크탑 앱을 내려받아 설치하고 로그인합니다.",
  steps: [
    {
      id: "download",
      title: "공식 다운로드 페이지에서 내려받기",
      blocks: [
        {
          type: "p",
          text: "지금까지는 인터넷 브라우저에서 Claude를 썼어요. 이제 컴퓨터에 Claude 앱(프로그램)을 설치할 거예요. 앱을 설치해야 \"코워크\" — AI가 직접 내 컴퓨터에 파일을 만들어 주는 기능 — 를 쓸 수 있거든요.",
        },
        {
          type: "link",
          href: "https://claude.ai/download",
          label: "Claude 앱 공식 다운로드 페이지 열기",
          urlCheck: "claude.ai",
        },
        {
          type: "p",
          text: "페이지에서 Windows용 다운로드 버튼을 누르세요. 파일 하나가 내려받아집니다.",
        },
        { type: "shot", captureId: "ch2-download", caption: "다운로드 페이지 — Windows 버튼 위치" },
        {
          type: "safe",
          text: "공식 사이트(claude.ai)에서 받는 파일이니 바이러스 걱정은 하지 않아도 됩니다. 다른 블로그나 자료실에서 받은 파일이라면 모를까, 공식 사이트의 파일은 안전해요.",
        },
      ],
    },
    {
      id: "install",
      title: "설치 파일 실행하기",
      risk: {
        level: "safe",
        what: "컴퓨터에 프로그램 1개(Claude)가 설치됩니다",
        undo: "윈도우 설정 > 앱 > Claude > 제거 — 3초면 완전히 사라져요",
      },
      blocks: [
        {
          type: "p",
          text: "다운로드가 끝나면 브라우저 오른쪽 위(또는 아래)에 내려받은 파일이 보여요. 그 파일을 클릭하세요.",
        },
        {
          type: "tip",
          text: "파일이 안 보이면: 키보드에서 Ctrl+J 를 누르면 다운로드 목록이 열립니다. 거기서 Claude 설치 파일을 클릭하세요.",
        },
        {
          type: "p",
          text: "\"이 앱이 디바이스를 변경할 수 있도록 허용하시겠어요?\"라는 창이 뜨면 [예]를 누르세요. 프로그램을 설치할 때마다 윈도우가 묻는 평범한 확인 절차예요.",
        },
        {
          type: "p",
          text: "설치는 자동으로 진행됩니다. 1~2분 정도 기다리면 Claude 앱이 스스로 열려요.",
        },
        { type: "shot", captureId: "ch2-installed", caption: "설치가 끝나고 Claude 앱이 처음 열린 화면" },
      ],
      checkpoint: {
        question: "Claude 앱이 열렸나요?",
        stuck: [
          {
            symptom: "파란 화면으로 'Windows의 PC 보호' 경고가 떴어요",
            solution: [
              {
                type: "p",
                text: "윈도우가 처음 보는 프로그램에 한 번씩 보여주는 화면이에요. 공식 사이트에서 받은 파일이니 진행해도 안전합니다.",
              },
              {
                type: "list",
                ordered: true,
                items: [
                  "파란 창에서 \"추가 정보\"라는 작은 글씨를 누르세요",
                  "아래에 나타나는 [실행] 버튼을 누르세요",
                ],
              },
            ],
          },
          {
            symptom: "백신 프로그램(V3, 알약 등)이 경고를 띄웠어요",
            solution: [
              {
                type: "p",
                text: "백신이 처음 보는 프로그램이라 확인차 물어보는 거예요. \"허용\" 또는 \"실행\"을 선택하면 됩니다. claude.ai에서 받은 공식 파일이라면 안전합니다.",
              },
            ],
          },
          {
            symptom: "내려받은 파일을 못 찾겠어요",
            solution: [
              {
                type: "list",
                ordered: true,
                items: [
                  "키보드에서 윈도우 키(⊞)를 누른 채 E 키를 누르세요 — 파일 탐색기가 열려요",
                  "왼쪽 목록에서 \"다운로드\" 폴더를 클릭하세요",
                  "Claude로 시작하는 파일을 더블클릭하세요",
                ],
              },
            ],
          },
        ],
      },
    },
    {
      id: "login",
      title: "앱에 로그인하기",
      blocks: [
        {
          type: "p",
          text: "앱이 열리면 로그인 화면이 나와요. 챕터 1에서 가입할 때처럼 \"Continue with Google\"을 누르고 같은 구글 계정을 선택하세요.",
        },
        {
          type: "p",
          text: "로그인 버튼을 누르면 인터넷 브라우저가 잠깐 열렸다가 \"앱으로 돌아가세요\" 같은 안내가 나올 수 있어요. 안내대로 [열기] 또는 [Claude 열기]를 누르면 앱으로 돌아갑니다.",
        },
        { type: "shot", captureId: "ch2-login", caption: "앱 로그인 화면" },
        {
          type: "warn",
          text: "챕터 1에서 Pro를 결제한 그 계정으로 로그인해야 해요. 구글 계정이 여러 개라면 헷갈리지 않게 주의하세요.",
        },
      ],
      checkpoint: {
        question: "앱에서 Claude와 대화할 수 있는 화면이 보이나요?",
        stuck: [
          {
            symptom: "로그인 후에 빈 화면이거나 멈춘 것 같아요",
            solution: [
              { type: "p", text: "앱을 완전히 껐다가 다시 켜 보세요. 시작 메뉴(⊞ 키)에서 Claude를 검색해 다시 실행하면 됩니다." },
              { type: "p", text: "그래도 안 되면 컴퓨터를 한 번 재부팅하고 Claude를 다시 열어 보세요. 재부팅은 만능 해결사예요." },
            ],
          },
          {
            symptom: "다른 구글 계정으로 로그인해 버렸어요",
            solution: [
              {
                type: "p",
                text: "괜찮아요. 앱 왼쪽 아래 프로필(내 이름)을 누르고 로그아웃(Log out)한 뒤, Pro를 결제한 계정으로 다시 로그인하면 됩니다.",
              },
            ],
          },
        ],
      },
    },
  ],
};
