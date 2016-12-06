import React, { Component } from 'react';
import Bars from './Bars';

class BarApp extends Component {
  constructor(props) {
    super(props);
    fetch('http://frontend-exercise.apps.staging.digital.gov.au/bars')
      .then((response) => {
        return response.json();
      }).then((json) => {
        this.setState({ bars: json.bars, buttons: json.buttons, limit: json.limit });
      });
  }

  render() {
    if(typeof(this.state) === 'undefined' || this.state === null) {
      return(null);
    }
    else
    {
      return(
        <Bars bars={this.state.bars} buttons={this.state.buttons} limit={this.state.limit} />
      );
    }
  }
}

export default BarApp;
