import React, { Component } from "react";
import MediaQuery from 'react-responsive'
import './layout.css';

export class Navbar extends Component {
  render() {
    return (
      <div>
        {/* desktop */}
        <MediaQuery minDeviceWidth={500} >
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
        </MediaQuery>

        {/* mobile */}
        <MediaQuery maxDeviceWidth={500} >
          <div className="flex">
            <a href="/"><div className="mobile-link">PORTFOLIO</div></a>
            <a href="/about"><div className="mobile-link">ABOUT</div></a>
            <div className="title">Ania Yee-Boguinskaia</div>
          </div>
        </MediaQuery>
      </div>
    );
  }
}

export default Navbar;