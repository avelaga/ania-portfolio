import React, { Component } from "react";
import Img from "../images/1.png";
import '../App.css';

export class Portfolio extends Component {
  render() {
    return <div className="page flex">
      <a href="/1"><img src={Img} className="portfolio-img"></img></a>
      <a href="/2"><img src={Img} className="portfolio-img"></img></a>
      <a href="/3"><img src={Img} className="portfolio-img"></img></a>
      <a href="/4"><img src={Img} className="portfolio-img"></img></a>
      <a href="/5"><img src={Img} className="portfolio-img"></img></a>
      <a href="/6"><img src={Img} className="portfolio-img"></img></a>
      <a href="/7"><img src={Img} className="portfolio-img"></img></a>
    </div>;
  }
}

export default Portfolio;