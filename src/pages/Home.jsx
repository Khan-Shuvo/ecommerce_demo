import React from 'react'
import Hero from '../components/home/Hero'
import HomeCategory from '../components/home/HomeCategory'
import PopulerProducts from '../components/home/PopulerProducts'
import NewProducts from '../components/home/NewProducts'

export default function Home() {
  return (
    <div>
        <Hero/>
        <HomeCategory/>
        <PopulerProducts/>
        <NewProducts/>
    </div>
  )
}
