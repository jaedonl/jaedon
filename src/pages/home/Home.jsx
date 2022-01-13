import React from 'react'
import './Home.scss';
import Works from "../../components/works/Works"
import Contact from '../../components/contact/Contact';
import About from '../../components/about/About';


const Home = () => {
    
    return (
        <div className="home">
            <About />
            <Works />            
            <Contact />
        </div>
    )
}

export default Home
