import { push } from 'react-router-redux';

export const USER_SET = 'USER_SET';

export const setUser = user => (dispatch) => {
  dispatch({
    type: USER_SET,
    payload: user,
  });
  dispatch(push('classify'));
};
