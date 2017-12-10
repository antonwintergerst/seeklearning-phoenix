import React from 'react';
import { users } from './HomeContainer.data';
import MockUsers from '../components/MockUsers';
import { onUserSelected } from '../actions';

const HomeContainer = () => (
  <div className="ui container">
    <h2 className="ui header">Select your user</h2>
    <MockUsers users={users} onClicked={onUserSelected} />
  </div>
);
export default HomeContainer;
