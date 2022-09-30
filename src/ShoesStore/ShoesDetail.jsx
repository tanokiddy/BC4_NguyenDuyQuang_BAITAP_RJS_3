import React, { Component } from "react";

export default class ShoesDetail extends Component {
  render() {
    let { image, name, description, price } = this.props.shoesDetail;
    if (this.props.shoesDetail.id > 0) {
      return (
        <div className="">
          <div className="row">
            <div className="col-6">
              <img src={image} alt={image}></img>
            </div>
            <div className="col-6 text-left align-items-center d-flex">
              <div>
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
