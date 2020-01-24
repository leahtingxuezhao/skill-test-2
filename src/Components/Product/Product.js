import React, { Component } from "react";
import defaultPic from "./donkeybaby.jpg";
import { withRouter, Link } from "react-router-dom";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { key, name, price } = this.props;
    return (
      <div className="singleProductWrap">
        <img src={defaultPic} className="defaultPic"></img>
        <div id="descriptionWrap">
          <div id="nameAndPrice">
            <div>{name}</div>
            <div>${price}</div>
          </div>
          <div className="greenButtonWrap">
            <button
              className="greenB"
              onClick={e => this.props.deleteProduct(this.props.id)}
            >
              Delete
            </button>
            <button className="greenB">
              <Link to={`/${key}`}>Edit</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
