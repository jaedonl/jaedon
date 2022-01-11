import React from 'react'
import './Home.scss';
import Header from '../../components/header/Header'
import Works from "../../components/works/Works"
import Contact from '../../components/contact/Contact';
import About from '../../components/about/About';


const Home = () => {
    
    return (
        <div className="home">
            <Header />
            <About />
            <Works />            
            <Contact />
        </div>
    )
}

export default Home
