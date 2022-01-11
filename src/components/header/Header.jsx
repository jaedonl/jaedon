import React, {useState} from 'react'
// import { Link } from 'react-router-dom';
import './Header.scss';
import { Person, Computer, GitHub, LinkedIn, Email} from '@material-ui/icons';

const Header = () => {
    const [current, setCurrent] = useState('')

    return (
        <div className="header">
            <div className="headerContainer">
                <div className="logo-container">
                    <span className="logo">JdonL</span>
                </div>

                <ul className="nav-ul">
                    <li className="nav-li"><Person style={{ color: '#fff' }}/><span>About</span></li>
                    <li className="nav-li"><Computer style={{ color: '#6cc644' }}/><span>Works</span></li>
                    <li className="nav-li"><LinkedIn style={{ color: '#0077b5' }}/><span>LinkedIn</span></li>
                    <li className="nav-li"><GitHub style={{ color: '#6e5494' }}/><span>GitHub</span></li>
                    <li className="nav-li"><Email style={{ color: '#c9510c' }}/><span>Contact</span></li>
                </ul>
            </div>
            
        </div>
    )
}

export default Header
