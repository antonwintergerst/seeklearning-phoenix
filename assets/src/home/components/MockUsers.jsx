import React from 'react';

const MockUsers = ({ users, perks, onClicked }) => (
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
            {user.perks.map(pid => perks.find(perk => perk.id === pid)).map(perk => (
              <p key={perk.id}>{perk.description}</p>
            ))}
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
