import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    Sheet,
    SheetContent,
    SheetClose,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { API } from '@/config/axios';
import { Cross2Icon } from '@radix-ui/react-icons'
import { useState } from 'react';


export default function AddStaff() {
  const initialFormData = {
    name: '',
    surname: '',
    email: '',
    password: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = async (e:any) => {
    e.preventDefault();

    try {
      const response = await API.post('/dashboard/register', formData);
      console.log(response.data);
      console.log('Staff added successfully');
      resetForm();
    } catch (error) {
      console.error('Error adding staff:', error);
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  return (
    <section className='light dark:dark'>
        <Sheet>
            <SheetTrigger asChild>
            <Button className="green-light dark:green-dark">+ Add Staff</Button>
            </SheetTrigger>
            <SheetContent side={'right'} className='w-[50%] light dark:dark'>
                <SheetHeader className='light-gray dark:gray'>
                <SheetTitle className='relative'>
                <div className='flex items-center justify-between text-[#111] bg-white pt-4 px-4 w-full absolute light-gray dark:gray'>
                <p className='text-[18px] fornt-semibold'>Add Staff</p>
                <SheetClose asChild>
                    <Cross2Icon className=" text-red-500 opacity-[0.6] hover:opacity-[1] duration-75" />
                </SheetClose>
                </div>
                </SheetTitle>
                <p className='px-4 pt-10 pb-2 border-b  light-gray dark:gray text-[13px]'>Add your staff necessary information from here</p>
                </SheetHeader>
                <div className='px-4 py-5'>
                  <form onSubmit={handleFormSubmit} className='flex flex-col gap-5'>
                    <div className='flex items-center'>
                      <label className='w-[140px]'>Name</label>
                      <Input type='text' placeholder='Staff name' onChange={handleInputChange}
                      value={formData.name}
                      name='name' />
                    </div>
                    <div className='flex items-center'>
                      <label className='w-[140px]'>Surname</label>
                      <Input
                        type='text'
                        name='surname'
                        placeholder='Staff surname'
                        onChange={handleInputChange}
                        value={formData.surname}
                      />
                    </div>
                    <div className='flex items-center'>
                      <label className='w-[140px]'>Email</label>
                      <Input
                        type='email'
                        name='email' 
                        placeholder='Email'
                        onChange={handleInputChange}
                        value={formData.email}
                        autoComplete='off'
                      />
                    </div>
                    <div className='flex items-center'>
                      <label className='w-[140px]'>Password</label>
                      <Input
                        type='password'
                        name='password'
                        placeholder='Password'
                        onChange={handleInputChange}
                        value={formData.password}
                        autoComplete='off'
                      />
                    </div>
                    <div className='flex items-center'>
                      <label className='w-[140px]'>Staff Role</label>
                      <p className='w-full py-2 text-center text-[14px] light-gray dark:gray rounded-lg'>Admin</p>
                    </div>
                    <div className='flex justify-between mt-10 gap-4'>
                      <SheetClose asChild>
                        <Button className='w-1/2 border text-red-500'>Cancel</Button>
                      </SheetClose>
                      <Button type='submit' className='w-1/2 green-light '>Add Staff</Button>
                    </div>
                  </form>
                </div>
            </SheetContent>
        </Sheet>
    </section>
  )
}
