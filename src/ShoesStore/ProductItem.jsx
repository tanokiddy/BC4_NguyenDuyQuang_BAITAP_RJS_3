import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { image, name, shortDescription } = this.props.shoesItem;
    return (
      <div className="col-3 text-left mb-3">
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={image} alt="Card image cap" />
          <div className="card-body">
            <h5 style={{ fontSize: "18px" }} className="card-title">
              {name}
            </h5>
            <p style={{ fontSize: "14px" }} className="card-text">
              {shortDescription}
            </p>
            <button
              onClick={() => {
                this.props.handleViewDetail(this.props.shoesItem);
              }}
              className="btn btn-success ml-2"
            >
              View Detail
            </button>
          </div>
        </div>
      </div>
    );
  }
}
