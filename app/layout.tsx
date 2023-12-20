import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Quan Cao' Portfolio",
  description: 'Cao Minh Quan is a junior student at University of Information Technology VNU-HCM.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="!scroll-smooth snap-y snap-mandatory" lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
