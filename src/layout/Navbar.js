import React, { Component } from "react";
import './layout.css';

export class Navbar extends Component {
  render() {
    return (
    <div className="navbar">
      <div className="name">
        Ania Yee-Boguinskaia
      </div>
      <div className="links">
      <div className="link left">
        <a href="/">PORTFOLIO</a> 
      </div>
      <div className="link right">
        <a href="/about">ABOUT</a>
      </div>
      </div>
    </div>
    ); 
  }
}

export default Navbar;