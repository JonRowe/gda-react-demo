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

      expect(bar_div.textContent).toEqual('5 / 10 (50%)')
    });

    it('contains a span rendering the bar', () => {
      var bar_span = TestUtils.findRenderedDOMComponentWithTag(
        render(), 'span'
      );

      expect(bar_span.style.width).toEqual('50%')
    });

    it('changes the class when value is over limit', () => {
      var bar_span = TestUtils.findRenderedDOMComponentWithTag(
        TestUtils.renderIntoDocument(
          <Bar value='50' limit='10'/>
        ), 'span'
      );

      expect(bar_span.className).toEqual('over-limit')
    });
  });

  describe('className', () => {
    it('defaults to blank', () => {
      var bar = new Bar({value: 5, limit: 10});
      expect(bar.className()).toEqual("");
    });

    it('changes to over-limit when value > limit', () => {
      var bar = new Bar({value: 50, limit: 10});
      expect(bar.className()).toEqual("over-limit");
    });
  });

  describe('setValue', () => {
    var bar = TestUtils.renderIntoDocument(
      <Bar value={2} limit={6}/>
    );

    it('sets the value', () => {
      bar.setValue(5);
      expect(bar.value()).toEqual(5);
    });

    it('returns the nearest whole number', () => {
      bar.setValue(5.4);
      expect(bar.value()).toEqual(5);
    });

    it('returns 0 for negatives', () => {
      bar.setValue(-1);
      expect(bar.value()).toEqual(0);
    });

    it('returns limit when over limit', () => {
      bar.setValue(10);
      expect(bar.value()).toEqual(6);
      expect(bar.className()).toEqual("over-limit");
    });
  });

  describe('value', () => {
    it('returns the value', () => {
      var bar = new Bar({value: 5, limit: 10});
      expect(bar.value()).toEqual(5);
    });

    it('returns the nearest whole number', () => {
      var bar = new Bar({value: 5.55, limit: 6});
      expect(bar.value()).toEqual(5);
    });

    it('returns 0 for negatives', () => {
      var bar = new Bar({value: -1, limit: 6});
      expect(bar.value()).toEqual(0);
    });

    it('returns limit when over limit', () => {
      var bar = new Bar({value: 10, limit: 6});
      expect(bar.value()).toEqual(6);
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
