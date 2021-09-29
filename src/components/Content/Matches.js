import React from 'react';
import MatchesPrevious from '../../images/matches-previous.svg';
import MatchesNext from '../../images/matches-next.svg';
import MatchesDown from '../../images/matches-down.svg';
import WhiteLion from '../../images/white-lion.svg';
import MatchesCard from './MatchesCard';
import MatchesMobileCard from './MatchesMobileCard';

function Matches() {
   return (
      <div className='matches'>
         <div className='matches__nav-container'>
            <h2 className='matches__heading'>Matches</h2>
            <div className='matches__button-container'>
               <div className='matches__button-previous matches__button'>
                  <img src={MatchesPrevious} alt='matches-previous-button' />

                  <span className='matches__button-text'>Previous</span>
               </div>
               <div className='matches__button-down mobile-visible matches__button'>
                  <span className='matches__button-text'>Round 35</span>
                  <img src={MatchesDown} alt='matches-rounds-button' />
               </div>
               <div className='matches__button-next matches__button'>
                  <span className='matches__button-text'>Next</span>
                  <img src={MatchesNext} alt='matches-next-button' />
               </div>
            </div>
         </div>

         <div className='mobile-hidden'>
            <div className='matches__date-container'>14/07/2021</div>

            <div className='matches__premier'>
               <img src={WhiteLion} alt='matches-next-button' />
               <p className='matches__premier-text'>Premier League</p>
            </div>

            <div className='matches__card-container'>
               <MatchesCard />
               <MatchesCard />
               <MatchesCard />
               <MatchesCard />
            </div>
         </div>

         <div className='mobile-visible'>
            <MatchesMobileCard />
            <MatchesMobileCard />
            <MatchesMobileCard />
         </div>
      </div>
   );
}

export default Matches;
