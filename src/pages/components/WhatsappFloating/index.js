import React from 'react'
import { motion } from 'framer-motion';
import { IoLogoWhatsapp } from "react-icons/io";


const WhatsappFloating = () => {
  return (
    <motion.div 
    onClick={() => open('https://api.whatsapp.com/send?phone=5543999975547&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o.%20Qual%20%C3%A9%20sua%20disponibilidade%3F')}
    className='rounded-full fixed lg:right-20 lg:bottom-20 right-5 bottom-10 cursor-pointer p-2'
    whileHover={{
        scale:1.1
    }}>
        <IoLogoWhatsapp size={80} color={'#44BB43'} className=' drop-shadow-brightLight'/>
    </motion.div>
  )
}

export default WhatsappFloating