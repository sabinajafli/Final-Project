'use client'
import { useState, useContext } from 'react';
import { LoginCall } from '../../../services/auth';
import { UserContext, UserContextProps } from '../../../context/AuthContext';
import { useRouter } from 'next/navigation';
import '../../globals.css'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const AdminLogin: React.FC = () => {
  const userContext = useContext(UserContext) as UserContextProps;
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await LoginCall({ email, password });
      console.log(data);
      const user = data.data.user;
  
      localStorage.setItem('token', data.data.token);
      userContext.setUser(user);
      router.push('/dashboard'); 
  
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='flex flex-col lg:flex-row bg-[#111827] w-full h-screen items-center justify-center'>
      <div>
        <img src="/login-office-CQRYLh9n.jpeg" alt="" className='w-[300px] rounded-l-md ' />
      </div>
      <div className='bg-[#1f2937] text-white px-5 h-[412px] flex flex-col justify-center rounded-r-md'>
        <h1 className='text-[20px]'>Login</h1>
        <form
          className='flex flex-col gap-5 mt-8 justify-center'
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <div className='flex flex-col items-start gap-1'>
          <label>
            Email
          </label>
            <Input
              className='w-[300px]'
              placeholder='Email*'
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className='flex flex-col items-start gap-1'>
          <label>
            Password
          </label>
            <Input
              placeholder='**********'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className='green-dark'>Sign In</Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
