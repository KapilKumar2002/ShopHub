import React from 'react'
import { banner } from '../assets/images'

const Banner = () => {
  return (
    <section className='relative max-container h-[80vh]'>
    <img className='absolute h-full  w-full object-center' src={banner} alt="" />
    <div className='flex flex-col gap-3 items-start absolute left-[5%] top-[10%]'>
      <h1 className='font-bold text-4xl text-orange-400'>Super Value Deals</h1>
      <p className='font-medium text-2xl'>On all Products</p>
      <p className='font-medium text-xs'>Buy more & save more</p>
      <button className='px-5 py-3 bg-orange-500 text-white font-semibold rounded-lg'>Explore More</button>
    </div>
</section>
  )
}

export default Banner