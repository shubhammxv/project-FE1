import React from 'react';

import './styles.css';

const offerDetails = [
  {
    text: 'Bank Offer Instant 10% discount upto ₹1,000',
    hasTC: false,
  },
  {
    text: 'Extra ₹3000 off(price inclusive of discount)',
    hasTC: true,
  },
  {
    text: '10% Instant Discount on HDFC Bank Debit Cards',
    hasTC: false,
  },
  {
    text: '5% off* with Axis Bank Buzz Credit Card',
    hasTC: true,
  }
]


const Offers = () => {
  return (
    <div className="offers-container">
      <div className='offer-heading'>Available Offers</div>
      <div className="offers">
        {offerDetails.map(offer => {
          const { text, hasTC } = offer;
          return (
            <div className='offer'>
              {text}
              {hasTC && <a href=''>{'T&C'}</a>}
            </div>
          )
        })}
        <a href=''>View 4 more offers</a>
      </div>
    </div>
  )
}

export default Offers;
