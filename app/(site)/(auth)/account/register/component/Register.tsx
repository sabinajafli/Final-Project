'use client'
import React, { useContext, useState } from 'react';
import styles from './Register.module.css';
import Link from 'next/link';
import { RegisterCall } from '../../../../../../services/auth';

const Register = () => {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await RegisterCall({ name, surname, email, password });
      console.log(data);
      localStorage.setItem('token', data.data.token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section>
      <div className={styles.header}>
        <h1>Create account</h1>
      </div>

      <nav className={styles.links}>
        <button>
          <Link href='/'>Home /</Link>
        </button>
        <button>
          Create Account
        </button>
      </nav>

      <form className={styles.formElement} onSubmit={handleSubmit}>
        <div className={styles.inputs}>
          <label>First name
            <span>*</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder='First name'
          />
        </div>
        <div className={styles.inputs}>
          <label>Last name
            <span>*</span>
          </label>
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
            placeholder='Last name'
          />
        </div>
        <div className={styles.inputs}>
          <label>Email
            <span>*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='Your email*'
          />
        </div>
        <div className={styles.inputs}>
          <label htmlFor="">Password
            <span>*</span>
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder='Password*'
          />
        </div>
        <p>Your personal data will be used to support your experience throughout this website, to manage access to your account and for other purposes described in our privacy policy.</p>
        <div className={styles.buttons}>
          <button type='submit' className={styles.create}>CREATE ACCOUNT</button>
          <button className={styles.login}>
            <Link href='login'>LOG IN</Link>
          </button>
        </div>
      </form>
    </section>
  );
};

export default Register;
