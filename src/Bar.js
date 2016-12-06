import React, { Component } from 'react';
import './Bar.css';

class Bar extends Component {
  width() {
    var value = parseInt((this.props.value / this.props.limit) * 100, 10);
    if (value < 0)
    {
      value = 0
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
