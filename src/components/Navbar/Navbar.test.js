import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.exists()) === true
  })

  it('should render ANDREA DIOTALLEVI', () => {
    const wrapper = shallow(<Navbar />);
    const h1 = wrapper.find("[data-test='navbar-title']");
    expect(h1.text()).toEqual('ANDREA DIOTALLEVI');
  })

  it('should render home and about buttons', () => {
    const wrapper = shallow(<Navbar />);
    const homeBtn = wrapper.find("[data-test='navbar-home-btn']");
    const aboutBtn = wrapper.find("[data-test='navbar-about-btn']");
    expect(homeBtn.text()).toEqual('home');
    expect(aboutBtn.text()).toEqual('about');
  })
})
