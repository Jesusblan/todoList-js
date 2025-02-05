let todoList = []
let projectList = []

//todos
class todo {
    constructor(title, description, limitDate, priority, checked){
        this.title = title;
        this.description = description;
        this.limitDate = limitDate;
        this.priority = priority;
        this.checked = checked;
    }
}


function addTodo(title, description, limitDate, priority, checked){
    let newTodo = new todo(title, description, limitDate, priority, checked);
    todoList.push(newTodo);
    
}
addTodo("titulazo", "ta guapo", "pendiente", "urgente", false);
addTodo("titulazo", "ta guapo", "pendiente", "urgente", false);
addTodo("titulazo", "ta guapo", "pendiente", "urgente", false);

//projects
class project {
    constructor(title, priority){
        this.title = title;
        this.priority = priority;
        this.todo = [];
    }
}

function addProject(title, limit){
    let newProject = new project(title, limit);
    projectList.push(newProject)
}

addProject("app", "important")
addProject("web", "medium")

//

export {todoList, projectList}