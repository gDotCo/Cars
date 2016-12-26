import React from 'react';
import axios from 'axios';
import $ from 'jquery'
/* [TODO FORM] */
var AddCar = React.createClass({
	getInitialState: function() {
		return {item: ''};
	},
	// handleSubmit: function(e){
	// 	console.log(this.state.item)
	// 	axios.post('http://localhost:29607/ImageLDL', {
    // 		background: '#2980B9',
	// 		imgSrc: 'https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg',
	// 		name: this.state.item,
	// 		title: 'Training Manager',
  	// 	 })
  	// 	// .then(function (response) {
    // 	// 	console.log(response);
	// 	// 	this.setState({item: ''});
  	// 	// })
  	// 	.catch(function (error) {
    // 		console.log(error);
  	// 	});	
	
	// },
	handleSubmit: function (e){
		var self
		e.preventDefault()
		self = this
		console.log(this.state);
		var image = {
		background: '#2980B9',
		imgSrc: 'https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg',
		name: this.state.item,
		title: 'Training Manager'
		}
		// Submit form via jQuery/AJAX
		$.ajax({
			type: 'POST',
			url: 'http://localhost:29607/ImageLDL',
			data: image
		})
		.done(function(data) {
			self.clearForm()
		})
		.fail(function(jqXhr) {
			console.log('failed to register');
		});

	},
	onChange: function(e){
		this.setState({
			item: e.target.value
		});
	},
	render: function(){
		return (
			<form onSubmit={this.handleSubmit}>
				<input type='text' ref='item' onChange={this.onChange} value={this.state.item}/>
				<input type='submit' value='Add'/>
			</form>
		);
	}
});

export default AddCar;