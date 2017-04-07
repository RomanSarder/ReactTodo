const redux = require('redux');
const {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');

export let configure = () => {
    let reducer = redux.combineReducers({
        searchText: searchTextReducer,
        showCompleted: showCompletedReducer,
        todos: todosReducer
    });
    const store = redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    return store;
};