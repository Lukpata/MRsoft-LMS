import React from 'react'
import classes from "./SearchForm.module.css"
import { MagnifyingGlass } from 'phosphor-react'

const SearchForm = () => {
  return (
    <form className={classes.searchForm}>
      <div className={classes.search}>
        <MagnifyingGlass size={20} className={classes.icon}/>
        <input type="text" placeholder="Search by name" className={classes.searchField}/>
      </div>
    </form>
  )
}

export default SearchForm
