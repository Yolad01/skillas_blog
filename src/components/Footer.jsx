// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import { white_logo } from '../assets';
import { icon_instagram } from '../assets';
import { icon_twitter } from '../assets';
import { icon_linkedin } from '../assets';

const Footer = () => {
    return (
        <div className='bg-darkGreen'>
            <div className='flex justify-center items-center'>
                <img src={white_logo} alt="Skillas Logo" className="lg:w-96 xs:w-52 w-40 mt-20 mb-10" />
            </div>

            <p className='font-inter md:text-xl sm:text-base xs:mx-10 mx-10 text-white text-center'>The easiest way to hire/sell your skill instantly at  zero risk.</p>

            <div className='mt-10 font-inter md:text-xl sm:text-base text-white flex flex-col xs:flex-row justify-center items-center xs:space-x-4 space-y-4 xs:space-y-0'>
                <Link to="/terms" className="hover:underline">Terms & Condition</Link>
                <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
            </div>

            <div className='flex justify-center items-center mt-10 pb-20 space-x-5'>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={icon_instagram} alt="Instagram Logo" className="w-8" />
                </a>

                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={icon_twitter} alt="Twitter Logo" className="w-8" />
                </a>

                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src={icon_linkedin} alt="LinkedIn Logo" className="w-8" />
                </a>
            </div>

        </div>
    )
}

export default Footer