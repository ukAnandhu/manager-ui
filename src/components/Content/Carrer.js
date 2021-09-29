import React from 'react';
import CarrerCard from './CarrerCard';

function Carrer() {
   return (
      <div className='carrer'>
         <h2 className='carrer__heading'>Career</h2>
         <div className='carrer__card-container'>
            <CarrerCard />
            <CarrerCard />
            <CarrerCard />
            <CarrerCard />
            <CarrerCard />
         </div>
      </div>
   );
}

export default Carrer;
