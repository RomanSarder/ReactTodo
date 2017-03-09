const React = require('react');

const AddTodo = React.createClass({
    handleSubmit: function(e) {
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
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="newtodo" placeholder="What do you need to do"/>
                    <button className="button hollow expanded">Add todo</button>
                </form>
            </div>
        );
    }
});

module.exports = AddTodo;