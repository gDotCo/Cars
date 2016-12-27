import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import axios from 'axios';
import { Line, Circle } from 'rc-progress';
class CarDetail extends Component {
    constructor(props) {
        super(props)
        this.state = { a:0,min:0,sec:0 }
    }
    componentDidMount(){
        var _this = this;
        const id = this.props.params.id;
        setInterval(function() {  
            _this.setState({sec:_this.state.sec+.01});
            _this.setState({a:_this.state.a+1/60,});
        }, 10);
    }
    handleRedirect(){
        browserHistory.push('/');
    }
    render(){
        return(
            <div>
            <Line percent={this.state.a} strokeWidth="1" strokeColor="#000000" />
            <br/>
            <div>
                {this.state.min}:min,{parseInt(60-this.state.sec)}sec left
            </div>
          </div>
       );
    }
}
export default CarDetail;
