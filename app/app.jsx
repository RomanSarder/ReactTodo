const React = require('react');
const ReactDOM = require('react-dom');
const {Provider} = require('react-redux');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
const TodoApp = require('TodoApp');
const actions = require('actions');
const store = require('configureStore').configure();
const TodoApi = require('TodoApi');

store.subscribe(() => {
	let state = store.getState();
	console.log('new state', state);
	TodoApi.setTodos(state.todos);
});

let initialTodos = TodoApi.getTodos();
console.log(initialTodos);
store.dispatch(actions.addTodos(initialTodos));

//Load Foundation
require('foundation-sites/dist/css/foundation.min.css');
require('applicationStyles');

ReactDOM.render(
	<Provider store={store}>
		<TodoApp/>
	</Provider>,
	document.getElementById('app')
);
