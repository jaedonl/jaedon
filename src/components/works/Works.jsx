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
                    workData.map((item, idx) => {                 
                        var project = item[Object.keys(item)][0]

                        return  <Link to={`/works/${ project.handle }`} key={idx}>                    
                            <div className="work" >
                                <div className="workThumbContainer">
                                    <img src={ item[Object.keys(item)][1].projects[0].img } alt="" />
                                    <button className="workDetailBtn" index={idx}>View Detail</button>
                                </div>

                                <h3 className="workTitle">{ project.title  }</h3>
                                <p className="workSubText">{ project.info }</p>
                            </div>
                        </Link>
                        
                    }) 
                }                
           </div>     
        </div>
    )
}

export default Works


 