class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T2",
            "description": "D1",
            "done": false
        },{
            "title": "T3",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
        // Your code here
         this.todo_data.todo.push(todo) 
    }

    delete_todo(id){
        // Your code here
        console.log("Before deleting : ",this.todo_data.todo);
        this.todo_data.todo.splice(3, 1);
        console.log("After deleting : ",this.todo_data.todo);
        return this.todo_data.todo;
    }

    update_todo(id, todo){
        // Your code here
        //todo={"title" : "T2", "description": "D2", "done":false}
        //let index = 3;
        //let ElementIndex = this.todos.todo.findIndex((todo) => todo.id == id);
        console.log("Before update: ", this.todo_data.todo[id]);
        this.todo_data.todo[id] = todo;
        // this.todo_data.todo[id].description = todo.description;
        // this.todo_data.todo[id].done = todo.done;
        console.log("After update: ", this.todo_data.todo[id]);
        return this.todo_data.todo[id];

    }
}


module.exports= todoservice;