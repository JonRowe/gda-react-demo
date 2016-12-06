import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Bars from './Bars';
import BarApp from './BarApp';

describe('BarApps', () => {
  describe('render', () => {
    it('contains a bars from api values', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        var response = JSON.stringify(
          { buttons: [1,2], bars: [3,4], limit: 5 }
        );
        return Promise.resolve(
          new window.Response(response, {
            status: 200,
            headers: {
              'Content-type': 'application/json'
            }
          })
        );
      });

      var renderer = TestUtils.createRenderer();
      var app = renderer.render(
        <BarApp />
      );
      var result = renderer.getRenderOutput();

      while(window.fetch.mock.calls.length < 1)
      expect(result).toEqual(<Bars bars={[3,4]} buttons={[1,2]} limit={5}/>);
    });
  });
});
