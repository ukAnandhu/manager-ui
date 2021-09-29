import React from 'react';
import ManCity from '../../images/man-city.svg';
import Liverpool from '../../images/liverpool.svg';
import WinIcon from '../../images/win.svg';

function MatchesCard() {
   return (
      <div className='matches-card'>
         <img src={WinIcon} alt='matches-previous-button' />

         <div className='matches-card__team'>
            <span className='matches-card__team-name'>Man City</span>
            <img className='mobile-hidden' src={ManCity} alt='mancity' />
         </div>

         <div className='matches-card__score-container'>
            <span className='matches-card__score'>3</span>
            <span className='matches-card__ft'>FT</span>
            <span className='matches-card__score'>1</span>
         </div>

         <div className='matches-card__team'>
            <img className='mobile-hidden' src={Liverpool} alt='liverpool' />
            <span className='matches-card__team-name'>Liverpool</span>
         </div>
      </div>
   );
}

export default MatchesCard;
