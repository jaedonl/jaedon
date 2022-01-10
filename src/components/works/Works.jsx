import React from 'react'
import './Works.scss';
import { mainThumbs } from '../../data';

const Works = () => {    
    return (
        <div className="works">
            
           <h2 className="sectionTitle">Portfolio</h2>

           <div className="worksContainer"> 
                {mainThumbs.map(item => (
                    <div className="work">
                        <div className="workThumbContainer">
                            <img src={item.img} alt="" className="workThumb" />
                        </div>
                        <h3 className="workTitle">{item.title}</h3>
                        <p className="workSubText">{item.desc}</p>
                    </div>
                ))}                
           </div>     
        </div>
    )
}

export default Works
