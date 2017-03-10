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
});