import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  describe('When not in Home', () => {
    let state = { currentPage: 'artworks' }

    beforeEach(() => {
      wrapper = shallow(<App />);
      wrapper.setState(state);
    })

    it('should render the app component div', () => {
      const div = wrapper.find({ id: 'app' });
      expect(div.length).toEqual(1);
    })

    it('should handling the page change', () => {
      const instance = wrapper.instance();
      jest.spyOn(instance, 'handleChangePage');
      const mockedEvent = { target: { id: 'navbar-artworks' } };
      instance.handleChangePage(mockedEvent);
      // expect(wrapper.state.currentPage).toEqual('artworks');
    })
  })

  describe('When in Home', () => {
    let state = { currentPage: 'home' }

    beforeEach(() => {
      wrapper = shallow(<App />);
      wrapper.setState(state);
    })

    it('should render the app component div with the class component-when-home', () => {
      const div = wrapper.find({ id: 'app' });
      expect(div.hasClass('component-when-home')).toEqual(true);
    })
  })
})
