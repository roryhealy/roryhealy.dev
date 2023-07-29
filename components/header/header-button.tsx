import React from 'react';
import Link from 'next/link';

interface IHeaderButton {
  displayText: string;
  link: string;
}

export default function HeaderButton({ displayText, link }: IHeaderButton) {
  return (
    <Link href={link} className='group'>
      <p className='text-center text-3xl text-custom-white mb-1'>{displayText}</p>
      <div className='bg-custom-blue-1 h-1 rounded group-hover:scale-x-75 transition-all duration-300 ease-in-out'></div>
    </Link>
  );
}
