import React, { Component } from "react";
import Product from "../Product/Product";
import { Link } from "react-router-dom";
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: []
    };
    console.log("this. :", this.props);
  }

  componentDidMount() {
    this.reRender();
  }

  reRender = () => {
    axios.get("/api/product").then(res =>
      this.setState({
        product: res.data
      })
    );
  };

  deleteProduct = id => {
    console.log("delete product id", id);
    axios.delete(`/api/product/${id}`).then(() => {
      this.reRender();
    });
  };

  render() {
    let productList = this.state.product.map((element, index) => {
      console.log("here", element);
      return (
        <Product
          key={index}
          url={element.url}
          name={element.name}
          price={element.price}
          id={element.product_id}
          deleteProduct={this.deleteProduct}
        />
      );
    });

    return (
      <div id="productsWrap">
        <div id="productList">{productList}</div>
      </div>
    );
  }
}

export default Dashboard;
