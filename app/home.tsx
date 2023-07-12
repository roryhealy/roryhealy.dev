import React from 'react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className='grid grid-cols-2 h-full w-full items-center'>
      <div className='relative h-2/3'>
        <Image src='images/blob.svg' alt='Rounded blue blob' fill />
      </div>

      <div className='text-custom-white text-right mr-24'>
        <h1 className='text-7xl mb-6'>Hi! My name is Rory</h1>
        <h3 className='text-3xl leading-relaxed'>I&apos;m a software engineer from</h3>
        <h3 className='text-3xl'>Melbourne, Australia.</h3>
      </div>
    </div>
  );
}
