import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { useAuth0 } from '@auth0/auth0-react';
const Navbar = () => {
    const [nav,setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    const {loginWithRedirect,isAuthenticated,logout}=useAuth0();
  return (
    <div className='text-white flex justify-between items-center w-full bg-green-600 h-[80px] mx-auto px-[50px] p-4'>
        <a href='/' alt='home' className='w-full md:text-3xl text-2xl font-bold'>Dukaan</a>
        <input type="text" placeholder='Search items' className='mr-[50px] h-[35px] placeholder:pl-4 placeholder:text-base md:placeholder:text-lg text:border rounded-md text:border-solid block w-full text-xl text-slate-500'></input>
        <ul className='hidden md:flex text-base font-normal'>
            <li className='p-4 px-5' >Home</li>
            <li className='p-4 px-5'>Categories</li>
            <button className='p-4 px-5'><FiShoppingCart size={20}/></button>

            {
                (isAuthenticated===true)?  <button className='mx-5 text-black my-[10px] mx-[3px] bg-white w-[90px] h-[35px] font-medium' onClick={()=>(logout())}>logout</button>
                :  <button className='mx-5 text-black my-[10px] mx-[3px] bg-white w-[90px] h-[35px] font-medium' onClick={()=>loginWithRedirect()}>Login</button>
            }
          
        </ul>
        <div onClick={handleNav} className='cursor-pointer md:hidden'>
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div className={nav ? 'bg-blue-500 fixed z-50 left-0 top-0 w-[60%] h-full border-r-gray-900 ease-in-out duration-500' : 'fixed left-[-100%]'  }>
            <h1 className='w-full md:text-3xl text-2xl font-bold text-white m-4'>Retail</h1>
            <ul className='md:flex text-base font-normal'>
            <li className='border-b border-gray-200 p-4 px-5' >Home</li>
            <li className='border-b border-gray-200 p-4 px-5'>Categories</li>
            <button className='mx-5 text-black my-[18px] bg-white w-[80px] h-[35px] font-medium' onClick={()=>loginWithRedirect()}>Login</button>
        </ul>
        </div>

    </div>
  )
}

export default Navbar
