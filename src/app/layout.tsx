import Bot from './components/Bot';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Head from "next/head";
import Link from "next/link";
import './globals.css';

export const metadata: Metadata = {
  title: "FKWC",
  description: "Welcome to our College",
  icons: {
    icon: "/favicon.ico", 
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
       <Head>
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <body className='bg-white'>
        <Navbar />
        <main className="min-h-screen">{children}<Bot/></main>
        <Footer />
      </body>
    </html>
  );
}
