import React from 'react';
import GreenNextIcon from '../../images/green-next.svg';
import LiverpoolIcon from '../../images/liverpool.svg';

function CarrerCard() {
   return (
      <div className='carrer-card'>
         <div className='carrer-card__first'>
            <img src={LiverpoolIcon} alt='liverpool' />
            <div className='carrer-card-text'>Liverpool</div>
         </div>
         <div className='carrer-card__second'>
            <span className='carrer-card-date'>01-08-2022</span>
            <img src={GreenNextIcon} alt='next-icon' />
            <span className='carrer-card-date'>01-08-2022</span>
         </div>
      </div>
   );
}

export default CarrerCard;
