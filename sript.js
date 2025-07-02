// Get the todo list and form elemnet
const toDoList = document.getElemntById("todo-list");
const todoForm = document.getElementById("todo-form");
const toDoInput= document.getElementById("todo-input");

//initializing an empty array to store the todos
let todos = [];

//function to add a new todo
function addTodo(todo){
  todos.push(todo);
  renderTodos();
}

// fucntion to render todos 
function renderTodos(){
  toDoList.innerHTML = '';
  todos.forEach((todo, index)=>
  {
    const Li = document.createElement('Li')
    Li.textContext = todo;
    toDoList.appendChild(Li);

  });
}

//event listener for form submission
todoForm.addEventListener('submit', (e) => {
  e.prevwentDefault();
  const todo = toDoInput.value.trim();
  if (todo) {
    addTodo(todo);
    toDoInput.value = ''; 
  }
}); 

    