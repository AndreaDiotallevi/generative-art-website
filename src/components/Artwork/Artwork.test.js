import React from 'react';
import { shallow } from 'enzyme';
import Artwork from './Artwork';

jest.mock('../../utils/artworks');

describe('Artwork', () => {
  let wrapper;
  let props = { match: { params: { title: 'test-artwork' } } };

  beforeEach(() => {
    wrapper = shallow(<Artwork {...props}/>);
  })

  it('should render the artwork page image', () => {
    const img = wrapper.find({ id: 'artwork-page-image-0'});
    expect(img.props().src).toEqual('test-artwork-0.png');
  })

  it('should render the artwork page title', () => {
    const h3 = wrapper.find({ id: 'artwork-page-title' } );
    expect(h3.text()).toEqual('TEST ARTWORK');
  })

  it('should render the artwork description', () => {
    const p = wrapper.find({ id: 'artwork-page-description' } );
    expect(p.text()).toEqual('description');
  })
})
