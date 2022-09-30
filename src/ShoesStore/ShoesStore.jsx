import React, { Component } from "react";
import ListShoes from "./ListShoes";
import { dataShoes } from "./dataShoes";
import ShoesDetail from "./ShoesDetail";

export default class ShoesStore extends Component {
  state = {
    shoesArr: dataShoes,
    shoesDetail: {},
    cartShoes: [],
  };
  handleViewDetail = (shoes) => {
    let index = this.state.shoesArr.findIndex((item) => {
      return item.id === shoes.id;
    });
    this.setState({ shoesDetail: this.state.shoesArr[index] });
    console.log("shoesDetail: ", this.state.shoesArr[index]);
  };
  handleAddToCart = (shoes) => {
    let cloneCartShoes = [...this.state.cartShoes];
    let index = cloneCartShoes.findIndex((item) => {
      return item.id === shoes.id;
    });
    if (index < 0) {
      shoes = { ...shoes, amount: 1 };
      cloneCartShoes.push(shoes);
    } else {
      cloneCartShoes[index].amount++;
    }
    this.setState({
      cartShoes: cloneCartShoes,
    });
  };
  handleChangeAmount = (shoes, Action) => {
    let cloneCartShoes = [...this.state.cartShoes];
    let index = cloneCartShoes.findIndex((item) => {
      return item.id === shoes.id;
    });
    if (Action) {
      cloneCartShoes[index].amount++;
    } else {
      if (cloneCartShoes[index].amount > 1) {
        cloneCartShoes[index].amount--;
      }
    }
    this.setState({
      cartShoes: cloneCartShoes,
    });
  };
  handleDelete = (shoes) => {
    let cloneCartShoes = [...this.state.cartShoes];
    let index = cloneCartShoes.findIndex((item) => {
      return item.id === shoes.id;
    });
    cloneCartShoes.splice(index, 1);
    this.setState({
      cartShoes: cloneCartShoes,
    });
  };
  render() {
    return (
      <div className="container">
        <h1 className="py-3">Shoes Store</h1>
        <h4 className="text-right">
          Cart{" "}
          <i
            data-toggle="modal"
            data-target="#modelId"
            type="button"
            className="fa fa-shopping-cart"
          />
          <span>
            {" "}
            {this.state.cartShoes.reduce((total, item, index) => {
              return (total += item.amount);
            }, 0)}
          </span>
        </h4>
        <div
          className="modal fade"
          id="modelId"
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content" style={{ width: "fit-content" }}>
              <div className="modal-header">
                <h5 className="modal-title">Cart Modal</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Product name</th>
                      <th>Image</th>
                      <th>Amount</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.cartShoes.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item.name}</td>
                          <td>
                            <img
                              className="w-50 h-50"
                              src={item.image}
                              alt={item.image}
                            />
                          </td>
                          <td className="d-flex align-items-center">
                            <button
                              onClick={() => {
                                this.handleChangeAmount(item, false);
                              }}
                              className="btn btn-sm"
                            >
                              -
                            </button>
                            {item.amount}
                            <button
                              onClick={() => {
                                this.handleChangeAmount(item, true);
                              }}
                              className="btn btn-sm"
                            >
                              +
                            </button>
                          </td>
                          <td>${item.price * item.amount}</td>
                          <td>
                            <button
                              onClick={() => {
                                this.handleDelete(item);
                              }}
                              className="btn btn-sm"
                            >
                              <i className=" fa fa-trash fa-lg" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <ShoesDetail shoesDetail={this.state.shoesDetail} />
        <ListShoes
          shoesArr={this.state.shoesArr}
          handleViewDetail={this.handleViewDetail}
          handleAddToCart={this.handleAddToCart}
        />
      </div>
    );
  }
}
