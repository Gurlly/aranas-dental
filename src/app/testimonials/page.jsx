
import Testimonies from "../components/Testimonials/Testimonies";
import PageTitle from "../components/PageTitle";

export const metadata = {
  title: "Customer Reviews",
  description:
    "Read real customer reviews and testimonials about their experiences with Aranas Dental. Discover why patients trust us for their dental care and how we consistently deliver high-quality services with exceptional patient care.",
  keywords: "Aranas Dental reviews, Patient testimonials, Dental clinic feedback, Dental care reviews, Dentist reviews, Dental service ratings, Aranas Dental testimonials",
  canonical: "/",

  openGraph: {
    title: "Testimonials",
    description:
      "Read real customer reviews and testimonials about their experiences with Aranas Dental. Discover why patients trust us for their dental care and how we consistently deliver high-quality services with exceptional patient care.",
  },

  twitter: {
    title: "Testimonials",
    description:
      "Read real customer reviews and testimonials about their experiences with Aranas Dental. Discover why patients trust us for their dental care and how we consistently deliver high-quality services with exceptional patient care.",
  },
};

export default function Testimonials() {

  return (
    <>
      <main className="w-full h-max bg-zinc-50">
        <PageTitle title="Testimonials"/>
        <section aria-label="Reviews section" className="md:container md:mx-auto px-3 py-10 lg:pt-28 lg:pb-20 flex flex-col justify-center items-center gap-y-7">
          <Testimonies/>
        </section>
      </main>
    </>
  );
}
