import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <div className='flex flex-col w-full h-screen items-center justify-start'>
        <div className='flex flex-col w-full h-screen items-center justify-start'>

            <div className='flex flex-col w-full h-full absolute bg-[rgba(0,0,0,0.7)] border-[1px] border-[#3b3b3b]'>
                <Image className='-z-50' layout="fill" objectFit="fill" alt='building picture' src={require('../../../../public/buildings-photo.jpg')} />
            </div>

            <div className='flex flex-col w-[800px] h-[95%] text-center items-center justify-center z-50'>
                <Image src={require('../../../../public/assinatura.png')}/>

                <motion.div className='flex items-center justify-center cursor-pointer border-[1px] w-[15rem] p-3 mt-10 rounded-sm
                bg-gradient-to-tr from-[rgba(255,255,255,0.8)] to-[rgba(255,255,255,0.9)] '
                    whileHover={{scale:1.02}}>
                    <p className='text-lg text-black'>
                        Agende uma consulta
                    </p>
                </motion.div>

            </div>

        </div>
    </div>
  )
}

export default HeroSection