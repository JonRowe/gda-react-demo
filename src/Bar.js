import React, { Component } from 'react';
import './Bar.css';

class Bar extends Component {

  constructor(props) {
    super(props)

    this.state = { value: this._parseValue(this.props.value) };
  }

  className() {
    if (this.value() >= this.props.limit)
    {
      return  'over-limit';
    } else {
      return  '';
    }
  }

  setValue(newValue) {
    this.setState({ value: this._parseValue(newValue) });
  }

  value() {
    return this.state.value;
  }

  width() {
    return parseInt((this.value() / this.props.limit) * 100, 10);
  }

  render() {
    return(
      <div className='bar'>
        {this.value()} / {this.props.limit} ({this.width()}%)
        <span style={{ width: this.width()+'%' }} className={this.className()}>
        </span>
      </div>
    );
  }

  _parseValue(newValue) {
    var value = parseInt(newValue, 10);
    if (value < 0)
    {
      value = 0;
    }
    else if (value > this.props.limit)
    {
      value = this.props.limit;
    }
    return value;
  }
}

export default Bar;
