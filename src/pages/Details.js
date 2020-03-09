import React, { Component } from "react";
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
    return <div className="page">
      <DetailsCard arr={this.arr} text="i made this" />
    </div>; 
  }
}

export default Details;