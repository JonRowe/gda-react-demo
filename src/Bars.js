import React, { Component } from 'react';
import Bar from './Bar';
import './Bars.css';

class Bars extends Component {
  constructor(props) {
    super(props)
    this.activeBar = 0;
  }

  selectBar(event) {
    this.activeBar = parseInt(event.target.value, 10)
  }

  render() {
    return(
      <section>
        <section className='bars'>
          {this.props.bars.map((item, index) => (
            <Bar key={index} value={item} limit={this.props.limit} />
          ))}
        </section>
        <section className='buttons'>
          <select name='bar-select' onChange={e => this.selectBar(e) } defaultValue={this.activeBar}>
            {this.props.bars.map((item, index) => (
              <option key={index} value={index}>
                Bar #{index + 1}
              </option>
            ))}
          </select>
          {this.props.buttons.map((item, index) => (
            <button key={index} value={item}>{item}</button>
          ))}
        </section>
      </section>
    );
  }
}

export default Bars;
