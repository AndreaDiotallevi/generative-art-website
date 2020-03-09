import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()) === true
  })

  // it('should render Andrea Diotallevi 2020', () => {
  //   const wrapper = shallow(<Footer />);
  //   const h1 = wrapper.find("[data-test='navbar-title']");
  //   expect(h1.text()).toEqual('ANDREA DIOTALLEVI');
  // })
})
