import React, { Component } from "react";
import DetailsCard from '../layout/DetailsCard.js';
import Img from "../images/1.png";
import '../App.css';

export class Details extends Component {
  arr = [
    {
      img1 : Img,
      img2 : Img,
      img3 : Img
    }
  ]
  render() {
    const id = this.props.match.params.id;
    return <div className="page">
      <DetailsCard arr={this.arr} />
      hello thi sis page {id}
    </div>; 
  }
}

export default Details;