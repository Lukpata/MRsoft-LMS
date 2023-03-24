import React from 'react'
import classes from "./LecturerProfile.module.css"

const LecturerProfile = () => {
  return (
    <div className={classes.lecturerProfile}>
        <div className={classes.profilePicture}>
            <img src="/avatar1.png" alt="lecturer"/>
        </div>
        <div className={classes.profileInfo}>
            <p className={classes.name}>Prof. Jon Snow</p>
            <p className={classes.designation}>Snr. Web Developer</p>
        </div>
	</div>
  )
}

export default LecturerProfile