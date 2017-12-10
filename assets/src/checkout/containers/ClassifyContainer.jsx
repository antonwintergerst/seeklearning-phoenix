import React from 'react';
import AdSelectionForm from '../components/AdSelectionForm';
import { adTypes, adFeatures } from './ClassifyContainer.data';

const ClassifyContainer = () => (
  <div className="ui container">
    <h2 className="ui header">Choose your style of ad</h2>
    <AdSelectionForm adTypes={adTypes} adFeatures={adFeatures} />
  </div>
);

export default ClassifyContainer;
