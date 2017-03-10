const React = require('react');

const Todo= React.createClass({
    handleClick: function() {
        this.props.onToggle(this.props.id);
    },
    render: function() {
        let {text, id, completed} = this.props;
        return (
            <div onClick={this.handleClick}>
                <input type="checkbox" checked={completed}/>
                {text}
            </div>
        );
    }
});

module.exports = Todo;