import { IRootLayout } from '@/types/RootLayout';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextJS + Strapi',
  description: 'NextJS + Strapi boilerplate',
};

export default function RootLayout({ children }: Readonly<IRootLayout>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
