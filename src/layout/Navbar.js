import React, { Component } from "react";
import './layout.css';

export class Navbar extends Component {
  render() {
    return (
    <div className="sidenav">
      <h1>ANIA</h1>
      <h3><a href="/">Portfolio</a></h3>
      <h3><a href="/about">About</a></h3>
    </div>
    ); 
  }
}

export default Navbar;