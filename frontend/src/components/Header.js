import React from 'react'
import Logo from './Logo'
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { BsCartPlusFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='h-16 shadow-md bg-white'>
            <div className='h-full container mx-auto flex items-center px-4 justify-between'>
                <div className=''>
                    <Link to="/">
                        <Logo w={90} h={50} />

                    </Link>
                </div>
                <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus:focus-within:shadow-md pl-2'>
                    <input type='text' placeholder='chercher un produit...'
                        className='w-full outline-none' />
                    <div className=' rounded-r-full text-white text-lg bg-red-400 min-w-[50px] h-8 flex items-center justify-center'>
                        <CiSearch />
                    </div>
                </div>

                <div className='flex items-center gap-6'>
                    <div className='text-3xl cursor-pointer'>
                        <FaRegUserCircle />

                    </div>
                    <div className='text-2xl relative'>
                        <span>    <BsCartPlusFill />  </span>
                        <div className='bg-red-600 text-white w-5 h-5 justify-center rounded-full  p-1 flex items-center absolute -top-3 -right-0'>
                            <p className='text-sm'>0</p>
                        </div>
                    </div>

                    <div>
                        <Link  to="/login" className='px-3 py-1 rounded-full bg-purple-500 text-white hover:bg-red-800'>
                            Connexion
                        </Link>
                    </div>
                </div>
            </div>

        </header>

    )
}

export default Header