import React from 'react'

const ContactForm = () => {
  return (
    <>
        <form className="my-10 md:mb-14 lg:mb-20 xl:mb-24 w-10/12 border shadow-md shadow-gray-300 rounded-md mx-auto">
            <div className='w-full p-5 lg:p-8 bg-neutral-900 rounded-t-md text-info'>
                <h2 className='mb-1.5 text-[calc(1.15rem+1dvw)] text-center font-bold'>Send A Message</h2>
                <p className='text-sm lg:text-base text-center font-serif font-extralight'>If you have any questions, concerns, or comments regarding Aranas Dental or our Services, please fill out the short contact form below.</p>
            </div>

            <div className='p-5 lg:p-8 flex flex-col gap-y-3.5 lg:gap-y-5 bg-zinc-100'>
                <div className='flex flex-col w-full gap-y-1.5'>
                    <label htmlFor='name' className='font-bold text-sm lg:text-base'>Full Name:</label>
                    <input type="text" id="name" name="name" required minLength="4" maxLength="8" placeholder='Juan Dela Cruz'  className='font-serif py-2 lg:py-3 px-3 lg:px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500'/>
                </div>
                <div className='flex flex-col w-full gap-y-1.5'>
                    <label htmlFor='email' className='font-bold text-sm lg:text-base'>Email:</label>
                    <input type="email" id="email" name="email" required placeholder='juandelacruz@gmail.com'  className='font-serif py-2 lg:py-3 px-3 lg:px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500'/>
                </div>
                <div className='flex flex-col w-full gap-y-1.5'>
                    <label htmlFor='tel' className='font-bold text-sm lg:text-base'>Telephone:</label>
                    <input type="tel" id="tel" name="tel" required placeholder='09772461231'  className='font-serif py-2 lg:py-3 px-3 lg:px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500'/>
                </div>
                <div className='flex flex-col w-full gap-y-1.5'>
                    <label htmlFor='message' className='font-bold text-sm lg:text-base'>Message:</label>
                    <textarea id="message" name="message" className='w-full font-serif py-2 lg:py-3 px-3 lg:px-4 block border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 resize-none' minLength="70" maxLength="500" rows={10} required placeholder='Write a message...'>

                    </textarea>
                </div>
                <button 
                type="submit"
                className='w-full md:w-4/12 py-2.5 mt-5 border border-stone-500 bg-emerald-600 self-center md:self-start rounded-lg text-info font-bold'
                >
                    Send
                </button>
            </div>
        </form>
    </>
  )
}

export default ContactForm;