import React from 'react';

import './styles.css';

const MiscDetails = () => {
  return (
    <div>
      <div style={{ margin: '20px 0'}}>
        1 Year manufacturer warranty
      </div>
      <div style={{ display: 'flex' }}>
        <label for="pincode" style={styles.boldText}>Delivery</label>
        <input type="number" id="pincode" name="pincode" placeholder='Enter Pincode' style={styles.input}/>
        <i className="fa fa-chevron-circle-right"  style={{ color: '#0088ff', fontSize: '1.3rem' }}/>
      </div>
      <div className='misc-details-item'>
        <div style={styles.highlights}>
          <div style={styles.boldText}>Highlights</div>
          <div style={styles.lightText}>
            <div style={{ margin: '4px 0'}}>Resolution: HD Ready 1366 X 768 Pixels</div>
            <div style={{ margin: '4px 0'}}>Sound Output: 20 W</div>
            <div style={{ margin: '4px 0'}}>Refresh Rate: 50 Hz</div>
          </div>
        </div>
        <div style={styles.seller}>
          <div style={styles.boldText}>Seller</div>
          <div style={styles.lightText}>
            <div style={{ margin: '4px 0'}}>White Orange, HSR</div>
            <a href='' style={{ margin: '4px 0'}}>View More Sellers</a>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  input: {
    margin: '0 16px',
    border: 'none',
    borderBottom: '1px solid',
    outline: 'none'
  },
  highlights: {
    display: 'flex'
  },
  seller: {
    display: 'flex',
    marginRight: '32px'
  },
  boldText: {
    fontSize: '1.1rem',
    fontWeight: 'bold'
  },
  lightText: {
    margin: '0 16px',
    color: 'grey',
    fontSize: '0.9rem'
  }
}

export default MiscDetails;
