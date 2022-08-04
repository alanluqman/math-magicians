/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable max-classes-per-file */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './calculator.css';
import calculate from '../logic/calculate';
/// / number button
// eslint-disable-next-line react/prefer-stateless-function
export class Buttons extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick} type="button" className={this.props.className}>
        {this.props.buttonName}
      </button>
    );
  }
}

/// / function button

export class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    const result = calculate(this.state, e.target.innerText);
    this.setState(result);
  }

  render() {
    const { total, next, operation } = this.state;
    const output = `${total || ''}${operation || ''}${next || ''}`;

    return (
      <>
        <div className="calculator">
          <div>
            <div className="display">{output || '0'}</div>
          </div>
          <div className="btnBoard">
            <Buttons onClick={this.clickHandler} buttonName="AC" className="button" />
            <Buttons onClick={this.clickHandler} buttonName="+/-" className="button" />
            <Buttons onClick={this.clickHandler} buttonName="%" className="button" />
            <Buttons onClick={this.clickHandler} buttonName="÷" className="action button " />
            <Buttons onClick={this.clickHandler} buttonName="7" className="button" />
            <Buttons onClick={this.clickHandler} buttonName="8" className="button" />
            <Buttons onClick={this.clickHandler} buttonName="9" className="button" />
            <Buttons onClick={this.clickHandler} buttonName="x" className="action button " />
            <Buttons onClick={this.clickHandler} buttonName="4" className="button" />
            <Buttons onClick={this.clickHandler} buttonName="5" className="button" />
            <Buttons onClick={this.clickHandler} buttonName="6" className="button" />
            <Buttons onClick={this.clickHandler} buttonName="-" className="action button " />
            <Buttons onClick={this.clickHandler} buttonName="1" className="button" />
            <Buttons onClick={this.clickHandler} buttonName="2" className="button" />
            <Buttons onClick={this.clickHandler} buttonName="3" className="button" />
            <Buttons onClick={this.clickHandler} buttonName="+" className="action button " />
            <div className="col-2-width">
              <Buttons onClick={this.clickHandler} buttonName="0" className="button" />
            </div>
            <Buttons onClick={this.clickHandler} buttonName="." className="button" />
            <Buttons onClick={this.clickHandler} buttonName="=" className="action button " />
          </div>
        </div>
      </>
    );
  }
}
