// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom';
import { picture_7 } from '../assets';
import { picture_8 } from '../assets';
import { picture_9 } from '../assets';
import { picture_one } from '../assets';
import { picture_two } from '../assets';
import { picture_three } from '../assets';

const Next = () => {
    const articles = [

        { id: 7, image: picture_7, title: "Beyond the Runway: Unveiling the World of Fashion Design", link: "/article/7" },
        { id: 10, image: picture_one, title: "Beyond the Runway: Unveiling the World of Fashion Design", link: "/article/10" },
        { id: 8, image: picture_8, title: "Beyond the Runway: Unveiling the World of Fashion Design", link: "/article/8" },
        { id: 9, image: picture_9, title: "Beyond the Runway: Unveiling the World of Fashion Design", link: "/article/9" },
        { id: 11, image: picture_two, title: "Beyond the Runway: Unveiling the World of Fashion Design", link: "/article/11" },
        { id: 12, image: picture_three, title: "Beyond the Runway: Unveiling the World of Fashion Design", link: "/article/12" },
    ];

    return (
        <div>
            <h2 className="mt-16 font-sans font-semibold md:text-5xl text-3xl text-center text-darkGreen">What to read next</h2>

            <div className="mt-10 xl:mx-60 lg:mx-40 md:mx-20 sm:mx-16 mx-10 gap-x-8 grid grid-cols-1 md:grid-cols-3">
                {articles.map(article => (
                    <div key={article.id} className="flex flex-col items-center mb-10">

                        <Link to={article.link}>
                            <img src={article.image} alt={article.title} className="w-full xl:h-80 object-cover mb-4" />
                            <h3 className="xl:mx-20 font-sans text-center md:text-xl sm:text-2xl portable:px-10 lg:font-semibold font-bold hover:underline">{article.title}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Next