const expect = require('expect');
const actions = require('actions');

describe('Actions', () => {
    it('should generate search text action', () => {
        let action = {
            type: "SET_SEARCH_TEXT",
            searchText: 'test'
        };
        let response = actions.setSearchText(action.searchText);
        expect(response).toEqual(action);
    });
    it('should generate add todo action', () => {
        let action = {
            type: 'ADD_TODO',
            text: 'test'
        };
        let response = actions.addTodo(action.text);
        expect(response).toEqual(action);
    });
    it('should generate toggle showCompleted action', () => {
        let action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        };
        let response = actions.toggleShowCompleted();
        expect(response).toEqual(action);
    });
    it('should generate toggle todo action', () => {
        let action = {
            type: 'TOGGLE_TODO',
            id: 3
        }
        let response = actions.toggleTodo(3);
        expect(response).toEqual(action);
    });
});