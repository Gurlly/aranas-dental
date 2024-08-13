
import Location from "../components/Location";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <main className="w-full h-max bg-zinc-50">
        <section
          className="w-full h-max p-10 lg:p-14 bg-warning flex items-center justify-center"
          aria-label="Testimonials"
        >
          <h1
            className="text-[calc(0.85rem+2dvw)] font-extrabold font-mono text-info tracking-wide uppercase"
            aria-labelledby="Testimonials"
          >
            Contact Us
          </h1>
        </section>
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
