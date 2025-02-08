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
    <form id="addedTodo">
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
        
        <button id="submitTodo">Submit</button>
    </form>
    `
    container.appendChild(todoForm);


    let projectForm = document.createElement("div");
    projectForm.classList.add("projectForm");

    projectForm.innerHTML = `
    <form id="addedProject" action="index.js" method="post">

        <label for="title">Title: </label>
        <input type="text" id="titleProject" placeholder="Project title...">
        
        <label for="priority">Priority:  </label>
        <input type="text" id="priorityProject" placeholder="Priority..">
        
        <button id="submitProject">Submit</button>
    </form>
    `
    container.appendChild(projectForm);

})



//

export { todoList, projectList}