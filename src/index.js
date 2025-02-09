import "./styles.css";
import { todoList, projectList } from "./home.js";
export {container}
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

function renderProjects(){
    container.innerHTML = "";
    container.setAttribute("id", "projectContainer");

    projectList.forEach(project => {
        let projectCard = document.createElement("div");
        projectCard.classList.add("projectCard");
        projectCard.innerHTML = `<h4>${project.title}</h4> <p>Limit date: ${project.limit}</p>`;
        container.appendChild(projectCard);
    })
}

document.querySelector("#projects").addEventListener("click", () =>{
    container.setAttribute("id", "projectContainer");
    renderProjects();
})


//Home section

document.querySelector("#home").addEventListener("click", () => {
    container.setAttribute("id", "homeContainer");
    container.innerHTML = "";

    let homeProjects = document.createElement("div");
    homeProjects.classList.add("homeProject");
    container.appendChild(homeProjects);

    function renderHome(){
        projectList.forEach(project => {
            let projectCard = document.createElement("div");
            projectCard.classList.add("projectCard");
            projectCard.innerHTML = `<h4>${project.title}</h4> <p>Limit date: ${project.limit}</p>`;
            homeProjects.appendChild(projectCard);
        })

        todoList.forEach(todo => {
            let todoCard = document.createElement("div");
            todoCard.classList.add("card");
            todoCard.innerHTML = `<h4>${todo.title}</h4> <p>${todo.description}</p> <p>${todo.limitDate}</p> <p>${todo.priority}</p> <p>${todo.checked}</p>`;
            homeTodos.appendChild(todoCard);
        })
    
    }


    let homeTodos = document.createElement("div");
    homeTodos.classList.add("homeTodos");
    container.appendChild(homeTodos);
    renderHome();
})




document.querySelector("#home").click();