
import Testimonies from "../components/Testimonials/Testimonies";

export const metadata = {
  title: "Testimonials",
  description:
    "Aranas Dental ensures that our service is quality and proven by our lovely patients.",
  keywords: "Testimonials, Review, Clients, Patients, Dental",
  canonical: "/",

  openGraph: {
    title: "Testimonials",
    description:
      "Aranas Dental ensures that our service is quality and proven by our lovely patients.",
  },

  twitter: {
    title: "Testimonials",
    description:
      "Aranas Dental ensures that our service is quality and proven by our lovely patients.",
  },
};

export default function Testimonials() {

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
            Testimonials
          </h1>
        </section>
        <section aria-label="Reviews section" className="md:container md:mx-auto px-3 py-10 lg:pt-28 lg:pb-20 flex flex-col justify-center items-center gap-y-7">
          <Testimonies/>
        </section>
      </main>
    </>
  );
}
