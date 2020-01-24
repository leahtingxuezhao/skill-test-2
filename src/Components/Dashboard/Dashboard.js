import React, { Component } from "react";
import Product from "../Product/Product";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { data } = this.props;
    let productList = data.map((element, index) => {
      return (
        <Product
          key={index}
          url={element.url}
          name={element.name}
          price={element.price}
          deleteProduct={this.props.deleteProduct}
          updateProduct={this.props.updateProduct}
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
