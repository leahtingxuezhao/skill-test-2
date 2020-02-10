import React, { Component } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import logo from "/Users/dt/repos-2/devMountain/skill-check/skill-test-2/src/logo-dev.png";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div id="logoWrap">
          <img src={logo} alt="dm logo" id="logo" />
          <div id="logoName">SHELFIE</div>
        </div>
        <div id="navWrap">
          <div className="navBox">
            <Link to="/">
              <p className="linkText">Dashboard</p>
            </Link>
          </div>
          <div className="navBox">
            <Link to="/add">
              <p className="linkText">Add Inventory</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
