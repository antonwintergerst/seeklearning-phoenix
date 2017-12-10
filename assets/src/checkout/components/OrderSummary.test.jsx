import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import OrderSummary from './OrderSummary';
import { quote } from '../containers/ClassifyContainer.data';

describe('OrderSummary', () => {
  it('renders as expected', () => {
    const tree = ReactTestRenderer.create(<OrderSummary products={quote.products} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
