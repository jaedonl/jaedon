import React from 'react'
import './About.scss';

const About = () => {
    return (
        <div className="about">
            <h1 className="myNameIs">Hello, my name is</h1>
            <h1 className="mainName">Jaedon Lee</h1>
            <div className="profileWrapper">
                <img src="/assets/jaedonAvatar.png" alt="Jaedon Avatar" className="avatarImg" />
                <h2 className="positionTitle">Web Developer</h2>
                <p className="skills">React.js / Shopify Liquid / Javascript / CSS</p>
                <p className="aboutMe">
                    I'm a front-end developer at Design Agency in Midtown, New York. 
                    Web Developer with 2+ years of experience in designing and developing user interfaces, testing, debugging, and training staff within eCommerce technologies. Have always discussed and worked with designers to provide better UI/UX. Proven ability in optimizing web functionalities that improve data retrieval and workflow efficiencies.
                </p>                         
            </div>
            
        </div>
    )
}

export default About
