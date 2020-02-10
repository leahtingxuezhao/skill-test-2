import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Product/Product";
import Header from "./Components/Header/Header";
import Edit from "./Components/Edit/Edit";
import routes from "./routes";
import { HashRouter } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        // {
        //   product_id: 1,
        //   url: "http://hahahhaha",
        //   name: "funnyFace",
        //   price: 100
        // }
      ]
    };
  }

  componentDidMount() {
    axios
      .get("/api/product")
      .then(results => {
        this.setState({ data: results.data });
      })
      .catch(error => {
        console.log("ERROR", error);
      });
  }

  deleteProduct = id => {
    axios
      .delete(`/api/product/${id}`)
      .then(results => {
        this.setState({ data: results.data });
      })
      .catch(error => {
        console.log("ERROR", error);
      });
  };

  updateProduct = (id, url, name, price) => {
    axios
      .put(`/api/product/${id}`, { url, name, price })
      .then(results => {
        console.log("data :", results.data);
        this.setState({ data: results.data });
      })
      .catch(error => {
        console.log("ERROR", error);
      });
  };

  createProduct = (url, name, price) => {
    axios
      .post("/api/product", { url, name, price })
      .then(results => {
        this.setState({ data: results.data });
      })
      .catch(error => {
        console.log("ERROR", error);
      });
  };

  render() {
    const { data } = this.state;
    return (
      <HashRouter>
        <div>
          <Header />
        </div>
        {routes}
      </HashRouter>
    );
  }
}

export default App;
