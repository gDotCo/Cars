import React from 'react';
import { render } from 'react-dom';
import AppRouter from './App';

render(<AppRouter/>,document.getElementById('root'));

// import React, { Component } from 'react';
// import { render } from 'react-dom';
// // Import routing components
// import {Router, Route, IndexRoute, browserHistory} from 'react-router';

// import CarList from './car/CarList.jsx'
// import CarDetail from './car/CarDetail.jsx'
// import AddCar from './car/AddCar'
// //import Car from './car/car.jsx'

// const data = [
//     {
//       id:1,
// 	background: '#2980B9',
// 	imgSrc: 'https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg',
// 	imgBorderColor: '#015389',
// 	name: 'James Stuart',
// 	title: 'Training Manager',
// 	mobileNo: '0491 570 156',
// 	location: 'Sydney, Australia',
// 	role: 'Starting the company in sales, James is now responsible for overseeing all staff training. James mainly focuses on getting new employees up to speed with the practices and procedures Hunter & Co has continually refined over the last 50 years.'
// }, {
//   id:2,
// 	background: '#27AE60',
// 	imgSrc: 'https://s3.amazonaws.com/uifaces/faces/twitter/glif/128.jpg',
// 	imgBorderColor: '#086C32',
// 	name: 'Isaac Pullman',
// 	title: 'Creative Director',
// 	mobileNo: '0491 570 157',
// 	location: 'Brisbane, Australia',
// 	role: "Isaac has overseen all of Hunter and Co's creative efforts for the last five years. He's ability to generate a shared vision between teams throughout the company has been his biggest achievement."
// }, {
//       id:3,
// 	background: '#2980B9',
// 	imgSrc: 'https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg',
// 	imgBorderColor: '#015389',
// 	name: 'James Stuart',
// 	title: 'Training Manager',
// 	mobileNo: '0491 570 156',
// 	location: 'Sydney, Australia',
// 	role: 'Starting the company in sales, James is now responsible for overseeing all staff training. James mainly focuses on getting new employees up to speed with the practices and procedures Hunter & Co has continually refined over the last 50 years.'
// }, {
//   id:4,
// 	background: '#27AE60',
// 	imgSrc: 'https://s3.amazonaws.com/uifaces/faces/twitter/glif/128.jpg',
// 	imgBorderColor: '#086C32',
// 	name: 'Isaac Pullman',
// 	title: 'Creative Director',
// 	mobileNo: '0491 570 157',
// 	location: 'Brisbane, Australia',
// 	role: "Isaac has overseen all of Hunter and Co's creative efforts for the last five years. He's ability to generate a shared vision between teams throughout the company has been his biggest achievement."
// },
//     {
//       id:5,
// 	background: '#2980B9',
// 	imgSrc: 'https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg',
// 	imgBorderColor: '#015389',
// 	name: 'James Stuart',
// 	title: 'Training Manager',
// 	mobileNo: '0491 570 156',
// 	location: 'Sydney, Australia',
// 	role: 'Starting the company in sales, James is now responsible for overseeing all staff training. James mainly focuses on getting new employees up to speed with the practices and procedures Hunter & Co has continually refined over the last 50 years.'
// }, {
//   id:6,
// 	background: '#27AE60',
// 	imgSrc: 'https://s3.amazonaws.com/uifaces/faces/twitter/glif/128.jpg',
// 	imgBorderColor: '#086C32',
// 	name: 'Isaac Pullman',
// 	title: 'Creative Director',
// 	mobileNo: '0491 570 157',
// 	location: 'Brisbane, Australia',
// 	role: "Isaac has overseen all of Hunter and Co's creative efforts for the last five years. He's ability to generate a shared vision between teams throughout the company has been his biggest achievement."
// }
// ];

// export default class AppRouter extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { items: data }
//   };
//   updateItems(newItem){
// 		var allItems = this.state.items.concat([newItem]);
// 		this.setState({items: allItems});
// 	};

//   render() {
//     console.log('Item count on Router render:', this.state.items.length);
//     return (
//  	<Router history={browserHistory}>
// 	  <Route path="/" component={CarList} data={this.state}/>
// 	  <Route path=":id" component={CarDetail} data={this.state}/>
//   	</Router>
//      )
//   }
// }