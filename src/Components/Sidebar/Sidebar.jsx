import React from 'react';
import SideBarHead from '../SideBarHead/SideBarHead';
import SidebarProfile from '../SidebarProfile/SidebarProfile';

import classes from './Sidebar.module.css'

const Sidebar = ({portal,menu}) => {
  return (
    <div className={classes.sidebar}>
        <SideBarHead/>
        {menu}
        <SidebarProfile portal={portal}/>
    </div>
  )
}

export default Sidebar