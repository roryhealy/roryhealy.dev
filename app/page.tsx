import React from 'react';
import Image from 'next/image';

import IconRow, { Icons } from '@/components/icons/icons';
import { DisplayMode } from '@/components/displaymode/displaymode';

export default function Home() {
  return (
    <div className='grid h-full w-full items-center sm:grid-cols-2'>
      <div className='relative h-2/3 hidden sm:block'>
        <Image src='images/blob.svg' alt='Rounded blue blob' fill />
      </div>

      <div className='flex flex-col place-items-center text-custom-white text-right sm:place-items-end sm:mr-24'>
        <h1 className='text-4xl sm:text-6xl mb-6'>Hi! My name is Rory</h1>
        <h3 className='text-2xl sm:text-3xl sm:leading-relaxed'>I&apos;m a software engineer from</h3>
        <h3 className='text-2xl sm:text-3xl mb-6'>Melbourne, Australia.</h3>
        <IconRow icons={[Icons.Github, Icons.Gitea]} size={50} displayMode={DisplayMode.Dark} />
      </div>
    </div>
  );
}
