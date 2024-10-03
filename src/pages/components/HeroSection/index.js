import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className='flex flex-col w-full h-screen items-center justify-center'>
        <div className='flex flex-col w-full items-center justify-center'>

            <div className='flex flex-col w-full h-screen absolute bg-[rgba(0,0,0,0.5)]'>
                <Image className='-z-50' layout="fill" objectFit="fill" alt='building picture' src={require('../../../../public/buildings-photo.jpg')} />
            </div>

            <div className='flex flex-col items-center justify-center z-50'>
                <Image src={require('../../../../public/assinatura.png')}/>
                <p className='text-white text-5xl'>
                    Solucione seus problemas jurídicos e foque na sua empresa
                </p>
            </div>

        </div>
    </div>
  )
}

export default HeroSection