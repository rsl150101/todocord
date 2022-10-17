const logInForm = document.getElementById("login-form");
const logInFormTitle = document.getElementById("login-form__title");
const logInFormUsername = document.getElementById("login-form__username");
const logInFormBtn = document.getElementById("login-form__btn");
const mainScreen = document.getElementById("main-screen");
const logOut = document.getElementById("log-out");
const HIDDEN = "hidden";

//* 로그인 함수
function logIn(username) {
  const icon = document.createElement("i");
  logInFormTitle.classList.add(HIDDEN);
  logInFormTitle.textContent = `${username} 님 환영합니다!`;
  logInFormUsername.classList.add(HIDDEN);
  logInForm.replaceChild(icon, logInFormUsername);
  // 자식 노드 교체
  icon.classList.add("fas", "fa-circle-notch", "login-form__icon");
  setTimeout(() => {
    icon.classList.remove("fa-cicle-notch");
    icon.classList.add("fa-check", "icon--green");
  }, 2000);
  logInFormBtn.classList.add(HIDDEN);
  logInFormBtn.removeEventListener("click", handleLoginBtn);
  setTimeout(() => {
    logInFormTitle.classList.remove(HIDDEN);
  }, 2500);
  setTimeout(() => {
    logInForm.classList.add("form--ani");
  }, 3500);
  setTimeout(() => {
    logInForm.remove();
    mainScreen.classList.remove(HIDDEN);
  }, 4500);
}

//* 버튼 클릭 함수
function handleLoginBtn(event) {
  event.preventDefault();
  const username = logInFormUsername.value;
  localStorage.setItem("username", username);
  if (logInFormUsername.value === "") {
    logInFormUsername.reportValidity();
    // 유효성 검사 메시지 표시
  } else {
    logIn(username);
  }
}

//* 로그아웃 함수
function handleLogOut() {}

//* 이벤트
logInFormBtn.addEventListener("click", handleLoginBtn);
logOut.addEventListener("click", handleLogOut);
