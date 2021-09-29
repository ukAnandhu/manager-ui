import React from 'react';
import DetailsCard from './DetailsCard';

function ManagerInfo() {
   return (
      <div className='manager-info'>
         <p className='manager-info__text'>Manager Info</p>
         <div className='manager-info__card-container'>
            <DetailsCard heading={'Age'} text={'28'} />
            <DetailsCard heading={'Age'} text={'28'} />
            <DetailsCard heading={'Age'} text={'28'} />
            <DetailsCard heading={'Age'} text={'28'} />
         </div>
      </div>
   );
}

export default ManagerInfo;
