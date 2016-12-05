import React, { Component } from 'react';
import Bar from './Bar';

class Bars extends Component {
  render() {
    return(
      <section>
        {this.props.bars.map((item, index) => (
          <Bar key={index} value={item} limit={this.props.limit} />
        ))}
      </section>
    );
  }
}

export default Bars;
