import React, {useState, useEffect, useCallback} from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import './Header.scss';
import { Person, Computer, GitHub, LinkedIn, Email} from '@material-ui/icons';

const Header = () => {
    const [current, setCurrent] = useState(null)
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
    }, [location])

    const handleNavigation = useCallback(() => {
        y > window.scrollY  ? document.querySelector('.header').style.top = '0' //scrolling up
                            : document.querySelector('.header').style.top = '-80px' //scrolling down
                            
        y < 66  ? document.querySelector('.header').style.backgroundColor = 'transparent'
                : document.querySelector('.header').style.backgroundColor = 'rgba(26,27,31, 0.5)'
        
        setY(window.scrollY)
    }, [y]);

    useEffect(() => {
        window.addEventListener("scroll", handleNavigation);
        return () => {
          window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);
    

    return (
        <div className="header">
            <div className="headerContainer">
                <div className="logo-container">
                    <Link to='/' name="about">
                        <span className="logo">JdonL</span>
                    </Link>
                </div>

                <ul className="nav-ul">
                    
                    <li className="nav-li" name="about" onClick={(e)=>setCurrent(e.currentTarget.getAttribute('name'))}>
                        <Link to='/' name="about">
                            <Person style={{ color: '#fff' }}/>
                            <span>About</span>
                        </Link>
                    </li>
                    

                    
                    <li className="nav-li" name="works" onClick={(e)=>setCurrent(e.currentTarget.getAttribute('name'))}>
                        <Link to='/' name="works">
                            <Computer style={{ color: '#6cc644' }}/>
                            <span>Works</span>
                        </Link>
                    </li>
                    

                    
                    <li className="nav-li" name="contact" onClick={(e)=>setCurrent(e.currentTarget.getAttribute('name'))}>
                        <Link to='/' name="contact">
                            <Email style={{ color: '#c9510c' }}/>
                            <span>Contact</span>
                        </Link>
                    </li>
                    

                    <li className="nav-li">
                        <a href="https://www.linkedin.com/in/jaedon-lee-1793aa175/" target="_blank"><LinkedIn style={{ color: '#0077b5' }}/>
                        <span>LinkedIn</span></a>
                    </li>

                    <li className="nav-li">
                        <a href="https://github.com/jaedonl" target="_blank"><GitHub style={{ color: '#6e5494' }}/>
                        <span>GitHub</span></a>
                    </li>                    
                </ul>
            </div>
            
        </div>
    )
}

export default Header
