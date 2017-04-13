import Todo from 'Todo';
import React from 'react';
import {connect} from 'react-redux';
import TodoApi from 'TodoApi'

export class TodoList extends React.Component {
    render () {
        let {todos, showCompleted, searchText} = this.props;
        let renderTodos = () => {
            let filtered = TodoApi.filterTodos(todos, showCompleted, searchText);
            if(filtered.length === 0) {
                return (
                    <p className="container__message">Nothing to to</p>
                );
            } 
            return TodoApi.filterTodos(todos, showCompleted, searchText).map((todo) => {
                return (
                    <Todo key={todo.id} {...todo}/>
                );
            });
        };
        return (
            <div>
                {renderTodos()}
            </div>
        );
    }
};

export default connect(
    (state) => {
        return state;
    }
)(TodoList);