import React from 'react';
import { Route, Switch } from 'react-router';

import AppContainer from './shared/containers/AppContainer';
import HomeContainer from './home/containers/HomeContainer';
import ClassifyContainer from './checkout/containers/ClassifyContainer';
import CheckoutContainer from './checkout/containers/CheckoutContainer';

export default (
  <AppContainer>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/classify" component={ClassifyContainer} />
      <Route exact path="/checkout" component={CheckoutContainer} />
    </Switch>
  </AppContainer>
);
