// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Articles from '../components/Articles';
import Next from '../components/Next';
import Footer from '../components/Footer';

const Blog = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Articles />
            <Next />
            <Footer />
        </div>
    );
};

export default Blog;