// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import { picture_1 } from '../assets';
import { picture_2 } from '../assets';
import { picture_3 } from '../assets';
import { picture_4 } from '../assets';
import { picture_5 } from '../assets';
import { picture_6 } from '../assets';
import { picture_7 } from '../assets';
import { picture_8 } from '../assets';
import { picture_9 } from '../assets';
import { picture_one } from '../assets';
import { picture_two } from '../assets';
import { picture_three } from '../assets';

const Articles = () => {
    const articles = [
        { id: 1, image: picture_1, title: "Beyond the Runway: Unveiling the World of Fashion Design", link: "/article/1" },
        { id: 2, image: picture_2, title: "Beyond the Runway: Unveiling the World of Fashion Design", link: "/article/2" },
        { id: 3, image: picture_3, title: "Beyond the Runway: Unveiling the World of Fashion Design", link: "/article/3" },
        { id: 4, image: picture_4, title: "Beyond the Runway: Unveiling the World of Fashion Design", link: "/article/4" },
        { id: 5, image: picture_5, title: "Beyond the Runway: Unveiling the World of Fashion Design", link: "/article/5" },
        { id: 6, image: picture_6, title: "Beyond the Runway: Unveiling the World of Fashion Design", link: "/article/6" },
        { id: 7, image: picture_7, title: "Beyond the Runway: Unveiling the World of Fashion Design", link: "/article/7" },
        { id: 8, image: picture_8, title: "Beyond the Runway: Unveiling the World of Fashion Design", link: "/article/8" },
        { id: 9, image: picture_9, title: "Beyond the Runway: Unveiling the World of Fashion Design", link: "/article/9" },
        { id: 10, image: picture_one, title: "Beyond the Runway: Unveiling the World of Fashion Design", link: "/article/10" },
        { id: 11, image: picture_two, title: "Beyond the Runway: Unveiling the World of Fashion Design", link: "/article/11" },
        { id: 12, image: picture_three, title: "Beyond the Runway: Unveiling the World of Fashion Design", link: "/article/12" },
    ];

    return (
        <div>
            <div className='flex justify-center items-center mb-5'>
                <h2 className='font-sans md:text-5xl xs:text-3xl text-2xl mb-10'>All Articles</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:mx-96 xs:mx-20 mx-10">
                {articles.map(article => (
                    <div key={article.id} className="flex flex-col items-center mb-10">

                        <Link to={article.link}>
                            <img src={article.image} alt={article.title} className="w-full xl:h-80 object-cover mb-4" />
                            <h3 className="xl:mx-40 font-sans text-center xs:text-xl xs:font-semibold font-normal hover:underline">{article.title}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Articles;
