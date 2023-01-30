import React from 'react'
import Tab from '../Tab/Tab'
import classes from "./DashboardMain.module.css"

const DashboardMain = ({setActiveTab,activeTab}) => {


  return (
    <div className={classes.mainSection}>
        <div className={classes.mainTop}>
			<p className={classes.courses}><span className={classes.blurredText}>My Courses</span><span className={classes.boldText}>/Web Development</span></p>
			<h3 className={classes.courseTitle}>Introduction to Web Design</h3>
			<p className={classes.lecturer}>Prof. John Snow</p>
		</div>

		<div className={classes.mainBottom}>
		</div>	

		<div className={classes.bottomMenu}>
            <ul className={classes.tab}>
                <Tab title={"Description"} 
                    id="tab1" activeTab={activeTab} 
                    setActiveTab={setActiveTab}/>

                <Tab title={"Reviews"} 
                    id="tab2" activeTab={activeTab} 
                    setActiveTab={setActiveTab}/>

                <Tab title={"Discussion"} 
                    id="tab3" activeTab={activeTab} 
                    setActiveTab={setActiveTab}/>

                <Tab title={"Resources"} 
                    id="tab4" activeTab={activeTab} 
                    setActiveTab={setActiveTab}/>

                <Tab title={"Instructor"} 
                    id="tab5" activeTab={activeTab} 
                    setActiveTab={setActiveTab}/>
            </ul>
		</div>
      
    </div>
  )
}

export default DashboardMain
