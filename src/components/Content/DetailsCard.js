import React from 'react';

function DetailsCard({ heading, text }) {
   return (
      <div className='details-card'>
         <h2 className='details-card__heading'>{heading}</h2>
         <p className='details-card__text'>{text}</p>
      </div>
   );
}

export default DetailsCard;
