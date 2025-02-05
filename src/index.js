import "./styles.css";
import { todoList } from "./home.js";

const container = document.querySelector("#container");

//"To do" section

function renderTodos(){
    container.innerHTML = "";
    container.setAttribute("id", "container");

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

//projects section

document.querySelector("#projects").addEventListener("click", () =>{
    container.setAttribute("id", "projectContainer");
    container.innerHTML = "projects";
})



//Home section
document.querySelector("#home").addEventListener("click", () => {
    container.setAttribute("id", "homeContainer");
    container.innerHTML = "home";
})