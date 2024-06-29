import { Inter } from '@next/font/google';
import '@/styles/reset.css';
import '@/styles/global.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

// Inter fontunu dahil ediyoruz
const interFontFamily = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={interFontFamily.className}>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Pacifico&family=Crete+Round&display=swap" />
      </head>
      <body className="container">
        <Header />
        <link rel="icon" href="/favicon.ico" />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
