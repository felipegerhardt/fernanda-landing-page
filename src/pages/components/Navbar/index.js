import React, { useRef } from 'react'
import { FiMenu } from "react-icons/fi";
import { motion } from 'framer-motion';

const Navbar = () => {

    // Scroll handler function
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const refs = [
        { name: 'Diferenciais', href: 'diferenciais' },
        { name: 'Sobre', href: 'sobre' },
        { name: 'Soluções', href: 'solucoes' },
        { name: 'Contato', href: 'contato' },
    ];

    return (
        <div className='lg:absolute fixed flex w-full z-50 justify-between text-white items-center backdrop-blur-lg 
        bg-gradient-to-tr from-[#143c40]/30 to-[#06292d]/30 lg:px-[10%] px-[10%] lg:py-[20px] py-[20px]'>

            <details className='flex w-fit dropdown'>
                <motion.summary className='flex w-min'
                    whileHover={{ scale: 1.05 }}>
                    <FiMenu className='cursor-pointer' size={40} color={'white'} />
                </motion.summary>

                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    {refs.map((ref, i) =>
                        <li className='h-12 text-lg' key={i}>
                            <a
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleScroll(ref.href);
                                }}
                                href={`#${ref.href}`}
                            >
                                {ref.name}
                            </a>
                        </li>
                    )}
                </ul>
            </details>

            <div className='flex w-fit justify-end'>
                <motion.div className='flex items-center justify-center cursor-pointer border-[1px] w-[15rem] p-3 rounded-sm
                bg-gradient-to-tr from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0.3)] '
                    whileHover={{ scale: 1.02 }}
                    onClick={() => open('https://api.whatsapp.com/send?phone=5543999975547&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o.%20Qual%20%C3%A9%20sua%20disponibilidade%3F')}>
                    <p className='text-lg'>
                        Entre em contato
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default Navbar;
