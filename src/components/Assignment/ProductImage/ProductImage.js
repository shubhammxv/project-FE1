import React, { Fragment } from 'react';

import './styles.css';

const ProductImage = () => {
  return (
    <Fragment>
      <div className='product-nav'>
        <span>Home</span>
        <i className="fa fa-chevron-right" />
        <span>TV's</span>
        <i className="fa fa-chevron-right" />
        <span>LG 55" Smart</span>
      </div>
      <div className="product-overview">

        <div className="product-image">
          <img
            style={{ width: '100%' }}
            src='https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png'
            alt="White Orange"
          />
        </div>
        <div className="change-view">
          View 360
        </div>
        <div className="images-carousel">
          <i className="fa fa-chevron-circle-left" />
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <i className="fa fa-chevron-circle-right" />
        </div>
        <div className='user-actions'>
          <button className='add-btn'>Add to Cart</button>
          <button className='buy-btn'>Buy Now</button>
        </div>
      </div>
    </Fragment>
  )
}

export default ProductImage;
