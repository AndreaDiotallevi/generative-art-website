import React from 'react';
import { shallow } from 'enzyme';
import About from './About';

describe('About', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<About />);
  })

  it('should render the text about', () => {
    const p = wrapper.find({ id: 'about-title'});
    expect(p.text()).toEqual("about");
  })

  it('should render the description', () => {
    const p = wrapper.find({ id: 'about-description'});
    expect(p.text()).toEqual("Software developer with a background in music and architecture, fascinated by the intersection between art and technology. For each new work, I design a custom algorithm capable of generating a sequence of unique, but aesthetically related images.");
  })
})
