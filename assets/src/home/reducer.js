import {
  USER_SET,
} from './actions';

const initialState = {
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_SET: {
      return { ...state, user: action.payload };
    }
    default:
      return { ...state };
  }
};
