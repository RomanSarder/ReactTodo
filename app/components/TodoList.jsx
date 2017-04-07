const React = require('react');
import Todo from 'Todo';
const {connect} = require('react-redux');

export const TodoList = React.createClass({
    render: function() {
        let {todos} = this.props;
        let renderTodos = () => {
            if(todos.length === 0) {
                return (
                    <p className="container__message">Nothing to to</p>
                );
            } 
            return todos.map((todo) => {
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
});

export default connect(
    (state) => {
        return {
            todos: state.todos
        };
    }
)(TodoList);