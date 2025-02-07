import "./styles.css";
import { todoList, projectList } from "./home.js";

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
    homeProjects.classList.add("homeProjects");
    container.appendChild(homeProjects);

    let homeTodos = document.createElement("div");
    homeTodos.classList.add("homeTodos");
    container.appendChild(homeTodos);
  
})


//Add task section
document.querySelector("#forms").addEventListener("click", ()=> {
    container.setAttribute("id", "addForm");
    container.innerHTML = "";

    let todoForm = document.createElement("div");
    todoForm.classList.add("todoForm");

    todoForm.innerHTML = `
    <form id="addedTodo" action="index.js" method="post">
        <label for="title">Title: </label>
        <input type="text" id="title" placeholder="To do title...">
        
        <label for="description">Description:  </label>
        <input type="text" id="description" placeholder="To do description...">
        
        <label for="limitDate">Limit date: </label>
        <input type="date" id="limitDate">
        
        <label for="priority">Priority:  </label>
        <input type="text" id="priority" placeholder="Urgent...">
        
        <label for="status">Done?</label>
        <input type="checkbox" id="status" value="off">
        
        <button id="submit">Submit</button>
    </form>
    `
    container.appendChild(todoForm);


    let projectForm = document.createElement("div");
    projectForm.classList.add("projectForm");

    projectForm.innerHTML = `
    <form id="addedProject" action="index.js" method="post">

        <label for="title">Title: </label>
        <input type="text" id="title" placeholder="Project title...">
        
        <label for="priority">Priority:  </label>
        <input type="text" id="priority" placeholder="Priority..">
        
        <button id="submit">Submit</button>
    </form>
    `
    container.appendChild(projectForm);

})
