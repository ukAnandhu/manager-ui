import React from 'react';
import HomeIcon from '../../images/home.svg';
import ForwarArrowIcon from '../../images/forward-arrow.svg';

function HeaderBar() {
   return (
      <div className='header-bar'>
         <div className='header-bar-container'>
            <img src={HomeIcon} alt='home' />
            <img src={ForwarArrowIcon} alt='forward-arrow' />
            <p className='header-bar__text'>England</p>
            <img src={ForwarArrowIcon} alt='forward-arrow' />
            <p className='header-bar__text mobile-hidden'>Premier League</p>
            <img className=' mobile-hidden' src={ForwarArrowIcon} alt='forward-arrow' />
            <p className='header-bar__text--light mobile-hidden'>Pep Gaudiola(Manager)</p>
            <p className='header-bar__text--light mobile-visible'>Pep Gaudiola</p>
         </div>
      </div>
   );
}

export default HeaderBar;
