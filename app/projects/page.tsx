import React from 'react';

import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import ProjectsPage from './projects';

export default function Contact() {
  return (
    <main className='flex flex-col h-screen w-screen bg-custom-grey-1'>
      <Header />
      <div className='flex flex-1 justify-center items-center'>
        <ProjectsPage />
      </div>
      <Footer />
    </main>
  );
}
