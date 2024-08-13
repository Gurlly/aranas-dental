import React from "react";
import Link from "next/link";

const Location = () => {
  return (
    <>
      <div className="my-10 md:my-14 lg:my-20 xl:my-24 w-10/12 border grid grid-cols-1 lg:grid-cols-2 mx-auto">
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
              Wednesday: <span className="float-end">9:00 AM - 5:00PM</span>
            </li>
            <li className="w-full">
              Thursday: <span className="float-end">9:00 AM - 4:00PM</span>
            </li>
            <li className="w-full">
              Friday: <span className="float-end">9:00 AM - 4:00PM</span>
            </li>
            <li className="w-full">
              Saturday: <span className="float-end">9:00 AM - 3:00PM</span>
            </li>
            <li className="w-full">
              Sunday: <span className="float-end">Closed</span>
            </li>
          </ul>
          <div className="mt-3 lg:mt-5 flex gap-x-5">
            <Link
              href="/pages/book"
              className="w-36 py-2 xl:py-3 border rounded-md bg-warning hover:bg-amber-400 text-center font-semibold transition-colors ease-linear duration-200"
            >
              Book Now
            </Link>
            <Link
              href="https://ul.waze.com/ul?place=ChIJ1euqCY7IlzMRJEDvzSNA6Cg&ll=14.54786960%2C121.06239910&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
              rel="nonreferrer"
              target="_blank"
              className="w-36 py-2 xl:py-3 border rounded-md bg-primary hover:bg-sky-600 text-info text-center font-semibold transition-colors ease-linear duration-200"
            >
              Waze
            </Link>
          </div>
        </article>
      </div>
    </>
  );
};

export default Location;
