const React = require('react');
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
const TodoSearch = require('TodoSearch');
const uuid = require('node-uuid');
const moment = require('moment');
const TodoApi = require('TodoApi');

const TodoApp = React.createClass({
    getInitialState: function() {
        return {
            showCompleted: false,
            searchText: "",
            todos: TodoApi.getTodos()
        };
    },
    componentDidUpdate: function(prevProps, prevState) {
        TodoApi.setTodos(this.state.todos);
    },
    handleAddTodo: function(text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ]
        })
    },
    handleSearch: function(showCompleted, searchText) {
        this.setState({
            showCompleted,
            searchText: searchText.toLowerCase()
        });
    },
    render: function() {
        let {todos, showCompleted, searchText} = this.state;
        let filteredTodos = TodoApi.filterTodos(todos, showCompleted, searchText);
        return (
            <div>
                <h1 className="page-title">Todo App</h1>
                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch onSearch={this.handleSearch} />
                            <TodoList/>
                            <AddTodo onAddTodo={this.handleAddTodo} />
                        </div>
                    </div>
                </div>               
            </div>
        );
    }
});

module.exports = TodoApp;