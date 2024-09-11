
import Testimonies from "@src/app/components/Testimonies";
import PageTitle from "@src/app/components//PageTitle";

export const metadata = {
  title: "Testimonials",
  description: "Read what our satisfied patients have to say about their experience at Aranas Dental Clinic. Discover why we are trusted for quality dental care and exceptional service.",
  keywords: "patient testimonials, dental reviews, Aranas Dental Clinic reviews, dentist testimonials, patient feedback, dental care experience, satisfied patients",
  robots: 'index, follow',
  openGraph: {
    title: "Testimonials",
    description: 'Read what our satisfied patients have to say about their experience at Aranas Dental Clinic. Discover why we are trusted for quality dental care and exceptional service.',
    url: "https://aranas-dental.vercel.app/",
  },
  twitter: {
    card: 'summary_large_image',
    site: '',
    title: 'Testimonials',
    description: 'Read what our satisfied patients have to say about their experience at Aranas Dental Clinic. Discover why we are trusted for quality dental care and exceptional service.',
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: true
}

export default function Testimonials() {

  return (
    <>
      <section className="w-full h-max bg-zinc-50">
        <PageTitle title="Testimonials"/>
        <section aria-label="Reviews section" className="md:container md:mx-auto px-3 py-10 lg:pt-28 lg:pb-20 flex flex-col justify-center items-center gap-y-7">
          <Testimonies/>
        </section>
      </section>
    </>
  );
}
