import React from 'react';

import './styles.css';

const detailsToShow = ['Specification', 'Features', 'Description'];

const AccDetails = () => {
  return (
    <div className="accordion-details">
      {detailsToShow.map(detail => (
        <div className="details-box">
          <div className="detail">{detail}</div>
          <i className="fa fa-plus" />
        </div>
      ))}
    </div>
  )
}

export default AccDetails;
