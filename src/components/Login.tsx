import React from 'react'
import { setUser } from '../store/slices/userSlice'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/redux-hooks';
import Form from './Form/Form';

const Login = () => {
  const dispatch = useAppDispatch()
  let navigate = useNavigate();


  const handleLogin = (email: string, pass: string) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, pass)
      .then(({ user }) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken
        }))
        navigate('/success')
      })
      .catch(() => alert('ошибка'))
  }
  return (
    <Form handleClick={handleLogin} titleBtn={'Login'} />
  )
}

export default Login