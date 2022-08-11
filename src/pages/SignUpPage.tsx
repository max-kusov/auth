import React from 'react'
import { Link } from 'react-router-dom'
import SignUp from '../components/SignUp'

const RegisterPage = () => {
  return (
    <div>
      <h1>Register</h1>
      <SignUp />
      <Link to='/' style={{ color: '#35C2C1' }}>Sign in</Link>
    </div>
  )
}

export default RegisterPage