export const USER_SET = 'USER_SET';

export const onUserSelected = user => (dispatch) => {
  dispatch({
    type: USER_SET,
    payload: user,
  });
};
