import React, { useContext, useEffect, useRef, useState } from 'react'
import { CiShoppingCart } from 'react-icons/ci'
import { RxAvatar } from 'react-icons/rx'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../contexApi/UserContext'

export default function TopHeader() {

    const { user, logout } = useContext(UserContext)

    const [open, setOpen] = useState(false);
    const dropdownRef = useRef();

    return (
        <div className="shadow-lg bg-white">
            <div className="container mx-auto px-4 py-2">

                <div className="flex items-center justify-between gap-4">

                    {/* Logo */}
                    <h1 className="text-xl font-bold text-[#4B5966]">
                        E-Shop
                    </h1>

                    {/* Search Bar */}
                    <div className="hidden sm:block flex-1 max-w-lg">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full border border-gray-400 px-3 py-1 rounded focus:outline-none"
                        />
                    </div>

                    {/* Right Icons */}
                    <div className="flex items-center gap-6">
                        
                        {/* Login / User Dropdown */}
                        <div className="flex items-center gap-2">
                            <RxAvatar className="text-lg" />

                            {!user && (
                                <NavLink to="/login">
                                    <button className="text-sm hover:text-[#5CAF90]">
                                        Login
                                    </button>
                                </NavLink>
                            )}

                            {user && (
                                <div ref={dropdownRef} className="relative">
                                    {/* Avatar Circle */}
                                    <div
                                        onClick={() => setOpen(!open)}
                                        className="cursor-pointer"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-[#5CAF90] flex items-center justify-center text-white font-semibold">
                                            {user.email[0].toUpperCase()}
                                        </div>
                                    </div>

                                    {/* Dropdown */}
                                    {open && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-lg p-3 z-50">
                                            <div className="text-center py-2 border-b text-gray-700">
                                                {user.email}
                                            </div>

                                            <button
                                                onClick={logout}
                                                className="w-full mt-3 text-left text-red-600 hover:bg-red-50 py-1 px-2 rounded"
                                            >
                                                Logout
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Cart */}
                        <div className="flex items-center gap-1 cursor-pointer">
                            <CiShoppingCart className="text-xl" />
                            <button className="text-sm hover:text-[#5CAF90]">Cart</button>
                        </div>
                    </div>

                </div>

                {/* Search bar for mobile view */}
                <div className="block sm:hidden mt-3">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full border border-gray-400 px-3 py-1 rounded focus:outline-none"
                    />
                </div>

            </div>
        </div>
    )
}
