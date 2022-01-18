import React, {useState, useEffect} from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import './WorkDetail.scss'
import { workData } from '../../data'
import { LinkedIn, GitHub, Email, ArrowForward, ArrowBack, ArrowDownward } from '@material-ui/icons';

const WorkDetail = () => {
    const [scrollTo, setScrollTo] = useState(false)
    const workParam = useParams().title
    const location = useLocation()    
    const work = workData.find((item) => Object.keys(item)[0] === workParam)[workParam]   
    const projects = work[1].projects 
    const workIndex = workData.findIndex((item) => Object.keys(item)[0] === workParam) 
    const [current, setCurrent] = useState(workIndex)
    const [prevIndex, setPrevIndex] = useState(() => {     
        let initialState
        if (current === 0) initialState = 4
        else initialState = current - 1

        return initialState
    })
    const [nextIndex, setNextIndex] = useState(() => {
        let initialState
        if (current === workData.length - 1) initialState = 0
        else initialState = current + 1

        return initialState
    })
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])

    const scrollToTarget = () => {        
        if (scrollTo) {
            let curTarget = document.querySelector('.moreWorks')
            window.scrollTo({ top: curTarget.offsetTop, left: 0, behavior: 'smooth'})  
        }         
        setScrollTo(false)
    }

    useEffect(() => {                     
        scrollToTarget()          
    }, [scrollTo])  
    
    const prevNextProject = (e) => {
        if (e.currentTarget.name === "next") {
            setCurrent(current+1)
            setPrevIndex(current)
            setNextIndex(current+2)

            if (current === workData.length - 1) {
                setCurrent(0)
                setPrevIndex(workData.length - 1)
                setNextIndex(1)
            } 
            else if (nextIndex === workData.length - 1) {
                setCurrent(workData.length - 1)
                setPrevIndex(workData.length - 2)
                setNextIndex(0)
            }
        }
        else {
            setCurrent(current-1)   
            setPrevIndex(current-2)
            setNextIndex(current)

            if (current === 0) {
                setCurrent(workData.length - 1)
                setPrevIndex(workData.length -2)
                setNextIndex(0)             
            } 
            else if (prevIndex === 0) {
                setCurrent(0)
                setPrevIndex(workData.length - 1)
                setNextIndex(1)
            }
        }     
    }   

    return (
        <div className="workDetail">
            <div className="workAbout">
                <div className="workAboutMain">
                    <div className="workhead">
                        <div className="currentProject">
                            <h1>{work[0].title}</h1>
                            { work[0].inProgress && <span className="inProgress">(In progress..)</span> }
                            <div className="tagAndAuthor">
                                <span className="projectTags">{work[0].tags.join(', ')}</span>
                                <span className="projectAuthor">by {work[0].author}</span>
                            </div>
                        </div>  

                        <Link to={`/works/${Object.keys(workData[nextIndex])[0]}`} className="nextProject" name="next" onClick={prevNextProject}>
                            <h3>Next Project</h3> 
                            <ArrowForward style={{ fontSize: 30 }} />
                        </Link>                  
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

                <div className="aboutArrowDown">
                    <ArrowDownward style={{fontSize: "80px"}} />
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
                <Link to={`/works/${Object.keys(workData[prevIndex])[0]}`} className="prevProject" name="prev" onClick={prevNextProject}>
                    <ArrowBack style={{ fontSize: 30 }} />
                    <h3>Previous Project</h3> 
                </Link>       

                <Link to={`/works/${Object.keys(workData[nextIndex])[0]}`} className="nextProject" name="next"  onClick={prevNextProject}>
                    <h3>Next Project</h3> 
                    <ArrowForward style={{ fontSize: 30 }} />
                </Link>                      
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
