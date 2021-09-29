import React from 'react';
import WhiteLion from '../../images/white-lion.svg';
import MatchesCard from './MatchesCard';

function MatchesMobileCard() {
   return (
      <div className='mobile-visible matches-card__mobile-container'>
         <div className='matches__date-container'>14/07/2021</div>
         <div className='matches__premier matches__premier--margin'>
            <img src={WhiteLion} alt='matches-next-button' />
            <p className='matches__premier-text'>Premier League</p>
         </div>

         <div className='matches-card__mobile'>
            <MatchesCard />
         </div>
      </div>
   );
}

export default MatchesMobileCard;
