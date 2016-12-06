import React, { Component } from 'react';
import Bar from './Bar';
import './Bars.css';

class Bars extends Component {
  constructor(props) {
    super(props)
    this.state = { bars: props.bars };
    this.displayedBars = [];
    this.activeBar = 0;
  }

  updateActiveBar(delta) {
    this.setState((prevState, props) => {
      prevState.bars[this.activeBar] += parseInt(delta, 10);
      return { bars: prevState.bars };
    });
  }

  selectBar(event) {
    this.activeBar = parseInt(event.target.value, 10)
  }

  render() {
    return(
      <section>
        <section className='bars'>
          {this.state.bars.map((item, index) => (
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
            {this.state.bars.map((item, index) => (
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
