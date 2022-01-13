import React, {useState, useEffect} from 'react'
import { useParams} from 'react-router-dom'
import './WorkDetail.scss'
import { workData } from '../../data'

const WorkDetail = () => {
    const workParam = useParams().title
    const project = workData.find(item => Object.keys(item)[0] === workParam)

    // console.log(project);
    console.log(project[Object.keys(project)][0]);

    return (
        <div className="workDetail">
            <div className="workhead">
                <h1>{Object.keys(project)}</h1>
            </div>
        </div>
    )
}

export default WorkDetail
