import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import * as actions from 'actions';

export class Todo extends React.Component {
    handleClick () {
        // this.props.onToggle(this.props.id);
        this.props.dispatch(actions.startToggleTodo(this.props.id, !this.props.completed));

    }
    render () {
        let {text, id, completed, createdAt, completedAt, dispatch} = this.props;
        let todoClassName = completed ? 'todo todo-completed' : 'todo'
        let renderDate = () => {
            let message = 'Created ';
            let timestamp = createdAt;
            if(completed) {
                message = 'Completed ';
                timestamp = completedAt;
            }

            return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
        };
        return (
            <div className={todoClassName} onClick={this.handleClick.bind(this)}>
                <div>
                    <input type="checkbox" checked={completed}/>
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{renderDate()}</p> 
                </div>               
            </div>
        );
    }
};

export default connect()(Todo);