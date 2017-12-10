import { push } from 'react-router-redux';
import { perks } from '../home/containers/HomeContainer.data';

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

export const applyDiscount = (user, quote, adType) => {
  if (user.perks) {
    // apply user discounts
    const discounts = user.perks.map(pid => perks.find(p => p.id === pid)).reduce((acc, perk) => acc.concat(perk.discounts), []);
    const discount = discounts.find(d => d.ad_type_id === adType.id);
    if (discount) {
      // ensure quote meets occurrence requirement
      const appliesToOrder = !discount.every || quote.products.find(p => p.id === adType.id && (p.quantity + 1) % discount.every === 0);
      // ensure quote meets min requirement
      const appliesAsMin = quote.products.find(p => p.id === adType.id && p.quantity >= discount.min);
      if (appliesToOrder && (!discount.min || appliesAsMin)) {
        const price = discount.price || 0;
        if (appliesAsMin) {
          // min price should affect all existing items
          const newJobs = quote.jobs.map((job) => {
            if (job.adType.id === adType.id) {
              return { ...job, adType: { ...adType, price } };
            }
          });
          return { quote: { ...quote, jobs: newJobs }, adType: { ...adType, price } };
        }
        return { quote, adType: { ...adType, price } };
      }
    }
  }
  return { quote, adType };
};

export const addJob = (user, quote, job) => (dispatch) => {
  if (!job.isStored) {
    const result = applyDiscount(user, quote, job.adType);
    const quoteWithDiscount = result.quote;
    const adTypeWithDiscount = result.adType;
    const jobTypeWithDiscount = { ...job, adType: adTypeWithDiscount };

    const exists = quoteWithDiscount.products.find(product => product.id === jobTypeWithDiscount.adType.id);
    let products;
    if (exists) {
      products = quoteWithDiscount.products.map((product) => {
        if (product.id === jobTypeWithDiscount.adType.id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
    } else {
      products = [...quoteWithDiscount.products, { ...jobTypeWithDiscount.adType, quantity: 1 }];
    }
    const newQuote = {
      ...quoteWithDiscount,
      products,
      jobs: [...quoteWithDiscount.jobs, jobTypeWithDiscount],
    };
    dispatch({
      type: QUOTE_CHANGED,
      payload: newQuote,
    });
    dispatch({
      type: QUOTE_JOB_CHANGED,
      payload: { ...jobTypeWithDiscount, isStored: true },
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

