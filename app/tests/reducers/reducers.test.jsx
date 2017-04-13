import expect from 'expect';
import df from 'deep-freeze-strict';
import * as reducers from 'reducers';

describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set search text', () => {
            let action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'test'
            };
            let res = reducers.searchTextReducer(df(''), df(action));
            expect(res).toEqual(action.searchText);
        });
    });
    describe('showCompletedReducer', () => {
        it('should toggle show completed value', () => {
            let action = {
                type: 'TOGGLE_SHOW_COMPLETED',
            };
            let res = reducers.showCompletedReducer(df(false), df(action));
            expect(res).toEqual(true);
        });
    });
    describe('todosReducer', () => {
        it('should add new todo', () => {
            let action = {
                type: 'ADD_TODO',
                todo: {
                    id: 'abc123',
                    text: 'Some',
                    completed: false,
                    createdAt: 123
                }
            };
            let res = reducers.todosReducer(df([]), df(action));
            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(action.todo);
        });
        it('should update todo completed', () => {
            let todos = [{
                    id: 1,
                    text: 'test',
                    completed: true,
                    createdAt: 123,
                    completedAt: 125
            }];
            let updates = {
                completed: false,
                completedAt: null
            };
            let action = {
                type: 'UPDATE_TODO',
                id: todos[0].id,
                updates
            };
            let res = reducers.todosReducer(df(todos), df(action));
            expect(res[0].completed).toEqual(updates.completed);
            expect(res[0].completedAt).toEqual(updates.completedAt);
            expect(res[0].text).toEqual(todos[0].text);
        });
        it('should add existing todos', () => {
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
            let res = reducers.todosReducer(df([]), df(action));
            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(todos[0]);
        });
        it('should vipe out todos on logout', () => {
            let todos = [{
            id: 111,
            text: 'test',
            completed: false,
            completedAt: undefined,
            createdAt: 33000
        }];
        let action = {
            type: 'LOGOUT',
            todos
        };
            let res = reducers.todosReducer(df(todos), df(action));
            expect(res.length).toEqual(0);
        });
    });
    describe('authReducer', () => {
        it('should dispatch LOGIN action with uid', () => {
            let action = {
                type: 'LOGIN',
                uid: 12345 
            };
            let res = reducers.authReducer(df({}), df(action));
            expect(res).toEqual({
                uid: action.uid
            });

        });
        it('should dispatch LOGOUT action', () => {
            let authData = {
                uid: '123abc'
            }
            let action = {
                type: 'LOGOUT',
            };
            let res = reducers.authReducer(df(authData), df(action));
            expect(res).toEqual({});
        });
    });
});