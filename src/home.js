let todoList = []
let projectList = [
    asignedTodo=[]
]

//todo class
class todo {
    constructor(title, description, limitDate, priority, checked){
        this.title = title;
        this.description = description;
        this.limitDate = limitDate;
        this.priority = priority;
        this.checked = checked;
    }
}

//function to create new todo using the class
function addTodo(title, description, limitDate, priority, checked){
    let newTodo = new todo(title, description, limitDate, priority, checked);
    todoList.push(newTodo);
    
}
