export const metadata = {
    title: "",
    description: "",
    openGraph: {
      title: "",
      description: ""
    }
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <main>
            {children}
          </main> 
        </body>
      </html>
    );
  }