import React, { Component } from "react";
import './layout.css';

export class DetailsCard extends Component {
  renderImage(img) {
    return (
      <div>
        <img src={img} className="portfolio-img" />
      </div>
    );
  }

  render() {
    return (
    <div className="page">
      {this.props.text}
      <div className="flex">
        {this.props.arr.map(img => this.renderImage(img))}
      </div>

    </div>
    ); 
  }
}

export default DetailsCard;