import React, {useState, useEffect} from 'react'
import './WorkModal.scss'
import { Close } from '@material-ui/icons';
import { motion } from 'framer-motion';

const WorkModal = ({title, index, works, toggle}) => {
    const [stack, setStack] = useState(index)
    let listItem

    useEffect(() => {        
        listItem = document.querySelectorAll('.workList li')            
        listItem.forEach((element,idx) => {
            element.style.transform = `translate3d(${100 * idx}vw, -50%, 0)`            
        });
    }, [])    

    const changeStack = (e) => {        
        var direction = e.target.getAttribute('name') 

        if (direction === "next") {
            setStack(stack+1)            
            if (stack === works.length - 1) setStack(0)
        }
        else {
            setStack(stack-1)  
            if (stack === 0) setStack(works.length - 1)                          
        }
    }   

    const changeIndex = () => {        
        var ul = document.querySelector('.workList')                
        ul.style.transform = `translate3d(-${stack * 100}vw, 0, 0)`
    }   

    useEffect(() => {
        changeIndex()
    }, [stack])

    return (
        <motion.div className="workModal"
            initial={{opacity: 0}}    
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ delay: .2, type: "spring" }}
        >
            <div className="modal">
                <div className="exitBtn" onClick={toggle}><Close className="exitIcon" /></div>
                <div className="prevBtn" name="prev" onClick={changeStack}><i className="arrow left"></i></div>
                <div className="nextBtn" name="next" onClick={changeStack}><i className="arrow right"></i></div>

                <div className="workTitle">
                    <h2>{title}</h2>
                </div>
                <ul className="workList">
                    { works.map((work, idx) => (
                        <li key={idx}>                            
                            <div className="imgWrapper">
                                <img src={work.img} alt="work image" />
                            </div>                                  
                        </li>
                    )) }                        
                </ul>
                <div className="orderAndPart">
                    <p>{stack+1} / {works.length}</p>
                    <p>{works[stack].part}</p>
                </div>  
                               
            </div>
        </motion.div>
    )
}

export default WorkModal
