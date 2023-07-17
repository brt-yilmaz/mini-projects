const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("input")! as HTMLInputElement;
const form = document.querySelector("form")!;
const toDoList = document.querySelector("#toDoContainer");

interface Todo {
  text: string;
  completed: boolean;
}

let toDos: Todo[] = readToDos();
console.log(toDos);
toDos.forEach(createToDo);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };
  toDos.push(newTodo);
  createToDo(newTodo);
  saveToDos();
  input.value = "";
});

function createToDo(todo: Todo) {
  const newLI = document.createElement("li");
  newLI.textContent = todo.text;

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.checked = todo.completed;
  newLI.append(checkBox);
  toDoList?.append(newLI);
}

function readToDos(): Todo[] {
  const toDosJSON = localStorage.getItem('toDos');
  console.log(toDosJSON);

  if (toDosJSON === null) return [];

  return JSON.parse(toDosJSON);
}

function saveToDos() {
  localStorage.setItem('toDos', JSON.stringify(toDos));
}

toDoList?.addEventListener('change', function(e) {
  if (e.target instanceof HTMLInputElement && e.target.type === 'checkbox') {
    const todoText = e.target.parentElement?.textContent?.trim(); // Add conditional checks

    if (todoText) {
      const todo = toDos.find(todo => todo.text === todoText);

      if (todo) {
        todo.completed = e.target.checked;
        saveToDos();
      }
    }
  }
});
