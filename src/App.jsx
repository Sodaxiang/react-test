import React, { Component, Fragment } from "react";
import Header from "./components/header.jsx";
import Section from "./components/section.jsx";
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Section />
      </Fragment>
    );
  }
}
