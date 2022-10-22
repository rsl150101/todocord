const todoUl = document.getElementById("todo-list");
const todoForm = document.getElementById("todo-form");
const todoFormInput = todoForm.querySelector('input[type="text"]');

const savedTodo = localStorage.getItem("todos");

let todoArr = [];

//* 해당 li 체크박스 변경 및 밑줄 toggle
function handleCheckBtn(event) {
  const li = event.target.parentElement;
  const liIndex = todoArr.findIndex((item) => item.id == li.id);
  if (event.target.innerText === "⬜") {
    event.target.innerText = "✅";
    event.target.nextSibling.classList.toggle("text--line-through");
    todoArr[liIndex].check = true;
  } else {
    event.target.innerText = "⬜";
    event.target.nextSibling.classList.toggle("text--line-through");
    todoArr[liIndex].check = false;
  }
  saveTodo();
}

//* 해당 li 삭제 함수
function handleDeleteBtn(event) {
  const li = event.target.parentElement;
  li.remove();
  todoArr = todoArr.filter((item) => item.id != li.id);
  saveTodo();
}

//* 입력된 값 실제 화면에 나타내는 함수
function paintTodo(todoObj) {
  const todoLi = document.createElement("li");
  const todoLiSpan = document.createElement("span");
  const checkBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  if (todoObj.check) {
    checkBtn.textContent = "✅";
    todoLiSpan.classList.add("text--line-through");
  } else {
    checkBtn.textContent = "⬜";
  }

  todoLiSpan.textContent = todoObj.text;
  deleteBtn.textContent = "🗑️";
  todoUl.appendChild(todoLi);
  todoLi.id = todoObj.id;
  todoLi.appendChild(checkBtn);
  todoLi.appendChild(todoLiSpan);
  todoLi.appendChild(deleteBtn);

  checkBtn.addEventListener("click", handleCheckBtn);
  deleteBtn.addEventListener("click", handleDeleteBtn);
}

function saveTodo() {
  localStorage.setItem("todos", JSON.stringify(todoArr));
}

//* 입력 값 제출하는 함수
function handleTodoSubmit(event) {
  event.preventDefault();
  const todoObj = {
    username,
    text: todoFormInput.value,
    id: Date.now(),
    check: false,
  };
  todoArr.push(todoObj);
  todoFormInput.value = "";
  paintTodo(todoObj);
  saveTodo();
}

//* 기존의 to-do 목록이 있으면 나타내기
if (savedTodo !== null) {
  const todoObj = JSON.parse(savedTodo);
  todoArr = todoObj;
  todoObj.forEach(paintTodo);
}

//* 이벤트
todoForm.addEventListener("submit", handleTodoSubmit);
