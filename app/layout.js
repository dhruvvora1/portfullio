import { GoogleTagManager } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import './css/card.scss';
import './css/globals.scss';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Dhruvin Vora - Web Developer',
  description: 'This is the portfolio of Dhruvin Vora. a seasoned Front End Developer with 1.5 years of hands-on experience crafting and enhancing web applications. Proficient in HTML, CSS, and JavaScript, I specialize in leveraging cutting-edge frameworks like React and Next.js to create seamless user experiences. With a keen eye for detail and a passion for clean, efficient code, I strive to deliver innovative solutions that exceed expectations',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId="" />
    </html>
  )
};
