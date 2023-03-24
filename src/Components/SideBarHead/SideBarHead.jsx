import React from 'react'
import { List } from "phosphor-react";
import classes from "./SideBarHead.module.css"

const SideBarHead = () => {
  return (
        <div className={classes.title}>
				<h2>MRSOFT</h2>
				<span className={classes.hamburger}>
          <List size={32} />
				</span>
		</div>
    
  )
}

export default SideBarHead