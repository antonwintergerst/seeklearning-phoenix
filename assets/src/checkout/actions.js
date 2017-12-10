import { push } from 'react-router-redux';

export const QUOTE_JOB_CHANGED = 'QUOTE_JOB_CHANGED';
export const QUOTE_CHANGED = 'QUOTE_CHANGED';
export const QUOTE_RESET = 'QUOTE_RESET';
export const QUOTE_JOB_RESET = 'QUOTE_JOB_RESET';

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

export const addJob = (quote, job) => (dispatch) => {
  if (!job.isStored) {
    const exists = quote.products.find(product => product.id === job.adType.id);
    let products;
    if (exists) {
      products = quote.products.map((product) => {
        if (product.id === job.adType.id) {
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
      jobs: [...quote.jobs, job],
    };
    dispatch({
      type: QUOTE_CHANGED,
      payload: newQuote,
    });
    dispatch({
      type: QUOTE_JOB_CHANGED,
      payload: { ...job, isStored: true },
    });
  }
  return Promise.resolve();
};

export const moveToAddAnotherJob = () => (dispatch) => {
  dispatch({
    type: QUOTE_JOB_CHANGED,
    payload: null,
  });
  dispatch(push('classify'));
};

