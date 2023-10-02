import React from 'react'

const ContactPage = () => {
  return (
    <section className='max-container my-20 flex max-lg:flex-col justify-between gap-12 max-md:mx-4'>
     <div className='flex flex-col gap-7'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-lg font-semibold'>Call to us</h1>
        <p>We are available 24/7, 7days a week</p>
        <p>phone: +91 844 558 9271</p>
      </div>
      <hr className='h-[2px]' color='orange'/>
      <div className='flex flex-col gap-2'>
      <h1 className='text-lg font-semibold'>Write to us</h1>
        <p>Fill out our form and we will contact you within 24 hours</p>
        <p>Emails: customer@shophub.com</p>
        <p>Emails: support@shophub.com</p>
      </div>
     </div>
      <div className='max-lg:w-full w-[70%] flex flex-col gap-4 '>
        <div className='grid grid-cols-3 max-md:grid-cols-1 gap-4'>
        <input type="text" placeholder='Your name' className='input'/>
        <input type="email" placeholder='Your email' className='input'/>
        <input type="phone" placeholder='Your phone number' className='input'/>
        </div>
        <textarea name="" id="" className='w-full input' rows="7"></textarea>
        <button className='self-end py-3 px-8 w-min bg-orange-500 text-white font-semibold rounded-lg'>Submit</button>
      </div>
     
    </section>
  )
}

export default ContactPage