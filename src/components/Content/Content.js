import React from 'react';
import HeaderBar from '../HeaderBar/HeaderBar';
import About from './About';
import Carrer from './Carrer';
import Manager from './Manager';
import ManagerInfo from './ManagerInfo';
import Matches from './Matches';
import Stats from './Stats';

function Content() {
   return (
      <div className='content'>
         <HeaderBar />
         <div className='content__first'>
            <Manager />
            <ManagerInfo />
            <div className='content__first--inner'>
               <Matches />
               <Stats />
            </div>
         </div>
         <div className='content__second'>
            <Carrer />
            <About />
         </div>
      </div>
   );
}

export default Content;
