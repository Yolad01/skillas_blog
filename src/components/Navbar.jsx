
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { skillas_logo } from '../assets';
import { favicon } from '../assets';
import { menu } from '../assets';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className='w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg'>
            <div className='flex justify-between relative'>
                <div className='hidden sm:flex items-center'>
                    <img src={skillas_logo} alt="Skillas Logo" className="w-28 mt-6 md:ml-20 sm:ml-10" />
                </div>

                <div className='sm:hidden flex items-center'>
                    <img src={favicon} alt="Skillas Logo" className='w-10 mt-6 ml-10' />
                </div>

                <div className='hidden sm:flex items-center font-sans font-normal sm:text-xl justify-end'>
                    <ul className='flex list-none gap-x-10 ml-auto md:mr-28 sm:mr-10 mr-10 mt-5'>
                        <li><Link to="/blog">BLOG</Link></li>
                        <li><Link to="/about">ABOUT</Link></li>
                        <li><Link to="/links">LINKS</Link></li>
                    </ul>
                </div>

                <div className='sm:hidden flex items-center'>
                    <img src={menu} alt="Hamburger menu" className='mr-10 mt-6 w-10 cursor-pointer' onClick={toggleDropdown} />
                </div>

                {isDropdownOpen && (
                    <ul className='sm:hidden absolute top-[80px] right-0 bg-darkGreen text-white shadow-lg rounded-md p-4 list-none mr-5'>
                        <li className='p-2'><Link to="/blog">BLOG</Link></li>
                        <li className='p-2'><Link to="/about">ABOUT</Link></li>
                        <li className='p-2'><Link to="/links">LINKS</Link></li>
                    </ul>
                )}
            </div>

        </div>
    )
}

export default Navbar