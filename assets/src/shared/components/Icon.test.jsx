import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Icon from './Icon';
import { ICONS } from '../../constants';

describe('Icon', () => {
  it('renders as expected', () => {
    const tree = ReactTestRenderer.create(<Icon icon={ICONS.HOME} width={23} height={22} color="#fff" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
