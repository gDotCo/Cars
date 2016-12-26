import React from 'react';
import TodoList from './TodoList.js';
import TodoForm from './TodoForm.js';
/* [TODO APP] */
var TodoApp = React.createClass({
	getInitialState: function(){
		return {items: []};
	},
	updateItems: function(newItem){
		var allItems = this.state.items.concat([newItem]);
		this.setState({items: allItems});
	},
	render: function(){
		return (
			<div>
				<TodoList items={this.state.items}/>
				<TodoForm onFormSubmit={this.updateItems}/>
			</div>
		);
	}
});
export default TodoApp;