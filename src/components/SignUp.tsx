import React from 'react'
import { setUser } from '../store/slices/userSlice'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import Form from './Form/Form';
import { useAppDispatch } from '../hooks/redux-hooks';

const SignUp = () => {
  const dispatch = useAppDispatch()
  let navigate = useNavigate();

  const handleRegister = (email: string, pass: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, pass)
      .then(({ user }) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken
        }))
        navigate('/success')
      })
      .catch(() => alert('ошибка авторизации'))

  }
  return (
    <Form handleClick={handleRegister} titleBtn={'Register'} />
  )
}

export default SignUp