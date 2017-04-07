const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jquery');
const TestUtils = require('react-addons-test-utils');
const {AddTodo} = require('AddTodo');

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });
    it('should dispatch ADD_TODO when valid text', () => {
        let todoText = 'Check mail';
        let action = {
            type: 'ADD_TODO',
            text: todoText
        }
        let spy = expect.createSpy();
        let addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
        let $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.newtodo.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(action);
    });
    it('should not dispatch ADD_TODO when invalid todo text', () => {
        let spy = expect.createSpy();
        let addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
        let $el = $(ReactDOM.findDOMNode(addTodo));
        addTodo.refs.newtodo.value = "";
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toNotHaveBeenCalled();
    });
});