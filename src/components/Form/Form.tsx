import React, { FC } from 'react'
import styles from './Form.module.scss'


interface FormProps {
  handleClick: (email: string, pass: string) => void;
  titleBtn: string
}

const Form: FC<FormProps> = ({ handleClick, titleBtn }) => {
  const [email, setEmail] = React.useState('')
  const [pass, setPass] = React.useState('')

  return (
    <div className={styles.root}>
      <div className={styles.input}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          required />
        <label>Email</label>
      </div>
      <div className={styles.input}>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type='password'
          required />
        <label>Password</label>
      </div>
      <button className={styles.btn} onClick={() => handleClick(email, pass)}>{titleBtn}</button>
    </div>
  )
}

export default Form