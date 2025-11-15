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
        <div className='shadow-2xl'>
            <div className='container mx-auto'>
                <div className='flex gap-3 items-center justify-around py-1' >
                    {/* logo */}

                    <div>
                        <h1>E-Shop</h1>
                    </div>

                    {/* search bar */}

                    <div>
                        <input type="text"
                            placeholder='Search ...'
                            className='border border-gray-400 px-3 py-1 rounded' />
                    </div>
                    {/* login and card  */}
                    <div className='flex items-center gap-4'>
                        {/* login button */}
                        <div className='flex items-center gap-1.5'>
                            <RxAvatar />
                            {
                                !user && (
                                    <NavLink to={'/login'}>
                                        <button>Login</button>
                                    </NavLink>
                                )
                            }
                            {
                                user && (
                                    <div ref={dropdownRef} className="relative">
                                        {/* Avatar */}
                                        <div
                                            onClick={() => setOpen(!open)}
                                            className="cursor-pointer"
                                        >
                                            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                                                {user.email[0].toUpperCase()}
                                            </div>
                                        </div>

                                        {/* Dropdown Menu */}
                                        {open && (
                                            <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg p-3 z-50">
                                                <div className="text-center py-2 border-b text-gray-700">
                                                    {user.email}
                                                </div>

                                                <button
                                                    onClick={logout}
                                                    className="w-full text-left text-red-600 mt-3 hover:bg-red-50 py-1 px-2 rounded"
                                                >
                                                    Logout
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                )
                            }

                        </div>

                        {/* cart */}
                        <div className='flex items-center gap-1.5'>
                            <CiShoppingCart />
                            <button>Cart</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
