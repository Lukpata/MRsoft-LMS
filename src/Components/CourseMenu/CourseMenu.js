import React from 'react'
import CourseItem from '../CourseItem/CourseItem'
import classes from "./CourseMenu.module.css"

const CourseMenu = () => {
  return (
    <div className={classes.courseMenu}>
      <CourseItem/>
      <CourseItem/>
      <CourseItem/>
      <CourseItem/>
      <CourseItem/>
      <CourseItem/>
      <CourseItem/>
      <CourseItem/>
    </div>
  )
}

export default CourseMenu
