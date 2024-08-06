import "./globals.css";

// Components
import PrelineScript from "./components/PrelineScript";
import { Providers } from "./components/providers";

/** SEO OPTIMIZATION */
export const metadata = {
  title: "Aranas Dental",
  description: "Aranas Dental offers comprehensive dental care services including general dentistry, surgery, and orthodontics in Taguig. Book your appointment today!",
  viewport: "width=device-width, initial-scale=1.0",
  author: "Aranas Dental Developers",
  keywords: "Dentist, Philippines, Oral, surgery, teeth, orthodontics, general dentistry",
  charSet: "UTF-8",
  link: [{rel: "canonical", href: ""}],
  robots:"index,follow",
  openGraph: {
    title: "Aranas Dental",
    description: "Aranas Dental offers comprehensive dental care services including general dentistry, surgery, and orthodontics in Taguig. Book your appointment today!",
    url: "",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-dvw h-max">
        <PrelineScript/>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
