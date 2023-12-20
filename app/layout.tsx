import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Quan Cao' Portfolio",
  description: 'Cao Minh Quan is a junior student at University of Information Technology VNU-HCM.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="!scroll-smooth md:snap-y md:snap-mandatory" lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <Header />
        {children}
        <Toaster position="top-right" />
        <Footer />
      </body>
    </html>
  );
}
