import './globals.css';
import type { Metadata } from 'next';

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
      <body>{children}</body>
    </html>
  );
}
