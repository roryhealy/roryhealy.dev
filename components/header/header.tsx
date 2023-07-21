import React from 'react';

import HeaderButton from './header-button';

export default function Header() {
  return (
    <header className='grid grid-cols-10 px-14 pt-8'>
      <p className='uppercase col-span-6 text-left text-4xl text-custom-white'>Rory Healy</p>
      <HeaderButton displayText='Home' link='/' />
      <HeaderButton displayText='Projects' link='/projects' />
      <HeaderButton displayText='About' link='/about' />
      <HeaderButton displayText='Contact' link='/contact' />
    </header>
  );
}
