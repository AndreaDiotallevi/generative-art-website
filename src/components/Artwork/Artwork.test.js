import React from 'react';
import { shallow } from 'enzyme';
import Artwork from './Artwork';

describe('Artwork', () => {
  let wrapper;
  let props = { match: { params: { title: 'test-artwork' } } };

  beforeEach(() => {
    wrapper = shallow(<Artwork {...props}/>);
  })

  it('should render the artwork page image', () => {
    const img = wrapper.find({ id: 'artwork-page-image'});
    expect(img.props().src).toEqual('test-artwork.png');
  })

  it('should render the artwork page title', () => {
    const h3 = wrapper.find({ id: 'artwork-page-title' } );
    expect(h3.text()).toEqual('test artwork');
  })
})
