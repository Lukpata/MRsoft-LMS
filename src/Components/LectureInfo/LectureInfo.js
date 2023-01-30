import React from 'react'
import classes from "./LectureInfo.module.css"

const LectureInfo = () => {
  return (
    <div className={classes.lectureInfo}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod,
        proident, sunt in culpa qui officia deserunt ...<span>read more</span></p>

        <p><span>Lecture Days:</span> Monday-Thursdays</p>
        <p><span>Venue:</span> Class B</p>
	</div>
  )
}

export default LectureInfo