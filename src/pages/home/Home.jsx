import React from 'react'
import './Home.scss';

import Header from '../../components/header/Header'
import Banner from "../../components/banner/Banner"
import Works from "../../components/works/Works"
import Contact from '../../components/contact/Contact';


const Home = () => {
    return (
        <div className="home">
            <Header />
            <Banner />
            <Works />
            <Contact />
        </div>
    )
}

export default Home
