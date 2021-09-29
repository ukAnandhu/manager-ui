import React from 'react';
import LogoIcon from '../../images/logo.svg';
import BellIcon from '../../images/bell.svg';
import SearchIcon from '../../images/search.svg';

function Header() {
   return (
      <div className='header'>
         <div className='header-container'>
            <div className='header__logo-container'>
               <img src={LogoIcon} alt='logo' />
               <h2 className='header__logo-heading'>Soccerlive</h2>
            </div>

            <div className='header__search-container'>
               <img className='search-icon' src={SearchIcon} alt='search' />
               <input className='header__search' type='text' placeholder='Search' />
            </div>

            <div className='header__notification-container'>
               <div className='header__notification-container--inner'>
                  <img src={BellIcon} alt='bell' />
                  <p className='header__notification-heading'>Notification</p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Header;
