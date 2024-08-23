// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Next from '../components/Next';
import Newsletter from '../components/Newsletter';
import picture_1 from '../assets/picture_1.png';
import picture_2 from '../assets/picture_2.png';
import picture_3 from '../assets/picture_3.png';
import picture_4 from '../assets/picture_4.png';
import picture_5 from '../assets/picture_5.png';
import picture_6 from '../assets/picture_6.png';
import picture_7 from '../assets/picture_7.png';
import picture_8 from '../assets/picture_8.png';
import picture_9 from '../assets/picture_9.png';
import picture_one from '../assets/picture_one.png';
import picture_two from '../assets/picture_two.png';
import picture_three from '../assets/picture_three.png';
import picture_four from '../assets/picture_four.png';
import profile from '../assets/profile_picture.png';
import blog_fb_acct from '../assets/blog_fb_acct.png';
import blog_twitter_acct from '../assets/blog_twitter_acct.png';
import reader from '../assets/eyesight.png';


const articles = [
    {
        id: 1,
        image: picture_1,
        title: 'Beyond the Runway: Unveiling the World of Fashion Design',
        firstParagraph: '<p class="font-sans">Beyond the Runway: Unveiling the World of Fashion Design</p>',
        content: `
            <hr class="mt-10 border border-black xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10" />

            <div class="xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10 flex">
                <img src="${profile}" alt="Blogger's picture" class="mt-10 w-10 mb-4" />
                <div class="mt-10 ml-5">
                    <p class="text-sm font-sans font-normal">Oluyomi</p>
                    <p class="text-sm font-sans font-normal -mr-10">Apr 15, 2024 · 4 min read</p>
                </div>

                <div class="hidden xs:flex xl:ml-96 xl:pl-96 lg:ml-96 md:ml-64 sm:ml-52 portable:ml-40 xs:ml-16 mt-10">
                    <a href="#"><img src="${blog_fb_acct}" alt="Blogger's Facebook page" class="w-16 h-12 border px-4 py-2" /></a>
                    <a href="#"><img src="${blog_twitter_acct}" alt="Blogger's Twitter page" class="w-16 h-12 border px-4 py-2" /></a>
                </div>
            </div>

            <div class="xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10">
                <p class="mt-10 font-sans font-normal text-xl leading-10">"Beyond the Runway" takes us past the glitz and glamour of fashion shows, venturing into the heart of the creative process. 
                Here, we'll delve deeper into the world of fashion design, exploring everything from the initial spark of inspiration to the 
                intricate details that bring a garment to life.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Get to Know the Designer:</h2>

                <p class="font-sans font-normal text-xl leading-10">Each month, we'll shine a spotlight on a different designer, established or 
                up-and-coming. We'll chat with them about their design philosophy, the stories behind their collections, and the challenges and 
                triumphs they face.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Beyond the Sketches:</h2>

                <p class="font-sans font-normal text-xl leading-10">Fashion design is more than just beautiful drawings. We'll explore the technical aspects of garment construction, from fabric 
                selection and pattern making to draping techniques and tailoring secrets.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Sustainable Style:</h2>

                <p class="font-sans font-normal text-xl leading-10">The fashion industry grapples with its environmental impact. Here, we'll discuss sustainable practices that designers are 
                incorporating, explore eco-friendly materials, and showcase designers who are revolutionizing the concept of responsible fashion.</p>
            </div>

            <div class="xl:mx-60 lg:mx-20 md:mx-10"><img src="${picture_four}" alt="Fashion Design" class="mt-10  mb-4" /></div>
            
            <div class="xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10">
                <h2 class="mt-10 font-sans font-extrabold text-xl">From Inspiration to Reality:</h2>

                <p class="font-sans font-normal text-xl leading-10">The journey from a designer's mind to a finished piece is fascinating. We'll delve into the design process, following a 
                garment's creation from the initial inspiration to the final touches.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Join the Conversation:</h2>

                <p class="font-sans font-normal text-xl leading-10">This blog isn't just a one-way street. We want to hear from you! Share your thoughts on current trends, 
                designers you love, and what you'd like to see more of in the fashion world.</p>

                <p class="mt-10 font-sans font-normal text-xl leading-10">Whether you're a fashion enthusiast, an aspiring designer, or simply curious about the magic behind the clothes we wear, "Beyond the Runway" is your invitation 
                to explore the world of fashion design in all its depth and creativity. So, buckle up, fashion lovers, and get ready to go on a journey that goes far beyond the runway!</p>
            </div>
            
            <div class="flex mt-16 justify-center items-center">
                <div class="flex border lg:px-20 px-10">
                    <a href="#"><img src="${blog_fb_acct}" alt="Blogger's Facebook page" class="w-16 h-12 px-4 py-2" /></a>
                    <p class="hidden sm:flex font-sans font-medium lg:text-lg mt-3">Share on Facebook</p>
                </div>
                <div class="flex border lg:px-20 px-10">
                    <a href="#"><img src="${blog_twitter_acct}" alt="Blogger's Twitter page" class="w-16 h-12 px-4 py-2" /></a>
                    <p class="hidden sm:flex font-sans font-medium lg:text-lg mt-3">Share on Twitter</p>
                </div>
            </div>

            <p class="text-center mt-10 font-sans font-semibold lg:text-lg">Tags: <a href="#" class="underline">product design</a>, <a href="#" class="underline">culture</a></p>

            <div class="xl:mx-96 flex justify-center items-start">
                <img src="${profile}" alt="Blogger's picture" class="mt-14 w-16 mb-4" />
                <div class="mt-10 ml-5">
                    <p class="text-sm font-sans font-normal leading-8">Oluyomiz is a Design Founder & Advisor, Berlin School of Creative</p>
                    <p class="text-sm font-sans font-normal leading-8">Leadership Executive MBA participant, Zippie advisor, Wolt </p>
                    <p class="text-sm font-sans font-normal leading-8">Founder, Style Stitches</p>
                </div>
            </div>

            <hr class="mt-24 border border-black" />
            <div class="flex justify-center items-center -mt-7"><img src="${reader}" alt="Reader's eye" class=" w-20" /></div>
        `
    },

    {
        id: 2,
        image: picture_2,
        title: 'Beyond the Runway: Unveiling the World of Fashion Design',
        content: `
            <hr class="mt-10 border border-black xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10" />

            <div class="xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10 flex">
                <img src="${profile}" alt="Blogger's picture" class="mt-10 w-10 mb-4" />
                <div class="mt-10 ml-5">
                    <p class="text-sm font-sans font-normal">Oluyomi</p>
                    <p class="text-sm font-sans font-normal -mr-10">Apr 15, 2024 · 4 min read</p>
                </div>

                <div class="hidden xs:flex xl:ml-96 xl:pl-96 lg:ml-96 md:ml-64 sm:ml-52 portable:ml-40 xs:ml-16 mt-10">
                    <a href="#"><img src="${blog_fb_acct}" alt="Blogger's Facebook page" class="w-16 h-12 border px-4 py-2" /></a>
                    <a href="#"><img src="${blog_twitter_acct}" alt="Blogger's Twitter page" class="w-16 h-12 border px-4 py-2" /></a>
                </div>
            </div>

            <div class="xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10">
                <p class="mt-10 font-sans font-normal text-xl leading-10">"Beyond the Runway" takes us past the glitz and glamour of fashion shows, venturing into the heart of the creative process. 
                Here, we'll delve deeper into the world of fashion design, exploring everything from the initial spark of inspiration to the 
                intricate details that bring a garment to life.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Get to Know the Designer:</h2>

                <p class="font-sans font-normal text-xl leading-10">Each month, we'll shine a spotlight on a different designer, established or 
                up-and-coming. We'll chat with them about their design philosophy, the stories behind their collections, and the challenges and 
                triumphs they face.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Beyond the Sketches:</h2>

                <p class="font-sans font-normal text-xl leading-10">Fashion design is more than just beautiful drawings. We'll explore the technical aspects of garment construction, from fabric 
                selection and pattern making to draping techniques and tailoring secrets.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Sustainable Style:</h2>

                <p class="font-sans font-normal text-xl leading-10">The fashion industry grapples with its environmental impact. Here, we'll discuss sustainable practices that designers are 
                incorporating, explore eco-friendly materials, and showcase designers who are revolutionizing the concept of responsible fashion.</p>
            </div>

            <div class="xl:mx-60 lg:mx-20 md:mx-10"><img src="${picture_four}" alt="Fashion Design" class="mt-10  mb-4" /></div>
            
            <div class="xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10">
                <h2 class="mt-10 font-sans font-extrabold text-xl">From Inspiration to Reality:</h2>

                <p class="font-sans font-normal text-xl leading-10">The journey from a designer's mind to a finished piece is fascinating. We'll delve into the design process, following a 
                garment's creation from the initial inspiration to the final touches.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Join the Conversation:</h2>

                <p class="font-sans font-normal text-xl leading-10">This blog isn't just a one-way street. We want to hear from you! Share your thoughts on current trends, 
                designers you love, and what you'd like to see more of in the fashion world.</p>

                <p class="mt-10 font-sans font-normal text-xl leading-10">Whether you're a fashion enthusiast, an aspiring designer, or simply curious about the magic behind the clothes we wear, "Beyond the Runway" is your invitation 
                to explore the world of fashion design in all its depth and creativity. So, buckle up, fashion lovers, and get ready to go on a journey that goes far beyond the runway!</p>
            </div>
            
            <div class="flex mt-16 justify-center items-center">
                <div class="flex border lg:px-20 px-10">
                    <a href="#"><img src="${blog_fb_acct}" alt="Blogger's Facebook page" class="w-16 h-12 px-4 py-2" /></a>
                    <p class="hidden sm:flex font-sans font-medium lg:text-lg mt-3">Share on Facebook</p>
                </div>
                <div class="flex border lg:px-20 px-10">
                    <a href="#"><img src="${blog_twitter_acct}" alt="Blogger's Twitter page" class="w-16 h-12 px-4 py-2" /></a>
                    <p class="hidden sm:flex font-sans font-medium lg:text-lg mt-3">Share on Twitter</p>
                </div>
            </div>

            <p class="text-center mt-10 font-sans font-semibold lg:text-lg">Tags: <a href="#" class="underline">product design</a>, <a href="#" class="underline">culture</a></p>

            <div class="xl:mx-96 flex justify-center items-start">
                <img src="${profile}" alt="Blogger's picture" class="mt-14 w-16 mb-4" />
                <div class="mt-10 ml-5">
                    <p class="text-sm font-sans font-normal leading-8">Oluyomiz is a Design Founder & Advisor, Berlin School of Creative</p>
                    <p class="text-sm font-sans font-normal leading-8">Leadership Executive MBA participant, Zippie advisor, Wolt </p>
                    <p class="text-sm font-sans font-normal leading-8">Founder, Style Stitches</p>
                </div>
            </div>

            <hr class="mt-24 border border-black" />
            <div class="flex justify-center items-center -mt-7"><img src="${reader}" alt="Reader's eye" class=" w-20" /></div>
        ` },

    {
        id: 3,
        image: picture_3,
        title: 'Beyond the Runway: Unveiling the World of Fashion Design',
        content: `
            <hr class="mt-10 border border-black xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10" />

            <div class="xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10 flex">
                <img src="${profile}" alt="Blogger's picture" class="mt-10 w-10 mb-4" />
                <div class="mt-10 ml-5">
                    <p class="text-sm font-sans font-normal">Oluyomi</p>
                    <p class="text-sm font-sans font-normal -mr-10">Apr 15, 2024 · 4 min read</p>
                </div>

                <div class="hidden xs:flex xl:ml-96 xl:pl-96 lg:ml-96 md:ml-64 sm:ml-52 portable:ml-40 xs:ml-16 mt-10">
                    <a href="#"><img src="${blog_fb_acct}" alt="Blogger's Facebook page" class="w-16 h-12 border px-4 py-2" /></a>
                    <a href="#"><img src="${blog_twitter_acct}" alt="Blogger's Twitter page" class="w-16 h-12 border px-4 py-2" /></a>
                </div>
            </div>

            <div class="xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10">
                <p class="mt-10 font-sans font-normal text-xl leading-10">"Beyond the Runway" takes us past the glitz and glamour of fashion shows, venturing into the heart of the creative process. 
                Here, we'll delve deeper into the world of fashion design, exploring everything from the initial spark of inspiration to the 
                intricate details that bring a garment to life.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Get to Know the Designer:</h2>

                <p class="font-sans font-normal text-xl leading-10">Each month, we'll shine a spotlight on a different designer, established or 
                up-and-coming. We'll chat with them about their design philosophy, the stories behind their collections, and the challenges and 
                triumphs they face.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Beyond the Sketches:</h2>

                <p class="font-sans font-normal text-xl leading-10">Fashion design is more than just beautiful drawings. We'll explore the technical aspects of garment construction, from fabric 
                selection and pattern making to draping techniques and tailoring secrets.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Sustainable Style:</h2>

                <p class="font-sans font-normal text-xl leading-10">The fashion industry grapples with its environmental impact. Here, we'll discuss sustainable practices that designers are 
                incorporating, explore eco-friendly materials, and showcase designers who are revolutionizing the concept of responsible fashion.</p>
            </div>

            <div class="xl:mx-60 lg:mx-20 md:mx-10"><img src="${picture_four}" alt="Fashion Design" class="mt-10  mb-4" /></div>
            
            <div class="xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10">
                <h2 class="mt-10 font-sans font-extrabold text-xl">From Inspiration to Reality:</h2>

                <p class="font-sans font-normal text-xl leading-10">The journey from a designer's mind to a finished piece is fascinating. We'll delve into the design process, following a 
                garment's creation from the initial inspiration to the final touches.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Join the Conversation:</h2>

                <p class="font-sans font-normal text-xl leading-10">This blog isn't just a one-way street. We want to hear from you! Share your thoughts on current trends, 
                designers you love, and what you'd like to see more of in the fashion world.</p>

                <p class="mt-10 font-sans font-normal text-xl leading-10">Whether you're a fashion enthusiast, an aspiring designer, or simply curious about the magic behind the clothes we wear, "Beyond the Runway" is your invitation 
                to explore the world of fashion design in all its depth and creativity. So, buckle up, fashion lovers, and get ready to go on a journey that goes far beyond the runway!</p>
            </div>
            
            <div class="flex mt-16 justify-center items-center">
                <div class="flex border lg:px-20 px-10">
                    <a href="#"><img src="${blog_fb_acct}" alt="Blogger's Facebook page" class="w-16 h-12 px-4 py-2" /></a>
                    <p class="hidden sm:flex font-sans font-medium lg:text-lg mt-3">Share on Facebook</p>
                </div>
                <div class="flex border lg:px-20 px-10">
                    <a href="#"><img src="${blog_twitter_acct}" alt="Blogger's Twitter page" class="w-16 h-12 px-4 py-2" /></a>
                    <p class="hidden sm:flex font-sans font-medium lg:text-lg mt-3">Share on Twitter</p>
                </div>
            </div>

            <p class="text-center mt-10 font-sans font-semibold lg:text-lg">Tags: <a href="#" class="underline">product design</a>, <a href="#" class="underline">culture</a></p>

            <div class="xl:mx-96 flex justify-center items-start">
                <img src="${profile}" alt="Blogger's picture" class="mt-14 w-16 mb-4" />
                <div class="mt-10 ml-5">
                    <p class="text-sm font-sans font-normal leading-8">Oluyomiz is a Design Founder & Advisor, Berlin School of Creative</p>
                    <p class="text-sm font-sans font-normal leading-8">Leadership Executive MBA participant, Zippie advisor, Wolt </p>
                    <p class="text-sm font-sans font-normal leading-8">Founder, Style Stitches</p>
                </div>
            </div>

            <hr class="mt-24 border border-black" />
            <div class="flex justify-center items-center -mt-7"><img src="${reader}" alt="Reader's eye" class=" w-20" /></div>
        `
    },

    {
        id: 4,
        image: picture_4,
        title: 'Beyond the Runway: Unveiling the World of Fashion Design',
        content: `
            <hr class="mt-10 border border-black xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10" />

            <div class="xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10 flex">
                <img src="${profile}" alt="Blogger's picture" class="mt-10 w-10 mb-4" />
                <div class="mt-10 ml-5">
                    <p class="text-sm font-sans font-normal">Oluyomi</p>
                    <p class="text-sm font-sans font-normal -mr-10">Apr 15, 2024 · 4 min read</p>
                </div>

                <div class="hidden xs:flex xl:ml-96 xl:pl-96 lg:ml-96 md:ml-64 sm:ml-52 portable:ml-40 xs:ml-16 mt-10">
                    <a href="#"><img src="${blog_fb_acct}" alt="Blogger's Facebook page" class="w-16 h-12 border px-4 py-2" /></a>
                    <a href="#"><img src="${blog_twitter_acct}" alt="Blogger's Twitter page" class="w-16 h-12 border px-4 py-2" /></a>
                </div>
            </div>

            <div class="xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10">
                <p class="mt-10 font-sans font-normal text-xl leading-10">"Beyond the Runway" takes us past the glitz and glamour of fashion shows, venturing into the heart of the creative process. 
                Here, we'll delve deeper into the world of fashion design, exploring everything from the initial spark of inspiration to the 
                intricate details that bring a garment to life.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Get to Know the Designer:</h2>

                <p class="font-sans font-normal text-xl leading-10">Each month, we'll shine a spotlight on a different designer, established or 
                up-and-coming. We'll chat with them about their design philosophy, the stories behind their collections, and the challenges and 
                triumphs they face.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Beyond the Sketches:</h2>

                <p class="font-sans font-normal text-xl leading-10">Fashion design is more than just beautiful drawings. We'll explore the technical aspects of garment construction, from fabric 
                selection and pattern making to draping techniques and tailoring secrets.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Sustainable Style:</h2>

                <p class="font-sans font-normal text-xl leading-10">The fashion industry grapples with its environmental impact. Here, we'll discuss sustainable practices that designers are 
                incorporating, explore eco-friendly materials, and showcase designers who are revolutionizing the concept of responsible fashion.</p>
            </div>

            <div class="xl:mx-60 lg:mx-20 md:mx-10"><img src="${picture_four}" alt="Fashion Design" class="mt-10  mb-4" /></div>
            
            <div class="xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10">
                <h2 class="mt-10 font-sans font-extrabold text-xl">From Inspiration to Reality:</h2>

                <p class="font-sans font-normal text-xl leading-10">The journey from a designer's mind to a finished piece is fascinating. We'll delve into the design process, following a 
                garment's creation from the initial inspiration to the final touches.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Join the Conversation:</h2>

                <p class="font-sans font-normal text-xl leading-10">This blog isn't just a one-way street. We want to hear from you! Share your thoughts on current trends, 
                designers you love, and what you'd like to see more of in the fashion world.</p>

                <p class="mt-10 font-sans font-normal text-xl leading-10">Whether you're a fashion enthusiast, an aspiring designer, or simply curious about the magic behind the clothes we wear, "Beyond the Runway" is your invitation 
                to explore the world of fashion design in all its depth and creativity. So, buckle up, fashion lovers, and get ready to go on a journey that goes far beyond the runway!</p>
            </div>
            
            <div class="flex mt-16 justify-center items-center">
                <div class="flex border lg:px-20 px-10">
                    <a href="#"><img src="${blog_fb_acct}" alt="Blogger's Facebook page" class="w-16 h-12 px-4 py-2" /></a>
                    <p class="hidden sm:flex font-sans font-medium lg:text-lg mt-3">Share on Facebook</p>
                </div>
                <div class="flex border lg:px-20 px-10">
                    <a href="#"><img src="${blog_twitter_acct}" alt="Blogger's Twitter page" class="w-16 h-12 px-4 py-2" /></a>
                    <p class="hidden sm:flex font-sans font-medium lg:text-lg mt-3">Share on Twitter</p>
                </div>
            </div>

            <p class="text-center mt-10 font-sans font-semibold lg:text-lg">Tags: <a href="#" class="underline">product design</a>, <a href="#" class="underline">culture</a></p>

            <div class="xl:mx-96 flex justify-center items-start">
                <img src="${profile}" alt="Blogger's picture" class="mt-14 w-16 mb-4" />
                <div class="mt-10 ml-5">
                    <p class="text-sm font-sans font-normal leading-8">Oluyomiz is a Design Founder & Advisor, Berlin School of Creative</p>
                    <p class="text-sm font-sans font-normal leading-8">Leadership Executive MBA participant, Zippie advisor, Wolt </p>
                    <p class="text-sm font-sans font-normal leading-8">Founder, Style Stitches</p>
                </div>
            </div>

            <hr class="mt-24 border border-black" />
            <div class="flex justify-center items-center -mt-7"><img src="${reader}" alt="Reader's eye" class=" w-20" /></div>
        ` },

    {
        id: 5,
        image: picture_5,
        title: 'Beyond the Runway: Unveiling the World of Fashion Design',
        content: `
            <hr class="mt-10 border border-black xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10" />

            <div class="xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10 flex">
                <img src="${profile}" alt="Blogger's picture" class="mt-10 w-10 mb-4" />
                <div class="mt-10 ml-5">
                    <p class="text-sm font-sans font-normal">Oluyomi</p>
                    <p class="text-sm font-sans font-normal -mr-10">Apr 15, 2024 · 4 min read</p>
                </div>

                <div class="hidden xs:flex xl:ml-96 xl:pl-96 lg:ml-96 md:ml-64 sm:ml-52 portable:ml-40 xs:ml-16 mt-10">
                    <a href="#"><img src="${blog_fb_acct}" alt="Blogger's Facebook page" class="w-16 h-12 border px-4 py-2" /></a>
                    <a href="#"><img src="${blog_twitter_acct}" alt="Blogger's Twitter page" class="w-16 h-12 border px-4 py-2" /></a>
                </div>
            </div>

            <div class="xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10">
                <p class="mt-10 font-sans font-normal text-xl leading-10">"Beyond the Runway" takes us past the glitz and glamour of fashion shows, venturing into the heart of the creative process. 
                Here, we'll delve deeper into the world of fashion design, exploring everything from the initial spark of inspiration to the 
                intricate details that bring a garment to life.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Get to Know the Designer:</h2>

                <p class="font-sans font-normal text-xl leading-10">Each month, we'll shine a spotlight on a different designer, established or 
                up-and-coming. We'll chat with them about their design philosophy, the stories behind their collections, and the challenges and 
                triumphs they face.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Beyond the Sketches:</h2>

                <p class="font-sans font-normal text-xl leading-10">Fashion design is more than just beautiful drawings. We'll explore the technical aspects of garment construction, from fabric 
                selection and pattern making to draping techniques and tailoring secrets.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Sustainable Style:</h2>

                <p class="font-sans font-normal text-xl leading-10">The fashion industry grapples with its environmental impact. Here, we'll discuss sustainable practices that designers are 
                incorporating, explore eco-friendly materials, and showcase designers who are revolutionizing the concept of responsible fashion.</p>
            </div>

            <div class="xl:mx-60 lg:mx-20 md:mx-10"><img src="${picture_four}" alt="Fashion Design" class="mt-10  mb-4" /></div>
            
            <div class="xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10">
                <h2 class="mt-10 font-sans font-extrabold text-xl">From Inspiration to Reality:</h2>

                <p class="font-sans font-normal text-xl leading-10">The journey from a designer's mind to a finished piece is fascinating. We'll delve into the design process, following a 
                garment's creation from the initial inspiration to the final touches.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Join the Conversation:</h2>

                <p class="font-sans font-normal text-xl leading-10">This blog isn't just a one-way street. We want to hear from you! Share your thoughts on current trends, 
                designers you love, and what you'd like to see more of in the fashion world.</p>

                <p class="mt-10 font-sans font-normal text-xl leading-10">Whether you're a fashion enthusiast, an aspiring designer, or simply curious about the magic behind the clothes we wear, "Beyond the Runway" is your invitation 
                to explore the world of fashion design in all its depth and creativity. So, buckle up, fashion lovers, and get ready to go on a journey that goes far beyond the runway!</p>
            </div>
            
            <div class="flex mt-16 justify-center items-center">
                <div class="flex border lg:px-20 px-10">
                    <a href="#"><img src="${blog_fb_acct}" alt="Blogger's Facebook page" class="w-16 h-12 px-4 py-2" /></a>
                    <p class="hidden sm:flex font-sans font-medium lg:text-lg mt-3">Share on Facebook</p>
                </div>
                <div class="flex border lg:px-20 px-10">
                    <a href="#"><img src="${blog_twitter_acct}" alt="Blogger's Twitter page" class="w-16 h-12 px-4 py-2" /></a>
                    <p class="hidden sm:flex font-sans font-medium lg:text-lg mt-3">Share on Twitter</p>
                </div>
            </div>

            <p class="text-center mt-10 font-sans font-semibold lg:text-lg">Tags: <a href="#" class="underline">product design</a>, <a href="#" class="underline">culture</a></p>

            <div class="xl:mx-96 flex justify-center items-start">
                <img src="${profile}" alt="Blogger's picture" class="mt-14 w-16 mb-4" />
                <div class="mt-10 ml-5">
                    <p class="text-sm font-sans font-normal leading-8">Oluyomiz is a Design Founder & Advisor, Berlin School of Creative</p>
                    <p class="text-sm font-sans font-normal leading-8">Leadership Executive MBA participant, Zippie advisor, Wolt </p>
                    <p class="text-sm font-sans font-normal leading-8">Founder, Style Stitches</p>
                </div>
            </div>

            <hr class="mt-24 border border-black" />
            <div class="flex justify-center items-center -mt-7"><img src="${reader}" alt="Reader's eye" class=" w-20" /></div>
        `
    },

    {
        id: 6,
        image: picture_6,
        title: 'Beyond the Runway: Unveiling the World of Fashion Design',
        content: `
            <hr class="mt-10 border border-black xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10" />

            <div class="xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10 flex">
                <img src="${profile}" alt="Blogger's picture" class="mt-10 w-10 mb-4" />
                <div class="mt-10 ml-5">
                    <p class="text-sm font-sans font-normal">Oluyomi</p>
                    <p class="text-sm font-sans font-normal -mr-10">Apr 15, 2024 · 4 min read</p>
                </div>

                <div class="hidden xs:flex xl:ml-96 xl:pl-96 lg:ml-96 md:ml-64 sm:ml-52 portable:ml-40 xs:ml-16 mt-10">
                    <a href="#"><img src="${blog_fb_acct}" alt="Blogger's Facebook page" class="w-16 h-12 border px-4 py-2" /></a>
                    <a href="#"><img src="${blog_twitter_acct}" alt="Blogger's Twitter page" class="w-16 h-12 border px-4 py-2" /></a>
                </div>
            </div>

            <div class="xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10">
                <p class="mt-10 font-sans font-normal text-xl leading-10">"Beyond the Runway" takes us past the glitz and glamour of fashion shows, venturing into the heart of the creative process. 
                Here, we'll delve deeper into the world of fashion design, exploring everything from the initial spark of inspiration to the 
                intricate details that bring a garment to life.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Get to Know the Designer:</h2>

                <p class="font-sans font-normal text-xl leading-10">Each month, we'll shine a spotlight on a different designer, established or 
                up-and-coming. We'll chat with them about their design philosophy, the stories behind their collections, and the challenges and 
                triumphs they face.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Beyond the Sketches:</h2>

                <p class="font-sans font-normal text-xl leading-10">Fashion design is more than just beautiful drawings. We'll explore the technical aspects of garment construction, from fabric 
                selection and pattern making to draping techniques and tailoring secrets.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Sustainable Style:</h2>

                <p class="font-sans font-normal text-xl leading-10">The fashion industry grapples with its environmental impact. Here, we'll discuss sustainable practices that designers are 
                incorporating, explore eco-friendly materials, and showcase designers who are revolutionizing the concept of responsible fashion.</p>
            </div>

            <div class="xl:mx-60 lg:mx-20 md:mx-10"><img src="${picture_four}" alt="Fashion Design" class="mt-10  mb-4" /></div>
            
            <div class="xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10">
                <h2 class="mt-10 font-sans font-extrabold text-xl">From Inspiration to Reality:</h2>

                <p class="font-sans font-normal text-xl leading-10">The journey from a designer's mind to a finished piece is fascinating. We'll delve into the design process, following a 
                garment's creation from the initial inspiration to the final touches.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Join the Conversation:</h2>

                <p class="font-sans font-normal text-xl leading-10">This blog isn't just a one-way street. We want to hear from you! Share your thoughts on current trends, 
                designers you love, and what you'd like to see more of in the fashion world.</p>

                <p class="mt-10 font-sans font-normal text-xl leading-10">Whether you're a fashion enthusiast, an aspiring designer, or simply curious about the magic behind the clothes we wear, "Beyond the Runway" is your invitation 
                to explore the world of fashion design in all its depth and creativity. So, buckle up, fashion lovers, and get ready to go on a journey that goes far beyond the runway!</p>
            </div>
            
            <div class="flex mt-16 justify-center items-center">
                <div class="flex border lg:px-20 px-10">
                    <a href="#"><img src="${blog_fb_acct}" alt="Blogger's Facebook page" class="w-16 h-12 px-4 py-2" /></a>
                    <p class="hidden sm:flex font-sans font-medium lg:text-lg mt-3">Share on Facebook</p>
                </div>
                <div class="flex border lg:px-20 px-10">
                    <a href="#"><img src="${blog_twitter_acct}" alt="Blogger's Twitter page" class="w-16 h-12 px-4 py-2" /></a>
                    <p class="hidden sm:flex font-sans font-medium lg:text-lg mt-3">Share on Twitter</p>
                </div>
            </div>

            <p class="text-center mt-10 font-sans font-semibold lg:text-lg">Tags: <a href="#" class="underline">product design</a>, <a href="#" class="underline">culture</a></p>

            <div class="xl:mx-96 flex justify-center items-start">
                <img src="${profile}" alt="Blogger's picture" class="mt-14 w-16 mb-4" />
                <div class="mt-10 ml-5">
                    <p class="text-sm font-sans font-normal leading-8">Oluyomiz is a Design Founder & Advisor, Berlin School of Creative</p>
                    <p class="text-sm font-sans font-normal leading-8">Leadership Executive MBA participant, Zippie advisor, Wolt </p>
                    <p class="text-sm font-sans font-normal leading-8">Founder, Style Stitches</p>
                </div>
            </div>

            <hr class="mt-24 border border-black" />
            <div class="flex justify-center items-center -mt-7"><img src="${reader}" alt="Reader's eye" class=" w-20" /></div>
        `
    },

    {
        id: 7,
        image: picture_7,
        title: 'Beyond the Runway: Unveiling the World of Fashion Design',
        content: `
            <hr class="mt-10 border border-black xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10" />

            <div class="xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10 flex">
                <img src="${profile}" alt="Blogger's picture" class="mt-10 w-10 mb-4" />
                <div class="mt-10 ml-5">
                    <p class="text-sm font-sans font-normal">Oluyomi</p>
                    <p class="text-sm font-sans font-normal -mr-10">Apr 15, 2024 · 4 min read</p>
                </div>

                <div class="hidden xs:flex xl:ml-96 xl:pl-96 lg:ml-96 md:ml-64 sm:ml-52 portable:ml-40 xs:ml-16 mt-10">
                    <a href="#"><img src="${blog_fb_acct}" alt="Blogger's Facebook page" class="w-16 h-12 border px-4 py-2" /></a>
                    <a href="#"><img src="${blog_twitter_acct}" alt="Blogger's Twitter page" class="w-16 h-12 border px-4 py-2" /></a>
                </div>
            </div>

            <div class="xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10">
                <p class="mt-10 font-sans font-normal text-xl leading-10">"Beyond the Runway" takes us past the glitz and glamour of fashion shows, venturing into the heart of the creative process. 
                Here, we'll delve deeper into the world of fashion design, exploring everything from the initial spark of inspiration to the 
                intricate details that bring a garment to life.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Get to Know the Designer:</h2>

                <p class="font-sans font-normal text-xl leading-10">Each month, we'll shine a spotlight on a different designer, established or 
                up-and-coming. We'll chat with them about their design philosophy, the stories behind their collections, and the challenges and 
                triumphs they face.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Beyond the Sketches:</h2>

                <p class="font-sans font-normal text-xl leading-10">Fashion design is more than just beautiful drawings. We'll explore the technical aspects of garment construction, from fabric 
                selection and pattern making to draping techniques and tailoring secrets.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Sustainable Style:</h2>

                <p class="font-sans font-normal text-xl leading-10">The fashion industry grapples with its environmental impact. Here, we'll discuss sustainable practices that designers are 
                incorporating, explore eco-friendly materials, and showcase designers who are revolutionizing the concept of responsible fashion.</p>
            </div>

            <div class="xl:mx-60 lg:mx-20 md:mx-10"><img src="${picture_four}" alt="Fashion Design" class="mt-10  mb-4" /></div>
            
            <div class="xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10">
                <h2 class="mt-10 font-sans font-extrabold text-xl">From Inspiration to Reality:</h2>

                <p class="font-sans font-normal text-xl leading-10">The journey from a designer's mind to a finished piece is fascinating. We'll delve into the design process, following a 
                garment's creation from the initial inspiration to the final touches.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Join the Conversation:</h2>

                <p class="font-sans font-normal text-xl leading-10">This blog isn't just a one-way street. We want to hear from you! Share your thoughts on current trends, 
                designers you love, and what you'd like to see more of in the fashion world.</p>

                <p class="mt-10 font-sans font-normal text-xl leading-10">Whether you're a fashion enthusiast, an aspiring designer, or simply curious about the magic behind the clothes we wear, "Beyond the Runway" is your invitation 
                to explore the world of fashion design in all its depth and creativity. So, buckle up, fashion lovers, and get ready to go on a journey that goes far beyond the runway!</p>
            </div>
            
            <div class="flex mt-16 justify-center items-center">
                <div class="flex border lg:px-20 px-10">
                    <a href="#"><img src="${blog_fb_acct}" alt="Blogger's Facebook page" class="w-16 h-12 px-4 py-2" /></a>
                    <p class="hidden sm:flex font-sans font-medium lg:text-lg mt-3">Share on Facebook</p>
                </div>
                <div class="flex border lg:px-20 px-10">
                    <a href="#"><img src="${blog_twitter_acct}" alt="Blogger's Twitter page" class="w-16 h-12 px-4 py-2" /></a>
                    <p class="hidden sm:flex font-sans font-medium lg:text-lg mt-3">Share on Twitter</p>
                </div>
            </div>

            <p class="text-center mt-10 font-sans font-semibold lg:text-lg">Tags: <a href="#" class="underline">product design</a>, <a href="#" class="underline">culture</a></p>

            <div class="xl:mx-96 flex justify-center items-start">
                <img src="${profile}" alt="Blogger's picture" class="mt-14 w-16 mb-4" />
                <div class="mt-10 ml-5">
                    <p class="text-sm font-sans font-normal leading-8">Oluyomiz is a Design Founder & Advisor, Berlin School of Creative</p>
                    <p class="text-sm font-sans font-normal leading-8">Leadership Executive MBA participant, Zippie advisor, Wolt </p>
                    <p class="text-sm font-sans font-normal leading-8">Founder, Style Stitches</p>
                </div>
            </div>

            <hr class="mt-24 border border-black" />
            <div class="flex justify-center items-center -mt-7"><img src="${reader}" alt="Reader's eye" class=" w-20" /></div>
        `
    },

    {
        id: 8,
        image: picture_8,
        title: 'Beyond the Runway: Unveiling the World of Fashion Design',
        content: `
            <hr class="mt-10 border border-black xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10" />

            <div class="xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10 flex">
                <img src="${profile}" alt="Blogger's picture" class="mt-10 w-10 mb-4" />
                <div class="mt-10 ml-5">
                    <p class="text-sm font-sans font-normal">Oluyomi</p>
                    <p class="text-sm font-sans font-normal -mr-10">Apr 15, 2024 · 4 min read</p>
                </div>

                <div class="hidden xs:flex xl:ml-96 xl:pl-96 lg:ml-96 md:ml-64 sm:ml-52 portable:ml-40 xs:ml-16 mt-10">
                    <a href="#"><img src="${blog_fb_acct}" alt="Blogger's Facebook page" class="w-16 h-12 border px-4 py-2" /></a>
                    <a href="#"><img src="${blog_twitter_acct}" alt="Blogger's Twitter page" class="w-16 h-12 border px-4 py-2" /></a>
                </div>
            </div>

            <div class="xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10">
                <p class="mt-10 font-sans font-normal text-xl leading-10">"Beyond the Runway" takes us past the glitz and glamour of fashion shows, venturing into the heart of the creative process. 
                Here, we'll delve deeper into the world of fashion design, exploring everything from the initial spark of inspiration to the 
                intricate details that bring a garment to life.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Get to Know the Designer:</h2>

                <p class="font-sans font-normal text-xl leading-10">Each month, we'll shine a spotlight on a different designer, established or 
                up-and-coming. We'll chat with them about their design philosophy, the stories behind their collections, and the challenges and 
                triumphs they face.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Beyond the Sketches:</h2>

                <p class="font-sans font-normal text-xl leading-10">Fashion design is more than just beautiful drawings. We'll explore the technical aspects of garment construction, from fabric 
                selection and pattern making to draping techniques and tailoring secrets.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Sustainable Style:</h2>

                <p class="font-sans font-normal text-xl leading-10">The fashion industry grapples with its environmental impact. Here, we'll discuss sustainable practices that designers are 
                incorporating, explore eco-friendly materials, and showcase designers who are revolutionizing the concept of responsible fashion.</p>
            </div>

            <div class="xl:mx-60 lg:mx-20 md:mx-10"><img src="${picture_four}" alt="Fashion Design" class="mt-10  mb-4" /></div>
            
            <div class="xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10">
                <h2 class="mt-10 font-sans font-extrabold text-xl">From Inspiration to Reality:</h2>

                <p class="font-sans font-normal text-xl leading-10">The journey from a designer's mind to a finished piece is fascinating. We'll delve into the design process, following a 
                garment's creation from the initial inspiration to the final touches.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Join the Conversation:</h2>

                <p class="font-sans font-normal text-xl leading-10">This blog isn't just a one-way street. We want to hear from you! Share your thoughts on current trends, 
                designers you love, and what you'd like to see more of in the fashion world.</p>

                <p class="mt-10 font-sans font-normal text-xl leading-10">Whether you're a fashion enthusiast, an aspiring designer, or simply curious about the magic behind the clothes we wear, "Beyond the Runway" is your invitation 
                to explore the world of fashion design in all its depth and creativity. So, buckle up, fashion lovers, and get ready to go on a journey that goes far beyond the runway!</p>
            </div>
            
            <div class="flex mt-16 justify-center items-center">
                <div class="flex border lg:px-20 px-10">
                    <a href="#"><img src="${blog_fb_acct}" alt="Blogger's Facebook page" class="w-16 h-12 px-4 py-2" /></a>
                    <p class="hidden sm:flex font-sans font-medium lg:text-lg mt-3">Share on Facebook</p>
                </div>
                <div class="flex border lg:px-20 px-10">
                    <a href="#"><img src="${blog_twitter_acct}" alt="Blogger's Twitter page" class="w-16 h-12 px-4 py-2" /></a>
                    <p class="hidden sm:flex font-sans font-medium lg:text-lg mt-3">Share on Twitter</p>
                </div>
            </div>

            <p class="text-center mt-10 font-sans font-semibold lg:text-lg">Tags: <a href="#" class="underline">product design</a>, <a href="#" class="underline">culture</a></p>

            <div class="xl:mx-96 flex justify-center items-start">
                <img src="${profile}" alt="Blogger's picture" class="mt-14 w-16 mb-4" />
                <div class="mt-10 ml-5">
                    <p class="text-sm font-sans font-normal leading-8">Oluyomiz is a Design Founder & Advisor, Berlin School of Creative</p>
                    <p class="text-sm font-sans font-normal leading-8">Leadership Executive MBA participant, Zippie advisor, Wolt </p>
                    <p class="text-sm font-sans font-normal leading-8">Founder, Style Stitches</p>
                </div>
            </div>

            <hr class="mt-24 border border-black" />
            <div class="flex justify-center items-center -mt-7"><img src="${reader}" alt="Reader's eye" class=" w-20" /></div>
        `
    },

    {
        id: 9,
        image: picture_9,
        title: 'Beyond the Runway: Unveiling the World of Fashion Design',
        content: `
            <hr class="mt-10 border border-black xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10" />

            <div class="xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10 flex">
                <img src="${profile}" alt="Blogger's picture" class="mt-10 w-10 mb-4" />
                <div class="mt-10 ml-5">
                    <p class="text-sm font-sans font-normal">Oluyomi</p>
                    <p class="text-sm font-sans font-normal -mr-10">Apr 15, 2024 · 4 min read</p>
                </div>

                <div class="hidden xs:flex xl:ml-96 xl:pl-96 lg:ml-96 md:ml-64 sm:ml-52 portable:ml-40 xs:ml-16 mt-10">
                    <a href="#"><img src="${blog_fb_acct}" alt="Blogger's Facebook page" class="w-16 h-12 border px-4 py-2" /></a>
                    <a href="#"><img src="${blog_twitter_acct}" alt="Blogger's Twitter page" class="w-16 h-12 border px-4 py-2" /></a>
                </div>
            </div>

            <div class="xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10">
                <p class="mt-10 font-sans font-normal text-xl leading-10">"Beyond the Runway" takes us past the glitz and glamour of fashion shows, venturing into the heart of the creative process. 
                Here, we'll delve deeper into the world of fashion design, exploring everything from the initial spark of inspiration to the 
                intricate details that bring a garment to life.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Get to Know the Designer:</h2>

                <p class="font-sans font-normal text-xl leading-10">Each month, we'll shine a spotlight on a different designer, established or 
                up-and-coming. We'll chat with them about their design philosophy, the stories behind their collections, and the challenges and 
                triumphs they face.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Beyond the Sketches:</h2>

                <p class="font-sans font-normal text-xl leading-10">Fashion design is more than just beautiful drawings. We'll explore the technical aspects of garment construction, from fabric 
                selection and pattern making to draping techniques and tailoring secrets.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Sustainable Style:</h2>

                <p class="font-sans font-normal text-xl leading-10">The fashion industry grapples with its environmental impact. Here, we'll discuss sustainable practices that designers are 
                incorporating, explore eco-friendly materials, and showcase designers who are revolutionizing the concept of responsible fashion.</p>
            </div>

            <div class="xl:mx-60 lg:mx-20 md:mx-10"><img src="${picture_four}" alt="Fashion Design" class="mt-10  mb-4" /></div>
            
            <div class="xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10">
                <h2 class="mt-10 font-sans font-extrabold text-xl">From Inspiration to Reality:</h2>

                <p class="font-sans font-normal text-xl leading-10">The journey from a designer's mind to a finished piece is fascinating. We'll delve into the design process, following a 
                garment's creation from the initial inspiration to the final touches.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Join the Conversation:</h2>

                <p class="font-sans font-normal text-xl leading-10">This blog isn't just a one-way street. We want to hear from you! Share your thoughts on current trends, 
                designers you love, and what you'd like to see more of in the fashion world.</p>

                <p class="mt-10 font-sans font-normal text-xl leading-10">Whether you're a fashion enthusiast, an aspiring designer, or simply curious about the magic behind the clothes we wear, "Beyond the Runway" is your invitation 
                to explore the world of fashion design in all its depth and creativity. So, buckle up, fashion lovers, and get ready to go on a journey that goes far beyond the runway!</p>
            </div>
            
            <div class="flex mt-16 justify-center items-center">
                <div class="flex border lg:px-20 px-10">
                    <a href="#"><img src="${blog_fb_acct}" alt="Blogger's Facebook page" class="w-16 h-12 px-4 py-2" /></a>
                    <p class="hidden sm:flex font-sans font-medium lg:text-lg mt-3">Share on Facebook</p>
                </div>
                <div class="flex border lg:px-20 px-10">
                    <a href="#"><img src="${blog_twitter_acct}" alt="Blogger's Twitter page" class="w-16 h-12 px-4 py-2" /></a>
                    <p class="hidden sm:flex font-sans font-medium lg:text-lg mt-3">Share on Twitter</p>
                </div>
            </div>

            <p class="text-center mt-10 font-sans font-semibold lg:text-lg">Tags: <a href="#" class="underline">product design</a>, <a href="#" class="underline">culture</a></p>

            <div class="xl:mx-96 flex justify-center items-start">
                <img src="${profile}" alt="Blogger's picture" class="mt-14 w-16 mb-4" />
                <div class="mt-10 ml-5">
                    <p class="text-sm font-sans font-normal leading-8">Oluyomiz is a Design Founder & Advisor, Berlin School of Creative</p>
                    <p class="text-sm font-sans font-normal leading-8">Leadership Executive MBA participant, Zippie advisor, Wolt </p>
                    <p class="text-sm font-sans font-normal leading-8">Founder, Style Stitches</p>
                </div>
            </div>

            <hr class="mt-24 border border-black" />
            <div class="flex justify-center items-center -mt-7"><img src="${reader}" alt="Reader's eye" class=" w-20" /></div>
        `
    },

    {
        id: 10,
        image: picture_one,
        title: 'Beyond the Runway: Unveiling the World of Fashion Design',
        content: `
            <hr class="mt-10 border border-black xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10" />

            <div class="xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10 flex">
                <img src="${profile}" alt="Blogger's picture" class="mt-10 w-10 mb-4" />
                <div class="mt-10 ml-5">
                    <p class="text-sm font-sans font-normal">Oluyomi</p>
                    <p class="text-sm font-sans font-normal -mr-10">Apr 15, 2024 · 4 min read</p>
                </div>

                <div class="hidden xs:flex xl:ml-96 xl:pl-96 lg:ml-96 md:ml-64 sm:ml-52 portable:ml-40 xs:ml-16 mt-10">
                    <a href="#"><img src="${blog_fb_acct}" alt="Blogger's Facebook page" class="w-16 h-12 border px-4 py-2" /></a>
                    <a href="#"><img src="${blog_twitter_acct}" alt="Blogger's Twitter page" class="w-16 h-12 border px-4 py-2" /></a>
                </div>
            </div>

            <div class="xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10">
                <p class="mt-10 font-sans font-normal text-xl leading-10">"Beyond the Runway" takes us past the glitz and glamour of fashion shows, venturing into the heart of the creative process. 
                Here, we'll delve deeper into the world of fashion design, exploring everything from the initial spark of inspiration to the 
                intricate details that bring a garment to life.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Get to Know the Designer:</h2>

                <p class="font-sans font-normal text-xl leading-10">Each month, we'll shine a spotlight on a different designer, established or 
                up-and-coming. We'll chat with them about their design philosophy, the stories behind their collections, and the challenges and 
                triumphs they face.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Beyond the Sketches:</h2>

                <p class="font-sans font-normal text-xl leading-10">Fashion design is more than just beautiful drawings. We'll explore the technical aspects of garment construction, from fabric 
                selection and pattern making to draping techniques and tailoring secrets.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Sustainable Style:</h2>

                <p class="font-sans font-normal text-xl leading-10">The fashion industry grapples with its environmental impact. Here, we'll discuss sustainable practices that designers are 
                incorporating, explore eco-friendly materials, and showcase designers who are revolutionizing the concept of responsible fashion.</p>
            </div>

            <div class="xl:mx-60 lg:mx-20 md:mx-10"><img src="${picture_four}" alt="Fashion Design" class="mt-10  mb-4" /></div>
            
            <div class="xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10">
                <h2 class="mt-10 font-sans font-extrabold text-xl">From Inspiration to Reality:</h2>

                <p class="font-sans font-normal text-xl leading-10">The journey from a designer's mind to a finished piece is fascinating. We'll delve into the design process, following a 
                garment's creation from the initial inspiration to the final touches.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Join the Conversation:</h2>

                <p class="font-sans font-normal text-xl leading-10">This blog isn't just a one-way street. We want to hear from you! Share your thoughts on current trends, 
                designers you love, and what you'd like to see more of in the fashion world.</p>

                <p class="mt-10 font-sans font-normal text-xl leading-10">Whether you're a fashion enthusiast, an aspiring designer, or simply curious about the magic behind the clothes we wear, "Beyond the Runway" is your invitation 
                to explore the world of fashion design in all its depth and creativity. So, buckle up, fashion lovers, and get ready to go on a journey that goes far beyond the runway!</p>
            </div>
            
            <div class="flex mt-16 justify-center items-center">
                <div class="flex border lg:px-20 px-10">
                    <a href="#"><img src="${blog_fb_acct}" alt="Blogger's Facebook page" class="w-16 h-12 px-4 py-2" /></a>
                    <p class="hidden sm:flex font-sans font-medium lg:text-lg mt-3">Share on Facebook</p>
                </div>
                <div class="flex border lg:px-20 px-10">
                    <a href="#"><img src="${blog_twitter_acct}" alt="Blogger's Twitter page" class="w-16 h-12 px-4 py-2" /></a>
                    <p class="hidden sm:flex font-sans font-medium lg:text-lg mt-3">Share on Twitter</p>
                </div>
            </div>

            <p class="text-center mt-10 font-sans font-semibold lg:text-lg">Tags: <a href="#" class="underline">product design</a>, <a href="#" class="underline">culture</a></p>

            <div class="xl:mx-96 flex justify-center items-start">
                <img src="${profile}" alt="Blogger's picture" class="mt-14 w-16 mb-4" />
                <div class="mt-10 ml-5">
                    <p class="text-sm font-sans font-normal leading-8">Oluyomiz is a Design Founder & Advisor, Berlin School of Creative</p>
                    <p class="text-sm font-sans font-normal leading-8">Leadership Executive MBA participant, Zippie advisor, Wolt </p>
                    <p class="text-sm font-sans font-normal leading-8">Founder, Style Stitches</p>
                </div>
            </div>

            <hr class="mt-24 border border-black" />
            <div class="flex justify-center items-center -mt-7"><img src="${reader}" alt="Reader's eye" class=" w-20" /></div>
        `
    },

    {
        id: 11,
        image: picture_two,
        title: 'Beyond the Runway: Unveiling the World of Fashion Design',
        content: `
            <hr class="mt-10 border border-black xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10" />

            <div class="xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10 flex">
                <img src="${profile}" alt="Blogger's picture" class="mt-10 w-10 mb-4" />
                <div class="mt-10 ml-5">
                    <p class="text-sm font-sans font-normal">Oluyomi</p>
                    <p class="text-sm font-sans font-normal -mr-10">Apr 15, 2024 · 4 min read</p>
                </div>

                <div class="hidden xs:flex xl:ml-96 xl:pl-96 lg:ml-96 md:ml-64 sm:ml-52 portable:ml-40 xs:ml-16 mt-10">
                    <a href="#"><img src="${blog_fb_acct}" alt="Blogger's Facebook page" class="w-16 h-12 border px-4 py-2" /></a>
                    <a href="#"><img src="${blog_twitter_acct}" alt="Blogger's Twitter page" class="w-16 h-12 border px-4 py-2" /></a>
                </div>
            </div>

            <div class="xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10">
                <p class="mt-10 font-sans font-normal text-xl leading-10">"Beyond the Runway" takes us past the glitz and glamour of fashion shows, venturing into the heart of the creative process. 
                Here, we'll delve deeper into the world of fashion design, exploring everything from the initial spark of inspiration to the 
                intricate details that bring a garment to life.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Get to Know the Designer:</h2>

                <p class="font-sans font-normal text-xl leading-10">Each month, we'll shine a spotlight on a different designer, established or 
                up-and-coming. We'll chat with them about their design philosophy, the stories behind their collections, and the challenges and 
                triumphs they face.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Beyond the Sketches:</h2>

                <p class="font-sans font-normal text-xl leading-10">Fashion design is more than just beautiful drawings. We'll explore the technical aspects of garment construction, from fabric 
                selection and pattern making to draping techniques and tailoring secrets.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Sustainable Style:</h2>

                <p class="font-sans font-normal text-xl leading-10">The fashion industry grapples with its environmental impact. Here, we'll discuss sustainable practices that designers are 
                incorporating, explore eco-friendly materials, and showcase designers who are revolutionizing the concept of responsible fashion.</p>
            </div>

            <div class="xl:mx-60 lg:mx-20 md:mx-10"><img src="${picture_four}" alt="Fashion Design" class="mt-10  mb-4" /></div>
            
            <div class="xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10">
                <h2 class="mt-10 font-sans font-extrabold text-xl">From Inspiration to Reality:</h2>

                <p class="font-sans font-normal text-xl leading-10">The journey from a designer's mind to a finished piece is fascinating. We'll delve into the design process, following a 
                garment's creation from the initial inspiration to the final touches.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Join the Conversation:</h2>

                <p class="font-sans font-normal text-xl leading-10">This blog isn't just a one-way street. We want to hear from you! Share your thoughts on current trends, 
                designers you love, and what you'd like to see more of in the fashion world.</p>

                <p class="mt-10 font-sans font-normal text-xl leading-10">Whether you're a fashion enthusiast, an aspiring designer, or simply curious about the magic behind the clothes we wear, "Beyond the Runway" is your invitation 
                to explore the world of fashion design in all its depth and creativity. So, buckle up, fashion lovers, and get ready to go on a journey that goes far beyond the runway!</p>
            </div>
            
            <div class="flex mt-16 justify-center items-center">
                <div class="flex border lg:px-20 px-10">
                    <a href="#"><img src="${blog_fb_acct}" alt="Blogger's Facebook page" class="w-16 h-12 px-4 py-2" /></a>
                    <p class="hidden sm:flex font-sans font-medium lg:text-lg mt-3">Share on Facebook</p>
                </div>
                <div class="flex border lg:px-20 px-10">
                    <a href="#"><img src="${blog_twitter_acct}" alt="Blogger's Twitter page" class="w-16 h-12 px-4 py-2" /></a>
                    <p class="hidden sm:flex font-sans font-medium lg:text-lg mt-3">Share on Twitter</p>
                </div>
            </div>

            <p class="text-center mt-10 font-sans font-semibold lg:text-lg">Tags: <a href="#" class="underline">product design</a>, <a href="#" class="underline">culture</a></p>

            <div class="xl:mx-96 flex justify-center items-start">
                <img src="${profile}" alt="Blogger's picture" class="mt-14 w-16 mb-4" />
                <div class="mt-10 ml-5">
                    <p class="text-sm font-sans font-normal leading-8">Oluyomiz is a Design Founder & Advisor, Berlin School of Creative</p>
                    <p class="text-sm font-sans font-normal leading-8">Leadership Executive MBA participant, Zippie advisor, Wolt </p>
                    <p class="text-sm font-sans font-normal leading-8">Founder, Style Stitches</p>
                </div>
            </div>

            <hr class="mt-24 border border-black" />
            <div class="flex justify-center items-center -mt-7"><img src="${reader}" alt="Reader's eye" class=" w-20" /></div>
        `
    },

    {
        id: 12,
        image: picture_three,
        title: 'Beyond the Runway: Unveiling the World of Fashion Design',
        content: `
            <hr class="mt-10 border border-black xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10" />

            <div class="xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10 flex">
                <img src="${profile}" alt="Blogger's picture" class="mt-10 w-10 mb-4" />
                <div class="mt-10 ml-5">
                    <p class="text-sm font-sans font-normal">Oluyomi</p>
                    <p class="text-sm font-sans font-normal -mr-10">Apr 15, 2024 · 4 min read</p>
                </div>

                <div class="hidden xs:flex xl:ml-96 xl:pl-96 lg:ml-96 md:ml-64 sm:ml-52 portable:ml-40 xs:ml-16 mt-10">
                    <a href="#"><img src="${blog_fb_acct}" alt="Blogger's Facebook page" class="w-16 h-12 border px-4 py-2" /></a>
                    <a href="#"><img src="${blog_twitter_acct}" alt="Blogger's Twitter page" class="w-16 h-12 border px-4 py-2" /></a>
                </div>
            </div>

            <div class="xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10">
                <p class="mt-10 font-sans font-normal text-xl leading-10">"Beyond the Runway" takes us past the glitz and glamour of fashion shows, venturing into the heart of the creative process. 
                Here, we'll delve deeper into the world of fashion design, exploring everything from the initial spark of inspiration to the 
                intricate details that bring a garment to life.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Get to Know the Designer:</h2>

                <p class="font-sans font-normal text-xl leading-10">Each month, we'll shine a spotlight on a different designer, established or 
                up-and-coming. We'll chat with them about their design philosophy, the stories behind their collections, and the challenges and 
                triumphs they face.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Beyond the Sketches:</h2>

                <p class="font-sans font-normal text-xl leading-10">Fashion design is more than just beautiful drawings. We'll explore the technical aspects of garment construction, from fabric 
                selection and pattern making to draping techniques and tailoring secrets.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Sustainable Style:</h2>

                <p class="font-sans font-normal text-xl leading-10">The fashion industry grapples with its environmental impact. Here, we'll discuss sustainable practices that designers are 
                incorporating, explore eco-friendly materials, and showcase designers who are revolutionizing the concept of responsible fashion.</p>
            </div>

            <div class="xl:mx-60 lg:mx-20 md:mx-10"><img src="${picture_four}" alt="Fashion Design" class="mt-10  mb-4" /></div>
            
            <div class="xl:mx-96 lg:mx-40 md:mx-20 sm:mx-10">
                <h2 class="mt-10 font-sans font-extrabold text-xl">From Inspiration to Reality:</h2>

                <p class="font-sans font-normal text-xl leading-10">The journey from a designer's mind to a finished piece is fascinating. We'll delve into the design process, following a 
                garment's creation from the initial inspiration to the final touches.</p>

                <h2 class="mt-10 font-sans font-extrabold text-xl">Join the Conversation:</h2>

                <p class="font-sans font-normal text-xl leading-10">This blog isn't just a one-way street. We want to hear from you! Share your thoughts on current trends, 
                designers you love, and what you'd like to see more of in the fashion world.</p>

                <p class="mt-10 font-sans font-normal text-xl leading-10">Whether you're a fashion enthusiast, an aspiring designer, or simply curious about the magic behind the clothes we wear, "Beyond the Runway" is your invitation 
                to explore the world of fashion design in all its depth and creativity. So, buckle up, fashion lovers, and get ready to go on a journey that goes far beyond the runway!</p>
            </div>
            
            <div class="flex mt-16 justify-center items-center">
                <div class="flex border lg:px-20 px-10">
                    <a href="#"><img src="${blog_fb_acct}" alt="Blogger's Facebook page" class="w-16 h-12 px-4 py-2" /></a>
                    <p class="hidden sm:flex font-sans font-medium lg:text-lg mt-3">Share on Facebook</p>
                </div>
                <div class="flex border lg:px-20 px-10">
                    <a href="#"><img src="${blog_twitter_acct}" alt="Blogger's Twitter page" class="w-16 h-12 px-4 py-2" /></a>
                    <p class="hidden sm:flex font-sans font-medium lg:text-lg mt-3">Share on Twitter</p>
                </div>
            </div>

            <p class="text-center mt-10 font-sans font-semibold lg:text-lg">Tags: <a href="#" class="underline">product design</a>, <a href="#" class="underline">culture</a></p>

            <div class="xl:mx-96 flex justify-center items-start">
                <img src="${profile}" alt="Blogger's picture" class="mt-14 w-16 mb-4" />
                <div class="mt-10 ml-5">
                    <p class="text-sm font-sans font-normal leading-8">Oluyomiz is a Design Founder & Advisor, Berlin School of Creative</p>
                    <p class="text-sm font-sans font-normal leading-8">Leadership Executive MBA participant, Zippie advisor, Wolt </p>
                    <p class="text-sm font-sans font-normal leading-8">Founder, Style Stitches</p>
                </div>
            </div>

            <hr class="mt-24 border border-black" />
            <div class="flex justify-center items-center -mt-7"><img src="${reader}" alt="Reader's eye" class=" w-20" /></div>
        `
    },
];

const Article = () => {
    const { id } = useParams();
    const article = articles.find(article => article.id === parseInt(id));

    if (!article) {
        return <div>Article not found</div>;
    }

    return (
        <div className="">
            <Navbar />
            <div className="p-4">
                <h1 className="mt-20 font-sans xl:text-5xl lg:text-4xl md:text-3xl text-3xl font-extrabold text-center flex justify-center items-center xl:mx-96 xl:px-60 md:px-20 sm:px-20 mb-2">{article.title}</h1>
                <div className="first-paragraph font-sans mt-10 mb-20 flex justify-center items-center text-center font-normal text-xl md:px-0 px-10" dangerouslySetInnerHTML={{ __html: article.firstParagraph }} />
                <img src={article.image} alt={article.title} className="w-full h-full object-cover mb-4 shadow-md" />
                <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>
            <Next />
            <Newsletter />
        </div>
    );
};

export default Article;
