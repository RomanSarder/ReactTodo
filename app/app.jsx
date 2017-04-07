const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
const TodoApp = require('TodoApp');

const actions = require('actions');
const store = require('configureStore').configure();

store.subscribe(() => {
	console.log('new state', store.getState());
});

store.dispatch(actions.addTodo('Clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());

//Load Foundation
require('foundation-sites/dist/css/foundation.min.css');
require('applicationStyles');

ReactDOM.render(
	
	<TodoApp/>,
	document.getElementById('app')
);
