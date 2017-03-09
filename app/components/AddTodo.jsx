const React = require('react');

const AddTodo = React.createClass({
    onSubmit: function(e) {
        e.preventDefault();
        let todoText = this.refs.newtodo.value;

        if(todoText && todoText.length > 0 ) {
            this.refs.newtodo.value = "";
            this.props.onAddTodo(todoText);
        }
    },
    render: function() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" ref="newtodo" placeholder="Enter new todo's text"/>
                    <button className="button hollow">Add todo</button>
                </form>
            </div>
        );
    }
});

module.exports = AddTodo;