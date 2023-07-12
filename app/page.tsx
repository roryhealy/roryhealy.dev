import React from 'react';

import Header from '@/components/header';
import HomePage from './home';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className='flex flex-col h-screen w-screen bg-custom-grey'>
      <Header />
      <div className='flex-1'>
        <HomePage />
      </div>
      <Footer />
    </main>
  );
}
