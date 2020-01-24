import React, { Component } from "react";
import Header from "../Header/Header";
import addPic from "../Form/addimg.png";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url:
        "https://i.kym-cdn.com/entries/icons/original/000/026/489/crying.jpg",
      name: "",
      price: 0
    };
  }

  updateUrl(val) {
    this.setState({ url: val });
  }
  updateName(val) {
    this.setState({ name: val });
  }
  updatePrice(val) {
    this.setState({ price: val });
  }

  createProduct = () => {
    const { url, name, price } = this.state;
    const { createProduct } = this.props;
    createProduct(url, name, price);
  };

  clearFn = () => {
    this.setState({
      url: "",
      name: "",
      price: ""
    });
  };
  clear;
  render() {
    const { url, name, price } = this.state;
    console.log(name);
    console.log(price);
    console.log(this.props);
    return (
      <div>
        <Header />
        <div id="formWrap">
          <div>
            <img src={addPic} id="addPic"></img>
            <div id="textWrap">
              <p className="text">Image URL :</p>
              <input
                className="inputBox"
                value={this.state.url}
                onChange={e => this.updateUrl(e.target.value)}
              ></input>
              <p className="text">Product Name :</p>
              <input
                className="inputBox"
                value={this.state.name}
                onChange={e => this.updateName(e.target.value)}
              ></input>
              <p className="text">Price :</p>
              <input
                className="inputBox"
                value={this.state.price}
                onChange={e => this.updatePrice(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="buttonBox">
            <button className="cancelAndChange1" onClick={() => this.clearFn()}>
              Cancel
            </button>
            <button
              className="cancelAndChange2"
              onClick={() => this.props.createProduct(url, name, price)}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
