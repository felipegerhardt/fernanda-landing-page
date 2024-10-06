import React from 'react'
import Image from 'next/image'
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";


const Footer = () => {

    const socialMedia = [
        {icon: <FaLinkedinIn color='black' size={25} />, link: 'https://www.linkedin.com/in/fernandagerhardt/'},
        {icon: <FaInstagram color='black' size={25} />, link: 'https://www.instagram.com/fernandaromaogerhardt/'},
        {icon: <FaWhatsapp color='black' size={25} />, link: 'https://api.whatsapp.com/send?phone=5543999975547&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o.%20Qual%20%C3%A9%20sua%20disponibilidade%3F'}
    ]
    return (
        <div className='flex w-full px-[10%] items-center justify-between h-[5rem]'>
            <div className='w-52'>
                <Image src={require('../../../../public/assinatura3.png')}/>
            </div>
            <div className='flex flex-row gap-4'>
                {socialMedia.map((data, index) => 
                <div key={index} onClick={() => open(data.link)} className='rounded-full cursor-pointer bg-white p-2'>
                    {data.icon}
                </div>
                )}

            </div>
        </div>
    )
}

export default Footer