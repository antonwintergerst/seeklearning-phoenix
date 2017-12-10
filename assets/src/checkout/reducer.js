import {
  QUOTE_JOB_CHANGED,
  QUOTE_CHANGED,
} from './actions';

const initialState = {
  adTypes: [],
  quote: {
    products: [],
    jobs: [],
  },
  job: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case QUOTE_JOB_CHANGED: {
      return { ...state, job: action.payload };
    }
    case QUOTE_CHANGED: {
      return { ...state, quote: action.payload };
    }
    default:
      return { ...state };
  }
};
