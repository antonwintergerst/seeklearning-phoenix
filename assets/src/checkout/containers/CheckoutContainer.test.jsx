import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import CheckoutContainer from './CheckoutContainer';

describe('CheckoutContainer', () => {
  it('renders as expected', () => {
    const tree = ReactTestRenderer.create(<CheckoutContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
