const nonsenseBar = document.getElementById("nonsense-bar");
const nonsenseText = document.getElementById("nonsense-bar__text");

//* 헛소리 배열
const nonsense = [
  "일찍 일어나는 새가 커피를 더 마신다",
  "지금 자면 꿈을 꾸지만 지금 공부하면 개피곤하다",
  "알고 계시나요? 저는 팀명으로 준님의 '런타임 테러' 가 좋았습니다",
  "프로그래밍은 쉽지 아니하지 않지 않았을 수도 아니하지 않았습니다",
  "오늘의 일은 내일의 나에게",
  "사람을 화나게 하는 방법에는 두 가지가 있는데 첫번째로는 말을 하다 마는 것이고",
  "비혼주의는 결혼으로 완성된다",
  "코딩하다가 정신 나가서 정신 나갈 때마다 여기에 글 썼습니다",
  "아니 이거 왜 안되냐고",
];

//* 헛소리 8초마다 변경
setInterval(() => {
  let randomText = Math.floor(Math.random() * nonsense.length);
  if (nonsenseText.textContent !== nonsense[randomText]) {
    nonsenseText.textContent = nonsense[randomText];
  } else {
    while (nonsenseText.textContent === nonsense[randomText]) {
      randomText = Math.floor(Math.random() * nonsense.length);
    }
    nonsenseText.textContent = nonsense[randomText];
  }
}, 8000);
