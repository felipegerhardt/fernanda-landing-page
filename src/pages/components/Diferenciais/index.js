import React from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { motion } from 'framer-motion';

const Diferenciais = () => {

  const data = [
      {title: 'Atendimento para todo o Brasil', text: "Acreditamos que a transparência é a base de qualquer relacionamento sólido. Comunicamos de maneira clara e acessível, garantindo que você compreenda plenamente suas opções legais e possa tomar decisões informadas."},
      {title: 'Atendimento personalizado', text: "Acreditamos que a transparência é a base de qualquer relacionamento sólido. Comunicamos de maneira clara e acessível, garantindo que você compreenda plenamente suas opções legais e possa tomar decisões informadas."},
      {title: 'Atendimento personalizado', text: "Acreditamos que a transparência é a base de qualquer relacionamento sólido. Comunicamos de maneira clara e acessível, garantindo que você compreenda plenamente suas opções legais e possa tomar decisões informadas."},
      {title: 'Atendimento personalizado', text: "Acreditamos que a transparência é a base de qualquer relacionamento sólido. Comunicamos de maneira clara e acessível, garantindo que você compreenda plenamente suas opções legais e possa tomar decisões informadas."},
  ]

  return (
    <div id='diferenciais' className='flex flex-col w-full py-[5rem] justify-center items-center text-white
    bg-gradient-to-tr from-[#143c40] to-[#06292d]'>

      <div className='flex flex-col w-full items-center justify-center'>

        <div className='flex lg:flex-row flex-col lg:items-start items-center w-full lg:px-[12%]'>
          <p className='lg:text-4xl text-xl lg:w-1/2 w-[80%]'>
            Impulsionamos o sucesso de sua empresa, enquanto cuidamos das complexidades legais.
          </p>

          <div className='flex items-end lg:justify-end justify-center lg:w-1/2 w-full'>

            <div className='flex flex-row w-20 justify-between lg:mt-0 mt-10'>
              <motion.div className='rounded-full p-1 bg-white cursor-pointer'>
                <FaArrowLeft color='black' size={25}/>
              </motion.div>
              <motion.div className='rounded-full p-1 bg-white cursor-pointer'>
                <FaArrowRight color='black' size={25}/>
              </motion.div>
            </div>

          </div>
        </div>

        <div className='flex flex-row items-center justify-start lg:w-3/4 w-[22rem] h-[30rem] gap-10 lg:mt-20 mt-10 carousel carousel-end'>
          {data.map((info, index) => 
          <div key={index} className='flex flex-col text-[#04272b] snap-center carousel-item lg:w-[20rem] w-[15rem] h-[20rem] p-10 border-[1px] border-[#414143] rounded-xl bg-[white]'>
            <div className='lg:text-3xl text-xl font-medium'>{info.title}</div>
            <p className='mt-10 lg:text-lg text-md'>{info.text}</p>
          </div>
          )}
        </div>
      
      </div>
    </div>
  )
}

export default Diferenciais;
