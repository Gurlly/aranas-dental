
import Location from "../components/Location";
import ContactForm from "../components/ContactForm";
import PageTitle from "../components/PageTitle";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact Aranas Dental for comprehensive dental care. Explore our range of services, special offers, and book your appointment today to ensure your oral health is in expert hands.",
  keywords:
    "Contact Aranas Dental, Dental clinic contact, Book dental appointment, Dental clinic phone number, Dental clinic location, Visit Aranas Dental",
  canonical: "/",

  openGraph: {
    url: "/",
    title: "Contact Aranas Dental",
    description:
      "Contact Aranas Dental for comprehensive dental care. Explore our range of services, special offers, and book your appointment today to ensure your oral health is in expert hands.",
  },

  twitter: {
    title: "Contact Aranas Dental",
    description:
      "Contact Aranas Dental for comprehensive dental care. Explore our range of services, special offers, and book your appointment today to ensure your oral health is in expert hands.",
  },
};

export default function Contact() {
  return (
    <>
      <main className="w-full h-max bg-zinc-50">
        <PageTitle title="Contact Us"/>
        <section
          aria-label="Contact Us Contents"
          className="md:container md:mx-auto px-3 flex flex-col justify-center items-center"
        >
          <Location />
          <ContactForm/>
        </section> 
      </main>
    </>
  );
}
