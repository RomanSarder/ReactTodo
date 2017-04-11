import React from 'react';
import * as redux from 'react-redux';
import * as actions from 'actions';

export let Login = React.createClass({
    onLogin() { 
        let {dispatch} = this.props;
        dispatch(actions.startLogin());
    },
    render() {
        return (
            <div>
                <h1 className="page-title">Todo App</h1>
                <div className="row">
                    <div className="columns small-centered small-10 medium-6 large-4">
                        <div className="callout callout-auth">
                            <h3>Login</h3>
                            <p>
                                Login with GitHub account below
                            </p>
                            <button onClick={this.onLogin} className="button">Login with GitHub</button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
});

export default redux.connect()(Login);