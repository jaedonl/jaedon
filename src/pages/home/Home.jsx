import React from 'react'
import './Home.scss';
import Works from "../../components/works/Works"
import Contact from '../../components/contact/Contact';
import About from '../../components/about/About';
import { motion } from 'framer-motion'


const Home = () => {
    
    return (
        <motion.div className="home"
            initial={{opacity: 0}}    
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ delay: .3, type: "spring" }}
        >
            <About />
            <Works />            
            <Contact />
        </motion.div>
    )
}

export default Home
