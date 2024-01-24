'use client'
import React, { useEffect, useState } from 'react';
import { API } from '@/config/axios';
import { HiOutlineTrash } from "react-icons/hi2";
import AddStaff from './AddStaff';
import { Input } from '@/components/ui/input';

interface User {
  _id: string;
  name?: string;
  surname?: string;
  email?: string;
  password?: string;
  role?: string;
  status?: boolean;
}

interface UsersResponse {
  data: User[];
}

export default function StaffTable() {
  const [users, setUsers] = useState<UsersResponse>({ data: [] });
  const [searchQuery, setSearchQuery] = useState<string>('');


  const fetchUser = () => {
    API.get('/dashboard/users')
      .then((res) => {
        if (res.data && res.data.data) {
          setUsers({ data: res.data.data });
        } else {
          console.error('Invalid data format:', res.data);
        }
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchUser();
  }, []); 

  const filterName = users.data.filter(user =>
    (user.name && user.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (user.surname && user.surname.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleDeleteUser = async (userId: string) => {
    try {
      await API.delete(`/dashboard/users/${userId}`);
      fetchUser();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };


  return (
    <section>
      <div className='flex gap-4 my-4'>
        <Input type="text" className='border border-[#55555529] dark:border-white' placeholder='Search by name/email'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} />
        <AddStaff />
      </div>
      <div className="border rounded-lg shadow-sm">
        <table className='w-full text-sm'>
          <thead className='text-start light dark:dark rounded-lg'>
            <tr>
              <th className='text-start px-2 py-2'>Name</th>
              <th className='text-start px-2 py-2'>Email</th>
              <th className='text-start px-2 py-2'>Password</th>
              <th className='text-start px-2 py-2'>Role</th>
              <th className='text-start px-2 py-2'>Status</th>
              <th className='text-start px-2 py-2'>Action</th>
            </tr>
          </thead>
          <tbody className='w-full'>
          {users.data.length > 0 &&
          users.data
            .filter(user =>
              (user.name && user.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
              (user.email && user.email.toLowerCase().includes(searchQuery.toLowerCase()))
            )
            .map((user) => (
              <tr key={user._id} className='border-t'>
                <td className="px-2 py-4">{user.name} {user.surname}</td>
                <td className="px-2 py-4">{user.email}</td>
                <td className="px-2 py-4">***********</td>
                <td className="px-2 py-4">{user.role ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : ''}</td>
                <td className="px-2 py-4">
                  <span className='px-4 py-1 rounded-md text-[#059669] bg-[#d1faf5] dark:bg-[#059669] dark:text-[#d1faf5]'>Active 
                  </span>
                </td>
                <td className="px-2 py-1">
                  <button className="border-0" onClick={() => handleDeleteUser(user._id)}>
                    <HiOutlineTrash className='text-[18px]' />
                  </button>
                </td>
              </tr>
            ))}
          </tbody> 
        </table>
      </div>
    </section>
  );
}