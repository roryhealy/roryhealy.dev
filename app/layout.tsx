import type { Metadata } from 'next';

import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import './globals.css';

export const metadata: Metadata = {
  title: "Hello, I'm Rory",
  description: 'The personal website of Rory Healy.',
  icons: {
    icon: 'favicon.svg'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <main className='flex flex-col h-screen w-screen bg-custom-grey-1'>
          <Header />
          <div className='flex flex-1 h-full w-full items-center justify-center'>{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
