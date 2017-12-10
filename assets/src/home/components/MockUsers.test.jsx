import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import MockUsers from './MockUsers';
import { users } from '../containers/HomeContainer.data';

describe('MockUsers', () => {
  it('renders as expected', () => {
    const tree = ReactTestRenderer.create(<MockUsers users={users} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
