import React, { Component } from 'react';
import CarListItem from './CarListItem';
import AddCar from './AddCar';
import { Link } from 'react-router';

class CarList extends Component {
   constructor(props) {
    super(props)
    this.state = { items: this.props.route.data || [] }
    console.log(this.props)
  }
    render(){
        const cars = this.state.items;
        return (
            <div>
             <Link 
                    to={"/AddCar"}>
                    AddNewITem
                   </Link>
                <CarListItem data={cars}/>
            </div>
        );
    }
}

export default CarList;
