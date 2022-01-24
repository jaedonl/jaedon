import React, {useState, useEffect, useCallback, useLayoutEffect} from 'react'
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';
import { Person, Computer, GitHub, LinkedIn, Email} from '@material-ui/icons';

const Header = () => {
    const [current, setCurrent] = useState(null)
    const [hamburger, setHamburger] = useState(false)
    const [y, setY] = useState(window.pageYOffset || document.documentElement.scrollTop);
    const location = useLocation()
    let curTarget    
            
    const scrollToTarget = () => {        
        if (current) {
            curTarget = document.querySelector(`.${current}`)
            window.scrollTo({ top: curTarget.offsetTop, left: 0, behavior: 'smooth'})  
        }         
    }
    useEffect(() => {                     
        scrollToTarget()          
    }, [current])
    
    useEffect(() => {                 
        setCurrent(null)                
        scrollToTarget()             
        document.body.style.overflow = "visible"     
    }, [location])


    const handleNavigation = useCallback(() => {
        y > window.scrollY  ? document.querySelector('.header').style.top = '0' //scrolling up
                            : document.querySelector('.header').style.top = '-80px' //scrolling down

        y < 66  ? document.querySelector('.header').style.backgroundColor = 'transparent'
                : document.querySelector('.header').style.backgroundColor = 'rgba(26,27,31, 0.4)'
        
        setY(window.scrollY)
    }, [y]);

    useEffect(() => {
        window.addEventListener("scroll", handleNavigation);
        return () => {
          window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);

    useEffect(() => {
        const navul = document.querySelector('.nav-ul')
        const menubar = document.querySelector('.hamburgerContainer')

        if (hamburger) {
            menubar.classList.add('on')
            navul.classList.add('on')
            document.body.classList.add('disableScroll')
        }
        else { 
            menubar.classList.remove('on')
            navul.classList.remove('on')
            document.body.classList.remove('disableScroll')
        }            
    }, [hamburger])
        

    return (
        <div className="header">
            <div className="headerContainer">
                <div className="logo-container" name="about" onClick={(e)=>{
                                setCurrent(e.currentTarget.getAttribute('name'))
                                setHamburger(false)
                            }}>
                    <Link to='/' name="about">
                        <span className="logo">JdonL</span>
                    </Link>
                </div>

                <nav className="siteNav">                          
                    <ul className="nav-ul">
                        <li className="nav-li" name="about" onClick={(e)=>{
                                setCurrent(e.currentTarget.getAttribute('name'))
                                setHamburger(false)
                            }}>
                            <Link to='/' name="about">
                                <Person className="linkIcons aboutIcon" />
                                <span>About</span>
                            </Link>
                        </li>
                                                
                        <li className="nav-li" name="works" onClick={(e)=>{
                                setCurrent(e.currentTarget.getAttribute('name'))
                                setHamburger(false)
                            }}>
                            <Link to='/' name="works">
                                <Computer className="linkIcons workIcon" />
                                <span>Works</span>
                            </Link>
                        </li>                    
                        
                        <li className="nav-li" name="contact" onClick={(e)=>{
                                setCurrent(e.currentTarget.getAttribute('name'))
                                setHamburger(false)
                            }}>
                            <Link to='/' name="contact">
                                <Email className="linkIcons email" />
                                <span>Contact</span>
                            </Link>
                        </li>                        

                        <li className="nav-li">
                            <a href="https://www.linkedin.com/in/jaedon-lee-1793aa175/" target="_blank"><LinkedIn className="linkIcons linkedIn" />
                            <span>LinkedIn</span></a>
                        </li>

                        <li className="nav-li">
                            <a href="https://github.com/jaedonl" target="_blank"><GitHub className="linkIcons gitHub" />
                            <span>GitHub</span></a>
                        </li>                    
                    </ul>
                    
                    <div className="hamburgerContainer" onClick={() => setHamburger(!hamburger)}>
                        <div className="bar bar1"></div>
                        <div className="bar bar2"></div>
                        <div className="bar bar3"></div>                        
                    </div>
                </nav>
                
            </div>
            
        </div>
    )
}

export default Header
