import React from 'react'
import './About.scss';

const About = () => {
    return (
        <div className="about">
            <h1 className="myNameIs">Hello, my name is</h1>
            <h1 className="mainName">Jaedon Lee</h1>
            <div className="profileWrapper">
                <img src="/assets/jaedonAvatar.png" alt="Jaedon Avatar" className="avatarImg" />
                <h2 className="positionTitle">Software Engineer</h2>
                <p className="skills">React.js / Next.js / Node.js / Shopify</p>
                <p className="aboutMe">
                Software Developer with 3-4 years of experience building user-friendly web applications using React and JavaScript. Developed a web application and e-commerce projects, focusing on creating interactive and efficient user interfaces. Proficient in responsive design, modern JavaScript libraries, and collaborating with teams to deliver high-quality solutions.
                </p>                         
            </div>
            
        </div>
    )
}

export default About
