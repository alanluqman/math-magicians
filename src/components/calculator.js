/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable max-classes-per-file */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './calculator.css';

/// / number button
// eslint-disable-next-line react/prefer-stateless-function
export class Buttons extends React.Component {
  render() {
    return (
      <button type="button" className="button">
        {this.props.number}
      </button>
    );
  }
}

/// display component
// eslint-disable-next-line react/prefer-stateless-function
export class Display extends React.Component {
  render() {
    return <p className="display">{this.props.value}</p>;
  }
}
Display.defaultProps = {
  value: 0,
};

/// / function button
export class Action extends React.Component {
  render() {
    return <button className="button action">{this.props.lable}</button>;
  }
}
Action.defaultProps = {
  lable: '?',
};

export class Calculator extends React.Component {
  render() {
    return (
      <>
        <div className="calculator">
          <div>
            <Display value={0} />
          </div>
          <div className="btnBoard">
            <Buttons number="AC" />
            <Buttons number="+/-" />
            <Buttons number="%" />
            <Action lable="/" />
            <Buttons number={7} />
            <Buttons number={8} />
            <Buttons number={9} />
            <Action lable="x" />
            <Buttons number={4} />
            <Buttons number={5} />
            <Buttons number={6} />
            <Action lable="-" />
            <Buttons number={1} />
            <Buttons number={2} />
            <Buttons number={3} />
            <Action lable="+" />
            <div className="col-2-width">
              <Buttons number={0} />
            </div>
            <Buttons number="." />
            <Action lable="=" />
          </div>
        </div>
      </>
    );
  }
}
