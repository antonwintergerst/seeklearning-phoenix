import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import AdSelectionForm from './AdSelectionForm';
import { adTypes, adFeatures } from '../containers/ClassifyContainer.data';

describe('AdSelectionForm', () => {
  it('renders as expected', () => {
    const tree = ReactTestRenderer.create(<AdSelectionForm adTypes={adTypes} adFeatures={adFeatures} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
