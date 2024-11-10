import React from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp, } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { TfiWorld } from "react-icons/tfi";
import Image from 'next/image';



const Contato = () => {
    
    const size = 25;

    const contatos = [
        {icon: <FaWhatsapp size={size}/>, info: '(43) 99997-5547', link: "https://api.whatsapp.com/send?phone=5543999975547&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o.%20Qual%20%C3%A9%20sua%20disponibilidade%3F"},
        {icon: <AiOutlineMail size={size}/>, info: 'romaogerhardt.adv@gmail.com',},
        {icon: <TfiWorld size={size}/>, info: 'Atendimento Online em todo Brasil',},
    ]

    return (
        <div id='contato' className='flex w-full h-[45rem] z-0 overflow-hidden items-center justify-start bg-white'>

            <div className='absolute overflow-hidden -z-10 lg:flex hidden bg-gradient-to-b from-[#143c40] to-[#06292d] via-[#20565b] bg-gray-200 flex-col w-1/3 h-[45rem]'>
            </div>

            <div className='flex w-full h-full items-start justify-start px-[12%] lg:pl-[21%]'>

                <div className='flex flex-col lg:pl-[35%] h-full lg:px-20 py-32 items-start justify-between'>
                    <p className='text-black text-4xl font-medium'>
                        Agende uma conversa com nosso time
                    </p>
                    {contatos.map((canal, i) =>
                    <div key={i} className='flex flex-row w-fit gap-4 items-center justfy-center text-black cursor-pointer'
                        >
                        {canal.icon}
                        <a className='lg:text-lg text-md' onClick={() => i == 0 ? open(canal.link) : null}>{canal.info}</a>
                    </div>
                    )}
                    
                </div>


            </div>

        </div>
    )
}

export default Contato