import React from 'react';
// redux
import { connect } from 'react-redux';
import { onAdTypeSelected } from '../actions';

import AdSelectionForm from '../components/AdSelectionForm';
import { adTypes, adFeatures } from './ClassifyContainer.data';

const ClassifyContainer = ({ job, onAdTypeSelected }) => {
  const adTypesState = adTypes.map(adType => ({ ...adType, isActive: job && job.adType === adType.id }));
  return (
    <div className="ui container">
      <h2 className="ui header">Choose your style of ad</h2>
      <AdSelectionForm adTypes={adTypesState} adFeatures={adFeatures} onSelectClicked={onAdTypeSelected} />
      <button className="ui huge button pink continue">Continue</button>
    </div>
  );
};
// Redux state mapping
const mapStateToProps = state => ({
  job: state.checkout.job,
});

export default connect(mapStateToProps, {
  onAdTypeSelected,
})(ClassifyContainer);

