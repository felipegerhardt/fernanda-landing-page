import React from 'react'
import { FiMenu } from "react-icons/fi";
import { motion } from 'framer-motion';


const Navbar = () => {
  return (
    <div className='absolute flex w-full z-50 justify-between text-white items-center backdrop-blur-lg 
    bg-gradient-to-tr from-[rgba(1,1,1,0.5)] to-[rgba(1,1,1,0.3)] lg:px-[10%] lg:py-[20px]'>
       
       <div className='flex w-1/2'>
            <motion.div className='flex w-min'
            whileHover={{scale:1.05}}>
                <FiMenu className='cursor-pointer' size={40} color={'white'}/>
            </motion.div>
        </div>

        <div className='flex w-1/2 justify-end'>
            <motion.div className='flex items-center justify-center cursor-pointer border-[1px] w-[15rem] p-3 rounded-sm
            bg-gradient-to-tr from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0.3)] '
                whileHover={{scale:1.02}}>
                <p className='text-lg'>
                    Entre em contato
                </p>
            </motion.div>
        </div>
    </div>
  )
}

export default Navbar