import React from 'react'
import { FaHandshakeSimple } from "react-icons/fa6";


const ThirdSection = () => {
    const conquistas = [
        {icon: <FaHandshakeSimple size={50}/>, text: "Clientes atendidos" , number: "10"},
        {icon: <FaHandshakeSimple size={50}/>, text: "Clientes atendidos" , number: "10"},
        {icon: <FaHandshakeSimple size={50}/>, text: "Clientes atendidos" , number: "10"},
    ]

    return (
        <div className='flex flex-col px-[10%] py-[5rem] w-full items-center justify-center bg-gray-200'>
            <div className='flex flex-col w-full h-full items-center justify-center '>
                <div className='flex justify-center items-center px-2 bg-gray-300 p-2 rounded-md'>
                    <p className='text-black font-light tracking-[3px]'>CONQUISTAS</p>
                </div>
                <div className='flex flex-col mt-10 w-full items-center justify-center'>
                    <p className='text-white text-3xl'>
                        Nossos números
                    </p>
                    <div className='flex lg:flex-row flex-col gap-10 mt-10'>
                        {conquistas.map((data, index) => 
                        <div className='bg-gradient-to-br from-[black]/80 to-[gray]/50 rounded-lg w-[20rem] h-[20rem] border-[1px] ' key={index}>
                        </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ThirdSection