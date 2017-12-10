import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware, ConnectedRouter } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';
import thunk from 'redux-thunk';
import { StaticRouter } from 'react-router';

import Routes from './Routes';
import reducers from './reducers';

const createForBrowser = () => {
  const devToolsExt = typeof window.devToolsExtension !== 'undefined'
    ? window.devToolsExtension()
    : f => f;
  const history = createBrowserHistory();
  const store = createStore(
    reducers,
    window.SERVER_STORE,
    compose(
      applyMiddleware(thunk),
      applyMiddleware(routerMiddleware(history)),
      devToolsExt,
    ),
  );
  const router = (
    <ConnectedRouter history={history}>
      {Routes}
    </ConnectedRouter>
  );
  return { store, router };
};

const createForServer = (props) => {
  const history = createMemoryHistory();
  const store = createStore(
    reducers,
    props.initial_state,
    compose(
      applyMiddleware(thunk),
      applyMiddleware(routerMiddleware(history)),
    ),
  );
  const router = (
    <StaticRouter context={{}} location={props.location}>
      {Routes}
    </StaticRouter>
  );
  return { store, router };
};

export default function createStoreAndRouter(props) {
  return (typeof window !== 'undefined' && typeof window === 'object')
    ? createForBrowser()
    : createForServer(props);
}
