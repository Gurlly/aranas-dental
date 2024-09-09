"use client";

import "@styles/globals.css";

// Imports
import { usePathname } from "next/navigation";

// Components
import Header from "@src/app/components/Header";
import Footer from "@src/app/components/Footer";
import PrelineScript from "./hooks/PrelineScript";
import { Providers } from "./components/providers";

export default function RootLayout({ children }) {

  const pathname = usePathname();

  return (
    <html lang="en">
      <body className="w-dvw h-max">
        <PrelineScript />
        <Providers>
          {pathname === "/login" || pathname.startsWith('/portal') ? null : <Header />}
          
          <main>{children}</main>

          {pathname === "/login" || pathname.startsWith('/portal') ? null : <Footer />}
        </Providers>
      </body>
    </html>
  );
}
