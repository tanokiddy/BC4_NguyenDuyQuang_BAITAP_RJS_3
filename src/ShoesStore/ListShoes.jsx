import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ListShoes extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.shoesArr.map((item) => {
            return (
              <ProductItem
                shoesItem={item}
                handleViewDetail={this.props.handleViewDetail}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
