import React from 'react';
import Header from '../Shared/Header/Header';
import AboutUs from "../Home/AboutUs/AboutUs"
import Reviews from './Reviews/Reviews';
import HomeCollections from './HomeCollections/HomeCollections';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <AboutUs></AboutUs>
            <HomeCollections/>
            <Reviews></Reviews>
            
        </div>
    );
};

export default Home;