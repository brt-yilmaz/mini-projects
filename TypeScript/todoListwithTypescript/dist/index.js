"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("input");
const form = document.querySelector("form");
const toDoList = document.querySelector("#toDoContainer");
let toDos = readToDos();

console.log(toDos);

toDos.forEach(createToDo);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newTodo = {
    text: input.value,
    completed: false,
  };
  toDos.push(newTodo);
  createToDo(newTodo);
  saveToDos();
  input.value = "";
});

function createToDo(todo) {
  const newLI = document.createElement("li");
  newLI.textContent = todo.text;
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.checked = todo.completed;
  newLI.append(checkBox);
  toDoList === null || toDoList === void 0 ? void 0 : toDoList.append(newLI);
}

function readToDos() {
  const toDosJSON = localStorage.getItem("toDos");
  console.log(toDosJSON);
  if (toDosJSON === null) return [];
  return JSON.parse(toDosJSON);
}

function saveToDos() {
  localStorage.setItem("toDos", JSON.stringify(toDos));
}
toDoList === null || toDoList === void 0
  ? void 0
  : toDoList.addEventListener("change", function (e) {
      var _a, _b;
      if (
        e.target instanceof HTMLInputElement &&
        e.target.type === "checkbox"
      ) {
        const todoText =
          (_b =
            (_a = e.target.parentElement) === null || _a === void 0
              ? void 0
              : _a.textContent) === null || _b === void 0
            ? void 0
            : _b.trim(); // Add conditional checks
        if (todoText) {
          const todo = toDos.find((todo) => todo.text === todoText);
          if (todo) {
            todo.completed = e.target.checked;
            saveToDos();
          }
        }
      }
    });
