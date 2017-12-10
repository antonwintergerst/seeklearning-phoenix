import React from 'react';
import AdSelectionForm from '../components/AdSelectionForm';
import { adTypes, adFeatures } from './ClassifyContainer.data';

const ClassifyContainer = () => (
  <div className="ui container">
    <h3 className="ui header">Choose your style of ad</h3>
    <div className="ui basic segment">
      <AdSelectionForm adTypes={adTypes} adFeatures={adFeatures} />
    </div>
  </div>
);

export default ClassifyContainer;
