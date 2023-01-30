import React from 'react'
import classes from "./AdminLayout.module.css";
import Sidebar from '../Sidebar/Sidebar';
import AdminPortalTop from '../AdminPortalTop/AdminPortalTop';
import MenuAdminDashboard from '../MenuAdminDashboard/MenuAdminDashboard';
import StatisticsVisuals from '../StatisticsVisuals/StatisticsVisuals';


const AdminLayout = ({children,pageName}) => {
  return (
    <div className={classes.container}>
      <div className={classes.leftSide}>
        <Sidebar portal="admin" menu={<MenuAdminDashboard/>}/>
      </div>

      <div className={classes.mainSection}>
        {pageName!=="registration"?
        <>
          <AdminPortalTop/>
          <h3 className={classes.hello}>Hello, Admin</h3>
          <StatisticsVisuals/>
          {children}
          <h3 className={classes.copyright}>MRSoft 2020</h3>
        </>
        :children
}
      </div>
    </div>
  )
}

export default AdminLayout
