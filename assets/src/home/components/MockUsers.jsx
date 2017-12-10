import React from 'react';
import { ICONS } from '../../constants';
import Icon from '../../shared/components/Icon';

const MockUsers = ({ users, onClicked }) => (
  <div className="ui four link cards">
    {users.map(user => (
      <div key={user.id} className="card" onClick={() => { onClicked(user); }}>
        <div className="image">
          <img src={user.avatar} alt="" />
        </div>
        <div className="content">
          <div className="header">{user.name}</div>
          <div className="meta">
            <span>{user.occupation}</span>
          </div>
          <div className="description">
            {user.description}
          </div>
        </div>
        <div className="ui bottom attached button">
          Sign in
        </div>
      </div>
    ))}
  </div>
);
export default MockUsers;
