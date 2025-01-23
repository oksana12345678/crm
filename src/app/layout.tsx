import React from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Providers from './components/providers';
import Sidebar from './components/sidebar-components/sidebar';

const font = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Sidebar />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
