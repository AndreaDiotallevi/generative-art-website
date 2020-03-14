import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Footer />);
  })

  it('should render Andrea Diotallevi 2020', () => {
    const p = wrapper.find({ id: 'footer-copyright'});
    expect(p.text()).toEqual('© 2020, Andrea Diotallevi');
  })

  it('should render the instagram logo with hyperlink', () => {
    const a = wrapper.find({ id: 'instagram-hyperlink' })
    expect(a.props().href).toEqual('https://www.instagram.com/andreadiotalleviart/')
  })
})
