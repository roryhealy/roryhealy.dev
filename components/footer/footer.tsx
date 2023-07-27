import React from 'react';

import DisplayModeButton from '@/components/displaymode/displaymodebutton';

export default function Footer() {
  return (
    <footer className='py-5 mr-10 self-end sm:py-0 sm:mb-10'>
      <DisplayModeButton />
    </footer>
  );
}
