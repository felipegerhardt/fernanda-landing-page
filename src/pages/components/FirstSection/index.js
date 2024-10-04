import React from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { motion } from 'framer-motion';

const FirstSection = () => {

  const data = [
      {title: 'Atendimento personalizado', text: "Acreditamos que a transparência é a base de qualquer relacionamento sólido. Comunicamos de maneira clara e acessível, garantindo que você compreenda plenamente suas opções legais e possa tomar decisões informadas."},
      {title: 'Atendimento personalizado', text: "Acreditamos que a transparência é a base de qualquer relacionamento sólido. Comunicamos de maneira clara e acessível, garantindo que você compreenda plenamente suas opções legais e possa tomar decisões informadas."},
      {title: 'Atendimento personalizado', text: "Acreditamos que a transparência é a base de qualquer relacionamento sólido. Comunicamos de maneira clara e acessível, garantindo que você compreenda plenamente suas opções legais e possa tomar decisões informadas."},
      {title: 'Atendimento personalizado', text: "Acreditamos que a transparência é a base de qualquer relacionamento sólido. Comunicamos de maneira clara e acessível, garantindo que você compreenda plenamente suas opções legais e possa tomar decisões informadas."},
      {title: 'Atendimento personalizado', text: "Acreditamos que a transparência é a base de qualquer relacionamento sólido. Comunicamos de maneira clara e acessível, garantindo que você compreenda plenamente suas opções legais e possa tomar decisões informadas."},
      {title: 'Atendimento personalizado', text: "Acreditamos que a transparência é a base de qualquer relacionamento sólido. Comunicamos de maneira clara e acessível, garantindo que você compreenda plenamente suas opções legais e possa tomar decisões informadas."},
      {title: 'Atendimento personalizado', text: "Acreditamos que a transparência é a base de qualquer relacionamento sólido. Comunicamos de maneira clara e acessível, garantindo que você compreenda plenamente suas opções legais e possa tomar decisões informadas."},
      {title: 'Atendimento personalizado', text: "Acreditamos que a transparência é a base de qualquer relacionamento sólido. Comunicamos de maneira clara e acessível, garantindo que você compreenda plenamente suas opções legais e possa tomar decisões informadas."},
  ]

  return (
    <div className='flex flex-col w-full h-[50rem] lg:px-[10%] justify-center items-center text-white
    bg-gradient-to-tr from-[rgba(21,25,32,255)] to-[#02020fcd]'>

      <div className='flex flex-col items-center justify-center'>

        <div className='flex flex-row'>
          <p className='text-4xl w-1/2'>
            Impulsionamos o sucesso de sua empresa, enquanto cuidamos das complexidades legais.
          </p>
          <div className='flex items-end justify-end w-1/2'>

            <div className='flex flex-row w-20 justify-between'>
              <motion.div className='rounded-full p-1 bg-white cursor-pointer'>
                <FaArrowLeft color='black' size={25}/>
              </motion.div>
              <motion.div className='rounded-full p-1 bg-white cursor-pointer'>
                <FaArrowRight color='black' size={25}/>
              </motion.div>
            </div>

          </div>
        </div>

        <div className='flex flex-row items-center justify-start w-[78rem] h-[30rem] gap-4 mt-20 carousel carousel-end'>
          {data.map((info, index) => 
          <div key={index} className='flex flex-col snap-center carousel-item w-[20rem] h-[20rem] p-10 border-[1px] border-[#414143] rounded-xl bg-[rgba(34,40,47,255)]'>
            <p className='text-3xl font-medium'>{info.title}</p>
            <p className='mt-10 text-lg'>{info.text}</p>
          </div>
          )}
        </div>
      
      </div>
    </div>
  )
}

export default FirstSection;
