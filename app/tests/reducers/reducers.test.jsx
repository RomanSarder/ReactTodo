const expect = require('expect');
const df = require('deep-freeze-strict');
const reducers = require('reducers');

describe('Reducers', () => {
    describe('Search text reducer', () => {
        it('should set search text', () => {
            let action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'test'
            };
            let res = reducers.searchTextReducer(df(''), df(action));
            expect(res).toEqual(action.searchText);
        });
    });
    describe('Show Completed reducer', () => {
        it('should toggle show completed value', () => {
            let action = {
                type: 'TOGGLE_SHOW_COMPLETED',
            };
            let res = reducers.showCompletedReducer(df(false), df(action));
            expect(res).toEqual(true);
        });
    });
    describe('Todos reducer', () => {
        it('should add new todo', () => {
            let action = {
                type: 'ADD_TODO',
                text: 'test'
            };
            let res = reducers.todosReducer(df([]), df(action));
            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual(action.text);
        });
        it('should toggle todo completed', () => {
            let todo = [{
                    id: 1,
                    text: 'test',
                    completed: true,
                    createdAt: 123,
                    completedAt: 125
            }];
            let action = {
                type: 'TOGGLE_TODO',
                id: 1
            };
            let res = reducers.todosReducer(df(todo), df(action));
            expect(res[0].completed).toEqual(false);
            expect(res[0].completedAt).toEqual(undefined);
        });
    });
});