import React from 'react';
import PepIcon from '../../images/pep.png';
import CroatiaIcon from '../../images/croatia.svg';
import LionIcon from '../../images/lion.svg';
import ManUtdIcon from '../../images/manutd.svg';

function Manager() {
   return (
      <div className='manager'>
         <div className='manager__first'>
            <img src={PepIcon} alt='pep' />
         </div>
         <div className='manager__second'>
            <div>
               <h2 className='manager__name'>
                  Pep Guardiola <span className='manager__name--light'>(Manager)</span>
               </h2>
            </div>
            <div className='manager__details-container'>
               <div className='manager__details mobile-hidden'>
                  <p className='manager__details--heading'>Nationality</p>
                  <div className='manager__details--inner'>
                     <img src={CroatiaIcon} alt='croatia' />
                     <span className='manager__details--text'>Croatia</span>
                  </div>
               </div>

               <div className='manager__details'>
                  <p className='manager__details--heading'>Club</p>
                  <div className='manager__details--inner'>
                     <img src={ManUtdIcon} alt='croatia' />
                     <span className='manager__details--text'>Man United</span>
                  </div>
               </div>

               <div className='manager__details mobile-hidden'>
                  <p className='manager__details--heading'>League</p>
                  <div className='manager__details--inner'>
                     <img src={LionIcon} alt='croatia' />
                     <div className='manager__details--text'>Premier League</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Manager;
