import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.exists()) === true
  })

  it('should render Andrea Diotallevi', () => {
    const wrapper = shallow(<Navbar />);
    const h1 = wrapper.find("[data-test='navbar-title']");
    expect(h1.text()).toEqual('Andrea Diotallevi');
  })
})
