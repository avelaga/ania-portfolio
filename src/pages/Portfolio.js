import React, { Component } from "react";
import MediaQuery from 'react-responsive'
import Img from "../images/1.png";
import '../App.css';

export class Portfolio extends Component {
  render() {
    return (
      <div>
        {/* desktop */}
        <MediaQuery minDeviceWidth={500}>
          <div className="flex">
            <a href="/1"><img src={Img} className="portfolio-img"></img></a>
            <a href="/2"><img src={Img} className="portfolio-img"></img></a>
            <a href="/3"><img src={Img} className="portfolio-img"></img></a>
            <a href="/4"><img src={Img} className="portfolio-img"></img></a>
            <a href="/5"><img src={Img} className="portfolio-img"></img></a>
            <a href="/6"><img src={Img} className="portfolio-img"></img></a>
            <a href="/7"><img src={Img} className="portfolio-img"></img></a>
          </div>
        </MediaQuery>

        {/* mobile */}
        <MediaQuery maxDeviceWidth={500}>
        <div className="flex">
            <a href="/1"><img src={Img} className="mobile-portfolio-img"></img></a>
            <a href="/2"><img src={Img} className="mobile-portfolio-img"></img></a>
            <a href="/3"><img src={Img} className="mobile-portfolio-img"></img></a>
            <a href="/4"><img src={Img} className="mobile-portfolio-img"></img></a>
            <a href="/5"><img src={Img} className="mobile-portfolio-img"></img></a>
            <a href="/6"><img src={Img} className="mobile-portfolio-img"></img></a>
            <a href="/7"><img src={Img} className="mobile-portfolio-img"></img></a>
          </div>
        </MediaQuery>
      </div>
    );
}
}

export default Portfolio;