import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Banner from './Banner';

describe('Banner', () => {
  it('renders as expected', () => {
    const tree = ReactTestRenderer.create(<Banner />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
