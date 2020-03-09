import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('Navbar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Navbar />);
  })

  it('should render ANDREA DIOTALLEVI', () => {
    const h1 = wrapper.find({ id: 'navbar-title' });
    expect(h1.text()).toEqual('ANDREA DIOTALLEVI');
  })

  it('should render home and about navbar links', () => {
    const homeLink = wrapper.find({ id: 'navbar-home' });
    const aboutLink = wrapper.find({ id: 'navbar-about' });
    expect(homeLink.text()).toEqual('home');
    expect(aboutLink.text()).toEqual('about');
  })
})
