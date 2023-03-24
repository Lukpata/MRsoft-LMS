import React from 'react'
import classes from "./Curriculum.module.css"

const Curriculum = () => {
  return (
    <div className={classes.curriculum}>
        <p className={classes.completedCourses}>Courses Completed/Curriculum</p>
        <div className={classes.progress}>
            <p>33% Completed</p>
            <span>5/15</span>
        </div>
    </div>
  )
}

export default Curriculum