import React, { Component } from 'react';
import Bar from './Bar';

class Bars extends Component {
  constructor(props) {
    super(props)
    this.activeBar = 0;
  }

  selectBar(event) {
    this.activeBar = event.target.value
  }

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
