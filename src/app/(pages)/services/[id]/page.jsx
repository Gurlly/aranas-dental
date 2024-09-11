"use client"

import {React, useState, useEffect} from 'react'
import Services from '@src/app/api/dental-services/dental-services.json'
import { useRouter } from 'next/navigation'
import { ParallaxBanner } from 'react-scroll-parallax'

const Page = ({params}) => {

  const router = useRouter();
  const [serviceSelected, setServiceSelected] = useState({});

  useEffect(() => {
    setServiceSelected(Services.find(service => (
      service.id === params.id
    )))
  }, [])

  console.log(serviceSelected);

  return (
    <>
      <section className="w-full h-max">
        <article className="md:container md:mx-auto">
          <div className="w-full min-h-dvh lg:min-h-max px-5 py-12 md:px-8 md:py-14 lg:px-0 lg:py-28 2xl:py-32 grid grid-rows-2 gap-y-8">
            <div className="border">
              <ParallaxBanner 
                layers={[{ image: serviceSelected.src , speed: -25 }]}
                className="w-full h-full"
              />
              
            </div>
            <div className="flex flex-col gap-y-5">
              <h2 className="text-[calc(1.5rem+2dvw)] text-neutral-900">{serviceSelected.name}</h2>
              <p className="text-[calc(0.60rem+1.5dvw)] text-justify text-neutral-800 font-mono">{serviceSelected.description}</p>

              <button
                onClick={()=>router.push("/book")}
                className="border border-gray-300 rounded shadow-md mt-9 py-2.5 w-4/6 max-w-72 lg:text-lg font-semibold text-neutral-900 hover:text-neutral-800 self-center md:self-start bg-warning hover:bg-amber-400 transition-colors ease-linear duration-200"
              >
                Book Now
              </button>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}

export default Page