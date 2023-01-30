import React from 'react'
import classes from "./CourseItem.module.css"

const CourseItem = () => {
  return (
    <div className={classes.courseItem}>
        <div className={classes.left}>
            <span>01</span>
            <p>Introduction to HTML</p>
        </div>
        <span><img src="/Check.svg"/></span>
    </div>
  )
}

export default CourseItem
