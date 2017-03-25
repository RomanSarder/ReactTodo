const React = require('react');
const moment = require('moment');
const Todo= React.createClass({
    handleClick: function() {
        this.props.onToggle(this.props.id);
    },
    render: function() {
        let {text, id, completed, createdAt, completedAt} = this.props;
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
            <div onClick={this.handleClick}>
                <input type="checkbox" checked={completed}/>
                <p>{text}</p>
                <p>{renderDate()}</p>
            </div>
        );
    }
});

module.exports = Todo;