
import "@styles/globals.css";

// Components
import Header from "@src/app/components/Header";
import Footer from "@src/app/components/Footer";
import PrelineScript from "./hooks/PrelineScript";
import { Providers } from "./components/providers";

{/** Global SEO */}
export const metadata = {
  viewport: 'width=device-width, initial-scale=1.0',
  charset: 'UTF-8',
  author: 'Aranas Dental', 
  robots: {
    index: true,
    follow: true
  },

  openGraph: { 
    type: 'website', 

    images: [ 
    { 
      url: '/', 
      alt: 'Aranas Dental Clinic Logo', 
    }, 
    ], 
  }, 

  twitter: { 
    card: 'summary_large_image', 
    site: '@', 
    image: '/', 
  }, 
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
