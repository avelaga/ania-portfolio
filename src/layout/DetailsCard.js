import React, { Component } from "react";
import MediaQuery from 'react-responsive'
import './layout.css';

export class DetailsCard extends Component {
  renderImage(img) {
    return (
      <div>
        <img src={img} className="portfolio-img" />
      </div>
    );
  }

  renderMobileImage(img) {
    return (
      <div>
        <img src={img} className="mobile-portfolio-img" />
      </div>
    );
  }

  render() {
    return (
      <div>
        {/* desktop */}
        <MediaQuery minDeviceWidth={500}>
          <div className="page">
            <div className="details-text">
              {this.props.text}
            </div>

            <div className="details-photos flex">
              {this.props.arr.map(img => this.renderImage(img))}
            </div>

          </div>
        </MediaQuery>

        <MediaQuery maxDeviceWidth={500}>
          <div className="mobile-page flex">
            <div className="mobile-details-text">
              {this.props.text}
            </div>

            <div className="flex mobile-details-photos">
              {this.props.arr.map(img => this.renderMobileImage(img))}
            </div>

          </div>
        </MediaQuery>
      </div>

    );
  }
}

export default DetailsCard;