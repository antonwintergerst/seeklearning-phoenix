import { push } from 'react-router-redux';

export const goTo = path => (dispatch) => {
  console.log(path);
  dispatch(push(path));
};

export default goTo;
