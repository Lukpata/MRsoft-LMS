import React from 'react'
import StudentProfile from '../StudentProfile/StudentProfile'
import {ArrowClockwise} from "phosphor-react";
import classes from "./AdminDashboardBottom.module.css"

const AdminDashboardBottom = () => {
  return (
    <div className={classes.bottomContainer}>
      <div className={classes.graph}>
        <h3>Some Graph</h3>
        <div className={classes.visualization}>

        </div>
        
      </div>

      <div className={classes.recentStudents}>
        <div className={classes.recentRefresh}>
           <h3>Recent Students</h3>
           <ArrowClockwise size={25} />
        </div>
        
        <div className={classes.recent}>
          <StudentProfile/>
          <StudentProfile/>
          <StudentProfile/>
          <StudentProfile/>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboardBottom
