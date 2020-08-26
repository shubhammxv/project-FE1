import React, { Component } from 'react';

import NavBar from './NavBar/NavBar';
import ProductImage from './ProductImage/ProductImage';
import Offers from './Offers/Offers';
import { AccDetails, ImpDetails, MiscDetails } from './Details';

import './styles.css';

class Assignment extends Component {

  render() {
    return (
      <div>
        <div className='navbar-container'>
          <NavBar />
        </div>
        <div className='main-container'>
          <div style={{ flex: 3 }}>
            <ProductImage />
          </div>
          <div className='details'>
            <ImpDetails />
            <Offers />
            <MiscDetails />
            <AccDetails />
          </div>
        </div>
      </div>
    )

  }
}

export default Assignment;
