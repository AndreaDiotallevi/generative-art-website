import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

test('App renders without errors', () => {
  let wrapper = shallow(<App />);
  expect(wrapper.length).toEqual(1);
});
