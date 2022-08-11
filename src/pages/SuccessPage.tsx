import React from 'react'
import { removeUser } from '../store/slices/userSlice'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';



const SuccessPage = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const { email } = useAppSelector((state) => state.user)

  const func = () => {
    dispatch(removeUser())
    navigate('/')
  }

  return (
    <>
      <h1>Welcome {email}</h1>
      <button
        onClick={() => func()}
      >Log out</button>
    </>
  )
}

export default SuccessPage