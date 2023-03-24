import React from 'react';
import classes from "./StatisticsVisuals.module.css";
import {CircularProgressbar,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const StatisticsVisuals = () => {

  const data=[{'label':'Students/yr','figure':105,'percentage':80,'progressColor':'#05C19C'},
              {'label':'Deferments','figure':503,'percentage':30,'progressColor':'#7982D1'},
              {'label':'Courses','figure':800,'percentage':50,'progressColor':'#FF9333'} 
      ]

     const renderedList= data.map(datum=>
        <div key={datum.label}>
          <div className={classes.figure}>
              <p>{datum.label}</p>
              <h2>{datum.figure}</h2>
          </div>
          <div className={classes.progressBar}>
              <CircularProgressbar value={datum.percentage} 
              text={`${datum.percentage}%`} 
              strokeWidth={13} styles={buildStyles({pathColor:datum.progressColor})}/>
          </div>
       </div>
      )

  return (
    <div className={classes.statsContainer}>
      {renderedList}
    </div>
  )
}

export default StatisticsVisuals
