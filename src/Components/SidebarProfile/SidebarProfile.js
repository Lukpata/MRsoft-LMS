import React from 'react'
import { SignOut } from "phosphor-react";
import classes from "./SidebarProfile.module.css"

const SidebarProfile = ({portal}) => {
  return (
  <>
  {portal==="student"?
	<div className={classes.userProfile}>
			<div className={classes.profileImage}>
				<img src="/avatar2.png" alt="profile"/>
			</div>
			<p>Anita Maxwell</p>
			<span className={classes.arrow}><img src="/ArrowUpDown.svg" alt="arrow"/></span>
	</div>
	:<div className={classes.logout}>
		<div className={classes.logoutIcon}>
			<SignOut size={32} />
		</div>
		<p>Logout</p>
	
	</div>
}</>
  )
}

export default SidebarProfile