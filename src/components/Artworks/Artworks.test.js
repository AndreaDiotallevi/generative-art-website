import React from 'react';
import { shallow } from 'enzyme';
import Artworks from './Artworks';

jest.mock('../../utils/artworks');

describe('Artworks', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Artworks />);
  })

  it('should render the artwork image', () => {
    const img = wrapper.find({ id: 'artwork-image-1'});
    expect(img.props().src).toEqual('test-artwork.png');
  })

  it('should render the artwork title', () => {
    const p = wrapper.find({ id: 'artwork-title-1'} );
    expect(p.text()).toEqual('test artwork');
  })
})
