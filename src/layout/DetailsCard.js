import React, { Component } from "react";
import './layout.css';

export class DetailsCard extends Component {
  renderImage(img) {
    return (
      <div>
        <img src={img} />
      </div>
    );
  }

  render() {
    return (
    <div className="page">
      hi
        {this.props.arr.map(img => this.renderImage(img))}
        hello
    </div>
    ); 
  }
}

export default DetailsCard;