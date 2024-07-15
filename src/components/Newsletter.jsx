// eslint-disable-next-line no-unused-vars
import React from 'react';
import Footer from '../components/Footer';

const Newsletter = () => {
    return (
        <div>
            <div className='mt-20 flex justify-center items-center mx-96'>
                <hr className='border-2 border-darkGreen w-1/2' />
            </div>

            <div className='mx-96'>
                <div className='mx-72 border-2'>
                    <h2 className='font-sans font-semibold text-4xl text-center mt-14'>Sign up for the newsletter</h2>
                    <p className='text-center font-normal mt-5'>If you want relevant updates occasionally, sign up for the <br />
                        private newsletter. Your email is never shared.
                    </p>

                    <div className='flex justify-center items-center mt-10 mb-10 font-sans'>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-7 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-darkGreen"
                        />
                        <button
                            className="px-7 py-3 bg-darkGreen font-semibold text-white  hover:bg-green-700"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Newsletter