import React, { Component } from "react";
import './layout.css';

export class DetailsCard extends Component {
  // images = this.props.arr[0].map(image => {
  //   return <img key={image} src={require(`../images/${image}.png`)} />
  // });

  render() {
    return (
    <div className="page">
      hi
        <img src={this.props.arr[0].img1} />
        {/* {images} */}
        hello
    </div>
    ); 
  }
}

export default DetailsCard;