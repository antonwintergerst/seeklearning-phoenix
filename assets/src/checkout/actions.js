export const QUOTE_JOB_CHANGED = 'QUOTE_JOB_CHANGED';
export const QUOTE_CHANGED = 'QUOTE_CHANGED';

export const onAdTypeSelected = adType => (dispatch) => {
  const newJob = {
    ...{},
    adType: adType.id,
  };
  dispatch({
    type: QUOTE_JOB_CHANGED,
    payload: newJob,
  });
};

export const addJob = (quote, job) => (dispatch) => {
  const newQuote = {
    ...quote,
    products: [...quote.products, job],
  };
  dispatch({
    type: QUOTE_CHANGED,
    payload: newQuote,
  });
};
