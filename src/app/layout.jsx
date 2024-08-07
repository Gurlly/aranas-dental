
import "./globals.css";

// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import PrelineScript from "./components/PrelineScript";
import { Providers } from "./components/providers";

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
