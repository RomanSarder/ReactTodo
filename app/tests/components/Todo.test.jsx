const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jquery');
const TestUtils = require('react-addons-test-utils');
import * as actions from 'actions';
import {Todo} from 'Todo';

describe('Todo', () => {
    it('should exist', () => {
        expect(Todo).toExist();
    });
    it('should dispatch UPDATE_TODO action onclick', () => {
        let todoData = {
            id: 199,
            text: 'Write todo test',
            completed: true
        };
        let action = actions.startToggleTodo(todoData.id, !todoData.completed);
        let spy = expect.createSpy();
        let todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>)
        let $el = $(ReactDOM.findDOMNode(todo));

        TestUtils.Simulate.click($el[0]);
        expect(spy).toHaveBeenCalledWith(action);
    });
});