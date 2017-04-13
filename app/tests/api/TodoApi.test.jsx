import expect from 'expect';
import TodoApi from 'TodoApi';

describe('TodoApi', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });
    it('should exist', () => {
        expect(TodoApi).toExist();
    });
    describe('filterTodos', () => {
        let todos = [{
            id: 1,
            text: 'todo1test',
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
        it('should sort by completed status', () => {
            let filteredTodos = TodoApi.filterTodos(todos, false, '');
            expect(filteredTodos[0].completed).toBe(false);
        });
        it('should return all todos if search text is empty', () => {
            let filteredTodos = TodoApi.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });
        it('should return all todos that match searched text', () => {
            let filteredTodos = TodoApi.filterTodos(todos, true, 'test');
            expect(filteredTodos.length).toBe(1);
        });
    });
});