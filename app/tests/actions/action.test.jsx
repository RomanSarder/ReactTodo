const expect = require('expect');
const actions = require('actions');

describe('Actions', () => {
    it('should generate SET_SEARCH_TEXT action', () => {
        let action = {
            type: "SET_SEARCH_TEXT",
            searchText: 'test'
        };
        let response = actions.setSearchText(action.searchText);
        expect(response).toEqual(action);
    });
    it('should generate ADD_TODO action', () => {
        let action = {
            type: 'ADD_TODO',
            text: 'test'
        };
        let response = actions.addTodo(action.text);
        expect(response).toEqual(action);
    });
    it('should generate ADD_TODOS action object', () => {
        let todos = [{
            id: 111,
            text: 'test',
            completed: false,
            completedAt: undefined,
            createdAt: 33000
        }];
        let action = {
            type: 'ADD_TODOS',
            todos
        };
        let res = actions.addTodos(todos);
        expect(res).toEqual(action);
    });
    it('should generate TOGGLE_SHOW_COMPLETED action', () => {
        let action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        };
        let response = actions.toggleShowCompleted();
        expect(response).toEqual(action);
    });
    it('should generate TOGGLE_TODO action', () => {
        let action = {
            type: 'TOGGLE_TODO',
            id: 3
        }
        let response = actions.toggleTodo(3);
        expect(response).toEqual(action);
    });
});