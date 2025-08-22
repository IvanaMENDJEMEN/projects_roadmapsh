import { Geist, Geist_Mono } from "next/font/google";
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio MYSI",
  description: "Site descriptif d'une personne avec son parcours et ses experiences",
};

export default function RootLayout({children}){
  return (
    <html lang="en" className={geistMono.className}>
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
  

