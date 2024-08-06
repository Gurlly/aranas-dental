
import Link from "next/link";

import Image from "next/image";
import Logo from "../../resources/Logo.png";
import PopupNav from "./Nav";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 w-full p-5 bg-primary z-10">
      <div className="md:container md:mx-auto">
        <section className="w-full flex justify-between items-center">
          <Link href="/"><Image src={Logo} alt="Aranas Dental Logo" className="w-36 h-auto" /></Link>
          <PopupNav/>
        </section>
      </div>
    </header>
  )
}

export default Header;