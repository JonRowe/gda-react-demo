import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Bar from './Bar';

describe('Bar', () => {
  describe('render', () => {
    it('contains the text of the bars width', () => {
      var bar = TestUtils.renderIntoDocument(
        <Bar value='5' limit='10'/>
      );

      var bar_div = TestUtils.findRenderedDOMComponentWithTag(
        bar, 'div'
      );

      expect(bar_div.textContent).toEqual('50%')
    });
  });

  describe('width', () => {
    it('returns the % of limit', () => {
      var bar = new Bar({value: 5, limit: 10});
      expect(bar.width()).toEqual(50);
    });
  });
});
