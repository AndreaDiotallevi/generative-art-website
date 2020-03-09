import React from 'react';
import { shallow } from 'enzyme';
import Artworks from './Artworks';

describe('Artworks', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<Artworks />);
    expect(wrapper.exists()) === true
  })
})
