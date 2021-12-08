import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import MyButton from '../Button/myButton';
import classes  from './navbar.module.css'
import {AuthContext} from '../../../context/index'

const Navabar = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext)

  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
    localStorage.removeItem('name')
  }


  return (
    <div className={classes.navbar}>
      <div>
        <Link to="/"><h2 style={{color:'black'}}>User: <span style={{color:'#03a9f4'}}> {localStorage.name}</span></h2></Link>
      </div>
      <div className={classes.links}>
        <Link to="/posts">Posts</Link>
        <Link to="/about">About</Link>
        {
          isAuth
          ? <MyButton onClick={logout} style={{color:'red'}}>Log out</MyButton>
          : ''
        }
      </div>
    </div>
  )
}

export default Navabar
