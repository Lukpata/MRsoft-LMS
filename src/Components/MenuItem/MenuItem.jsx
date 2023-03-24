import React from 'react'
import classes from "./MenuItem.module.css";
import { Link } from 'react-router-dom';

const MenuItem = ({icon,title,url}) => {
  return (
    <Link to={url} className={classes.link}>
    <div className={classes.item}>
        <span>{icon}</span>
		<p>{title}</p>
    </div>
    </Link>
  )
}

export default MenuItem