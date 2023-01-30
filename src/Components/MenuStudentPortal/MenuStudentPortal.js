import React from 'react'
import classes from "./MenuStudentPortal.module.css";
import MenuItem from '../MenuItem/MenuItem'
import { FolderNotch, Notepad, NotePencil, Notification } from "phosphor-react";


const MenuStudentPortal = () => {
  return (
    <div className={classes.sideMenu}>
          <MenuItem icon={<FolderNotch size={32} />}  
              title="My Courses"/>

          <MenuItem icon={<Notepad size={32} />} 
              title="Assignments"/>

          <MenuItem icon={<NotePencil size={32} />} 
              title="Exams"/>
          <MenuItem icon={<Notification size={32} />} 
              title="Notification Board"/>
    </div>
  )
}

export default MenuStudentPortal