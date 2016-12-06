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

  value() {
    var value = parseInt(this.props.value, 10);
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

  width() {
    return parseInt((this.value() / this.props.limit) * 100, 10);
  }

  render() {
    return(
      <div className='bar'>
        {this.width()}%
        <span style={{ width: this.width()+'%' }} className={this.className()}>
        </span>
      </div>
    );
  }
}

export default Bar;
