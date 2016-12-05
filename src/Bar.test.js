import React from 'react';
import ReactDOM from 'react-dom';
import Bar from './Bar';

describe('Bar', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Bar />, div);
  });

  describe('width', () => {
    it('returns the % of limit', () => {
      var bar = new Bar({value: 5, limit: 10});
      expect(bar.width()).toEqual(50);
    });
  });
});
