import React from 'react';
import { Action, Buttons, Display } from './components/calculator';
import './components/calculator.css';

const App = () => (
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
);

export default App;
