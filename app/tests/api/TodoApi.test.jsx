const expect = require('expect');
const TodoApi = require('TodoApi');

describe('TodoApi', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });
    it('should exist', () => {
        expect(TodoApi).toExist();
    });
    describe('setTodos', () => {
        it('should set valid todo array', () => {
            let todos = [{
                id: 23,
                text: 'test',
                completed: false
            }];
            TodoApi.setTodos(todos);
            let actualTodos = JSON.parse(localStorage.getItem('todos'));
            expect(actualTodos).toEqual(todos);
        });
        it('should not set invalid todo array', () => {
            let badTodos = {a: 'b'};
            TodoApi.setTodos(badTodos);
            expect(localStorage.getItem('todos')).toBe(null);
        });
    });
    describe('getTodos', () => {
        it('should return empty array for bad localstorage data', () => {
            let actualTodos = TodoApi.getTodos();
            expect(actualTodos).toEqual([]);
        });
        it('should return array if valid data', () => {
            let todos = [{
                id: 23,
                text: 'test',
                completed: false
            }];
            localStorage.setItem('todos', JSON.stringify(todos));
            expect(TodoApi.getTodos()).toEqual(todos);

        });
    });
    describe('filterTodos', () => {
        let todos = [{
            id: 1,
            text: 'todo1',
            completed: true
        }, 
        {
            id: 2,
            text: 'todo2',
            completed: false
        },
        {
            id: 3,
            text: 'todo3',
            completed: true
        }];
        it('should return all items if showComplete true', () => {
            let filteredTodos = TodoApi.filterTodos(todos, true, "");
            expect(filteredTodos.length).toBe(3);
        });
        it('should return only uncompleted items if showComplete false', () => {
            let filteredTodos = TodoApi.filterTodos(todos, false, "");
            expect(filteredTodos.length).toBe(1);
        });
    });
});