import React from 'react'
import './Home.scss';
import Banner from "../../components/banner/Banner"
import Works from "../../components/works/Works"
import About from "../../components/about/About"


const Home = () => {
    return (
        <div className="home-container">
            <Banner />
            <Works />
        </div>
    )
}

export default Home
