import React from 'react';
import Image from 'next/image';

import IconRow, { Icons } from '@/components/icons/icons';
import { DisplayMode } from '@/components/displaymode/displaymode';

export default function HomePage() {
  return (
    <div className='grid grid-cols-2 h-full w-full items-center'>
      <div className='relative h-2/3'>
        <Image src='images/blob.svg' alt='Rounded blue blob' fill />
      </div>

      <div className='text-custom-white text-right mr-24'>
        <h1 className='text-7xl mb-6'>Hi! My name is Rory</h1>
        <h3 className='text-3xl leading-relaxed'>I&apos;m a software engineer from</h3>
        <h3 className='text-3xl mb-6'>Melbourne, Australia.</h3>
        <IconRow icons={[Icons.Github, Icons.Gitea]} size={50} displayMode={DisplayMode.Dark} className='float-right' />
      </div>
    </div>
  );
}
