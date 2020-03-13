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
    const p1 = wrapper.find({ id: 'about-paragraph-1'});
    const p2 = wrapper.find({ id: 'about-paragraph-2'});
    expect(p1.text()).toEqual("Software developer with a background in music and architecture, fascinated by the intersection between art and technology.");
    expect(p2.text()).toEqual("For each new work, I design a custom algorithm capable of generating a sequence of unique, but aesthetically related images.");
  })
})
