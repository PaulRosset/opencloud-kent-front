import React, { Component } from "react";
import Header from "./components/Header";
import Body from "./components/Body";

class App extends Component {
  render() {
    return [<Header key="1" />, <Body key="2" />];
  }
}

export default App;
