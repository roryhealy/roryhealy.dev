import React from 'react';
import Link from 'next/link';

interface IHeaderButton {
  displayText: string;
  link: string;
}

export default function HeaderButton({ displayText, link }: IHeaderButton) {
  return (
    <Link href={link} className='grid grid-rows-2 justify-center gap-y-1 justify-items-center'>
      <p className='text-center text-4xl text-custom-white'>{displayText}</p>
      <div className='bg-custom-blue-1 h-1 rounded w-full hover:w-1/2 transition-all duration-300 ease-in-out'></div>
    </Link>
  );
}
