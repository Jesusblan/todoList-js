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
addTodo("titulazo", "ta guapo", "pendiente", "urgente", false);
addTodo("titulazo", "ta guapo", "pendiente", "urgente", false);
addTodo("titulazo", "ta guapo", "pendiente", "urgente", false);

//projects
class project {
    constructor(title, priority) {
        this.title = title;
        this.priority = priority;
        this.todo = [];
    }
}

function addProject(title, priority) {
    let newProject = new project(title, priority);
    projectList.push(newProject)
}

addProject("app", "important")
addProject("web", "medium")





//Add task forms
document.querySelector("#forms").addEventListener("click", ()=> {
    container.setAttribute("id", "addForm");
    container.innerHTML = "";

    let todoForm = document.createElement("div");
    todoForm.classList.add("todoForm");

    todoForm.innerHTML = `
    <form id="addedTodo" action="home.js" method="post">
        <label for="title">Title: </label>
        <input type="text" name="title" id="title" placeholder="To do title...">
        
        <label for="description">Description: </label>
        <input type="text" name="description" id="description" placeholder="To do description...">
        
        <label for="limitDate">Limit date: </label>
        <input type="date" name="limitDate" id="limitDate">
        
        <label for="priority">Priority:</label>
        <select name="priority">
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
    <form id="addedProject" action="home.js" method="post">

        <label for="title">Title: </label>
        <input type="text" name="title" id="titleProject" placeholder="Project title...">
        
        <label for="priority">Priority:</label>
        <select name="Priority">
            <option>Urgent</option>
            <option>Medium</option>
            <option>For later</option>
        </select>
        
        <button id="submitProject">Submit</button>
    </form>
    `
    container.appendChild(projectForm);

})

//get form data




//

export { todoList, projectList}