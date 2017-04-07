const React = require('react');
const {connect} = require('react-redux');
const actions = require('actions');

export const AddTodo = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        let {dispatch} = this.props;
        let todoText = this.refs.newtodo.value;

        if(todoText && todoText.length > 0 ) {
            this.refs.newtodo.value = "";
            dispatch(actions.addTodo(todoText));
        } else {
            this.refs.newtodo.focus();
        }
    },
    render: function() {
        return (
            <div className="container__footer">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="newtodo" placeholder="What do you need to do"/>
                    <button className="button hollow expanded">Add todo</button>
                </form>
            </div>
        );
    }
});
export default connect()(AddTodo);