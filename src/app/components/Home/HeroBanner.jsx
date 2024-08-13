"use client";

import React from "react";
import Link from "next/link";
import { ParallaxBanner } from "react-scroll-parallax";

export const HeroBanner = () => {
  return (
    <ParallaxBanner
      layers={[
        {
          image:
            "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          speed: -25,
        },
        {
          speed: -20,
          children: (
            <div>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-[calc(2rem+2dvw)] backdrop-blur-[1.5px]">
                <div className="px-5 text-center">
                  <h1 className="text-shadow text-[calc(3.5rem+2dvw)] text-info font-extrabold tracking-wide leading-tight">
                    Aranas Dental
                  </h1>
                  <p className="mt-[calc(0.5rem+1dvw)] text-shadow text-[calc(1rem+1dvw)] text-warning font-semibold tracking-widest">
                    General Dentistry & Orthodontics
                  </p>
                </div>
                <Link
                  href="/book"
                  className="relative inline-block px-10 lg:px-14 py-4 bg-neutral-900 lg:text-lg text-white hover:text-zinc-50 font-semibold overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-tertiary transition-transform duration-300 ease-out transform translate-x-full group-hover:translate-x-0"></span>
                  <span className="relative z-10">Book Now</span>
                </Link>
              </div>
            </div>
          ),
        },
      ]}
      className="w-full h-full z-0"
    />
  );
};
