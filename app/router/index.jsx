import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import TodoApp from 'TodoApp';
import Login from 'Login';
import firebase from 'app/firebase';

let requireLogin = (nextState, replace, next) => {
    if (!firebase.auth().currentUser) {
        replace('/');
    }
    next();
}
export default (
    <Router history={hashHistory}>
        <Route path="/">
            <Route path="todos" component={TodoApp} onEnter={requireLogin} />
            <IndexRoute component={Login} />
        </Route>
    </Router>
)