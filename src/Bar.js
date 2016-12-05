import React, { Component } from 'react';
import './Bar.css';

class Bar extends Component {
  width() {
    return (this.props.value / this.props.limit) * 100;
  }

  render() {
    return(
      <div className='bar'>
        <span>
        </span>
      </div>
    );
  }
}

export default Bar;
