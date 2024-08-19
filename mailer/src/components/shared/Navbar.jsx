import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiCircleQuestion, CiSettings } from "react-icons/ci";
import { PiDotsNineBold } from "react-icons/pi";
import logo from '../../assets/mailer_logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { setSearchText, setUser } from '../../redux/appSlice';
import { AnimatePresence,motion } from 'framer-motion';
import Avatar from 'react-avatar';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';


const Navbar = () => {
    const [input, setInput] = useState("");
    const [toggle, setToggle] = useState(false);
    const {user} = useSelector(store=>store.appSlice);
    const dispatch = useDispatch();
    const signOutHandler = () => {
        signOut(auth).then(()=>{
            dispatch(setUser(null));
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        dispatch(setSearchText(input))
    },[input]) 
  return (
    <div className='flex items-center justify-between mx-3 h-16'>
        <div className='flex items-center gap-18'>
            <div className='flex items-center'>
                <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                    <RxHamburgerMenu size={"28px"} />
                </div>
                <img className='w-[75px]' src={logo} alt="logo" />
                <h1 className='text-2xl text-gray-500 font-medium'>Mailer</h1>
            </div>
        </div>
        <div className='md:block hidden w-[50%] mr-60'>
            <div className='bg-[#EAF1FB] flex items-center px-2 py-4 rounded-full'> 
                <IoIosSearch size={"24px"} className="text-gray-700" />
                    <input value={input} onChange={(e)=>setInput(e.target.value)} className='rounded-full w-full bg-transparent outline-none px-1' type="text" placeholder='Search Mail' />
            </div>
        </div>
        <div className='md:block hidden'>
            <div className='flex items-center gap-2'>
                <div className='p-3 rounded-full hover:bg-gray-100'>
                    <CiCircleQuestion size={"20px"} />
                </div>
                <div className='p-3 rounded-full hover:bg-gray-100'>
                    <CiSettings size={"20px"} />
                </div>
                <div className='p-3 rounded-full hover:bg-gray-100'>
                    <PiDotsNineBold size={"20px"} />
                </div>
                <div className='cursor-pointer'>
                    <Avatar onClick={()=>setToggle(!toggle)} src={user?.photoURL} size={"35px"} round />
                    <AnimatePresence>
                        {
                            toggle && (
                                <motion.div 
                                    initial={{opacity:8, scale:0.8}}
                                    animate={{opacity:1, scale:1}}
                                    exit={{opacity:0, scale: 0.8}}
                                    transition={{duration: 0.1}}
                                    className='absolute right-2 z-20 shadow-lg bg-white rounded-md'>
                                        <p onClick={signOutHandler} className='p-2 underline'>Logout</p>
                                </motion.div>
                            )
                        }
                    </AnimatePresence>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
