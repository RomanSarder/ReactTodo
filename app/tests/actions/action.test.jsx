import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const expect = require('expect');
const actions = require('actions');

const createMockStore = configureMockStore([thunk]);

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
            todo: {
                id: '123abc',
                text: 'Anything we like',
                completed: false,
                createdAt: 0
            }
        };
        let response = actions.addTodo(action.todo);
        expect(response).toEqual(action);
    });
    it('should create todo and dispatch ADD_TODO', (done) => {
        const store = createMockStore({});
        const todoText = 'Test';
        store.dispatch(actions.startAddTodo(todoText)).then(() => {
            const actions = store.getActions();
            expect(actions[0]).toInclude({
                type: 'ADD_TODO'
            });
            expect(actions[0].todo).toInclude({
                text: todoText
            })
            done();
        }).catch(done);
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