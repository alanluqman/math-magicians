import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({ total: 0, next: null, operation: null });
  const { total, next, operation } = state;

  function clickHandler(e) {
    const result = calculate(state, e.target.innerText);
    setState(result);
  }

  const output = `${total || ''}${operation || ''}${next || ''}`;

  return (
    <>
      <div className="calculator-page">
        <h1 className="heading-text">Lets do some math!</h1>
        <div className="calculator">
          <div>
            <div className="display">{output || '0'}</div>
          </div>
          <div className="btnBoard">
            <button type="button" onClick={clickHandler} className="button">AC</button>
            <button type="button" onClick={clickHandler} className="button">+/-</button>
            <button type="button" onClick={clickHandler} className="button">%</button>
            <button type="button" onClick={clickHandler} className="action button ">÷</button>
            <button type="button" onClick={clickHandler} className="button">7</button>
            <button type="button" onClick={clickHandler} className="button">8</button>
            <button type="button" onClick={clickHandler} className="button">9</button>
            <button type="button" onClick={clickHandler} className="action button ">x</button>
            <button type="button" onClick={clickHandler} className="button">4</button>
            <button type="button" onClick={clickHandler} className="button">5</button>
            <button type="button" onClick={clickHandler} className="button">6</button>
            <button type="button" onClick={clickHandler} className="action button ">-</button>
            <button type="button" onClick={clickHandler} className="button">1</button>
            <button type="button" onClick={clickHandler} className="button">2</button>
            <button type="button" onClick={clickHandler} className="button">3</button>
            <button type="button" onClick={clickHandler} className="action button ">+</button>
            <div className="col-2-width">
              <button type="button" onClick={clickHandler} className="button">0</button>
            </div>
            <button type="button" onClick={clickHandler} className="button">.</button>
            <button type="button" onClick={clickHandler} className="action button ">=</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
