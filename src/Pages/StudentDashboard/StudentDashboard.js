import React from 'react'
import Sidebar from "../../Components/Sidebar/Sidebar"
import RightSidebar from "../../Components/RightSidebar/RightSidebar"
import TabContent from '../../Components/TabContent/TabContent'
import Description from '../../Components/Description/Description'
import Reviews from '../../Components/Reviews/Reviews'
import Discussions from '../../Components/Discussions/Discussions'
import Resource from '../../Components/Resource/Resource'
import classes from "./StudentDashboard.module.css"
import DashboardMain from '../../Components/DashboardMain/DashboardMain'
import { useState } from 'react'
import Instructor from '../../Components/Instructor/Instructor'
import MenuStudentPortal from '../../Components/MenuStudentPortal/MenuStudentPortal'


const StudentDashboard = () => {

  const [activeTab, setActiveTab]=useState("tab1")

  return (
    <div className={classes.container}>
        <div className={classes.leftSide}>
            <Sidebar portal="student" menu={<MenuStudentPortal/>}/>
        </div>

        <div className={classes.main}>
          <DashboardMain activeTab={activeTab} setActiveTab={setActiveTab}/>
          <TabContent id="tab1" activeTab={activeTab}>
            <Description/>
          </TabContent>

          <TabContent id="tab2" activeTab={activeTab}>
            <Reviews/>
          </TabContent>

          <TabContent id="tab3" activeTab={activeTab}>
            <Discussions/>
          </TabContent>

          <TabContent id="tab4" activeTab={activeTab}>
            <Resource/>
          </TabContent>

          <TabContent id="tab5" activeTab={activeTab}>
            <Instructor/>
          </TabContent>
          
        </div>

        <div className={classes.rightSide}>
          <RightSidebar/>
        </div>

    </div>
  )
}

export default StudentDashboard