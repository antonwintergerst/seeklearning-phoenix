import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import ClassifyContainer from './ClassifyContainer';

describe('ClassifyContainer', () => {
  it('renders as expected', () => {
    const tree = ReactTestRenderer.create(<div><ClassifyContainer /></div>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
