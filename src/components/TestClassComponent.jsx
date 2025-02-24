import React from "react";
import Title from "./Title";

class TestClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello, World!",
    };
  }

  render() {
    return <Title>{this.state.message}</Title>;
  }
}

export default TestClassComponent;
