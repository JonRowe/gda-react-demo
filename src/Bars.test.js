import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Bar from './Bar';
import Bars from './Bars';

describe('Bars', () => {
  describe('render', () => {
    it('contains a bar for each bar value', () => {
      var renderer = TestUtils.createRenderer();
      var app = renderer.render(
        <Bars bars={[1,2]} limit={2}/>
      );
      var result = renderer.getRenderOutput();

      expect(result.props.children).toHaveLength(2);
      expect(result.props.children[0]).toEqual(<Bar key={0} value={1} limit={2}/>);
      expect(result.props.children[1]).toEqual(<Bar key={1} value={2} limit={2}/>);
    });
  });

  describe('selectBar', () => {
    var bars = new Bars({ bars: [] });
    bars.selectBar({ target: { value: 1 } });
    expect(bars.activeBar).toEqual(1);
  });
});
