import { push } from 'react-router-redux';
import { QUOTE_RESET, QUOTE_JOB_RESET } from '../checkout/actions';

export const USER_SET = 'USER_SET';

export const setUser = user => (dispatch) => {
  dispatch({
    type: USER_SET,
    payload: user,
  });
  dispatch({
    type: QUOTE_RESET,
  });
  dispatch({
    type: QUOTE_JOB_RESET,
  });
  dispatch(push('classify'));
};
