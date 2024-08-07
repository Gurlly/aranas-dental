import Image from "next/image";
import Link from "next/link";

import { HeroBanner } from "./components/Home/HeroBanner";
import ServicesComponent from "./components/Home/ServicesComponent";

import James from "./resources/James.png";

export const metadata = {
  title: 'Aranas Dental Clinic', 
  description: 'Aranas Dental offers comprehensive dental care services including general dentistry, surgery, and orthodontics in Taguig. Book your appointment today!', 
  viewport: 'width=device-width, initial-scale=1.0',
  charset: 'UTF-8',
  keywords: 'Dentist, Philippines, Oral, surgery, teeth, orthodontics, general dentistry', 
  author: 'Aranas Dental Developers', 
  canonical: '/',

  openGraph: { 
    type: 'website', 
    url: '/', 
    title: 'Aranas Dental Clinic', 
    description: 'Aranas Dental offers comprehensive dental care services including general dentistry, surgery, and orthodontics in Taguig. Book your appointment today!', 
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
    title: 'Aranas Dental Clinic', 
    description: 'Aranas Dental offers comprehensive dental care services including general dentistry, surgery, and orthodontics in Taguig. Book your appointment today!', 
    image: '/', 
  }, 
    
}

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

        <section className="w-full h-max px-5 py-14 md:py-20 lg:py-28 xl:py-36 bg-zinc-100">
          <div className="md:container md:mx-auto">
            <h2 className="text-center font-extrabold text-[calc(1.35rem+2dvw)] tracking-widest text-tertiary">
              LOCATION
            </h2>
            <div className="mt-10 md:mt-14 lg:mt-20 xl:mt-28 w-10/12 border grid grid-cols-1 lg:grid-cols-2 mx-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.8972223756277!2d121.0598241758454!3d14.547869585932236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c88e09aaebd5%3A0x28e84023cdef4024!2sAranas%20Dental%20General%20Dentistry%20%26%20Orthodontics!5e0!3m2!1sen!2sph!4v1722942051107!5m2!1sen!2sph"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full aspect-square"
              ></iframe>
              <article className="w-full h-full p-5 lg:p-16 flex flex-col justify-center gap-y-4 bg-zinc-50">
                <h2 className="text-neutral-900 font-extrabold text-xl lg:text-3xl">
                  Pembo, Taguig
                </h2>
                <h4 className="text-neutral-600 font-medium lg:text-lg">
                  G3X6+4XR, Sampaguita St, Taguig, 1216 Metro Manila
                </h4>
                <ul className="w-full flex flex-col gap-y-1 text-sm md:text-[1rem] xl:text-lg text-neutral-600">
                  <h5 className="font-semibold">Operation Hours:</h5>
                  <li className="w-full">
                    Monday: <span className="float-end">9:00 AM - 5:00PM</span>
                  </li>
                  <li className="w-full">
                    Tuesday: <span className="float-end">9:00 AM - 4:00PM</span>
                  </li>
                  <li className="w-full">
                    Wednesday:{" "}
                    <span className="float-end">9:00 AM - 5:00PM</span>
                  </li>
                  <li className="w-full">
                    Thursday:{" "}
                    <span className="float-end">9:00 AM - 4:00PM</span>
                  </li>
                  <li className="w-full">
                    Friday: <span className="float-end">9:00 AM - 4:00PM</span>
                  </li>
                  <li className="w-full">
                    Saturday:{" "}
                    <span className="float-end">9:00 AM - 3:00PM</span>
                  </li>
                  <li className="w-full">
                    Sunday: <span className="float-end">Closed</span>
                  </li>
                </ul>
                <div className="mt-3 lg:mt-5 flex gap-x-5">
                  <Link 
                  href="/pages/book"
                  className="w-36 py-3 border bg-warning hover:bg-amber-400 text-center font-semibold transition-colors ease-linear duration-200">
                    Book Now
                  </Link>
                  <Link 
                  href="https://ul.waze.com/ul?place=ChIJ1euqCY7IlzMRJEDvzSNA6Cg&ll=14.54786960%2C121.06239910&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
                  rel="nonreferrer"
                  target="_blank"
                  className="w-36 py-3 border bg-primary hover:bg-sky-600 text-info text-center font-semibold transition-colors ease-linear duration-200">
                    Waze
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
