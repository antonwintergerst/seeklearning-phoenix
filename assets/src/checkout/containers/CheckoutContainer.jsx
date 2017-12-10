import React from 'react';

// redux
import { connect } from 'react-redux';
import { moveToAddAnotherJob } from '../actions';

import OrderSummary from '../components/OrderSummary';

const CheckoutContainer = (props) => {
  const { quote } = props;
  const onContinueClicked = () => {

  };
  const onAddAnotherClicked = () => {
    props.moveToAddAnotherJob();
  };
  return (
    <div className="ui container">
      <h2 className="ui header">Review quote</h2>
      <OrderSummary products={quote.products} />
      <button className="ui huge button pink continue" onClick={onContinueClicked}>Continue to payment options</button>
      <button className="ui button" onClick={onAddAnotherClicked}>Add another job</button>
    </div>
  );
};
// Redux state mapping
const mapStateToProps = state => ({
  quote: state.checkout.quote,
});

export default connect(mapStateToProps, {
  moveToAddAnotherJob,
})(CheckoutContainer);
