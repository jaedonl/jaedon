import React from 'react'
import './Banner.scss'

const Banner = () => {
    return (
        <div className="banner">
            <h1 className="mainName">Jaedon Lee</h1>
            <div className="profileWrapper">
                <img src="/assets/jaedonAvatar.png" alt="Jaedon Avatar" className="avatarImg" />
                <h2 className="positionTitle">Web Developer</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius quam urna, ac mollis felis rhoncus non. Aliquam volutpat ultrices ultrices. Nam tempor, nunc quis varius cursus, libero nulla convallis felis, id egestas libero leo eu dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum lorem lacus, a consectetur lacus interdum vitae.</p>
            </div>
        </div>
    )
}

export default Banner
