import React from 'react';

import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import HomePage from './home';

export default function Home() {
  return (
    <main className='flex flex-col h-screen w-screen bg-custom-grey-1'>
      <Header />
      <div className='flex-1'>
        <HomePage />
      </div>
      <Footer />
    </main>
  );
}
