"use client";

import { React, useState } from "react";
import Link from "next/link";

import { RiMenu3Line } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";

const links = [
  {
    name: "Home",
    url: "/",
    id: "home"
  },
  {
    name: "Our Dentists",
    url: "/about-dentists",
    id: "dentist"
  },
  {
    name: "Services",
    url: "/services",
    id: "service"
  },
  {
    name: "Testimonials",
    url: "/testimonials",
    id: "testimonials"
  },
  {
    name: "Contact Us",
    url: "/contact",
    id: "contact"
  },
  {
    name: "Book Now",
    url: "/book",
    id: "book"
  },
];

const PopupNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
        <div className="inline-flex items-center lg:hidden relative z-50">
            <button
                className="p-1 text-neutral-900 border border-gray-500 bg-white hover:bg-slate-200 transition-colors ease-linear"
                onClick={() => setOpen(!open)}
            >
                <RiMenu3Line size={21} />
            </button>
            <div
                className={`fixed top-0 left-0 w-dvw h-dvh ${
                open ? "block" : "hidden"
                }`}
            >
                <section
                className="w-full h-full flex flex-col bg-neutral-900 bg-opacity-95 relative z-50"
                aria-label="NavBar Overlay"
                >
                    <header className="w-full p-5">
                        <button
                        className="p-2 inline-flex items-start border rounded-full text-zinc-50 bg-neutral-900 hover:bg-neutral-800 transition-colors ease-linear float-end"
                        onClick={() => setOpen(!open)}
                        >
                        <FaTimes size={17} />
                        </button>
                    </header>
                    <nav className="flex-1 flex items-center justify-center">
                        <ul className="-mt-20 flex flex-col items-center gap-y-10">
                        {links.map((link) => (
                            <li
                            className="text-[1.35rem] md:text-2xl font-bold text-zinc-200 font-mono tracking-widest"
                            key={link.id}
                            >
                              <Link 
                              href={link.url}
                              onClick={() => setOpen(!open)}
                              >
                                {link.name}
                              </Link>
                            </li>
                        ))}
                        </ul>
                    </nav>
                </section>
            </div>
        </div>
        <ul className="hidden lg:flex items-center gap-x-7 xl:gap-x-14">
            {
                links.map((link) => (
                    <li 
                    className={`text font-semibold font-mono tracking-wider ${link.id === "book" ? "bg-warning hover:bg-amber-400 px-5 py-3 text-neutral-900 hover:text-neutral-800 transition-colors ease-linear duration-200 cursor-pointer" : "text-info"}`}
                    key={link.id}
                    >
                        <Link href={link.url}>{link.name}</Link>
                    </li>
                ))
            }
        </ul>
    </>
  );
};

export default PopupNav;
