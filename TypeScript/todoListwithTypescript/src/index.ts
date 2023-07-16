const btn = document.getElementById('btn')! as HTMLButtonElement; // type comes from tsconfig lib:[] , default changes depends on target and ! is Non-Null Assertion Operator
const input = document.getElementById('input')! as HTMLInputElement; // type assertion
const form = document.querySelector('form')! // if you write element name directly typeScript can recognize correct type without type assertion
const toDoList = document.querySelector('#toDoContainer');

form.addEventListener('submit', function(e){
  e.preventDefault(); // according to context typeScript can determine type of event
  const newTodoText = input.value;
  const newLI = document.createElement('li');
  newLI.textContent = newTodoText; 
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  newLI.append(checkBox);
  toDoList?.append(newLI); // without non-null assertion operator (!), you must add ? in order to handle null case 

  input.value= ''
})

