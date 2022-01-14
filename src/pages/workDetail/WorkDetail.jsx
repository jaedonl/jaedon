import React, {useState, useEffect} from 'react'
import { useParams} from 'react-router-dom'
import './WorkDetail.scss'
import { workData } from '../../data'
import { LinkedIn, GitHub, Email} from '@material-ui/icons';

const WorkDetail = () => {
    const workParam = useParams().title
    const work = workData.find(item => Object.keys(item)[0] === workParam)[workParam]
    const projects = work[1].projects
    let images    
    images = projects.filter((element,idx) => idx > 0 )    

    return (
        <div className="workDetail">
            <div className="workhead">
                <h1>{work[0].title}</h1>
                <div className="tagAndAuthor">
                    <span className="projectTags">{work[0].tags.join(', ')}</span>
                    <span className="projectAuthor">by {work[0].author}</span>
                </div>
            </div>

            <div className="workInfo">
                <div className="workMainImg">
                    <img src={projects[0].img} alt="" />
                </div>

                <div className="workDesc">
                    <p>{work[0].desc}</p>
                </div>
            </div>

            <div className="workGrid">
                { images.map(element => (
                    <div className="workItem">
                        <img src={element.img} alt="" />
                        <p>{element.part}</p>
                    </div>
                ))}
            </div>


            <div className="workFooter">
                <ul className="linkList">
                    <li className="linkItem">
                        <LinkedIn style={{ fontSize: 40, color: '#0077b5' }} />
                        <a href="https://www.linkedin.com/in/jaedon-lee-1793aa175/">LinkedIn</a>
                    </li>
                    <li className="linkItem">
                        <GitHub style={{ fontSize: 40, color: '#6e5494' }} />
                        <a href="https://github.com/jaedonl">GitHub</a>
                    </li>                      
                    <li className="linkItem">
                        <Email style={{ fontSize: 40, color: '#c9510c' }} />
                        <a href = "mailto:jyjd6404@hotmail.com?subject = Feedback&body = Message">jyjd6404@hotmail.com</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default WorkDetail
