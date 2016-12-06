import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { findWithClass } from 'react-shallow-testutils';

import Bar from './Bar';
import Bars from './Bars';

describe('Bars', () => {
  describe('render', () => {
    it('contains a bar for each bar value', () => {
      var renderer = TestUtils.createRenderer();
      var app = renderer.render(
        <Bars bars={[1,2]} limit={2}/>
      );
      var result = findWithClass(renderer.getRenderOutput(), 'bars');

      expect(result.props.children).toHaveLength(2);
      expect(result.props.children[0]).toEqual(<Bar key={0} value={1} limit={2}/>);
      expect(result.props.children[1]).toEqual(<Bar key={1} value={2} limit={2}/>);
    });

    it('contains a select to change the active bar', () => {
      var bars = TestUtils.renderIntoDocument(
        <Bars bars={[1,2]} buttons={[3,4]} limit={2}/>
      );

      var select = TestUtils.findRenderedDOMComponentWithTag(
        bars, 'select'
      );
      select.value = '1'
      TestUtils.Simulate.change(select);

      expect(bars.activeBar).toEqual(1)
    });
  });

  describe('selectBar', () => {
    it('sets the activeBar', () => {
      var bars = new Bars({ bars: [] });
      bars.selectBar({ target: { value: '1' } });
      expect(bars.activeBar).toEqual(1);
    });
  });
});
