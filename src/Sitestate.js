// Sitestate.js
import React, {Component} from 'react';
import './Sitestate.css';
import {Button} from 'react-bootstrap';
import logo from './cocktail-svgrepo-com.svg';
import logo2 from './logo192.png';

class Sitestate extends Component {
    handleClick = () => {
        this.setState({ on: !this.state.on });
      };
    constructor(props) {
         super(props);
        //  this.state = {
        //    on: false
        //  };
         this.state = {
             on: this.props.on 
             
           };
      }
      
  render() {
    const light = this.state.on? "Travel is working": "Travel is taking a break";
    return (
    
      <div className='Sitestate'>
         <img src={this.props.on? logo2 : logo} className="App-logo" alt="logo" />

        {/* <Button variant="success" size="lg" onClick={this.handleClick}  >
        {light.toUpperCase()}
        </Button>   */}
      </div>
    );
  }
}

export default Sitestate;