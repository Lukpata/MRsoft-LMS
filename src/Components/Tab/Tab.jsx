import React from 'react'
import classes from "./Tab.module.css"

const Tab = ({ id, title, activeTab, setActiveTab }) => {

const handleClick=()=>{
    setActiveTab(id)
}

  return (
    
        <li onClick={handleClick} className={activeTab === id ? classes.active : ""}>
            { title }
        </li>
  )
}

export default Tab
