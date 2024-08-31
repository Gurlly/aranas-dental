import React from "react";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    name: "Cleaning & Perventive Dentistry",
    description:
      "Regular cleanings and exams to maintain oral health and prevent cavities and gum disease.",
    url: "https://images.unsplash.com/photo-1626736985932-c0df2ae07a2e?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: "prevent",
    href: "/services/cleaning-preventive",
  },
  {
    name: "Orthodontics",
    description:
      "Specialized treatment to straighten teeth and correct bite alignment using braces or aligners.",
    url: "https://images.unsplash.com/photo-1598531228433-d9f0cb960816?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: "orthodontics",
    href: "/services/orthodontics",
  },
  {
    name: "Teeth Whitening",
    description:
      "A cosmetic procedure to lighten and remove stains for a brighter, whiter smile.",
    url: "https://images.unsplash.com/photo-1643401142249-84ef35c123c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: "whitening",
    href: "/services/whitening",
  },
  {
    name: "Fillings",
    description:
      "Restorative treatment to repair cavities and restore the function and appearance of decayed teeth.",
    url: "https://images.unsplash.com/photo-1670250721717-889b17349fc4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: "fillings",
    href: "/services/fillings",
  },
  {
    name: "Invisalign",
    description:
      "A series of clear, removable aligners used to discreetly straighten teeth over time.",
    url: "https://images.unsplash.com/photo-1564420159030-ad05d6fbc24e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: "invisalign",
    href: "/services/invisalign",
  },
  {
    name: "Veneers",
    description:
      "Thin, custom-made shells placed over the front of teeth to improve appearance and cover imperfections.",
    url: "https://images.unsplash.com/photo-1679741919483-acf704e00495?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: "veneers",
    href: "/services/veneers",
  },
  {
    name: "Mouthguards",
    description:
      "Custom-fitted protective devices worn over teeth to prevent injury during sports or to stop teeth grinding.",
    url: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: "mouthguards",
    href: "/services/mouthguards",
  },
  {
    name: "Dentures",
    description:
      "Removable prosthetics designed to replace multiple missing teeth, restoring function and appearance.",
    url: "https://images.unsplash.com/photo-1612283105859-6e2585710acd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVldGglMjBmaWxsaW5nfGVufDB8MHwwfHx8Mg%3D%3D",
    id: "dentures",
    href: "/services/dentures",
  },
];

const ServicesComponent = () => {
  return (
    <>
      <section className="mt-8 md:mt-12 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {services.map((service) => (
          <div
            className="flex flex-col group bg-zinc-50 border border-neutral-300 cursor-pointer shadow-sm rounded-xl overflow-hidden hover:shadow-lg focus:outline-none focus:shadow-lg transition"
            key={service.id}
          >
            <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
              <Image
                width={500}
                height={500}
                alt={service.name}
                className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                src={service.url}
              />
            </div>
            <div className="p-4 md:p-5">
              <div className="flex flex-col">
                <h3 className="text-lg font-bold text-neutral-900">
                  {service.name}
                </h3>
                <p className="mt-1 text-gray-500 text-justify mb-10">
                  {service.description}
                </p>
                <Link href={service.href} className="text-center py-2 w-3/5 font-semibold text-neutral-800 border border-gray-200 shadow-sm bg-amber-300 rounded-lg hover:bg-yellow-400 transition-colors ease-linear duration-150">
                  View More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ServicesComponent;
