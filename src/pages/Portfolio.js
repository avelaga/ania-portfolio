import React, { Component } from "react";
import Img from "../images/1.png";
import '../App.css';

export class Portfolio extends Component {
  render() {
    return <div className="page flex">
      <img src={Img} className="portfolio-img"></img>
      <img src={Img} className="portfolio-img"></img>
      <img src={Img} className="portfolio-img"></img>
      <img src={Img} className="portfolio-img"></img>
      <img src={Img} className="portfolio-img"></img>
      <img src={Img} className="portfolio-img"></img>
      <img src={Img} className="portfolio-img"></img>
    </div>;
  }
}

export default Portfolio;