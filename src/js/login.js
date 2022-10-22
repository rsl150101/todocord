const logInForm = document.getElementById("login-form");
const logInFormTitle = document.getElementById("login-form__title");
const logInFormUsername = document.getElementById("login-form__username");
const logInFormBtn = document.getElementById("login-form__btn");
const mainScreen = document.getElementById("main-screen");
const logOutBtn = document.getElementById("logout-btn");
const user = document.getElementById("user");

const HIDDEN = "hidden";

let userList = [];
let username;
let loggedIn = false;
function userListInput() {
  if (localStorage.getItem("userList")) {
    userList = JSON.parse(localStorage.getItem("userList"));
  }
}

userListInput();

function savedUser() {
  localStorage.setItem("userList", JSON.stringify(userList));
}

//* 로그인 함수
function logIn(username) {
  const icon = document.createElement("i");
  logInFormTitle.classList.add(HIDDEN);
  logInFormTitle.textContent = `${username} 님 환영합니다!`;
  logInFormUsername.classList.add(HIDDEN);
  logInForm.replaceChild(icon, logInFormUsername);
  // 자식 노드 교체
  icon.classList.add("fas", "fa-circle-notch", "login-form__icon");
  userList.forEach((item) => {
    if (item.username == username) {
      item.loggedIn = true;
    }
  });
  savedUser();
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
    user.textContent = username;
  }, 4500);
}

//* 로그아웃 함수
function logOut() {
  const icon = logInForm.querySelector("i");
  document.body.prepend(logInForm);
  logInFormTitle.classList.remove(HIDDEN);
  logInFormTitle.textContent = "Todocord 에 오신것을 환영해요!";
  logInForm.replaceChild(logInFormUsername, icon);
  logInFormUsername.value = "";
  logInFormUsername.classList.remove(HIDDEN);
  logInFormBtn.classList.remove(HIDDEN);
  logInFormBtn.addEventListener("click", handleLoginBtn);
  logInForm.classList.remove("form--ani");
  mainScreen.classList.add(HIDDEN);
}

//* 버튼 클릭 함수
function handleLoginBtn(event) {
  event.preventDefault();
  username = logInFormUsername.value;
  const userObj = {
    username,
    loggedIn: true,
  };
  const dupleUsername = userList.filter((item) => item.username == username);
  if (dupleUsername[0] !== undefined) {
    if (dupleUsername[0].username == username) {
    } else {
      userList.push(userObj);
    }
  } else {
    userList.push(userObj);
  }
  savedUser();
  if (logInFormUsername.value === "") {
    logInFormUsername.reportValidity();
    // 유효성 검사 메시지 표시
  } else {
    logIn(username);
  }
}

//* 로그아웃 함수
function handleLogOut() {
  const userObj = JSON.parse(localStorage.getItem("userList"));
  userList = userObj;
  userList.forEach((item) => {
    if (item.username == username) {
      item.loggedIn = false;
    }
  });
  savedUser();
  logOut();
}

//* 이벤트
logInFormBtn.addEventListener("click", handleLoginBtn);
logOutBtn.addEventListener("click", handleLogOut);

//* 자동 로그인
userList.forEach((item) => {
  if (item.loggedIn) {
    username = item.username;
    logIn(username);
  }
});
