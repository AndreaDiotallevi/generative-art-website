import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  })

  it('should render Hello! My name is Andrea.', () => {
    const h3 = wrapper.find({ id: 'home-page-title'});
    expect(h3.text()).toEqual('Hello! My name is Andrea.');
  })

  it('should render the home page paragraph 1', () => {
    const p = wrapper.find({ id: 'home-page-paragraph-1' })
    expect(p.text()).toEqual('I am a software engineer, architect and pianist, fascinated by the intersection between art and technology.')
  })

  it('should render the home page paragraph 2', () => {
    const p = wrapper.find({ id: 'home-page-paragraph-2' })
    expect(p.text()).toEqual('For each new work, I design a custom algorithm capable of generating a sequence of unique, but aesthetically related images.')
  })
})
