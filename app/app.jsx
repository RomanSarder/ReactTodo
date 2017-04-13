import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {hashHistory} from 'react-router';
import * as actions from 'actions';
import {configure} from 'configureStore';
import firebase from 'app/firebase';
import router from 'app/router';
const store = configure();


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
		store.dispatch(actions.login(user.uid));
		store.dispatch(actions.startAddTodos());
    hashHistory.push('/todos');
  } else {
		store.dispatch(actions.logout());
		hashHistory.push('/');
  }
});



//Load Foundation
require('foundation-sites/dist/css/foundation.min.css');
require('applicationStyles');


ReactDOM.render(
	<Provider store={store}>
		{router}
	</Provider>,
	document.getElementById('app')
);
