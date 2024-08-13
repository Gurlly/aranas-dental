import Image from "next/image";
import Link from "next/link";

import { HeroBanner } from "@src/app/components/Home/HeroBanner";
import ServicesComponent from "@src/app/components/Home/ServicesComponent";
import Location from "@src/app/components/Location";

import James from "@public/assets/James.png";

export const metadata = {
  title: "Aranas Dental Clinic",
  description:
    "Aranas Dental offers comprehensive dental care services including general dentistry, surgery, and orthodontics in Taguig. Book your appointment today!",
  keywords:
    "Dentist, Philippines, Oral, surgery, teeth, orthodontics, general dentistry",
  canonical: "/",

  openGraph: {
    url: "/",
    title: "Aranas Dental Clinic",
    description:
      "Aranas Dental offers comprehensive dental care services including general dentistry, surgery, and orthodontics in Taguig. Book your appointment today!",
  },

  twitter: {
    title: "Aranas Dental Clinic",
    description:
      "Aranas Dental offers comprehensive dental care services including general dentistry, surgery, and orthodontics in Taguig. Book your appointment today!",
  },
};

export default function Home() {
  return (
    <>
      <div className="w-full h-max">
        <section className="w-full h-dvh relative z-0">
          <HeroBanner />
        </section>

        <section className="w-full h-max px-7 md:px-20 lg:px-24 xl:px-32 py-14 md:py-20 lg:py-28 xl:py-36 2xl:grid 2xl:grid-cols-2 gap-x-5 bg-zinc-100">
          <article>
            <h2 className="text-[calc(2rem+2dvw)] font-mono uppercase font-extrabold">
              Who we are?
            </h2>
            <p className="mt-5 lg:mt-8 text-justify font-serif text-[calc(0.7rem+1dvw)]">
              Welcome to Aranas Dental, where your smile is our priority. With
              over a decade of experience, we provide exceptional dental care in
              a friendly and modern setting. Our skilled team is dedicated to
              delivering personalized, compassionate services, from routine
              cleanings to advanced cosmetic procedures, using the latest
              technology to ensure optimal results.
              <br />
              <br />
              We believe in empowering our patients with knowledge and making
              dental visits comfortable and stress-free. At Aranas Dental, we
              also actively support our community through outreach programs,
              ensuring that quality dental care is accessible to everyone.
              <br />
              <br />
              Experience the difference at Aranas Dental. Schedule an
              appointment today, and let us help you achieve a healthier,
              brighter smile. We look forward to welcoming you to the Aranas
              Dental family.
            </p>
          </article>
          <Image
            src={James}
            alt="Dr. James Aranas"
            className="w-9/12 self-center justify-self-center hidden 2xl:block"
          />
        </section>

        <section className="w-full h-max px-5 py-14 md:py-20 lg:py-28 xl:py-36 bg-white">
          <div className="md:container md:mx-auto">
            <h2 className="text-center font-extrabold text-[calc(1.35rem+2dvw)] tracking-widest text-tertiary">
              SERVICES
            </h2>
            <ServicesComponent />
            <div className="w-full mt-14 lg:mt-24 2xl:mt-28 flex justify-center">
              <Link
                href="/pages/book"
                className="px-[calc(4rem+2dvw)] py-3 lg:py-4 lg:text-lg border bg-warning hover:bg-amber-400 font-bold text-neutral-800 transition-colors ease-linear duration-200"
              >
                Book Now
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full h-max px-5 pt-14 md:pt-20 lg:pt-28 xl:pt-36 bg-zinc-100">
          <div className="md:container md:mx-auto">
            <h2 className="text-center font-extrabold text-[calc(1.35rem+2dvw)] tracking-widest text-tertiary">
              LOCATION
            </h2>
            <Location />
          </div>
        </section>
      </div>
    </>
  );
}
