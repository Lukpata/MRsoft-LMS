import React from 'react'
import classes from "./TabContent.module.css"

const TabContent = ({id, activeTab, children}) => {
  return (
    activeTab === id ? <div className={classes.mainSection}> { children } </div>
    : null
  )
}

export default TabContent
