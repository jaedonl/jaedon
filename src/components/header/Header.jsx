import React from 'react'
import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <span className="logo">JdonL</span>
            </div>

            <ul className="nav-ul">
                <li className="nav-li">works</li>
                <li className="nav-li">about</li>
                <li className="nav-li">about</li>
                <li className="nav-li">linkedin</li>
                <li className="nav-li">github</li>
                <li className="nav-li">email</li>
            </ul>
        </div>
    )
}

export default Header
