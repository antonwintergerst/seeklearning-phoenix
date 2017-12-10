import React from 'react';
// redux
import { connect } from 'react-redux';
import { goTo } from '../../actions/router';
import { setAdType, addJob } from '../actions';

import AdSelectionForm from '../components/AdSelectionForm';
import { adTypes, adFeatures } from './ClassifyContainer.data';
import { perks } from '../../home/containers/HomeContainer.data';

const ClassifyContainer = (props) => {
  const { user, quote, job } = props;
  if (!user) {
    props.goTo('/');
    return null;
  }

  let adTypesWithMods = adTypes.map(adType => ({ ...adType, isActive: job && job.adType.id === adType.id }));
  if (user.perks) {
    const discounts = user.perks.map(pid => perks.find(p => p.id === pid)).reduce((acc, perk) => acc.concat(perk.discounts), []);
    adTypesWithMods = adTypesWithMods.map((adType) => {
      const discount = discounts.find(d => d.ad_type_id === adType.id);
      if (discount) {
        const appliesToOrder = !discount.min || quote.products.find(p => p.id === adType.id && p.quantity % discount.min === 0);
        if (appliesToOrder) {
          const newAdType = { ...adType, price: discount.price || 0 };
          return newAdType;
        }
      }
      return adType;
    });
  }

  const onContinueClicked = () => {
    if (job) {
      props.addJob(quote, job).then(() => {
        props.goTo('/checkout');
      });
    } else if (quote.jobs.length > 0) {
      props.goTo('/checkout');
    }
  };

  const onAddClicked = () => {
    if (!job) {
      return;
    }
    props.addJob(quote, { ...job, isStored: false });
  };

  return (
    <div className="ui container">
      <h2 className="ui header">Choose your style of ad</h2>
      <AdSelectionForm adTypes={adTypesWithMods} adFeatures={adFeatures} onSelectClicked={props.setAdType} />
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
  user: state.home.user,
  quote: state.checkout.quote,
  job: state.checkout.job,
});

export default connect(mapStateToProps, {
  goTo,
  setAdType,
  addJob,
})(ClassifyContainer);
