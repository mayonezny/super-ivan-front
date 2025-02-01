import type { Metadata } from 'next';
import { Geist, Inter, UnifrakturMaguntia } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '700'],
});
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const UniF = UnifrakturMaguntia({
  variable: '--font-unif',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Без названия - Неизвестен',
  description: 'Здесь закалялась сталь',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistSans.variable} ${UniF.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
