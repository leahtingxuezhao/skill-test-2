import React, { Component } from "react";
import Header from "../Header/Header";
import addPic from "./addimg.png";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <div id="formWrap">
          <div>
            <img src={addPic} id="addPic"></img>
            <div id="textWrap">
              <p className="text">Image URL :</p>
              <input className="inputBox"></input>
              <p className="text">Product Name :</p>
              <input className="inputBox"></input>
              <p className="text">Price :</p>
              <input className="inputBox"></input>
            </div>
          </div>
          <div className="buttonBox">
            <button className="cancelAndChange1">Cancel</button>
            <button className="cancelAndChange2">Add to Inventory</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
