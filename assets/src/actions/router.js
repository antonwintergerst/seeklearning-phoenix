import { push } from 'react-router-redux';

export const goTo = path => (dispatch) => {
  dispatch(push(path));
};

export default goTo;
