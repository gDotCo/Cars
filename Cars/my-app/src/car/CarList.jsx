import React, { Component } from 'react';
import CarListItem from './CarListItem';
import AddCar from './AddCar';
import { Link } from 'react-router';
import axios from 'axios';


class AddCarCard extends Component{
    render(){
        //const transform = `translate3d(0,${topOffset - offset}px,0)`;
        const cardStyles = {
			background: 'red',
            height:'60px',
            width:'60%'
		}
         return (
             <Link 
             to='/AddCar'>
            <div style={cardStyles}>
            +
            </div>
            </Link>
        ) 
    }
}

class CarList extends Component {  
   constructor(props) {
        super(props)
        this.state = { items:  [] }
        //console.log(this.props)
    }
  componentDidMount(){
      var _this = this;
      axios
        .get("http://localhost:29607/ImageLDL")
        .then(function(result) {    
            _this.setState({
            items: result.data
            });
            console.log(result)
        })
    }
  
  updateItems(newItem){
      console.log(newItem)
		 var allItems = this.state.items.concat([newItem]);
		 this.setState({items: allItems});
	};
    render(){
        const cars = this.state.items;
        return (
            <div>
                  <AddCarCard /> 
                <CarListItem data={cars}/>
            </div>
        );
    }
}

export default CarList;
