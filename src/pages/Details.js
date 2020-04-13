import React, { Component } from "react";
import MediaQuery from 'react-responsive'
import DetailsCard from '../layout/DetailsCard.js';
import Img from "../images/1.png";
import '../App.css';

export class Details extends Component {
  arr = [
    Img,
    Img,
    Img
  ]

  render() {
    const id = this.props.match.params.id;
    return (
      <div>
        {/* desktop */}
        <MediaQuery minDeviceWidth={500}>
          <div className="page">
            <DetailsCard arr={this.arr} text="i made this and it looks cool and this is where i will tell u why" />
          </div>
        </MediaQuery>
        
        <MediaQuery maxDeviceWidth={500}>
        <div className="mobile-page">
            <DetailsCard arr={this.arr} text="i made this and it looks cool and this is where i will tell u why" />
          </div>
        </MediaQuery>
      </div>
    );
  }
}

export default Details;