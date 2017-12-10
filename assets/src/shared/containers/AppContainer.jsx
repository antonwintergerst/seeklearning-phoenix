import React from 'react';

import Header from '../../shared/components/Header';
import TopMenu from '../../shared/components/TopMenu';
import Banner from '../../shared/components/Banner';

const AppContainer = ({ children }) => (
  <div>
    <Header />
    <TopMenu />
    <Banner />
    <main role="main">
      {children}
    </main>
  </div>
);

export default AppContainer;
