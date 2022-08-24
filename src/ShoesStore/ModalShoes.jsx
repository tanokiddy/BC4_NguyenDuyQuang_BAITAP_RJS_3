import React, { Component } from "react";

export default class extends Component {
  render() {
    let { image, name, description, price } = this.props.shoesDetail;
    if (this.props.shoesDetail.id > 0) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={image}></img>
            </div>
            <div style={{ position: "relative" }} className="col-6 text-left">
              <div style={{ position: "absolute", top: "30%" }}>
                <h2>Name: {name}</h2>
                <h4>Price: {price}</h4>
                <p> Description: {description}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
