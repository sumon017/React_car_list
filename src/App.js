import React from "react";
import './App.css';
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import ProductList from "./Components/ProductList";
import ProductDetails from "./Components/productDetails";
import Register from "./Components/Register";
import {Route,Switch} from "react-router-dom"
function App() {
  return (
    <div className="App">

        <Header/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/products" component={ProductList}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/productdetails/:id" component={ProductDetails}/>
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
