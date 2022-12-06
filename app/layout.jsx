import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';
import ReactQueryWrapper from './ReactQueryWrapper';
import './globals.css';
import { Inter } from '@next/font/google';
import { Suspense } from 'react';
import Loading from './loading';
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body
        className={`${inter.variable} font-sans grid grid-rows-[auto_1fr_auto] min-h-screen text-gray-800`}
      >
        <Header />
        <div className="flex">
          <Sidebar />
          <Suspense fallback={<Loading />}>
            <ReactQueryWrapper>
              <main className="w-full py-8 pl-16 ">{children}</main>
            </ReactQueryWrapper>
          </Suspense>
        </div>
        <Footer />
      </body>
    </html>
  );
}
