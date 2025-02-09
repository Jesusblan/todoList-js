import { container } from "./index.js";

let todoList = []
let projectList = []

//todos
class todo {
    constructor(title, description, limitDate, priority, checked) {
        this.title = title;
        this.description = description;
        this.limitDate = limitDate;
        this.priority = priority;
        this.checked = checked;
    }
}


function addTodo(title, description, limitDate, priority, checked) {
    let newTodo = new todo(title, description, limitDate, priority, checked);
    todoList.push(newTodo);

}
addTodo("Titulo", "description", "limitDate", "priority", true);

//projects
class project {
    constructor(title, date) {
        this.title = title;
        this.date = date;
        this.todo = [];
    }
}

function addProject(title, date) {
    let newProject = new project(title, date);
    projectList.push(newProject)
}
addProject("example title", "example priority");

//Add task forms
document.querySelector("#forms").addEventListener("click", ()=> {
    container.setAttribute("id", "addForm");
    container.innerHTML = "";

    let todoForm = document.createElement("div");
    todoForm.classList.add("todoForm");

    todoForm.innerHTML = `
    <form id="addedTodo">
        <label for="title">Title: </label>
        <input type="text" name="title" id="title" placeholder="To do title...">
        
        <label for="description">Description: </label>
        <input type="text" name="description" id="description" placeholder="To do description...">
        
        <label for="limitDate">Limit date: </label>
        <input type="date" name="limitDate" id="limitDate">
        
        <label for="priority">Priority:</label>
        <select name="priority" id="priority">
            <option>Urgent</option>
            <option>Medium</option>
            <option>For later</option>
        </select>

        <label for="status">Done?</label>
        <input type="checkbox" name="status" id="status" value="off">
        
        <button id="submitTodo">Submit</button>
    </form>
    `
    container.appendChild(todoForm);


    let projectForm = document.createElement("div");
    projectForm.classList.add("projectForm");

    projectForm.innerHTML = `
    <form id="addedProject">

        <label for="title">Title: </label>
        <input type="text" name="title" id="titleProject" placeholder="Project title...">
        
        <label for="limitDate">Limit date: </label>
        <input type="date" name="limitDate" id="dateProject">
        
        <button id="submitProject">Submit</button>
    </form>
    `
    container.appendChild(projectForm);






//get form data

const projectOutput = document.querySelector("#submitProject");

projectOutput.addEventListener("click", (e) =>{
    e.preventDefault();

    let title = document.querySelector("#titleProject").value;
    let date = document.querySelector("#dateProject").value;

    addProject(title, date);


})


//get todo data

const todoOutput = document.querySelector("#submitTodo");

todoOutput.addEventListener("click", (e) =>{
    e.preventDefault();

    let title = document.querySelector("#title").value;
    let description = document.querySelector("#description").value;
    let limitDate = document.querySelector("#limitDate").value;
    let priority = document.querySelector("#priority").value;
    let status = document.querySelector("#status").checked;

    addTodo(title, description, limitDate, priority, status);

})





})



//

export { todoList, projectList}