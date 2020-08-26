import React, { Component } from 'react';

import './styles.css';

class NavBar extends Component {

  render() {
    return (
      <div className='navigation-bar'>
        <h3 className='desktop-heading'><i className="fa fa-bars" style={{ marginRight: '32px', color: 'black' }} />White Orange</h3>
        <h3 className='mobile-heading'><i className="fa fa-chevron-left" style={{ marginRight: '32px', color: 'black' }} />White Orange</h3>
        <div className="location">
          <i className="fa fa-map-marker" />
          Bengaluru
        </div>
        <div className='navigation-items'>
          <i className="fa fa-search" />
          <i className="fa fa-shopping-cart" />
          <i className="fa fa-user-o" />
        </div>
      </div>
    )
  }
}

export default NavBar;
