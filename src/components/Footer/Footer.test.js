import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()) === true
  })

  it('should render the copyright logo', () => {
    const wrapper = shallow(<Footer />);
    const img = wrapper.find({ id: 'copyright-logo'});
    expect(img.props().src).toEqual('copyright-logo.png');
  })

  it('should render Andrea Diotallevi 2020', () => {
    const wrapper = shallow(<Footer />);
    const p = wrapper.find({ id: 'footer-copyright'});
    expect(p.text()).toEqual('Andrea Diotallevi 2020');
  })

  it('should render the instagram logo', () => {
    const wrapper = shallow(<Footer />);
    const img = wrapper.find({ id: 'instagram-logo'});
    expect(img.props().src).toEqual('instagram-logo.png');
  })
})
