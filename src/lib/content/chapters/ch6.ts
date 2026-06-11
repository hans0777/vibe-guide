import type { Chapter } from "../types";

export const ch6: Chapter = {
  slug: "6",
  number: 6,
  title: "Vercel로 세상에 공개하기",
  subtitle: "드디어 인터넷에 내 페이지가",
  minutes: 15,
  summary: "Vercel(버셀)을 GitHub와 연결해, 내 페이지를 진짜 인터넷 주소로 공개합니다.",
  steps: [
    {
      id: "what-is-vercel",
      title: "Vercel이 뭔가요?",
      blocks: [
        {
          type: "p",
          text: "Vercel(버셀)은 \"전시장\"이에요. GitHub 보관함에 있는 내 작품을 가져다가, 전 세계 누구나 볼 수 있게 인터넷에 전시해 주는 서비스입니다.",
        },
        {
          type: "p",
          text: "좋은 소식: 우리 같은 개인 사용자는 완전 무료예요. 카드 등록도 필요 없습니다.",
        },
        {
          type: "p",
          text: "한 번만 연결해 두면, 앞으로 보관함에 새 파일을 올릴 때마다 전시장이 자동으로 새 작품으로 바꿔 줘요. 이게 개발자들이 실제로 쓰는 \"자동 배포\"라는 방식입니다.",
        },
      ],
    },
    {
      id: "vercel-signup",
      title: "GitHub 계정으로 Vercel 가입하기",
      blocks: [
        { type: "link", href: "https://vercel.com/signup", label: "Vercel 가입 페이지 열기", urlCheck: "vercel.com" },
        {
          type: "list",
          ordered: true,
          items: [
            "요금제를 물으면 Hobby(무료)를 선택하세요",
            "이름을 묻는 칸이 나오면 이름을 영문으로 입력하세요",
            "가입 방법 중에서 [Continue with GitHub]를 누르세요 — 방금 만든 GitHub 계정으로 들어가는 거예요",
            "GitHub 화면으로 잠깐 넘어가면서 초록색 [Authorize Vercel](버셀 허용) 버튼이 나오면 누르세요",
          ],
        },
        { type: "shot", captureId: "ch6-signup", caption: "Vercel 가입 — Hobby 선택과 Continue with GitHub 버튼" },
        {
          type: "safe",
          text: "Authorize(허용)는 \"전시장 직원이 내 보관함을 볼 수 있게 출입증을 주는 것\"이에요. Vercel은 보관함의 작품을 가져가기만 할 뿐, 여러분의 비밀번호나 개인정보를 가져가지 않습니다.",
        },
      ],
      checkpoint: {
        question: "Vercel 대시보드(관리 화면)가 보이나요?",
        stuck: [
          {
            symptom: "휴대폰 번호 인증을 하라고 해요",
            solution: [
              {
                type: "p",
                text: "정상이에요. Vercel이 가짜 계정을 막으려고 확인하는 절차입니다. 국가를 South Korea(+82)로 선택하고 휴대폰 번호를 입력하면 문자로 인증 코드가 와요. 그 숫자를 입력하면 됩니다.",
              },
            ],
          },
          {
            symptom: "어느 버튼을 눌러야 할지 모르는 영어 화면이 나왔어요",
            solution: [
              {
                type: "p",
                text: "화면 빈 곳에 마우스 오른쪽 버튼 → \"한국어로 번역\"을 누르면 화면 전체가 한국어로 바뀌어요. 그 상태에서 천천히 읽고 진행하면 됩니다.",
              },
            ],
          },
        ],
      },
    },
    {
      id: "import",
      title: "내 보관함 가져오기",
      blocks: [
        {
          type: "p",
          text: "이제 전시장에 \"저 보관함에 있는 작품을 전시해 주세요\"라고 알려줄 차례예요.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Vercel 화면에서 [Add New...] 버튼을 누르고 [Project]를 선택하세요",
            "Import Git Repository(보관함 가져오기) 목록에 my-page가 보이면, 옆의 [Import] 버튼을 누르세요",
          ],
        },
        { type: "shot", captureId: "ch6-import", caption: "Import 화면 — my-page 옆의 Import 버튼" },
        {
          type: "tip",
          text: "목록에 my-page가 안 보이면 [Install GitHub App] 또는 [Adjust GitHub App Permissions] 링크를 누르고, GitHub 화면에서 [All repositories]를 선택한 뒤 초록 버튼을 누르세요. 출입증의 범위를 넓혀 주는 거예요.",
        },
      ],
    },
    {
      id: "deploy",
      title: "Deploy 버튼 누르기",
      blocks: [
        {
          type: "p",
          text: "설정 화면이 나오면 아무것도 건드리지 말고, 까만색(또는 파란색) [Deploy] 버튼만 누르세요. Deploy(디플로이)는 \"전시 시작!\"이라는 뜻이에요.",
        },
        { type: "shot", captureId: "ch6-deploy", caption: "Deploy 버튼 — 다른 설정은 건드리지 않아도 돼요" },
        {
          type: "p",
          text: "1분 정도 기다리면 폭죽이 터지는 축하 화면이 나옵니다. 그 순간, 여러분의 페이지가 인터넷에 공개된 거예요.",
        },
        { type: "shot", captureId: "ch6-congrats", caption: "배포 완료 축하 화면" },
      ],
    },
    {
      id: "my-url",
      title: "내 주소 확인하고 휴대폰으로 접속해 보기",
      blocks: [
        {
          type: "p",
          text: "축하 화면에서 내 페이지의 미리보기 그림(또는 [Visit] 버튼)을 누르면 내 페이지가 열려요. 주소창을 보세요 — https://my-page-○○○.vercel.app 같은 주소가 보일 거예요. 이게 전 세계에서 통하는 여러분의 인터넷 주소입니다.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "주소창의 주소를 클릭하고 Ctrl+C로 복사하세요",
            "나에게 보내는 카톡(또는 문자)에 붙여넣어 보내세요",
            "휴대폰에서 그 링크를 눌러 보세요 — 내 페이지가 휴대폰에서도 열립니다!",
          ],
        },
        {
          type: "p",
          text: "🎉 축하합니다! 이제 이 링크를 가족, 친구 누구에게나 보낼 수 있어요. \"내가 만든 웹사이트야\"라고요. 거짓말이 아니에요 — 진짜로 여러분이 만들었으니까요.",
        },
      ],
      checkpoint: {
        question: "휴대폰에서 내 페이지가 열리나요?",
        stuck: [
          {
            symptom: "404 NOT_FOUND 라고 나와요",
            solution: [
              {
                type: "p",
                text: "전시장이 작품을 못 찾았다는 뜻이에요. 십중팔구 파일 이름 때문입니다. GitHub 보관함(github.com에서 my-page)에 들어가서 파일 이름이 정확히 index.html인지 확인하세요. Index.html(대문자)이나 index(1).html이면 안 돼요.",
              },
              {
                type: "p",
                text: "이름이 다르면: 챕터 3의 코워크로 돌아가 \"파일 이름을 정확히 index.html로 바꿔 줘\"라고 시키고, 챕터 5의 업로드 단계만 다시 하면 됩니다. 같은 이름으로 다시 올리면 덮어써져요.",
              },
            ],
          },
          {
            symptom: "페이지가 열리긴 하는데 하얀 빈 화면이에요",
            solution: [
              { type: "p", text: "휴대폰이라면 새로고침을 한 번 해 보세요. 그래도 비어 있으면, 컴퓨터에서 my-page 폴더의 index.html을 더블클릭했을 때는 잘 보이는지 확인하세요." },
              { type: "p", text: "컴퓨터에서도 빈 화면이면 코워크에게 \"index.html을 열면 빈 화면이 나와. 고쳐 줘\"라고 시킨 뒤, 챕터 5의 업로드만 다시 하면 됩니다." },
            ],
          },
          {
            symptom: "Deploy가 실패했다고 빨간 글씨가 나와요 (Error)",
            solution: [
              {
                type: "p",
                text: "당황하지 마세요. Vercel 화면에서 실패한 항목을 누르면 영어 기록이 나오는데, 그걸 마우스로 드래그해 복사한 뒤 코워크(또는 Claude)에게 붙여넣고 \"이 오류가 무슨 뜻이고 어떻게 고치면 돼? 쉬운 한국어로 알려줘\"라고 물어보세요. AI가 해결법을 알려줍니다.",
              },
              {
                type: "tip",
                text: "오류 메시지를 AI에게 복사해서 던지기 — 이게 개발자들이 매일 쓰는 진짜 문제 해결법이에요.",
              },
            ],
          },
        ],
      },
    },
  ],
};
