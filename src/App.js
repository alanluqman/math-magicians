import { render } from "@testing-library/react";
import React from "react";
import { Action, Buttons, Display } from "./components/calculator.js";
import "./components/calculator.css";

class App extends React.Component {
  render() {
    return (
      <div className="calculator">
        <div>
          <Display />
        </div>
        <div className="btnBoard">
          <Buttons number={"AC"} />
          <Buttons number={"+/-"} />
          <Buttons number={"%"} />
          <Action lable={"/"} />
          <Buttons number={7} />
          <Buttons number={8} />
          <Buttons number={9} />
          <Action lable={"x"} />
          <Buttons number={4} />
          <Buttons number={5} />
          <Buttons number={6} />
          <Action lable={"-"} />
          <Buttons number={1} />
          <Buttons number={2} />
          <Buttons number={3} />
          <Action lable={"+"} />
          <div className="col-2-width">
            <Buttons number={0} />
          </div>
          <Buttons number={"."} />
          <Action lable={"="} />
        </div>
      </div>
    );
  }
}

export default App;
