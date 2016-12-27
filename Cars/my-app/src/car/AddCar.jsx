import React from 'react';
import axios from 'axios';
import $ from 'jquery'
import browserHistory from 'react-router';
/* [TODO FORM] */
var AddCar = React.createClass({
	getInitialState: function() {
		return {
				name: '',
				title:'',
				imgSrc:'',
				background:''};
	},
	handleSubmit: function (e){
		var self
		e.preventDefault()
		self = this
		console.log(this.state);
		var image = {
		background: this.state.background,
		imgSrc: this.state.imgSrc,
		name: this.state.name,
		title: this.state.title
		}
		// Submit form via jQuery/AJAX
		$.ajax({
			type: 'POST',
			url: 'http://localhost:29607/ImageLDL',
			data: image
		})
		.done(function(data) {
			
		})
		.fail(function(jqXhr) {
			console.log('failed to register');
		});
		

	},
	onNameChange: function(e){
		this.setState({
			name: e.target.value
		});
	},
	onTitleChange: function(e){
		this.setState({
			title: e.target.value
		});
	},
	onImgSrcChange: function(e){
		this.setState({
			imgSrc: e.target.value
		});
	},
	onBackgroundChange: function(e){
		this.setState({
			background: e.target.value
		});
	},

	render: function(){
		return (
			<form onSubmit={this.handleSubmit}>
				Name:<input type='text' ref='name' onChange={this.onNameChange} value={this.state.name}/>
				Title:<input type='text' ref='title' onChange={this.onTitleChange} value={this.state.title}/>
				ImgSrc:<input type='text' ref='imgSrc' onChange={this.onImgSrcChange} value={this.state.imgSrc}/>
				Background:<input type='text' ref='background' onChange={this.onBackgroundChange} value={this.state.background}/>
				<input type='submit' value='Add'/>
			</form>
		);
	}
});

export default AddCar;



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