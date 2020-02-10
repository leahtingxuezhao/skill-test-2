import React, { Component } from "react";
import addPic from "../Form/addimg.png";
import axios from "axios";
import { Link } from "react-router-dom";

class Edit extends Component {
  constructor(props) {
    super(props);
    console.log("this.props.location.state :", this.props.location.state);
    let state = this.props.location.state || {};
    this.state = {
      id: state.id,
      url: state.url,
      name: state.name,
      price: state.price
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

  updateProduct = (id, url, name, price) => {
    axios.put(`/api/product/${id}`, { id, url, name, price }).then(() => {
      this.setState({
        url: "",
        name: "",
        price: 0
      });
      this.props.history.push("/");
    });
  };

  render() {
    let id = Number(this.props.match.params.id);
    const { url, name, price } = this.state;
    console.log(name);
    console.log(price);
    console.log(this.props);
    return (
      <div>
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
            <button
              className="cancelAndChange1"
              onClick={() => this.props.history.push("/")}
            >
              Cancel
              {/* <Link to="/dashboard"></Link> */}
            </button>
            <button
              className="cancelAndChange2"
              onClick={() => this.updateProduct(id, url, name, price)}
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
