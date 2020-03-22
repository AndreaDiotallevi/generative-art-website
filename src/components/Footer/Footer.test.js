import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
  let wrapper;

  describe('When not in Home', () => {
    let props = { location: { pathname: '/artworks' } };

    beforeEach(() => {
      wrapper = shallow(<Footer {...props}/>);
    })

    it('should render Andrea Diotallevi 2020', () => {
      const p = wrapper.find({ id: 'footer-copyright' });
      expect(p.text()).toEqual('© 2020, ANDREA DIOTALLEVI');
    })

    it('should render the instagram logo with hyperlink', () => {
      const a = wrapper.find({ id: 'instagram-hyperlink' })
      expect(a.props().href).toEqual('https://www.instagram.com/andreadiotalleviart/')
    })

    it('should render the footer component div', () => {
      const div1 = wrapper.find({ id: 'footer-component' });
      expect(div1.length).toEqual(1);
    })
  })

  describe('When in Home', () => {
    let props = { location: { pathname: '/' } };

    beforeEach(() => {
      wrapper = shallow(<Footer {...props}/>);
    })

    it('should render the footer component with the class component-when-home', () => {
      const div = wrapper.find({ id: 'footer-component' });
      expect(div.hasClass('component-when-home')).toEqual(true);
    })
  })
})
