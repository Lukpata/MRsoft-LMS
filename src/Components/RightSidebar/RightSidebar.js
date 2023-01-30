import React from 'react'
import LecturerProfile from '../LecturerProfile/LecturerProfile'
import LectureInfo from '../LectureInfo/LectureInfo'
import Curriculum from '../Curriculum/Curriculum'
import CourseMenu from '../CourseMenu/CourseMenu'
import classes from "./RightSidebar.module.css"


const RightSidebar = () => {
  return (
    <div className={classes.rightSidebar}>

        <p className={classes.about}>About Course</p>
        <LecturerProfile/>
        <LectureInfo/>
        <Curriculum/>
        <CourseMenu/>
        
    </div>
  )
}

export default RightSidebar