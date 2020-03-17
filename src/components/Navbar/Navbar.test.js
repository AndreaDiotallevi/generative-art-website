import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useLocation: () => ({
    pathname: '/'
  })
}));

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
    expect(homeLink.text()).toEqual('home');
  })

  it('should render the navbar component with the class component-when-home', () => {
    const div = wrapper.find({ id: 'navbar-component' });
    expect(div.hasClass('component-when-home')).toEqual(true);
  })
})
