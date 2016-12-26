import React from 'react';
import TodoListItem from './TodoListItem.js';
/* [TODO LIST] */
var TodoList = React.createClass({
	render: function() {
		var createItem = function(itemText) {
			return (
				<TodoListItem>{itemText}</TodoListItem>
			);
		};
		return <ul>{this.props.items.map(createItem)}</ul>;
	}
});
export default TodoList;