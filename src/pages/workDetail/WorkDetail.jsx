import React, {useState, useEffect} from 'react'
import WorkModal from '../../components/workModal/WorkModal'
import { Link, useParams, useLocation } from 'react-router-dom'
import './WorkDetail.scss'
import { workData } from '../../data'
import { LinkedIn, GitHub, Email, ArrowForward, ArrowBack } from '@material-ui/icons';
import { AnimatePresence, motion } from 'framer-motion'

const WorkDetail = () => {
    const workParam = useParams().title
    const work = workData.find((item) => Object.keys(item)[0] === workParam)[workParam]   
    const projects = work[1].projects 
    const workIndex = workData.findIndex((item) => Object.keys(item)[0] === workParam) 
    const [current, setCurrent] = useState(workIndex)    
    const [modalIndex, setModalIndex] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()
    
    useEffect(() => {
        window.scrollTo(0, 0);        
    }, [location])

    const [prevIndex, setPrevIndex] = useState(() => {     
        let initialState
        if (current === 0) initialState = workData.length - 1
        else initialState = current - 1

        return initialState
    })
    const [nextIndex, setNextIndex] = useState(() => {
        let initialState
        if (current === workData.length - 1) initialState = 0
        else initialState = current + 1
        
        return initialState
    })        

    const scrollToTarget = () => {        
        let curTarget = document.querySelector('.moreWorks')
        window.scrollTo({ top: curTarget.offsetTop, left: 0, behavior: 'smooth'})  
    }
    
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
    
    const toggleModal = (e) => {        
        setModalIndex(parseInt(e.currentTarget.getAttribute('index')))
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        isOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible"
    }, [isOpen])

    return (        
        <motion.div className="workDetail"         
            key={workParam}   
            initial={{opacity: 0}}    
            animate={{opacity: 1}}
            exit={{opacity: 0}}            
            transition={{ delay: .3, type: "spring"}}
        >
            <AnimatePresence exitBeforeEnter={true}>
                { isOpen ?  <WorkModal title={work[0].title} index={modalIndex} works={projects} 
                                toggle={toggleModal} isOpen={isOpen} /> : ''}
            </AnimatePresence>

            
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
                        <button className="moreButton" onClick={scrollToTarget}>View More</button>                                                    
                    </div>
                </div>                
            </div>

            <div className="moreWorks">
                <h1>More works from {work[0].title}</h1>
                <div className="workGrid">
                    { projects.map((element, idx) => (
                        <div className="workItem" key={idx}>
                            <div className="imageWrapper">
                                <img src={element.img} alt="" />
                                <button className="workViewBtn" index={idx} onClick={toggleModal}>View Detail</button>
                            </div>                        
                            <h3 className="projectPartTitle">{element.part}</h3>
                        </div>
                    ))}
                </div>
            </div>

            <div className="prevNextProject">
                <Link to={`/works/${Object.keys(workData[prevIndex])[0]}`} className="prevProject" name="prev" onClick={prevNextProject}>
                    <ArrowBack style={{ fontSize: 30 }} />
                    <h3>Prev Project</h3> 
                </Link>       

                <Link to={`/works/${Object.keys(workData[nextIndex])[0]}`} className="nextProject" name="next"  onClick={prevNextProject}>
                    <h3>Next Project</h3> 
                    <ArrowForward style={{ fontSize: 30 }} />
                </Link>                      
            </div>
            


            <div className="workFooter">
                <ul className="linkList">
                    <li className="linkItem">
                        <LinkedIn className="linkIcons linkedIn" />
                        <a href="https://www.linkedin.com/in/jaedon-lee-1793aa175/">LinkedIn</a>
                    </li>
                    <li className="linkItem">
                        <GitHub className="linkIcons gitHub" />
                        <a href="https://github.com/jaedonl">GitHub</a>
                    </li>                      
                    <li className="linkItem">
                        <Email className="linkIcons email" />
                        <a href = "mailto:jyjd6404@hotmail.com?subject = Feedback&body = Message">Email</a>
                    </li>
                </ul>

                <div className="workFooterCopyright">
                    <p>© Copyright 2022 by Jaedon Lee</p>
                </div>
            </div>                    
            
        </motion.div>
    )
}

export default WorkDetail
