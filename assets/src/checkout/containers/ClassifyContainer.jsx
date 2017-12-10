import React from 'react';
// redux
import { connect } from 'react-redux';
import { goTo } from '../../actions/router';
import { setAdType, addProduct } from '../actions';

import AdSelectionForm from '../components/AdSelectionForm';
import { adTypes, adFeatures } from './ClassifyContainer.data';

const ClassifyContainer = (props) => {
  const { quote, job } = props;
  const adTypesState = adTypes.map(adType => ({ ...adType, isActive: job && job.adType.id === adType.id }));
  const onContinueClicked = () => {
    if (!job) {
      return;
    }
    props.addProduct(quote, job).then(() => {
      props.goTo('/checkout');
    });
  };
  const onAddClicked = () => {
    if (!job) {
      return;
    }
    props.addProduct(quote, job);
  };
  return (
    <div className="ui container">
      <h2 className="ui header">Choose your style of ad</h2>
      <AdSelectionForm adTypes={adTypesState} adFeatures={adFeatures} onSelectClicked={props.setAdType} />
      <button className="ui huge button pink continue" onClick={onContinueClicked}>Continue</button>
      <button className="ui button" onClick={onAddClicked}>Add job</button>
      {quote.jobs.length > 0 &&
      <span className="ui tag labels">
        <span className="ui label">Jobs pending: {quote.jobs.length}</span>
      </span>
      }
    </div>
  );
};

// Redux state mapping
const mapStateToProps = state => ({
  quote: state.checkout.quote,
  job: state.checkout.job,
});

export default connect(mapStateToProps, {
  goTo,
  setAdType,
  addProduct,
})(ClassifyContainer);
