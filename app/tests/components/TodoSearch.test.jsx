import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';
import {TodoSearch} from 'TodoSearch';

describe('TodoSearch', () => {
    it('should exist', () => {
        expect(TodoSearch).toExist();
    });
    it('should dispatch setSearchText on input change', () => {
        let searchText = 'Dog';
        let spy = expect.createSpy();
        let action = {
            type: 'SET_SEARCH_TEXT',
            searchText
        }
        let todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>)
        todoSearch.refs.searchText.value = searchText;
        TestUtils.Simulate.change(todoSearch.refs.searchText);
        expect(spy).toHaveBeenCalledWith(action);    
    });
    it('should dispatch TOGGLE_SHOW_COMPLETED when checked', () => {
        let spy = expect.createSpy();
        let action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        }
        let todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>)
        todoSearch.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);
        expect(spy).toHaveBeenCalledWith(action);
    });
});