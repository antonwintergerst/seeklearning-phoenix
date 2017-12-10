import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import TopMenu from './TopMenu';

describe('TopMenu', () => {
  it('renders as expected', () => {
    const tree = ReactTestRenderer.create(<div><TopMenu /></div>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
