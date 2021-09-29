import React from 'react';
import DownArrowIcon from '../../images/down-arrow.svg';

function About() {
   return (
      <div className='about'>
         <div className='about__heading'>About Manager</div>
         <p className='about__text mobile-hidden'>
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
            demonstrate the visual form of a document or a typeface without relying on meaningful
            content. In publishing and graphic design, Lorem ipsum is a placeholder text commonly
            used to demonstrate the visual form of a document or a typeface without relying on
            meaningful content. In publishing and graphic design, Lorem ip
         </p>
         <p className='about__text mobile-visible'>
            Arsenal is going head to head with Fulham starting on 18 Apr 2021 at 12:30 UTC at
            Emirates Stadium stadium, London city, England. The match is a part of the Premier
            League.
         </p>
         <div className='about__last-container'>
            <p className='about__text--small'>Show more</p>
            <img src={DownArrowIcon} alt='down-arrow' />
         </div>
      </div>
   );
}

export default About;
