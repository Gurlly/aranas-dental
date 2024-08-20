import Image from "next/image";
import PageTitle from "../components/PageTitle";
import Link from "next/link";

import doctors from "@src/app/data/doctors.json";

export const metadata = {
    title: "Our Doctors",
    description:
      "Meet the experienced and compassionate dental professionals at Aranas Dental. Learn more about our doctors' expertise, qualifications, and commitment to providing exceptional oral care for you and your family.",
    keywords:
      "Aranas Dental, Dental professionals, Experienced dentists, Dental experts, Oral care specialists, Dental team, Dentist profiles, Dental clinic",
    canonical: "/",
  
    openGraph: {
      url: "/",
      title: "Our Doctors",
      description:
        "Meet the experienced and compassionate dental professionals at Aranas Dental. Learn more about our doctors' expertise, qualifications, and commitment to providing exceptional oral care for you and your family.",
    },
  
    twitter: {
      title: "Our Doctors",
      description:
        "Meet the experienced and compassionate dental professionals at Aranas Dental. Learn more about our doctors' expertise, qualifications, and commitment to providing exceptional oral care for you and your family.",
    },
  };

export default function Dentists() {
  return (
    <>
      <section className="w-full bg-zinc-50">
        <PageTitle title="Our Dentist" />
        <section className="md:container md:mx-auto min-h-dvh px-5 py-10 lg:pt-28 lg:pb-20 grid grid-cols-1 md:grid-cols-2 justify-items-center content-center gap-7">
          {doctors.map((doctor) => (
            <article className="w-full h-max max-w-lg border border-neutral-600 rounded-xl bg-info text-neutral-800" key={doctor.id}>
              <Image
                src="https://placehold.co/600x400/png"
                alt={doctor.name}
                width={600}
                height={400}
                className="rounded-t-xl w-full h-full object-cover border-b border-b-neutral-600"
              />
              <div className="w-full min-h-48 p-7 flex flex-col justify-center items-center gap-y-7">
                <h2 className="font-bold text-xl lg:text-2xl text-center">
                  {doctor.name}
                </h2>
                <Link
                  href={doctor.url}
                  className="border py-3 min-w-44 w-6/12 cursor-pointer flex justify-center bg-tertiary gap-x-4 text-info font-semibold text-sm lg:text-base hover:bg-primary transition-colors ease-linear duration-200"
                >
                  Learn More <span>&rarr;</span>
                </Link>
              </div>
            </article>
          ))}
        </section>
      </section>
    </>
  );
}
