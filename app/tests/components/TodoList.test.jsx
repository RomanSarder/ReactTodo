const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jquery');
const {Provider} = require('react-redux');
const TestUtils = require('react-addons-test-utils');
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';
import {configure} from 'configureStore';

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });
    it('should render one Todo component for each todo item', () => {
        let todos = [{
            id: 1,
            text: 'Do something',
            completed: false,
            completedAt: undefined,
            createdAt: 500
        },
        {
            id: 2,
            text: 'Check',
            completed: false,
            completedAt: undefined,
            createdAt: 500
        }];
        let store = configure({
            todos
        });
        let provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <ConnectedTodoList/>
            </Provider>
        )
        let todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
        let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo );
        expect(todosComponents.length).toBe(todos.length);
    });
    it('should render message if no todos', () => {
        let todos = [];
        let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
        let $el = $(ReactDOM.findDOMNode(todoList));
        expect($el.find('.container__message').length).toBe(1);
    })
});