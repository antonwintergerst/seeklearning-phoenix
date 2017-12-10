import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Header from './Header';

describe('Header', () => {
  it('renders as expected', () => {
    const tree = ReactTestRenderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
