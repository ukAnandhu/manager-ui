import React from 'react';
import Liverpool from '../../images/liverpool.svg';
import ManUtd from '../../images/manutd.svg';

function Stats() {
   return (
      <div className='stats mobile-hidden'>
         <div className='stats__result-container'>
            <div className='stats__team'>
               <img className='stats__icon' src={Liverpool} alt='liverpool' />
               <span className='stats__team-name'>Liverpool</span>
            </div>

            <div className='stats__result'>
               <span className='stats__result-heading'>0 - 1</span>
               <span className='stats__result-text'>FT</span>
            </div>

            <div className='stats__team'>
               <img className='stats__icon stats__icon--big' src={ManUtd} alt='liverpool' />
               <span className='stats__team-name'>Man United</span>
            </div>
         </div>

         <div className='stats__winning'>Winning Percentage?</div>

         <div className='stats__bar'>
            <div className='stats__loss'></div>
            <div className='stats__draw'></div>
            <div className='stats__win'></div>
         </div>

         <div className='stats__nav'>
            <div className='stats__nav-btns stats__nav-btns--selected'>Match Details</div>
            <div className='stats__nav-btns'>Lineups</div>
            <div className='stats__nav-btns'>Standings</div>
         </div>

         <div className='stats__nav-bar'>
            <span className='stats__nav-bar--fill'></span>
         </div>

         <div className='stats__text'>Statistics</div>

         <div className='stats__card'>
            <div className='stats__card-container'>
               <img className='stats__icon--small' src={Liverpool} alt='liverpool' />
               <span className='stats__team-name'>Liverpool</span>
            </div>
            <div className='stats__card-container'>
               <img className='stats__icon stats__icon--medium' src={ManUtd} alt='liverpool' />
               <span className='stats__team-name'>Man United</span>
            </div>
         </div>

         <div className='stats__shots'>Shots on Goal</div>

         <div className='stats__shots-goal-container'>
            <span className='stats__shots-text'>8</span>
            <div className='stats__shots-goal'>
               <div className='stats-white'></div>
               <div className='stats-blue'></div>
               <div className='stats-green'></div>
               <div className='stats-white stats-white--big'></div>
            </div>
            <span className='stats__shots-text'>6</span>
         </div>
      </div>
   );
}

export default Stats;
