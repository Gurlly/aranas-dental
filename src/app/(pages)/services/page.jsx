import React from 'react'

import PageTitle from '@src/app/components/PageTitle'
import ServicesComponent from '@src/app/components/ServicesComponent'

const Serivces = () => {
  return (
    <>
      <section>
        <PageTitle title="Services" />
        <section className="w-full h-max px-5 py-14 md:py-20 lg:py-28 xl:py-36 bg-white">
          <div className="md:container md:mx-auto">
            <ServicesComponent/>
          </div>
        </section>
      </section>
    </>
  )
}

export default Serivces