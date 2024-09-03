import React from "react";

import Image from "next/image";
import Link from "next/link";

import Services from "@src/app/api/dental-services/dental-services.json"

const ServicesComponent = () => {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {Services.map((service) => (
          <div
            className="flex flex-col group bg-zinc-50 border border-neutral-300 shadow-sm rounded-xl overflow-hidden hover:shadow-lg focus:outline-none focus:shadow-lg transition"
            key={service.id}
          >
            <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
              <Image
                width={500}
                height={500}
                alt={service.name}
                className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
                src={service.src}
              />
            </div>
            <div className="p-4 md:p-5">
              <div className="flex flex-col">
                <h3 className="text-lg font-bold text-neutral-900">
                  {service.name}
                </h3>
                <p className="mt-1 text-gray-500 text-justify mb-10">
                  {service.cardDescription}
                </p>
                <Link href={`/services/${service.id}`} className="text-center py-2 w-3/5 font-semibold text-neutral-800 border border-gray-200 shadow-sm bg-amber-400 rounded-lg cursor-pointer">
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
