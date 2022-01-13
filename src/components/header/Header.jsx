import React, {useState, useEffect, useCallback} from 'react'
import { Link } from 'react-router-dom';
import './Header.scss';
import { Person, Computer, GitHub, LinkedIn, Email} from '@material-ui/icons';

const Header = () => {
    const [current, setCurrent] = useState(null)
    const [y, setY] = useState(window.pageYOffset || document.documentElement.scrollTop);
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

    const handleNavigation = useCallback((e) => {
        if (y > window.scrollY) {
            // console.log("scrolling up", y);
            document.querySelector('.header').style.top = '0'

        } else if (y < window.scrollY) {
            // console.log("scrolling down", y);
            document.querySelector('.header').style.top = '-80px'

        }
        setY(window.scrollY)
    }, [y]);


    useEffect(() => {
        window.addEventListener("scroll", handleNavigation);
        return () => {
          window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);

    // var lastScrollTop = 0;
    // window.addEventListener("scroll", function() {
    //     var st = window.pageYOffset  || document.documentElement.scrollTop;
        
    //     if (st > lastScrollTop){
    //         console.log('scroll down', lastScrollTop, st);

    //     } else if (st < lastScrollTop) {
    //         console.log('scroll up', lastScrollTop, st);
    //     }

    //     lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    // }, false);

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
                        <a href="https://www.linkedin.com/in/jaedon-lee-1793aa175/"><LinkedIn style={{ color: '#0077b5' }}/>
                        <span>LinkedIn</span></a>
                    </li>

                    <li className="nav-li">
                        <a href="https://github.com/jaedonl"><GitHub style={{ color: '#6e5494' }}/>
                        <span>GitHub</span></a>
                    </li>                    
                </ul>
            </div>
            
        </div>
    )
}

export default Header
