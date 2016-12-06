import React, { Component } from 'react';
import './Bar.css';

class Bar extends Component {
  width() {
    return parseInt((this.props.value / this.props.limit) * 100, 10);
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
