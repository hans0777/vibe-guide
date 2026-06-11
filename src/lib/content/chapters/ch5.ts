import type { Chapter } from "../types";

export const ch5: Chapter = {
  slug: "5",
  number: 5,
  title: "GitHub에 작품 올리기",
  subtitle: "내 작품 보관함 만들기",
  minutes: 15,
  summary: "GitHub(깃허브)에 가입하고, 만든 페이지를 내 보관함에 올립니다.",
  steps: [
    {
      id: "what-is-github",
      title: "GitHub가 뭔가요?",
      blocks: [
        {
          type: "p",
          text: "GitHub(깃허브)는 \"작품 보관함\"이에요. 전 세계 개발자들이 자기가 만든 것을 보관하는 인터넷 금고 같은 곳이죠. 우리가 만든 페이지도 여기에 올려 둘 거예요.",
        },
        {
          type: "p",
          text: "왜 올리냐고요? 다음 챕터에서 쓸 Vercel(전시장)이 이 보관함에서 작품을 가져가 인터넷에 전시해 주거든요. 보관함에 올리기만 하면 전시는 자동이에요.",
        },
        {
          type: "safe",
          text: "GitHub는 마이크로소프트가 운영하는 무료 서비스예요. 전 세계 1억 명이 넘게 쓰고 있으니 안심하세요.",
        },
      ],
    },
    {
      id: "github-signup",
      title: "GitHub 가입하기",
      blocks: [
        { type: "link", href: "https://github.com/signup", label: "GitHub 가입 페이지 열기", urlCheck: "github.com" },
        {
          type: "p",
          text: "이메일 주소를 입력하라는 화면이 나와요. 순서대로 진행해 봅시다.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Email(이메일): 평소 쓰는 이메일 주소 입력",
            "Password(비밀번호): 새 비밀번호 만들기 — 15자 이상이거나, 8자 이상 + 숫자와 소문자 포함. 꼭 메모해 두세요!",
            "Username(사용자 이름): 영문 소문자와 숫자로 닉네임 만들기 — 띄어쓰기와 한글은 안 돼요. 예: younghee-kim",
            "퍼즐 풀기: 로봇이 아니라는 걸 확인하는 간단한 그림 퍼즐이 나올 수 있어요",
            "이메일로 온 인증 코드(숫자)를 입력하면 가입 완료",
          ],
        },
        { type: "shot", captureId: "ch5-signup", caption: "GitHub 가입 화면" },
        {
          type: "warn",
          text: "Username은 나중에 내 페이지 주소에 들어가요. 정성껏 지어 보세요. (예: username이 younghee-kim이면 작품 주소에 그 이름이 표시됩니다)",
        },
      ],
      checkpoint: {
        question: "가입이 끝나고 GitHub 첫 화면이 보이나요?",
        stuck: [
          {
            symptom: "인증 코드 메일이 안 와요",
            solution: [
              { type: "p", text: "스팸함(정크메일함)을 먼저 확인하세요. GitHub가 보낸 메일은 처음엔 스팸함에 들어가는 경우가 많아요." },
              { type: "p", text: "그래도 없으면 화면의 \"Resend the code\"(코드 다시 보내기)를 누르고 1~2분 기다려 보세요." },
            ],
          },
          {
            symptom: "Username이 이미 사용 중이래요 (already taken)",
            solution: [
              {
                type: "p",
                text: "같은 이름을 누가 먼저 쓰고 있다는 뜻이에요. 뒤에 숫자나 단어를 붙여 보세요. 예: younghee-kim → younghee-kim-2026, younghee-kim-flower",
              },
            ],
          },
          {
            symptom: "비밀번호가 약하다고 빨간 글씨가 나와요",
            solution: [
              {
                type: "p",
                text: "GitHub는 비밀번호 규칙이 까다로워요. 가장 쉬운 방법: 좋아하는 한글 문장을 영타로 치고 끝에 숫자를 붙이세요. 예: \"나는꽃이좋다\"를 영타로 → skshrrcdlwhgek2026 — 길고 안전한데 나만 기억하기 쉬워요.",
              },
            ],
          },
        ],
      },
    },
    {
      id: "create-repo",
      title: "보관함(Repository) 만들기",
      blocks: [
        {
          type: "p",
          text: "이제 내 작품을 넣을 보관함 하나를 만들어요. GitHub에서는 보관함을 Repository(리포지토리)라고 불러요. 아래 버튼으로 새 보관함 만들기 화면으로 바로 가세요.",
        },
        { type: "link", href: "https://github.com/new", label: "새 보관함 만들기 화면 열기", urlCheck: "github.com" },
        {
          type: "list",
          ordered: true,
          items: [
            "Repository name(보관함 이름) 칸에 my-page 라고 입력하세요",
            "Public(공개)이 선택되어 있는지 확인하세요 — 인터넷에 전시하려면 공개여야 해요",
            "다른 건 건드리지 말고, 맨 아래 초록색 [Create repository] 버튼을 누르세요",
          ],
        },
        { type: "copy", label: "보관함 이름", text: "my-page" },
        { type: "shot", captureId: "ch5-new-repo", caption: "새 보관함 만들기 화면 — 입력할 곳과 버튼 위치" },
        {
          type: "safe",
          text: "Public(공개)이라고 해서 개인정보가 노출되는 건 아니에요. 우리가 올리는 건 우리가 직접 만든 자기소개 페이지 파일 하나뿐입니다.",
        },
      ],
    },
    {
      id: "upload",
      title: "index.html 파일 올리기",
      blocks: [
        {
          type: "p",
          text: "보관함이 만들어지면 영어가 가득한 화면이 나와요. 겁먹지 마세요 — 우리가 쓸 건 딱 한 줄입니다. 화면 중간쯤의 \"uploading an existing file\"(기존 파일 업로드)이라는 파란 링크를 찾아서 누르세요.",
        },
        { type: "shot", captureId: "ch5-upload-link", caption: "'uploading an existing file' 링크 위치" },
        {
          type: "p",
          text: "파일을 끌어다 놓는 화면이 나오면:",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "바탕 화면의 my-page 폴더를 여세요",
            "index.html 파일을 마우스로 끌어서(드래그) GitHub 화면의 점선 상자 위에 놓으세요",
            "파일이 올라간 게 보이면, 아래 초록색 [Commit changes] 버튼을 누르세요",
          ],
        },
        { type: "shot", captureId: "ch5-drag-drop", caption: "파일을 끌어다 놓는 화면과 Commit changes 버튼" },
        {
          type: "tip",
          text: "Commit(커밋)은 \"보관함에 도장 쾅 찍고 저장\"이라는 뜻이에요. 앞으로 자주 보게 될 단어입니다.",
        },
      ],
      checkpoint: {
        question: "보관함 화면에 index.html 파일이 보이나요?",
        stuck: [
          {
            symptom: "'uploading an existing file' 링크를 못 찾겠어요",
            solution: [
              {
                type: "p",
                text: "주소창을 이용하면 바로 갈 수 있어요. 주소창에 github.com/내사용자이름/my-page/upload 라고 입력하세요. (내사용자이름 부분은 가입할 때 만든 username으로 바꾸세요)",
              },
            ],
          },
          {
            symptom: "드래그가 잘 안 돼요 (마우스가 어려워요)",
            solution: [
              {
                type: "list",
                ordered: true,
                items: [
                  "점선 상자 안의 \"choose your files\"(파일 선택)라는 파란 글씨를 누르세요",
                  "파일 선택 창이 열리면 바탕 화면 > my-page > index.html을 찾아 더블클릭하세요",
                  "초록색 [Commit changes] 버튼을 누르세요",
                ],
              },
            ],
          },
        ],
      },
    },
  ],
};
