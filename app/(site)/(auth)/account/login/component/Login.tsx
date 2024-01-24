'use client'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import styles from './Login.module.css'
import { LoginCall } from '../../../../../../services/auth';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await LoginCall({ email, password });
      console.log(data);
      localStorage.setItem('token', data.data.token);
  
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <section>
      <div className={styles.header}>
        <h1>Login</h1>
      </div>

      <nav className={styles.links}>
        <button>
          <Link href='/'>Home /</Link>
        </button>
        <button>
          <Link href='login'>Account</Link>
        </button>
      </nav>

      <div className={styles.form}>
        <div className={styles.login}>
            <div className={styles.heading}>
            <h3>Login</h3>
            </div>

            <form className={styles.formElement} onSubmit={handleSubmit}
            autoComplete="off">
                <div className={styles.inputs}>
                <label>Email
                    <span>*</span>
                </label>
                <input type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} placeholder='Your email*' required/>
                </div>
                <div className={styles.inputs}>
                <label htmlFor="">Password
                    <span>*</span>
                </label>
                <input type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password*' required/>
                </div>
                <button type="submit">SUBMIT</button>
            </form>
        </div>
      
        <div className={styles.register}>
            <h3 className={styles.heading}>New Customer</h3>
            <p>Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails.</p>
            <button><Link href='register'>CREATE ACCOUT</Link></button>
        </div>
      </div>
      
    </section>
  )
}

export default Login