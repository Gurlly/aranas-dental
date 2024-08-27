
import { React } from "react";
import PageTitle from "../../components/PageTitle";
import { BookForm } from "../../components/BookForm";

export const metadata = {
  title: "Book an Appointment",
  description:
    "Book your appointment at Aranas Dental Clinic with our easy online scheduling system. Choose your preferred date and time for a dental check-up, teeth cleaning, or any other dental service. Our team is ready to provide you with quality care in a comfortable environment.",
  keywords:
    "Book an appointment, Aranas Dental Clinic appointment, online dental booking, schedule a dental visit, dental appointment booking, easy dental scheduling, dental check-up appointment, teeth cleaning appointment, dental care scheduling, book dental service",
  canonical: "https://aranas-dental.vercel.app/book",

  openGraph: {
    url: "https://aranas-dental.vercel.app/book",
    title: "Book an Appointment",
    description:
      "Book your appointment at Aranas Dental Clinic with our easy online scheduling system. Choose your preferred date and time for a dental check-up, teeth cleaning, or any other dental service. Our team is ready to provide you with quality care in a comfortable environment.",
  },

  twitter: {
    title: "Book an Appointment",
    description:
      "Book your appointment at Aranas Dental Clinic with our easy online scheduling system. Choose your preferred date and time for a dental check-up, teeth cleaning, or any other dental service. Our team is ready to provide you with quality care in a comfortable environment.",
  },
};

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
