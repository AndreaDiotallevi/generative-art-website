import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('Navbar', () => {
  let wrapper;
  let props = { isHome: () => false }

  beforeEach(() => {
    wrapper = shallow(<Navbar {...props}/>);
  })

  it('should render ANDREA DIOTALLEVI', () => {
    const h1 = wrapper.find({ id: 'navbar-title' });
    expect(h1.text()).toEqual('ANDREA DIOTALLEVI');
  })

  it('should render home and about navbar links', () => {
    const homeLink = wrapper.find({ id: 'navbar-home' });
    expect(homeLink.text()).toEqual('home');
  })
})
