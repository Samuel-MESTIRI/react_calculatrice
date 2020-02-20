import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inputValue: ''}
    this.updateInputValue = this.updateInputValue.bind(this);
  }

  updateInputValue(val) {
    this.setState(state => ({
      inputValue: state.inputValue + val
    }));
  }
  resetInput() {
    this.setState(state => ({
      inputValue: ''
    }));
  }
  calculResult() {
    try {
      eval(this.state.inputValue)
      this.setState(state => ({
        inputValue: eval(state.inputValue)
      }));
    } catch (error) {
      this.setState(state => ({
        inputValue: 'error'
      }));
    }
  }
  render() {
    return (
      <div className="App bg-secondary d-flex justify-content-center align-items-center">
        <div className="calculator">
          <div className=" calculator-input bg-light d-flex align-items-center pl-4">{this.state.inputValue}</div>
          <div className="calculator-buttons">
            <button onClick={this.updateInputValue.bind(this, '+')}>+</button>
            <button onClick={this.updateInputValue.bind(this, '-')}>-</button>
            <button onClick={this.updateInputValue.bind(this, '*')}>*</button>
            <br />
            <button onClick={this.updateInputValue.bind(this, '1')}>1</button>
            <button onClick={this.updateInputValue.bind(this, '2')}>2</button>
            <button onClick={this.updateInputValue.bind(this, '3')}>3</button>
            <br />
            <button onClick={this.updateInputValue.bind(this, '4')}>4</button>
            <button onClick={this.updateInputValue.bind(this, '5')}>5</button>
            <button onClick={this.updateInputValue.bind(this, '6')}>6</button>
            <br />
            <button onClick={this.updateInputValue.bind(this, '7')}>7</button>
            <button onClick={this.updateInputValue.bind(this, '8')}>8</button>
            <button onClick={this.updateInputValue.bind(this, '9')}>9</button>
            <br />
            <button onClick={this.resetInput.bind(this)}>ac</button>
            <button onClick={this.updateInputValue.bind(this, '0')}>0</button>
            <button onClick={this.calculResult.bind(this)}>=</button>
          </div>
        </div>
      </div>
    );
  }
}

