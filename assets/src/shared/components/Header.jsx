import React from 'react';

const Header = () => (
  <header className="header" role="banner">
    <div className="business-menu">
      <div className="ui container">
        <nav className="ui menu">
          <a className="item" href="/#">Jobs</a>
          <a className="item active" href="/#">Courses</a>
          <a className="item" href="/#">Businesses for sale</a>
          <a className="item" href="/#">Volunteering</a>
        </nav>
      </div>
    </div>
    <div className="ui logo container">
      <img src="/dist/images/seeklearning-logo.svg" alt="Seek Learning" />
    </div>
  </header>
);

export default Header;
