import React, { Component } from "react";
import defaultPic from "./donkeybaby.jpg";
import { Link } from "react-router-dom";

class Product extends Component {
  render() {
    const { key, name, price, id, url } = this.props;
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
              onClick={e => this.props.deleteProduct(id)}
            >
              Delete
            </button>
            <button className="greenB">
              <Link
                to={{
                  pathname: `/edit/${id}`,
                  state: { url, name, price, id }
                }}
              >
                Edit
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
