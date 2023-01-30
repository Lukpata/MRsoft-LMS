import React from 'react'
import classes from "./StudentProfile.module.css"

const StudentProfile = () => {
  return (
    <div className={classes.studentProfile}>
        <div className={classes.picture}>
            <img src="/avatar1.png" alt="student"/>
        </div>
        <div className={classes.profileInfo}>
            <p className={classes.name}>Anita Maxwell</p>
            <p className={classes.program}>Web Dev</p>
        </div>
	</div>
  )
}

export default StudentProfile