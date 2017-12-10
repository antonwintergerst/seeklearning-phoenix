import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import homeReducer from '../home/reducer';
import checkoutReducer from '../checkout/reducer';

export default combineReducers({
  routing: routerReducer,
  home: homeReducer,
  checkout: checkoutReducer,
});
