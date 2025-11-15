import React from 'react'
import bg from '../../assets/image/HERO-COVER.jpg'

export default function Hero() {
  return (
    <div
      className="w-full bg-cover bg-center h-[60vh] md:h-[70vh] lg:h-[80vh] my-10"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="h-full flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24">

        <h3 className="text-[#5CAF90] text-lg sm:text-xl md:text-2xl font-semibold">
          70% off For This Winter
        </h3>

        <h1 className="text-[#4B5966] text-3xl sm:text-4xl md:text-5xl font-semibold mt-2 leading-tight">
          Biggest Sales for <br /> Men & Women
        </h1>

        <button className="bg-[#5CAF90] text-white font-semibold mt-4 py-2 px-5 rounded-md text-sm sm:text-base md:text-lg w-16 sm:w-32 transition-transform duration-300 hover:scale-105">
          Shop Now
        </button>

      </div>
    </div>
  )
}
