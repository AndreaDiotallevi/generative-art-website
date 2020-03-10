import React from 'react';
import { shallow } from 'enzyme';
import Artworks from './Artworks';

describe('Artworks', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Artworks />);
    wrapper.setState({
      artworks: [{ title: "title", imageUrl: "url"}]
    })
  })

  it('should render the artwork image', () => {
    const img = wrapper.find({ id: 'artwork-image-0'});
    expect(img.props().src).toEqual('url');
  })

  it('should render the artwork title', () => {
    const p = wrapper.find({ id: 'artwork-title-0'} );
    expect(p.text()).toEqual('title');
  })
})
