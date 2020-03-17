import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('Navbar', () => {
  let wrapper;

  describe('When not in Home', () => {
    let props = { location: { pathname: '/artworks' } };

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

  describe('When in Home', () => {
    let props = { location: { pathname: '/' } };

    beforeEach(() => {
      wrapper = shallow(<Navbar {...props}/>);
    })

    it('should render the navbar component with the class component-when-home', () => {
      const div = wrapper.find({ id: 'navbar-component' });
      expect(div.hasClass('component-when-home')).toEqual(true);
    })
  })
})