import React from 'react';

function NavBar() {
   return (
      <div className='navbar'>
         <div className='navbar-container'>
            <div className='navbar__first'>Football</div>
            <div className='navbar__second'>
               <p>Tennis</p>
               <p>Baseball</p>
               <p>Hockey</p>
               <p>Handball</p>
               <p>Cricket</p>
               <p>Volleyball</p>
               <p>Table Tennis</p>
            </div>
         </div>
      </div>
   );
}

export default NavBar;
