import React from 'react';

// redux
import { connect } from 'react-redux';
import { goTo } from '../../actions/router';
import { moveToAddAnotherJob } from '../actions';

import OrderSummary from '../components/OrderSummary';
import MockUserCard from '../components/MockUserCard';
import { perks } from '../../home/containers/HomeContainer.data';

const CheckoutContainer = (props) => {
  const { quote, user } = props;
  if (!user) {
    props.goTo('/');
    return null;
  }

  const quoteGroupedByPrice = {
    ...quote,
    products: quote.jobs.reduce((acc, job) => {
      const product = job.adType;
      const exists = acc.find(p => p.id === product.id && p.price === product.price);
      if (exists) {
        return acc.map((p) => {
          if (p.id === product.id && p.price === product.price) {
            return { ...p, quantity: p.quantity + 1 };
          }
          return p;
        });
      }
      return [...acc, { ...product, quantity: 1 }];
    }, []),
  };

  const onContinueClicked = () => {

  };
  const onAddAnotherClicked = () => {
    props.moveToAddAnotherJob();
  };
  return (
    <div className="ui container">
      <h2 className="ui header">Review quote</h2>
      <OrderSummary products={quoteGroupedByPrice.products} />
      {user &&
        <MockUserCard user={user} perks={perks} />
      }
      <button className="ui huge button pink continue" onClick={onContinueClicked}>Continue to payment options</button>
      <button className="ui button" onClick={onAddAnotherClicked}>Add another job</button>
    </div>
  );
};
// Redux state mapping
const mapStateToProps = state => ({
  user: state.home.user,
  quote: state.checkout.quote,
});

export default connect(mapStateToProps, {
  goTo, moveToAddAnotherJob,
})(CheckoutContainer);
