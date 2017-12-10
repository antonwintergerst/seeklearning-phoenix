import React from 'react';
// redux
import { connect } from 'react-redux';
// import { goTo } from '../../actions/router';

import Header from '../../shared/components/Header';
import TopMenu from '../../shared/components/TopMenu';
import Banner from '../../shared/components/Banner';

const AppContainer = props => (
  <div>
    <Header />
    <TopMenu onItemClicked={props.goTo} />
    <Banner />
    <main role="main">
      {props.children}
    </main>
  </div>
);

// Redux state mapping
const mapStateToProps = state => ({
});

export default connect(mapStateToProps, {
  // goTo,
})(AppContainer);
