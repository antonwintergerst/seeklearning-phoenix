import React from 'react';
import { ICONS } from '../../constants';
import Icon from '../../shared/components/Icon';

const TopMenu = ({ onItemClicked }) => (
  <div className="top-menu">
    <nav className="ui menu container">
      <a className="item active" onClick={() => { onItemClicked('/'); }}><Icon icon={ICONS.HOME} width={23} height={22} color="#fff" /></a>
      <a className="item">Courses</a>
      <a className="item">Careers</a>
      <a className="item">Studying</a>
    </nav>
  </div>
);

export default TopMenu;
