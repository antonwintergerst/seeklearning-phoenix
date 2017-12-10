import React from 'react';
import { Route, Switch } from 'react-router';

import AppContainer from './shared/containers/AppContainer';
import HomeContainer from './home/containers/HomeContainer';
import CheckoutContainer from './checkout/containers/CheckoutContainer';

export default (
  <AppContainer>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/checkout" component={CheckoutContainer} />
    </Switch>
  </AppContainer>
);
