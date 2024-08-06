
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import { HeroBanner } from "./components/Home/HeroBanner";

export default function Home() {
  return (
    <>
      <Header/>

      <main className="w-full h-max">
        <section className="w-full h-dvh relative z-0">
          <HeroBanner/>
        </section>
        <section className="w-full h-dvh">

        </section>
      </main>

      <Footer/>
    </>
  );
}
