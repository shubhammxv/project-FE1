import React from 'react';

import './styles.css';

const ImpDetails = () => {
  return (
    <div>
      <div className='product-name'>
        LG R202F 80cm (32 inch) HD Ready LED TV
        <span style={{ color: 'grey', margin: '0 16px' }}>(KLV-32R202F)</span>
      </div>
      <div className='imp-details' style={{  }}>
        <div className='product-price'>
          <span className='discounted'>₹89,999</span>
          <span className='actual'>₹98,999</span>
          <span className='discount'>35%</span>
        </div>
        <div className='product-rating'>
          <i className='fa fa-star'/>
          <i className='fa fa-star'/>
          <i className='fa fa-star'/>
          <i className='fa fa-star'/>
          4608 Reviews
        </div>
      </div>
    </div>
  )
}

export default ImpDetails;
