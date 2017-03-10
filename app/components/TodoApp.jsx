const React = require('react');
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');
const uuid = require('node-uuid');
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
    handleToggle: function(id) {
        let updateTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.setState({
            todos: updateTodos
        });
    },
    handleAddTodo: function(text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false
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
        let {todos} = this.state;

        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos} onToggle={this.handleToggle}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>               
            </div>
        );
    }
});

module.exports = TodoApp;