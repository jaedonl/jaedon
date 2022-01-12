import React, {useState, useEffect, useCallback} from 'react'
import { Link } from 'react-router-dom';
import './Header.scss';
import { Person, Computer, GitHub, LinkedIn, Email} from '@material-ui/icons';


const Header = () => {
    const [current, setCurrent] = useState(null)
    const [y, setY] = useState(document.scrollingElement.scrollHeight);
    let curTarget    

    const changeCurrent = (e) => {                   
        setCurrent(e.currentTarget.getAttribute('name'))             
    }
            
    const scrollToTarget = () => {        
        if (current) {
            curTarget = document.querySelector(`.${current}`)

            window.scrollTo({
                top: curTarget.offsetTop,
                left: 0,
                behavior: 'smooth'
            })  
        }         
    }

    useEffect(() => {                     
        scrollToTarget()          
    }, [current])    

    const handleNavigation = useCallback((e) => {
        if (y > window.scrollY) {
            console.log("scrolling up", y);
        } else if (y < window.scrollY) {
            console.log("scrolling down", y);
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
    //         console.log('scroll down', lastScrollTop, st + 50);
    //     } else if (st < lastScrollTop) {
    //         console.log('scroll up', lastScrollTop, st + 50);
    //     }
    //     lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    // }, false);



    return (
        <div className="header">
            <div className="headerContainer">
                <div className="logo-container">
                    <Link to='/' name="about" onclick={changeCurrent}>
                        <span className="logo">JdonL</span>
                    </Link>
                </div>

                <ul className="nav-ul">
                    
                    <li className="nav-li" name="about" onClick={changeCurrent}>
                        <Link to='/' name="about" onclick={changeCurrent}>
                            <Person style={{ color: '#fff' }}/>
                            <span>About</span>
                        </Link>
                    </li>
                    

                    
                    <li className="nav-li" name="works" onClick={changeCurrent}>
                        <Link to='/' name="works" onclick={changeCurrent}>
                            <Computer style={{ color: '#6cc644' }}/>
                            <span>Works</span>
                        </Link>
                    </li>
                    

                    
                    <li className="nav-li" name="contact" onClick={changeCurrent}>
                        <Link to='/' name="contact" onclick={changeCurrent}>
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
