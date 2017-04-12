const React = require('react');
const ReactDOM = require('react-dom');
const {Provider} = require('react-redux');
const {hashHistory} = require('react-router');
const actions = require('actions');
const store = require('configureStore').configure();
import firebase from 'app/firebase';
import router from 'app/router';


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
		store.dispatch(actions.login(user.uid));
    hashHistory.push('/todos');
  } else {
		store.dispatch(actions.logout());
		hashHistory.push('/');
  }
});

store.dispatch(actions.startAddTodos());

//Load Foundation
require('foundation-sites/dist/css/foundation.min.css');
require('applicationStyles');


ReactDOM.render(
	<Provider store={store}>
		{router}
	</Provider>,
	document.getElementById('app')
);
