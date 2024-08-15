import React from 'react'

const PageTitle = ({title}) => {
  return (
    <>
        <section
          className="w-full h-max p-10 lg:p-14 bg-warning flex items-center justify-center"
          aria-label="Testimonials"
        >
          <h1
            className="text-[calc(0.85rem+2dvw)] font-extrabold font-mono text-info tracking-wide uppercase"
            aria-labelledby="Testimonials"
          >
            {title}
          </h1>
        </section>
    </>
  )
}

export default PageTitle