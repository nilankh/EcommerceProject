import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />

        <Switch >
          <Route path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route  component={Default} />
        </Switch>
        
        
      </React.Fragment>
    );
  }
}

// React router dom  functions
// browser router which is going to hold the information of all the routes
// Switch which is for grouping the routes
// Route which is gonna display  this specific route
// Link which will serve as an anchor tag
export default App;
