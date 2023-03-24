import React from 'react';
import classes from "./MenuAdminDashboard.module.css";
import MenuItem from '../MenuItem/MenuItem'
import {House, UserCirclePlus, FolderNotchPlus, Activity,Gear,UsersThree } from "phosphor-react";

const MenuAdminDashboard = () => {
  return (
    <div className={classes.sideMenu}>
          <MenuItem icon={<House size={32} />}  
              title="Dashboard" url="/admin"/>
          <MenuItem icon={<UserCirclePlus size={32} />} 
              title="Students" url="/admin/students"/>
          <MenuItem icon={<FolderNotchPlus size={32} />} 
              title="Courses" url="/admin/courses"/>
          <MenuItem icon={<Activity size={32} />} 
              title="Analytics" url="/admin"/>
          <MenuItem icon={<Gear size={32} />} 
              title="Settings" url="/admin"/>
          <MenuItem icon={<UsersThree size={32} />} 
              title="Teachers" url="/admin/teachers"/>
    </div>
  )
}

export default MenuAdminDashboard
