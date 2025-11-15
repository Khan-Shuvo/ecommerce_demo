import React from 'react'
import bg from '../../assets/image/HERO-COVER.jpg'

export default function Hero() {
  return (
    <div>
      <div style={{ backgroundImage: `url(${bg})` }} className='container px-24 mx-auto bg-cover h-[70vh] my-10'>
        <div className='flex flex-col justify-center items-start h-full'>
          <h3 className='text-[#5CAF90] text-2xl font-semibold'>70% off For This Winter</h3>
          <h1 className='text-4xl font-semibold text-[#4B5966]'>Bigest Sales for <br /> Man & Women</h1>
          <button className='bg-[#5CAF90] text-white font-semibold py-1 px-2 rounded-md'>Shop now</button>
        </div>
      </div>
    </div>
  )
}
