import React from 'react';

import Header from '../../shared/components/Header';
import TopMenu from '../../shared/components/TopMenu';

const AppContainer = ({ children }) => (
  <div>
    <Header />
    <TopMenu />
    <main role="main">
      {children}
    </main>
  </div>
);

export default AppContainer;
