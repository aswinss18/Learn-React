import React, { Component } from "react";
class Welcome extends Component {
  render() {
    const { name, initial } = this.props;
    return (
      <h1>
        Congratulations {name} {initial}
      </h1>
    );
  }
}
export default Welcome;
