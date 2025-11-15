import React, { useState } from 'react'
import { CiShoppingCart } from 'react-icons/ci'
import { NavLink } from 'react-router-dom'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoClose } from 'react-icons/io5'

export default function Navbar() {

    const [open, setOpen] = useState(false);

    const navMenu = [
        { name: "Home", path: '/' },
        { name: "Shop Now", path: '/shop-now' },
        { name: 'About', path: '/about' },
        { name: "Contact", path: '/contact' }
    ];

    return (
        <div className="w-full bg-white border-y border-gray-200 py-3">
            <div className="container mx-auto px-4 flex items-center justify-between">

                {/* Left: All Category button */}
                <button className="hidden md:block bg-[#5CAF90] text-white px-4 py-2 rounded-md hover:bg-gray-700 transition">
                    All Category
                </button>

                {/* Center Menu (Desktop) */}
                <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
                    {navMenu.map((item, index) => (
                        <NavLink
                            to={item.path}
                            key={index}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[#5CAF90]"
                                    : "hover:text-[#5CAF90] transition"
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </nav>

                {/* Right: Shop Now Button */}
                <button className="hidden md:flex bg-[#5CAF90] text-white px-4 py-2 rounded-md hover:bg-gray-700 transition">
                    <div className="flex items-center gap-2">
                        <CiShoppingCart className="text-2xl" />
                        Shop Now
                    </div>
                </button>

                {/* Mobile Hamburger Button */}
                <button
                    className="md:hidden text-3xl"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <IoClose /> : <RxHamburgerMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white shadow-md border-t mt-2 px-4 py-4 space-y-4">

                    {/* All Category */}
                    <button className="w-full bg-[#5CAF90] text-white py-2 rounded-md hover:bg-gray-700 transition">
                        All Category
                    </button>

                    {/* Navigation */}
                    <div className="flex flex-col gap-4 text-gray-700 font-medium">
                        {navMenu.map((item, index) => (
                            <NavLink
                                to={item.path}
                                key={index}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-[#5CAF90]"
                                        : "hover:text-[#5CAF90] transition"
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* Shop Now Button */}
                    <button className="w-full bg-[#5CAF90] text-white py-2 rounded-md hover:bg-gray-700 transition flex items-center justify-center gap-2">
                        <CiShoppingCart className="text-xl" />
                        Shop Now
                    </button>

                </div>
            )}
        </div>
    )
}
