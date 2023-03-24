import React from 'react'
import classes from "./Resource.module.css"

const Resource = () => {
  return (
    <div className={classes.flexContainer}>
      <div className={classes.books}>
        <div className={classes.book}>
          <div className={classes.bookIcon}>
            <img src="/resources/folder icon.svg" alt='folder'/>
          </div>
          <p>HTML Cheatsheet.docx</p>

        </div>

        <div className={classes.book}>
          <div className={classes.bookIcon}>
            <img src="/resources/folder icon-1.svg" alt='folder'/>
          </div>
          <p>Statement of Account</p>
        </div>

        <div className={classes.book}>
          <div className={classes.bookIcon}>
            <img src="/resources/folder icon-2.svg" alt='folder'/>
          </div>
          <p>Statement of Account</p>
          
        </div>
        <div className={classes.book}>
          <div className={classes.bookIcon}>
            <img src="/resources/folder icon-2.svg" alt='folder'/>
          </div>
          <p>A guide to ethical hacking</p>
          
        </div>

      </div>

      <div className={classes.references}>
        <p>References Used in this Course</p>
        <ul>
          <li><a href="https://www.google.com">https://www.google.com</a></li>
          <li><a href="https://www.google.com">https://www.google.com</a></li>
          <li><a href="https://www.google.com">https://www.google.com</a></li>
        </ul>

      </div>
    </div>
  )
}

export default Resource
