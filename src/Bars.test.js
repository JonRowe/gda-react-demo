import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { findAllWithType, findWithClass } from 'react-shallow-testutils';

import Bar from './Bar';
import Bars from './Bars';

describe('Bars', () => {
  describe('render', () => {
    var getSection = (className) => {
      var renderer = TestUtils.createRenderer();
      renderer.render(
        <Bars bars={[1,2]} buttons={[3,4]} limit={2}/>
      );
      return findWithClass(renderer.getRenderOutput(), className);
    };

    it('contains a bar for each bar value', () => {
      var result = getSection('bars');
      var anything = new jasmine.any(Function);

      expect(result.props.children).toHaveLength(2);
      expect(result.props.children[0]).toEqual(<Bar key={0} value={1} limit={2} ref={anything} />);
      expect(result.props.children[1]).toEqual(<Bar key={1} value={2} limit={2} ref={anything} />);
    });

    it('contains a button for each button value', () => {
      var result = getSection('buttons');
      var buttons = findAllWithType(result, 'button')

      expect(buttons).toHaveLength(2);
      expect(buttons[0].props.value).toEqual(3);
      expect(buttons[1].props.value).toEqual(4);
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

    it('adjusts the values of active bars', () => {
      var bars = TestUtils.renderIntoDocument(
        <Bars bars={[1,2]} buttons={[3,4]} limit={2}/>
      );

      var select = TestUtils.findRenderedDOMComponentWithTag(
        bars, 'select'
      );
      select.value = '1'
      TestUtils.Simulate.change(select);

      var button = TestUtils.scryRenderedDOMComponentsWithTag(
        bars, 'button'
      )[1];
      TestUtils.Simulate.click(button);

      expect(bars.state.bars[1]).toEqual(6)
    });
  });

  describe('selectBar', () => {
    it('sets the activeBar', () => {
      var bars = new Bars({ bars: [] });
      bars.selectBar({ target: { value: '1' } });
      expect(bars.activeBar).toEqual(1);
    });
  });

  describe('updateActiveBar', () => {
    it('adjusts the state of the active bar', () => {
      var bars = TestUtils.renderIntoDocument(
        <Bars bars={[0,10]} buttons={[3,4]} limit={10}/>
      );
      bars.activeBar = 1;
      bars.updateActiveBar(-20);
      expect(bars.state.bars[1]).toEqual(-10);
    });
  });
});
