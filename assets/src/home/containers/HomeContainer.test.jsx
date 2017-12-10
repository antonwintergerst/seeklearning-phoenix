import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import HomeContainer from './HomeContainer';

describe('HomeContainer', () => {
  it('renders as expected', () => {
    const tree = ReactTestRenderer.create(<HomeContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
