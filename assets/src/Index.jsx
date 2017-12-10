import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createStoreAndRouter from './Store';

class Index extends Component {
  render() {
    const { store, router } = createStoreAndRouter(this.props);
    return (
      <Provider store={store}>
        {router}
      </Provider>
    );
  }
}

export default Index;
