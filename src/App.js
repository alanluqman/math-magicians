/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Calculator } from './components/calculator';
import './components/calculator.css';

class App extends React.Component {
  render() {
    return <Calculator />;
  }
}

export default App;
