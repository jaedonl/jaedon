import React from 'react'
import { Link } from 'react-router-dom';
import './Works.scss';
import { workData } from '../../data';

const Works = () => {
    return (
        <div className="works">            
           <h2 className="sectionTitle">Portfolio</h2>
           <div className="worksContainer"> 
                { 
                    workData.map((item, idx) => (
                        <Link to={`/works/${ Object.keys(item) }`}>                    

                            <div className="work" key={idx}>
                                <div className="workThumbContainer">
                                    <img src={ item[Object.keys(item)][0].img } alt="" className="workThumb" />
                                </div>

                                <h3 className="workTitle">{ item[Object.keys(item)][0].title }</h3>
                                <p className="workSubText">{ item[Object.keys(item)][0].info }</p>
                            </div>

                        </Link>
                    )) 
                }                
           </div>     
        </div>
    )
}

export default Works
 