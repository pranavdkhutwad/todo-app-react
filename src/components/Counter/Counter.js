import { Component } from "react";

import "./Counter.css";

class Counter extends Component {
  constructor(props) {
    console.log("Constructor Called...");
    super(props);
    this.state = {
      counter: 0,
      name: "Sunita",
      grade: "A",
    };
  }

  static getDerivedStateFromProps(props) {
    console.log("getDerivedStateFromProps Called...");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate called...");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate called...");
    return null;
  }

  componentDidUpdate(prevProps) {
    console.log("componentDidUpdate called...");
  }

  componentDidMount() {
    console.log("componentDidMount Called.");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount called...");
  }

  clickHandler = () => {
    // Common approach to update the state
    // this.setState({ counter: this.state.counter + 1});

    // Best approach to update state based on previous state.
    this.setState((prevCounter) => ({ counter: prevCounter.counter + 1 }));
  };

  render() {
    console.log("render called... ");
    return (
      <div className="container">
        <label>{this.props.type} Counter</label>
        <div className="counter" style={{ color: this.props.color }}>
          {this.state.counter}
        </div>
        <button onClick={this.clickHandler}>Click Me!</button>
      </div>
    );
  }
}

export default Counter;
