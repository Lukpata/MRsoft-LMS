import React from 'react';
import classes from "./StatisticsVisuals.module.css";
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const StatisticsVisuals = () => {
    const percentage=77;
  return (
    <div className={classes.statsContainer}>
      <div className={classes.students}>
        <div className={classes.figure}>
            <p>Students/yr</p>
            <h2>105</h2>
        </div>
        <div className={classes.progressBar}>
            <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={13}/>
        </div>

      </div>

      <div className={classes.deferments}>
        <div className={classes.figure}>
            <p>Deferments</p>
            <h2>105</h2>
        </div>

        <div className={classes.progressBar}>
            <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={13}/>
        </div>

      </div>

      <div className={classes.courses}>
        <div className={classes.figure}>
            <p>courses</p>
            <h2>105</h2>
        </div>

        <div className={classes.progressBar}>
            <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={13}/>
        </div>

      </div>
    </div>
  )
}

export default StatisticsVisuals
