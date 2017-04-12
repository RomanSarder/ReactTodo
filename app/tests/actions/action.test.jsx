import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import firebase, {firebaseRef} from 'app/firebase';
const expect = require('expect');
import * as actions from 'actions';

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
    it('should generate UPDATE_TODO action', () => {
        let action = {
            type: 'UPDATE_TODO',
            id: 3,
            updates: {completed: false}
        }
        let response = actions.updateTodo(action.id, action.updates);
        expect(response).toEqual(action);
    });
    it('should generate LOGIN action', () => {
        let action = {
            type: 'LOGIN',
            uid: 123
        };
        let res = actions.login(action.uid);
        expect(res).toEqual(action);
    });
    it('should generate LOGOUT action', () => {
        let action = {
            type: 'LOGOUT'
        };
        let res = actions.logout();
        expect(res).toEqual(action);
    });

    describe('Tests with firebase todos', () => {
        let testTodoRef;
        let uid;
        let todosRef;
        beforeEach((done) => {
            firebase.auth().signInAnonymously().then((user) => {
                uid = user.uid;
                todosRef = firebaseRef.child(`users/${uid}/todos`);
                return todosRef.remove();
            }).then(() => {
                testTodoRef = todosRef.push();
                return testTodoRef.set({
                text: 'Something',
                completed: false,
                createdAt: 2345});

            }).then(() => done())
              .catch(done);
        });
        afterEach((done) => {
            todosRef.remove().then(() => done());
        });
        it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
            const store = createMockStore({auth: {uid}});
            const action = actions.startToggleTodo(testTodoRef.key, true);
            store.dispatch(action).then(() => {
                const mockActions = store.getActions();
                expect(mockActions[0]).toInclude({
                    type: 'UPDATE_TODO',
                    id: testTodoRef.key,
                });
                expect(mockActions[0].updates).toInclude({
                    completed: true
                });
                expect(mockActions[0].updates.completedAt).toExist();
                done();
            }, done);
        });
        it('should dispatch startAddTodos and add existing todo to mockstore', (done) => {
            const store = createMockStore({auth: {uid}});
            const action = actions.startAddTodos();
            store.dispatch(action).then(() => {
                const mockActions = store.getActions();
                expect(mockActions[0]).toInclude({
                    type: 'ADD_TODOS',
                });
                expect(mockActions[0].todos[0]).toInclude({
                    text: 'Something',
                    completed: false,
                    createdAt: 2345
                });
                expect(mockActions[0].todos.length).toEqual(1);
                done();
            }, done);
        });
        it('should create todo and dispatch startAddTodo', (done) => {
        const store = createMockStore({auth: {uid}});
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
    });
});