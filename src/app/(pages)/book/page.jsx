
import { React } from "react";
import PageTitle from "../../components/PageTitle";
import { BookForm } from "../../components/BookForm";

export const metadata = {
  title: "Book an Appointment",
  description: "Schedule your next dental appointment at Aranas Dental Clinic quickly and easily. Choose a convenient date and time for your consultation or treatment with our expert team.",
  keywords: "book dental appointment, dental appointment scheduling, Aranas Dental Clinic, online appointment, dental consultation, schedule appointment, dentist appointment booking",
  robots: 'index, follow',
  openGraph: {
    title: "Book an Appointment",
    description: 'Schedule your next dental appointment at Aranas Dental Clinic quickly and easily. Choose a convenient date and time for your consultation or treatment with our expert team.',
    url: "https://aranas-dental.vercel.app/",
  },
  twitter: {
    card: 'summary_large_image',
    site: '',
    title: 'Book an Appointment',
    description: 'Schedule your next dental appointment at Aranas Dental Clinic quickly and easily. Choose a convenient date and time for your consultation or treatment with our expert team.',
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: true
}

export default function Book() {
  
  return (
    <>
      <section className="w-full bg-slate-50">
        <PageTitle title="Book Appointment" />
        <section className="md:container md:mx-auto min-h-dvh px-5 py-10 lg:pt-28 lg:pb-24 flex items-center justify-center">
          <BookForm/>
        </section>
      </section>
    </>
  );
}
