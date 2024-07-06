// eslint-disable-next-line no-unused-vars
import React from 'react'
import { skillas_logo } from '../assets';

const Navbar = () => {
    return (
        <div className='w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg'>
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <img src={skillas_logo} alt="Logo" className="w-28 mt-6 ml-20" />
                </div>

                <div className='flex items-center font-sans font-normal text-xl justify-end'>
                    <ul className='flex list-none gap-x-10 ml-auto mr-28 mt-5'>
                        <li>BLOG</li>
                        <li>ABOUT</li>
                        <li>LINKS</li>
                    </ul>

                </div>
            </div>

        </div>
    )
}

export default Navbar