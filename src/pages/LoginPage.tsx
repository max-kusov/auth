import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../components/Login'

const LoginPage = () => {
  return (
    <div>
      <h1>LogIn</h1>
      <Login />
      <span>Don’t have an account? <Link to='/register' style={{ color: '#35C2C1' }}>Register Now</Link></span>
    </div>
  )
}

export default LoginPage