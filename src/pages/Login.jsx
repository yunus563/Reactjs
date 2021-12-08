import React, {useContext, useState} from 'react'
import MyButton from '../components/library/Button/myButton'
import MyInput from '../components/library/Input/myInput'
import '../style/App.css'
import {AuthContext} from '../context/index'



const Login = () => {

  const {isAuth, setIsAuth} = useContext(AuthContext)
  const {name, setName} = useContext(AuthContext)
  const [password, setPassword] = useState('')

  const login = event => {
    event.preventDefault()
    if(password.toString() === '123456'){
      localStorage.setItem('auth', true)
      localStorage.setItem('name', name)
      setIsAuth(true)
      setName(name)
    }
    else{
      alert('Iltimos Parolni tering!!!')
    }
  }


  return (
    <div>
      <div className='login_form'>
        <span>Password: </span><p>123456</p>
      </div>
      <form onSubmit={login}>
        <MyInput value={name} onChange={e => setName(e.target.value)} required={true} type="text" placeholder="Name..."/>
        <MyInput value={password} onChange={e => setPassword(e.target.value)}  required={true} type="password" placeholder="Password..."/>
        <MyButton>Login</MyButton>
      </form>
    </div>
  )
}

export default Login
