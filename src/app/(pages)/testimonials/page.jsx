
import Testimonies from "@src/app/components/Testimonies";
import PageTitle from "@src/app/components//PageTitle";

export const metadata = {
  title: "Patient Reviews",
  description:
    "Read real customer reviews and testimonials about their experiences with Aranas Dental. Discover why patients trust us for their dental care and how we consistently deliver high-quality services with exceptional patient care.",
  keywords: "Aranas Dental reviews, Patient testimonials, Dental clinic feedback, Dental care reviews, Dentist reviews, Dental service ratings, Aranas Dental testimonials",
  canonical: "https://aranas-dental.vercel.app/testimonials",

  openGraph: {
    title: "Patient Reviews",
    description:
      "Read real customer reviews and testimonials about their experiences with Aranas Dental. Discover why patients trust us for their dental care and how we consistently deliver high-quality services with exceptional patient care.",
  },

  twitter: {
    title: "Patient Reviews",
    description:
      "Read real customer reviews and testimonials about their experiences with Aranas Dental. Discover why patients trust us for their dental care and how we consistently deliver high-quality services with exceptional patient care.",
  },
};

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
