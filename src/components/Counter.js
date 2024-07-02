import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increment() {
    this.setState(
      (prevState, props) => ({
        count: prevState.count + 10,
      }),
      () => {
        console.log(this.state.count);
      }
    );
  }
  decrement() {
    this.setState(
      (prevState, props) => ({
        count: prevState.count - 10,
      }),
      () => {
        console.log(this.state.count);
      }
    );
  }
  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
        <br></br>
        <button onClick={() => this.decrement()}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
