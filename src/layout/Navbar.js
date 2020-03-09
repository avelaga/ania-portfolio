import React, { Component } from "react";
import './layout.css';

export class Navbar extends Component {
  render() {
    return (
    <div className="sidenav">
      <div className="name">ANIA</div>
      <div className="links">
        <a href="/">Portfolio</a><br></br>
        <a href="/about">About</a>
      </div>
    </div>
    ); 
  }
}

export default Navbar;