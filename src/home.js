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
    constructor(title, limit){
        this.title = title;
        this.limit = limit;
        this.todo = [];
    }
}

function addProject(title, limit){
    let newProject = new project(title, limit);
    projectList.push(newProject)
}


//

export {todoList}