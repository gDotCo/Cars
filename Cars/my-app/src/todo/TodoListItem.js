import React from 'react';

/* [TODO LISTITEM] */
var TodoListItem = React.createClass({
	render: function(){
		return (
			<li>{this.props.children}</li>
		);
	}
});

export default TodoListItem;