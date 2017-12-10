import React from 'react';
import { ICONS } from '../../constants';
import Icon from '../../shared/components/Icon';

const TopMenu = ({ onItemClicked }) => (
  <div className="top-menu">
    <nav className="ui menu container">
      <a className="item active" onClick={() => { onItemClicked('/'); }}><Icon icon={ICONS.HOME} width={23} height={22} color="#fff" /></a>
      <a className="item" href="/#">Courses</a>
      <a className="item" href="/#">Careers</a>
      <a className="item" href="/#">Studying</a>
    </nav>
  </div>
);

export default TopMenu;
