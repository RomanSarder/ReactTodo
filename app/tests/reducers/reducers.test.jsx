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
});