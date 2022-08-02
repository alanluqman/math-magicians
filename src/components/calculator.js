import React, { Component } from "react";
import "./calculator.css";

//// number button
export class Buttons extends Component {
  render() {
    return <button className="button">{this.props.number}</button>;
  }
}
Buttons.defaultProps = {
  number: 0,
};

/// display component
export class Display extends Component {
  render() {
    return <p className="display">{this.props.value}</p>;
  }
}
Display.defaultProps = {
  value: 0,
};

//// function button
export class Action extends Component {
  render() {
    return <button className="button action">{this.props.lable}</button>;
  }
}
Action.defaultProps = {
  lable: "?",
};
