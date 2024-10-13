// import localFont from "next/font/local";
import {Poppins} from 'next/font/google'
import "./main-style.css";
import  "bootstrap/dist/css/bootstrap.min.css"
import Boot from '../component/BootstrapClient' 
import Header from '@/component/Header';
import FooterTop from '@/component/FooterTop';
import Footer from '@/component/Footer';
import SigLiftUsp from '@/component/SigLiftUsp';

const pop_init= Poppins({ 
  subsets:["latin"],
  weight:['400', '500', '600', '700']
})


// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Mobile Signal Booster | Mobile Network Booster | SIGLIFT",
  description: "Mobile Signal Booster – SIGLIFT boosts your connectivity for seamless calls & faster data. Enhance your mobile signal strength today",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={`${geistSans.variable} ${geistMono.variable}`}> */}
   
      <body className={pop_init.className}>
      <Header/>
        {children}
        <SigLiftUsp/>
        <FooterTop/>
        <Footer/>
      </body>
     
      <Boot/>
    </html>
  );
}
