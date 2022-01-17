import React, {useState, useEffect} from 'react'
import { useParams} from 'react-router-dom'
import './WorkDetail.scss'
import { workData } from '../../data'
import { LinkedIn, GitHub, Email, ArrowForward, ArrowBack } from '@material-ui/icons';

const WorkDetail = () => {
    const [scrollTo, setScrollTo] = useState(false)
    const workParam = useParams().title
    const work = workData.find(item => Object.keys(item)[0] === workParam)[workParam]
    const projects = work[1].projects
    let images

    images = projects.filter((element,idx) => idx > 0 )    
    
    let curTarget    
            
    const scrollToTarget = () => {        
        if (scrollTo) {
            curTarget = document.querySelector('.moreWorks')
            window.scrollTo({ top: curTarget.offsetTop, left: 0, behavior: 'smooth'})  
        }         
        setScrollTo(false)
    }

    useEffect(() => {                     
        scrollToTarget()          
    }, [scrollTo])  


    const prevNextProject = () => {

    }

    return (
        <div className="workDetail">
            <div className="workAbout">
                <div className="workhead">
                    <div className="currentProject">
                        <h1>{work[0].title}</h1>
                        { work[0].inProgress && <span className="inProgress">(In progress..)</span> }
                        <div className="tagAndAuthor">
                            <span className="projectTags">{work[0].tags.join(', ')}</span>
                            <span className="projectAuthor">by {work[0].author}</span>
                        </div>
                    </div>  

                    <button className="nextProject" name="next" onClick={prevNextProject}>
                        <h1>Next Project</h1> 
                        <ArrowForward style={{ fontSize: 35 }} />
                    </button>                  
                </div>

                <div className="workInfo">
                    <div className="workMainImg">
                        <img src={projects[0].img} alt="" />
                    </div>

                    <div className="workDesc">
                        <p>{work[0].desc}</p>
                        <button className="moreButton" onClick={()=>setScrollTo(true)}>View More</button>                                                    
                    </div>
                </div>
            </div>

            <div className="moreWorks">
                <h1>More works from {work[0].title}</h1>
                <div className="workGrid">
                    { projects.map(element => (
                        <div className="workItem">
                            <div className="imageWrapper">
                                <img src={element.img} alt="" />
                            </div>                        
                            <h3 className="projectPartTitle">{element.part}</h3>
                        </div>
                    ))}
                </div>
            </div>

            <div className="prevNextProject">
                <button className="prevProject" name="prev" onClick={prevNextProject}>                    
                    <ArrowBack style={{ fontSize: 35 }} />
                    <h1>Previous Project</h1> 
                </button>       

                <button className="nextProject" name="next"  onClick={prevNextProject}>
                    <h1>Next Project</h1> 
                    <ArrowForward style={{ fontSize: 35 }} />
                </button>                      
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
                        <a href = "mailto:jyjd6404@hotmail.com?subject = Feedback&body = Message">Email</a>
                    </li>
                </ul>

                <div className="workFooterCopyright">
                    <p>© Copyright 2022 by Jaedon Lee</p>
                </div>
            </div>
        </div>
    )
}

export default WorkDetail
