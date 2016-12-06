import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Bar from './Bar';

describe('Bar', () => {
  describe('render', () => {
    var render = () => {
      return TestUtils.renderIntoDocument(
        <Bar value='5' limit='10'/>
      );
    };

    it('contains the text of the bars width', () => {
      var bar_div = TestUtils.findRenderedDOMComponentWithTag(
        render(), 'div'
      );

      expect(bar_div.textContent).toEqual('50%')
    });

    it('contains a span rendering the bar', () => {
      var bar_span = TestUtils.findRenderedDOMComponentWithTag(
        render(), 'span'
      );

      expect(bar_span.style.width).toEqual('50%')
    });
  });

  describe('width', () => {
    it('returns the % of limit', () => {
      var bar = new Bar({value: 5, limit: 10});
      expect(bar.width()).toEqual(50);
    });

    it('returns the nearest whole number', () => {
      var bar = new Bar({value: 5, limit: 6});
      expect(bar.width()).toEqual(83);
    });

    it('returns 0 for negatives', () => {
      var bar = new Bar({value: -1, limit: 6});
      expect(bar.width()).toEqual(0);
    });

    it('returns 100 for value over limit', () => {
      var bar = new Bar({value: 10, limit: 6});
      expect(bar.width()).toEqual(100);
    });
  });
});
