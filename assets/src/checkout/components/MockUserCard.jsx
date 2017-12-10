import React from 'react';

const MockUserCard = ({ user, perks }) => (
  <div className="ui card">
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
  </div>
);

export default MockUserCard;
