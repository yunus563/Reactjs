import React from 'react'
import classes from './myInput.module.css'

const myInput =({...props}) => {
  return (
    <input {...props} className={classes.myInput} />
  )
}

export default myInput
