const redux = require('redux');
const {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');

export let configure = (initialState = {}) => {
    let reducer = redux.combineReducers({
        searchText: searchTextReducer,
        showCompleted: showCompletedReducer,
        todos: todosReducer
    });
    const store = redux.createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    return store;
};