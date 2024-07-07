// eslint-disable-next-line no-unused-vars
import React from 'react';
import { blog_banner } from '../assets';

const Blog = () => {
    return (
        <div className="xl:mx-40">
            <div className='xl:mt-20 mt-10 flex justify-center items-center'>
                <img src={blog_banner} alt="Banner" className="xl:w-2/3 md:w-3/4 w-full" />
            </div>

            <div className='mt-10 flex justify-center items-center'>
                <h2 className='text-grey font-inter font-black xl:text-6xl md:text-5xl text-4xl text-center'>Streamlined Hiring <br /> From The Comfort <br /> Of Your Home</h2>
            </div>

            <div className='mt-5'>
                <p className='font-sans xl:text-lg sm:text-base text-center'>Why work with skillas as your hiring platform?</p>
            </div>
        </div>
    );
};

export default Blog;


