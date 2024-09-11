import React from 'react'

import PageTitle from '@src/app/components/PageTitle'
import ServicesComponent from '@src/app/components/ServicesComponent'

export const metadata = {
  title: "Dental Services",
  description: "Explore the wide range of dental services offered at Aranas Dental Clinic, including preventive care, orthodontics, teeth whitening, fillings, Invisalign, veneers, mouthguards, and more.",
  keywords: "dental services, preventive dentistry, orthodontics, teeth whitening, fillings, Invisalign, veneers, mouthguards, dentures, Aranas Dental Clinic",
  robots: 'index, follow',
  openGraph: {
    title: "Dental Services",
    description: 'Explore the wide range of dental services offered at Aranas Dental Clinic, including preventive care, orthodontics, teeth whitening, fillings, Invisalign, veneers, mouthguards, and more.',
    url: "https://aranas-dental.vercel.app/",
  },
  twitter: {
    card: 'summary_large_image',
    site: '',
    title: 'Dental Services',
    description: 'Explore the wide range of dental services offered at Aranas Dental Clinic, including preventive care, orthodontics, teeth whitening, fillings, Invisalign, veneers, mouthguards, and more.',
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: true
}

const Serivces = () => {
  return (
    <>
      <section>
        <PageTitle title="Services" />
        <section className="w-full h-max px-5 py-14 md:py-20 lg:py-28 xl:py-36 bg-white">
          <div className="md:container md:mx-auto">
            <ServicesComponent/>
          </div>
        </section>
      </section>
    </>
  )
}

export default Serivces