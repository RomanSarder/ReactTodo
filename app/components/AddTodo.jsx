import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

export class AddTodo extends React.Component{
    handleSubmit (e) {
        e.preventDefault();
        let {dispatch} = this.props;
        let todoText = this.refs.newtodo.value;

        if(todoText && todoText.length > 0 ) {
            this.refs.newtodo.value = "";
            dispatch(actions.startAddTodo(todoText));
        } else {
            this.refs.newtodo.focus();
        }
    }
    render () {
        return (
            <div className="container__footer">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="newtodo" placeholder="What do you need to do"/>
                    <button className="button hollow expanded">Add todo</button>
                </form>
            </div>
        );
    }
};
export default connect()(AddTodo);