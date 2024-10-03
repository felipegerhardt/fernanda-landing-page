import React from 'react'
import { FiMenu } from "react-icons/fi";
import { motion } from 'framer-motion';


const Navbar = () => {
  return (
    <div className='flex w-full z-50 justify-between text-white items-center bg-gradient-to-tr from-[#001f30] to-[#09032c] lg:px-[10rem] lg:py-[20px]'>
       
       <div className='flex w-1/3'>
            <motion.div className='flex w-min pl-[10%]'
            whileHover={{scale:1.05}}>
                <FiMenu className='cursor-pointer' size={50} color={'white'}/>
            </motion.div>
        </div>

        <div className='flex w-1/3 items-center justify-center'>
            <p className='text-xl font-medium'>
                Alguma frase brega
            </p>
        </div>

        <div className='flex w-1/3 justify-end'>
            <motion.div className='flex items-center justify-center cursor-pointer border-[1px] w-[15rem] p-2 rounded-lg
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