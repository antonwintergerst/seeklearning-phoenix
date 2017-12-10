import {
  QUOTE_JOB_CHANGED,
  QUOTE_CHANGED,
  QUOTE_RESET,
  QUOTE_JOB_RESET,
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
    case QUOTE_RESET: {
      return { ...state, quote: initialState.quote };
    }
    case QUOTE_JOB_RESET: {
      return { ...state, job: initialState.job };
    }
    default:
      return { ...state };
  }
};
