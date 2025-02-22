

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });

    

    // Write all your test cases here that corresponds to software requirements

    test("Add todo", () => {
        let todo = {
            title: "todotest",
            description: "test",
            done: false
        };
        expect(todo_service.get_todos().todo.length).toEqual(3)
        todo_service.add_todo(todo);
        expect(todo_service.get_todos().todo.length).toEqual(4);
    });


    test("Delete todo", () => {
        todo_service.delete_todo('T3');
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });

    test("Update todo", () => {
        let todo = {
            title: "todotest",
            description: "test",
            done: false
        };
        let res = todo_service.update_todo('T1', todo);
        expect(res.title).toEqual('todotest');
    });

});