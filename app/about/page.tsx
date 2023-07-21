import React from 'react';

import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import AboutPage from './about';

export default function About() {
  return (
    <main className='flex flex-col h-screen w-screen bg-custom-grey'>
      <Header />
      <div className='flex-1'>
        <AboutPage />
      </div>
      <Footer />
    </main>
  );
}
