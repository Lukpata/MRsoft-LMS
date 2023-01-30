import React from 'react'
import classes from "./AdminPortalTop.module.css"
import SearchForm from '../SearchForm/SearchForm'

const AdminPortalTop = () => {
  return (
    <div className={classes.topContainer}>
      <SearchForm/>
      <div className={classes.userProfile}>
        <div className={classes.profilePicture}>
            <img src="/avatar1.png" alt="user"/>
        </div>
        <p>Anita Maxwell</p>
      </div>
    </div>
  )
}

export default AdminPortalTop
