const loginForm = document.getElementById("login-form");
const loginFormTitle = document.getElementById("login-form__title");
const loginFormUsername = document.getElementById("login-form__username");
const loginFormBtn = document.getElementById("login-form__btn");
const HIDDEN = "hidden";

document.body.classList.add("center");

//* 버튼 클릭 함수
function handleLoginBtn(event) {
  event.preventDefault();
  const username = loginFormUsername.value;
  localStorage.setItem("username", username);
  if (loginFormUsername.value === "") {
    loginFormUsername.reportValidity();
    // 유효성 검사 메시지 표시
  } else {
    const icon = document.createElement("i");
    loginFormTitle.classList.add(HIDDEN);
    loginFormTitle.textContent = `${username} 님 환영합니다!`;
    loginFormUsername.classList.add(HIDDEN);
    loginForm.replaceChild(icon, loginFormUsername);
    // 자식 노드 교체
    icon.classList.add("fas", "fa-circle-notch", "login-form__icon");
    setTimeout(() => {
      icon.classList.remove("fa-cicle-notch");
      icon.classList.add("fa-check", "icon--green");
    }, 2000);
    loginFormBtn.classList.add(HIDDEN);
    loginFormBtn.removeEventListener("click", handleLoginBtn);
    setTimeout(() => {
      loginFormTitle.classList.remove(HIDDEN);
    }, 2500);
    setTimeout(() => {
      loginForm.classList.add("form--ani");
    }, 3500);
    setTimeout(() => {
      document.body.classList.remove("center");
    }, 4500);
  }
}

//* 이벤트
loginFormBtn.addEventListener("click", handleLoginBtn);
