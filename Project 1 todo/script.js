const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");


todoButton.addEventListener("click", addTodo);



function addTodo(event) {
    event.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.append(newTodo);

    const comoletedButton = document.createElement('button');
    comoletedButton.innerHTML = '<i class="fas fa-check"></i>';
    comoletedButton.classList.add("complete-btn");
    todoDiv.append(comoletedButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    todoDiv.append(deleteButton);

    todoList.append(todoDiv);

    todoInput.value = "";
    comoletedButton.addEventListener("click",function(){

        todoDiv.style.textDecoration="line-through"

        
    })
    deleteButton.addEventListener('click',function(){
        todoDiv.remove()
    })
    newTodo.setAttribute('contenteditable', true)

    

}
