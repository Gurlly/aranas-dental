import Head from "next/head";
import "./globals.css";

// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import PrelineScript from "./components/PrelineScript";
import { Providers } from "./components/providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      {/** SEO Optimization */}
      <Head>
        <title>Aranas Dental</title> 
        <meta name="description" content="Aranas Dental offers comprehensive dental care services including general dentistry, surgery, and orthodontics in Taguig. Book your appointment today!" /> 
        <meta name="keywords" content="Dentist, Philippines, Oral, surgery, teeth, orthodontics, general dentistry" /> 
        <meta name="author" content="Aranas Dental Developers" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="charset" content="UTF_8"/>

        <link rel="canonical" href="/" />

        <meta property="og:type" content="website" /> 
        <meta property="og:url" content="/" /> 
        <meta property="og:title" content="Aranas Dental" /> 
        <meta property="og:description" content="Aranas Dental offers comprehensive dental care services including general dentistry, surgery, and orthodontics in Taguig. Book your appointment today!" /> 
        <meta property="og:image" content="/" /> 
        <meta property="og:image:alt" content="Aranas Dental Logo" /> 
        <meta property="og:site_name" content="Aranas Dental" />

        <meta name="twitter:card" content="summary_large_image" /> 
        <meta name="twitter:site" content="@" /> 
        <meta name="twitter:title" content="Aranas Dental" /> 
        <meta name="twitter:description" content="Aranas Dental offers comprehensive dental care services including general dentistry, surgery, and orthodontics in Taguig. Book your appointment today!" /> 
        <meta name="twitter:image" content="/" /> 
        <meta name="twitter:image:alt" content="Aranas Dental Logo" />
      </Head>

      <body className="w-dvw h-max">
        <PrelineScript/>
        <Providers>
          <Header />
          <main>
            {children}
          </main>
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
