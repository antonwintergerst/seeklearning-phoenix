import React from 'react';

// redux
import { connect } from 'react-redux';
import { setUser } from '../actions';

import { users, perks } from './HomeContainer.data';
import MockUsers from '../components/MockUsers';

const HomeContainer = props => (
  <div className="ui container">
    <h2 className="ui header">Select your persona</h2>
    <MockUsers users={users} perks={perks} onClicked={props.setUser} />
  </div>
);

// Redux state mapping
const mapStateToProps = state => ({
  user: state.home.user,
});

export default connect(mapStateToProps, {
  setUser,
})(HomeContainer);
