import React from 'react'

const DesktopFooter = () => {
  return (
    <footer className='hidden md:block pt-10'>
        <div className="mx-auto w-full">
            <div className="grid grid-cols-2 justify-items-start gap-8 xl:gap-0 xl:justify-items-center px-5 py-10 xl:grid-cols-4 xl:px-10">
                <div>
                    <img src='/logo.png' alt="footer" className="w-20" />
                    <p className="text-[16px] text-[#555] mt-7">268 St, South New York/NY 98944, United States.</p>
                    <p className="text-[16px] text-[#555] mt-2">+222-1800-2628</p>
                    <p className="text-[16px] text-[#555] mt-2">blueskytechcompany@gmail.com</p>
                    <ul className="flex gap-3 my-5">
                        <li>
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18" r="17.5" stroke="#555555"></circle>
                            <path d="M21.6 12H14.4C13.0745 12 12 13.0745 12 14.4V21.6C12 22.9255 13.0745 24 14.4 24H21.6C22.9255 24 24 22.9255 24 21.6V14.4C24.0001 13.0745 22.9255 12 21.6 12ZM20.4 13.8H22.2V15.6H20.4V13.8ZM18 15.6001C19.3255 15.6001 20.4 16.6746 20.4 18.0001C20.4 19.3255 19.3255 20.4 18 20.4C16.6745 20.4 15.6 19.3255 15.6 18.0001C15.6 16.6746 16.6745 15.6001 18 15.6001ZM22.8 21.6001C22.8 22.2628 22.2627 22.8001 21.6 22.8001H14.4C13.7373 22.8001 13.2 22.2628 13.2 21.6001V17.4H14.46C14.0996 19.3553 15.3926 21.2325 17.3479 21.5929C19.3032 21.9533 21.1804 20.6603 21.5408 18.705C21.5836 18.4725 21.6035 18.2364 21.6 18.0001C21.597 17.7987 21.577 17.598 21.54 17.4001H22.8V21.6001H22.8Z" fill="#555555"></path>
                            </svg>
                        </li>
                        <li>
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18" r="17.5" stroke="#555555"></circle>
                            <path d="M16.9886 24C15.9308 24 14.9163 23.5966 14.1682 22.8785C13.4202 22.1604 13 21.1864 13 20.1709C13 19.1554 13.4202 18.1814 14.1682 17.4633C14.9163 16.7452 15.9308 16.3418 16.9886 16.3418H17.9625V18.2105H16.9886C16.5841 18.2105 16.1886 18.3257 15.8522 18.5415C15.5159 18.7572 15.2537 19.0639 15.0989 19.4227C14.9441 19.7815 14.9036 20.1764 14.9825 20.5573C15.0614 20.9382 15.2562 21.2881 15.5423 21.5627C15.8283 21.8373 16.1928 22.0243 16.5896 22.1001C16.9864 22.1759 17.3976 22.137 17.7714 21.9883C18.1452 21.8397 18.4646 21.588 18.6894 21.2651C18.9141 20.9422 19.0341 20.5626 19.0341 20.1742V12H20.9807V12.9338C20.9807 13.4546 21.1962 13.9541 21.5798 14.3223C21.9634 14.6906 22.4836 14.8975 23.0261 14.8975H24V16.7629H23.0193C22.2984 16.7639 21.591 16.5753 20.9739 16.2175V20.1709C20.973 21.1856 20.5529 22.1586 19.8058 22.8764C19.0587 23.5942 18.0456 23.9983 16.9886 24Z" fill="#555555"></path>
                    </svg>
                        </li>
                        <li>  
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18" r="17.5" stroke="#555555"></circle>
                            <path d="M24.9882 14.5648C24.8236 13.9529 24.3412 13.4706 23.7294 13.3058C22.6117 13 18.1411 13 18.1411 13C18.1411 13 13.6706 13 12.5529 13.2942C11.9529 13.4588 11.4587 13.953 11.2941 14.5648C11 15.6823 11 18 11 18C11 18 11 20.3294 11.2941 21.4352C11.4589 22.047 11.9411 22.5294 12.553 22.6941C13.6823 23 18.1412 23 18.1412 23C18.1412 23 22.6117 23 23.7294 22.7058C24.3413 22.5411 24.8236 22.0588 24.9884 21.447C25.2824 20.3294 25.2824 18.0118 25.2824 18.0118C25.2824 18.0118 25.2942 15.6823 24.9882 14.5648ZM16.7177 20.1412V15.8588L20.4353 18L16.7177 20.1412Z" fill="#555555"></path>
                    </svg>
                        </li>
                        <li>
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18" r="17.5" stroke="#555555"></circle>
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.9184 12H12.066L16.5298 18.6281L12 24H13.5877L17.2347 19.6747L20.1476 24H24L19.3764 17.1347L23.7059 12H22.1183L18.6714 16.0879L15.9184 12ZM17.4993 17.9239L14.2821 13.2286H15.2134L17.9508 17.2237L18.3878 17.8614L21.7755 22.8054H20.8442L17.9793 18.6242L17.4993 17.9239Z" fill="#555555"></path>
                            </svg>
                        </li>
                        <li>
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18" r="17.5" stroke="#555555"></circle>
                            <path d="M16.3334 14.6667V16H15V18H16.3334V24H19V18H20.7734L21 16H19V14.8334C19 14.2934 19.0533 14.0067 19.8866 14.0067H21V12H19.2134C17.08 12.0001 16.3334 13 16.3334 14.6667Z" fill="#555555"></path>
                            </svg>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 font-semibold text-[#111]">Company</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                        About Us
                    </li>
                    <li className="mb-4">
                        Our Stores
                    </li>
                    <li className="mb-4">
                        Contact Us
                    </li>
                    <li className="mb-4">
                        Size Guide
                    </li>
                    <li className="mb-4">
                        My Account
                    </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 font-semibold text-[#111]">Customer Service</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                        Privacy Policy
                    </li>
                    <li className="mb-4">
                        Refund Policy
                    </li>
                    <li className="mb-4">
                        Shipping & Return
                    </li>
                    <li className="mb-4">
                        Term & Conditions
                    </li>
                    <li className="mb-4">
                        Advanced Search
                    </li>
                    <li className="mb-4">
                        Theme FAQs
                    </li>
                    <li className="mb-4">
                        Store Locations
                    </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 font-semibold text-[#111]">Sign Up to Newsletter</h2>
                    <p className='text-[16px] text-[#555] mt-3'>Enter your email address to get $10 off your first order and free shipping.Updates information on Sales and Offers.</p>
                    <div className='flex gap-4 mt-[40px]'>
                        <input type="email" className='p-3 w-[80%] border-gray-300 rounded-full' placeholder='Enter your email...' />
                        <button className='text-sm font-medium py-2 px-5 bg-[#111] text-white rounded-full'>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='border-t py-3 mx-5 xl:mx-10 xl:py-6'>
            <p>© 2023 Umino Store. All Rights Reserved</p>
        </div>
    </footer>

  )
}

export default DesktopFooter