import React, { Component } from 'react';
import Bar from './Bar';
import './Bars.css';

class Bars extends Component {
  constructor(props) {
    super(props)
    this.displayedBars = [];
    this.activeBar = 0;
  }

  updateActiveBar(rawDelta) {
    var bar = this.displayedBars[this.activeBar];
    var delta = parseInt(rawDelta, 10);
    bar.setValue(bar.value() + delta);
  }

  selectBar(event) {
    this.activeBar = parseInt(event.target.value, 10)
  }

  render() {
    return(
      <section>
        <section className='bars'>
          {this.props.bars.map((item, index) => (
            <Bar
              key={index}
              limit={this.props.limit}
              ref={(ref) => { this.displayedBars[index] = ref } }
              value={item}
            />
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
            <button key={index} value={item} onClick={e => this.updateActiveBar(e.target.value)}>
              {item < 0 ? item : '+' + item}
            </button>
          ))}
        </section>
      </section>
    );
  }
}

export default Bars;
