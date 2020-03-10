import React from 'react';
import { shallow } from 'enzyme';
import About from './About';

describe('About', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<About />);
  })

  it('should render without errors', () => {
    expect(wrapper.length).toEqual(1);
  })
})
