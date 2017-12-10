import { push } from 'react-router-redux';

export const QUOTE_JOB_CHANGED = 'QUOTE_JOB_CHANGED';
export const QUOTE_CHANGED = 'QUOTE_CHANGED';

export const setAdType = adType => (dispatch) => {
  const newJob = {
    ...{},
    adType,
  };
  dispatch({
    type: QUOTE_JOB_CHANGED,
    payload: newJob,
  });
};

export const addProduct = (quote, job) => (dispatch) => {
  const exists = quote.products.map(product => product).find(product => product.adType.id === job.adType.id);
  let products;
  if (exists) {
    products = quote.products.map((product) => {
      if (product.adType.id === job.adType.id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
  } else {
    products = [...quote.products, { ...job.adType, quantity: 1 }];
  }
  const newQuote = {
    ...quote,
    products,
  };
  dispatch({
    type: QUOTE_CHANGED,
    payload: newQuote,
  });
  dispatch(push('checkout'));
};

export const moveToAddAnotherJob = () => (dispatch) => {
  dispatch({
    type: QUOTE_JOB_CHANGED,
    payload: null,
  });
  dispatch(push('classify'));
};

