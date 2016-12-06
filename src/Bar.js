import React, { Component } from 'react';
import './Bar.css';

class Bar extends Component {

  className() {
    if (this.props.value > this.props.limit)
    {
      return  'over-limit';
    } else {
      return  '';
    }
  }

  width() {
    var value = parseInt((this.props.value / this.props.limit) * 100, 10);
    if (value < 0)
    {
      value = 0
    } else if (value > 100)
    {
      value = 100
    }
    return value;
  }

  render() {
    return(
      <div className='bar'>
        {this.width()}%
        <span style={{ width: this.width()+'%' }}>
        </span>
      </div>
    );
  }
}

export default Bar;
