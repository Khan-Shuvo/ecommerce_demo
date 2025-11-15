import React from 'react'
import { CiShoppingCart } from 'react-icons/ci'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {

    const navMenu = [
        { name: "Home", path: '/' },
        { name: "Shop Now", path: '/shop-now' },
        { name: 'About', path: '/about' },
        { name: "Contact", path: '/contact' }
    ]

    return (
        <div className='w-full bg-white border-y border-gray-200 py-4'>
            <div className='container mx-auto flex items-center justify-around gap-6 px-4'>

                {/* All Category button */}
                <button className='bg-[#5CAF90] text-white px-4 py-2 rounded-md hover:bg-gray-700 transition'>
                    All Category
                </button>

                {/* Navigation Menu */}
                <nav className='flex gap-6 text-gray-700 font-medium'>
                    {navMenu.map((item, index) => (
                        <NavLink
                            to={item.path}
                            key={index}
                            className={({isActive}) => isActive ? `text-[#5CAF90]`: `hover:text-[#5CAF90] transition`}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </nav>

                <button className='bg-[#5CAF90] text-white px-4 py-2 rounded-md hover:bg-gray-700 transition'>
                    <div className='flex items-center gap-2'>
                        <CiShoppingCart className='text-2xl' />
                        Shop Now
                    </div>

                </button>
            </div>
        </div>
    )
}
