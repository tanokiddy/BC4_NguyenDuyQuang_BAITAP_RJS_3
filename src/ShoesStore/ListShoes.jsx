import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ListShoes extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.shoesArr.map((item, index) => {
            return (
              <ProductItem
                key={index}
                shoesItem={item}
                handleViewDetail={this.props.handleViewDetail}
                handleAddToCart={this.props.handleAddToCart}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
