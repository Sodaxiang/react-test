import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Product from "./product.jsx";

const Home = () => {
  return <h1>欢迎访问Choerodon</h1>;
};

export default class Section extends Component {
  render() {
    return (
      <Fragment>
        <style>
          {`h1{
                     text-align:center;
                 }`}
        </style>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product" component={Product} />
          <Route path="/product/:protype" component={Product} />
        </Switch>
      </Fragment>
    );
  }
}
