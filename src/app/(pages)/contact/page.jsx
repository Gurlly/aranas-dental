
import Location from "../../components/Location";
import ContactForm from "../../components/ContactForm";
import PageTitle from "../../components/PageTitle";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Aranas Dental Clinic. Contact us for inquiries, appointments, or assistance. Our team is ready to provide the dental care and information you need.",
  keywords: "contact Aranas Dental Clinic, dental inquiries, appointment assistance, dentist contact, dental clinic phone number, email dentist, schedule dental consultation",
  robots: 'index, follow',
  openGraph: {
    title: "Contact Us",
    description: 'Get in touch with Aranas Dental Clinic. Contact us for inquiries, appointments, or assistance. Our team is ready to provide the dental care and information you need.',
    url: "https://aranas-dental.vercel.app/",
  },
  twitter: {
    card: 'summary_large_image',
    site: '',
    title: 'Contact Us',
    description: 'Get in touch with Aranas Dental Clinic. Contact us for inquiries, appointments, or assistance. Our team is ready to provide the dental care and information you need.',
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: true
}

export default function Contact() {
  return (
    <>
      <section className="w-full h-max bg-zinc-50">
        <PageTitle title="Contact Us"/>
        <section
          aria-label="Contact Us Contents"
          className="md:container md:mx-auto px-3 flex flex-col justify-center items-center"
        >
          <Location />
          <ContactForm/>
        </section> 
      </section>
    </>
  );
}
