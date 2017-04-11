const React = require('react');
const ReactDOM = require('react-dom');
const {Provider} = require('react-redux');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
import TodoApp from 'TodoApp';
const actions = require('actions');
const store = require('configureStore').configure();
const TodoApi = require('TodoApi');
import Login from 'Login';

store.dispatch(actions.startAddTodos());

//Load Foundation
require('foundation-sites/dist/css/foundation.min.css');
require('applicationStyles');

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/">
				<Route path="todos" component={TodoApp}/>
				<IndexRoute component={Login}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);
