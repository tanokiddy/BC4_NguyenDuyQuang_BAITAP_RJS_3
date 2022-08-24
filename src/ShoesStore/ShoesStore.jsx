import React, { Component } from "react";
import ListShoes from "./ListShoes";
import { dataShoes } from "./dataShoes";
import ModalShoes from "./ModalShoes";

export default class ShoesStore extends Component {
  state = {
    shoesArr: dataShoes,
    shoesDetail: {},
  };
  handleViewDetail = (shoes) => {
    let index = this.state.shoesArr.findIndex((item) => {
      return item.id == shoes.id;
    });
    this.setState({ shoesDetail: this.state.shoesArr[index] });
    console.log("shoesDetail: ", this.state.shoesArr[index]);
  };
  render() {
    return (
      <div>
        <h1 className="py-3">Shoes Store</h1>
        <ModalShoes shoesDetail={this.state.shoesDetail} />
        <ListShoes
          shoesArr={this.state.shoesArr}
          handleViewDetail={this.handleViewDetail}
        />
      </div>
    );
  }
}
