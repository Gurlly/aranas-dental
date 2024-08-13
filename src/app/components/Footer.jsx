
import Link from "next/link"

import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="w-full h-max p-5 bg-neutral-900">
        <div className="md:container md:mx-auto">
          <section className="pt-3 pb-5 lg:pt-5 lg:pb-7" aria-label="Social Media Icons">
            <div className="w-full flex items-center justify-center gap-x-5">
              <Link className="text-info hover:text-neutral-300 transition-colors ease-linear duration-200" href="tel:+639760667363"><BsFillTelephoneFill size={25}/></Link>
              <Link className="text-blue-500 hover:text-blue-600 transition-colors ease-linear duration-200" href="https://www.facebook.com/AranasDentalClinic" target="_blank" rel="nonreferrer"><FaFacebookSquare size={30}/></Link>
            </div>
          </section>  
          <p className="text-center text-sm lg:text-lg font-semibold text-info select-none">&copy; 2024 Aranas Dental Clinic. All rights reserved</p>
        </div>
      </footer>
    </>
  )
}

export default Footer