import React from 'react'
import { FaFileContract, FaUserShield, FaGlobe } from "react-icons/fa";
import { PiBuildingLight } from "react-icons/pi";

import { motion } from 'framer-motion';


const Solucoes = () => {

  const size = 40;
  
  const solucoes = [
    {icon: <PiBuildingLight color={'white'} size={size} /> , title: "Direito Societário", text: "Focamos em auxiliar empresas a crescer e se adaptar ao mundo dos negócios, oferecendo desde a fundação, o desenvolvimento de estratégias operacionais e a prevenção de conflitos societários. "},
    {icon: <FaFileContract color={'white'} size={size} />, title: "Contratos Empresariais", text: "Focamos em auxiliar empresas a crescer e se adaptar ao mundo dos negócios, oferecendo desde a fundação, o desenvolvimento de estratégias operacionais e a prevenção de conflitos societários. "},
    {icon: <FaUserShield color={'white'} size={size} />, title: "Proteção de Dados (LGPD)", text: "Especialistas em resolver problemas jurídicos no mundo digital, como contratos mal redigidos, registro de marca e gestão de conteúdo digital."},
    {icon: <FaGlobe color={'white'} size={size} />, title: "Internacionalização de Empresas", text: "Prestamos serviços jurídicos para empresas que querem expandir globalmente, incluindo documentação e estratégias legais para mercados internacionais."}


  ]

  return (
    <div id='solucoes' className='flex w-full px-[12%] py-[7rem] items-center justify-center bg-gradient-to-tr from-[#143c40] to-[#06292d]'>
      <div className='flex flex-col w-full h-full'>
          <div className='flex w-fit justify-center items-center px-2 bg-gray-300 p-2 rounded-md'>
              <p className='text-black font-light tracking-[3px]'>SOLUÇÕES</p>
          </div>
          <div className='mt-4 text-white'>
              <p>Soluções jurídicas para o seu negócio</p>
          </div>

          <div className='grid lg:grid-cols-2 grid-cols-1 mt-2 py-10 gap-10 place-items-center'>
            {solucoes.map((solucao, key) => 
            <div className='flex flex-col items-center justify-between border-[1px] border-white rounded-md lg:px-10 px-5 py-20' key={key}>
              {solucao.icon}
              <h className='text-2xl text-white font-semibold mt-4 lg:text-left text-center'>{solucao.title}</h>
              <p className='mt-4 text-white text-lg text-center'>{solucao.text}</p>
            </div>
            )}
          </div>

          <div className="relative flex w-full h-[40rem] rounded-2xl bg-gradient-to-tr from-[#e5e7e7] to-[#f2f3f3]">
            <div className="flex flex-col w-full h-full p-[5rem] lg:px-[10rem] px-[20px] items-center justify-evenly rounded-2xl">

              <div className='flex flex-col items-center justify-center w-full'>
                <p className='lg:text-5xl text-xl text-black font-medium text-center leading-relaxed'>Potencialize o sucesso do seu negócio com a expertise do Romão Gerhardt</p>
              </div>
              
              <motion.div className='flex flex-col rounded-sm bg-gradient-to-r from-[#143c40] to-[#06292d] py-5 lg:px-20 px-10 cursor-pointer
               shadow-[5px_5px_0px_1px_rgba(0,0,0,1)]'
                initial={{
                  boxShadow: "1px 1px 0px 1px rgba(0,0,0,1)",
                }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "5px 5px 0px 1px rgba(0,0,0,1)"
                }}
                
                onClick={() => open('https://api.whatsapp.com/send?phone=5543999975547&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o.%20Qual%20%C3%A9%20sua%20disponibilidade%3F')}>
                <p className='text-white text-lg font-semibold'>Agendar reunião</p>
              </motion.div>
            </div>
          </div>



        </div>
    </div>
  )
}

export default Solucoes