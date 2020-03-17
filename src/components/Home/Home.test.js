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

  it('should render the home page paragraph', () => {
    const p = wrapper.find({ id: 'home-page-paragraph' })
    expect(p.text()).toEqual('I am a Software Engineer, with a background in music and architecture, fascinated by the intersection between art and technology.')
  })
})
