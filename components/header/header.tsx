'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import HeaderButton from './header-button';

export default function Header() {
  const [windowWidth, setWindowWidth] = useState(0);
  const mobileWidth: number = 576;

  useEffect(() => {
    // Set the initial window width and update on resize
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    return () => {
      window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
    };
  }, []);

  return (windowWidth < mobileWidth) ? (
    <div className='float-right p-4'>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Image
            src='images/dark/menu.svg'
            alt='Menu'
            width={70}
            height={70}
            className='opacity-25 hover:opacity-75 ease-linear transition-opacity'
          />
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content className='bg-custom-grey-2 w-60 p-1 outline-none text-lg text-white'>
            <Link href='/'>
              <DropdownMenu.Item className='px-2 py-1 cursor-pointer hover:bg-custom-grey-3'>Home</DropdownMenu.Item>
            </Link>

            <Link href='/projects'>
              <DropdownMenu.Item className='px-2 py-1 mt-2 cursor-pointer hover:bg-custom-grey-3'>
                Projects
              </DropdownMenu.Item>
            </Link>

            <Link href='/about'>
              <DropdownMenu.Item className='px-2 py-1 mt-2 cursor-pointer hover:bg-custom-grey-3'>
                About
              </DropdownMenu.Item>
            </Link>

            <Link href='/contact'>
              <DropdownMenu.Item className='px-2 py-1 mt-2 cursor-pointer hover:bg-custom-grey-3'>
                Contact
              </DropdownMenu.Item>
            </Link>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  ) : (
    <header className='grid grid-cols-10 px-14 pt-8'>
      <p className='uppercase col-span-6 text-left text-4xl text-custom-white'>Rory Healy</p>
      <HeaderButton displayText='Home' link='/' />
      <HeaderButton displayText='Projects' link='/projects' />
      <HeaderButton displayText='About' link='/about' />
      <HeaderButton displayText='Contact' link='/contact' />
    </header>
  )
}
