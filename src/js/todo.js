const todoUl = document.getElementById("todo-list");
const todoForm = document.getElementById("todo-form");
const todoFormInput = todoForm.querySelector('input[type="text"]');

//* 해당 li 체크박스 변경 및 밑줄 toggle
function handleCheckBtn(event) {
  if (event.target.innerText === "⬜") {
    event.target.innerText = "✅";
    event.target.nextSibling.classList.toggle("text--line-through");
  } else {
    event.target.innerText = "⬜";
    event.target.nextSibling.classList.toggle("text--line-through");
  }
}

//* 해당 li 삭제 함수
function handleDeleteBtn(event) {
  event.target.parentElement.remove();
}

//* 입력된 값 실제 화면에 나타내는 함수
function paintTodo(todoText) {
  const todoLi = document.createElement("li");
  const todoLiSpan = document.createElement("span");
  const checkBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  checkBtn.textContent = "⬜";
  todoLiSpan.textContent = todoText;
  deleteBtn.textContent = "🗑️";
  todoUl.appendChild(todoLi);
  todoLi.appendChild(checkBtn);
  todoLi.appendChild(todoLiSpan);
  todoLi.appendChild(deleteBtn);

  checkBtn.addEventListener("click", handleCheckBtn);
  deleteBtn.addEventListener("click", handleDeleteBtn);
}

//* 입력 값 제출하는 함수
function handleTodoSubmit(event) {
  event.preventDefault();
  const todoText = todoFormInput.value;
  todoFormInput.value = "";
  paintTodo(todoText);
}

//* 이벤트
todoForm.addEventListener("submit", handleTodoSubmit);
