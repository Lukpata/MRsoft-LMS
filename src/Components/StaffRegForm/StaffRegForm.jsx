import React from 'react'
import classes from "./StaffRegForm.module.css";
import {User,Envelope,Phone,Lock} from "phosphor-react";


const StaffRegForm = () => {

  const handleClick=(e)=>{
    e.preventDefault()
  }
  
  return (
    <div className={classes.formContainer}>
        <h1 className={classes.registerStaff}>Staff Registration</h1>
      <form onSubmit={handleClick} className={classes.staffRegForm}>
        
           <div className={classes.gridContainer}>
            <div className={classes.formElement}>
                  <User size={30} className={classes.icon}/>
                  <input type="text" placeholder="First Name"/>
              </div>

              <div className={classes.formElement}>
                  <User size={30} className={classes.icon}/>
                  <input type="text" placeholder="Last Name"/>
              </div>

              <div className={classes.formElement}>
                  <Envelope size={30} className={classes.icon}/>
                  <input type="email" placeholder="Email"/>
              </div>
        

          
              <div className={classes.formElement}>
                  <Phone size={30} className={classes.icon}/>
                  <input type="email" placeholder="Phone Number"/>
              </div>

              <div className={classes.formElement}>
                  <Lock size={30} className={classes.icon}/>
                  <input type="text" placeholder="Password"/>
              </div>

              <div className={classes.formElement}>
                  <Lock size={30} className={classes.icon}/>
                  <input type="text" placeholder="Confirm Password"/>
              </div>
           </div>


            <div className={classes.btnContainer}>
              <button className={classes.btn}>REGISTER</button>
            </div>
      </form>
    </div>
  )
}

export default StaffRegForm
