import "./styles.css";
import { todoList } from "./home.js";

const container = document.querySelector("#container");

//"To do" section

function renderTodos(){
    container.innerHTML = "";

    todoList.forEach(todo => {
        let todoCard = document.createElement("div");
        todoCard.classList.add("card");
        todoCard.innerHTML = `<h4>${todo.title}</h4> <p>${todo.description}</p> <p>${todo.limitDate}</p> <p>${todo.priority}</p> <p>${todo.checked}</p>`;
        container.appendChild(todoCard);
    })
}

document.querySelector("#todo").addEventListener("click", () =>{
    renderTodos();
})

