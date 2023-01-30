import React from 'react'
import classes from "./RegistrationForm.module.css";


const RegistrationForm = () => {
  return (
    <div className={classes.formContainer}>
        <h2>REGISTER STUDENT</h2>
        <p>Lorem ipsum bla whatever shit here</p>
      <form>
        <div className={classes.formElement}>
            <input type="text" placeholder="Enter student name"/>
        </div>

        <div className={classes.formElement}>
            <select>
                <option>Course of Study</option>
                <option>Web Dev</option>
                <option>Mobile Dev</option>
            </select>
        </div>

        <div className={classes.formElement}>
            <input type="text" placeholder="Duration of Course"/>
        </div>

            <button className={classes.btn}>Register</button>
      </form>
    </div>
  )
}

export default RegistrationForm
