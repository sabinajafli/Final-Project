'use client'
import {Modal} from 'flowbite-react';
import { useState } from 'react';

export default function Register() {
    const [openModal, setOpenModal] = useState(false);
    
    function onCloseModal() {
        setOpenModal(false);
    }

    return (
        <>
            <button className='p-4 text-[#111] rounded-full text-[12px] font-medium border hover:bg-[#111] hover:text-white duration-150' onClick={() => setOpenModal(true)}>CREATE ACCOUNT</button>
            <Modal show={openModal} size="lg" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                <div className="space-y-5">
                    <h3 className="text-[28px] text-[#111] text-center font-medium">Create Account</h3>
                    <div>
                        <input type="text"
                        placeholder='First name' className='rounded-full w-full h-[50px] border-[#d4d4d4]' />
                    </div>
                    <div>
                    <input type="text" placeholder='Last name' className='rounded-full w-full h-[50px] border-[#d4d4d4]' />
                    </div>
                    <div>
                        <input type="email"
                        placeholder='Your email*' className='rounded-full w-full h-[50px] border-[#d4d4d4]' />
                    </div>
                    <div>
                    <input type="password" placeholder='Password*' className='rounded-full w-full h-[50px] border-[#d4d4d4]' />
                    </div>
                    <p className='text-[#555] text-[14px]'>Your personal data will be used to support your experience throughout this website, to manage access to your account and for other purposes described in our privacy policy.</p>
                    <div className="w-full flex flex-col gap-5">
                    <button className='p-4 bg-[#111] text-white rounded-full text-[12px] font-medium'>LOGIN</button>
                    <button className='p-4 text-[#111] rounded-full text-[12px] font-medium border hover:bg-[#111] hover:text-white duration-150' onClick={() => setOpenModal(true)}>CREATE ACCOUNT</button>
                    </div>
                </div>
                </Modal.Body>
            </Modal>
        </>
    )
}