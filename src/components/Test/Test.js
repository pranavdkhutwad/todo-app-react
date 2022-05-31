import { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      studentName: "Sunita",
    };
  }

  render() {
    console.log("Props ==>", this.props);
    return (
      <div>
        <div>{this.state.studentName}</div>
        <div>Role: {this.props.role}</div>
        <div>Skill: {this.props.skill}</div>
      </div>
    );
  }
}

export default Test;
