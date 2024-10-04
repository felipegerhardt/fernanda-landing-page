import React from 'react'
import Image from 'next/image'

const SecondSection = () => {

    const text = `Meu nome é Fernanda Romão Gerhardt, sou advogada especialista em Contratos e
    Proteção de Dados Pessoais.
    
    Com quase 5 anos dedicados exclusivamente à consultoria jurídica empresarial,
    tenho tido a oportunidade de atender empresas de variados portes e setores,
    desde Microempreendedores Individuais (MEI) até Sociedades Anônimas (S.A).
    
    Meu método de trabalho consiste em compreender minuciosamente o negócio de
    cada cliente e, em seguida, desenvolver soluções jurídicas estratégicas sob
    medida, visando impulsionar o crescimento e o desenvolvimento da empresa
    dentro dos parâmetros legais.
    
    Seja por meio da elaboração de contratos e demais documentos ou da adequação
    à Lei Geral de Proteção de Dados, comprometo-me a oferecer um serviço de
    excelência que não apenas agregue valor, mas também proporcione segurança
    jurídica aos meus clientes.`
    
    return (
        <div className='flex w-full h-[50rem] px-[12%] py-[7rem] bg-white items-center justify-center'>
            <div className='flex flex-col w-full h-full'>
                <div className='flex justify-center items-center w-36 bg-gray-300 p-2 rounded-md'>
                    <p className='text-black font-light tracking-[3px]'>SOBRE NÓS</p>
                </div>

                <div className='flex flex-row w-full items-center justify-between'>
                    <div className='flex flex-col mt-10 text-black'>
                        <p className='text-3xl'>
                            Conheça mais da Fernanda
                        </p>
                        <div className='w-full mt-10'>
                            <p className='text-xl whitespace-pre-line'>
                              {text}
                            </p>
                        </div>
                    </div>
                    <div className='w-[30rem] items-center justify-center'>
                        <Image className='rounded-2xl drop-shadow-[0_15px_15px_rgba(0,0,0,0.65)]' src={require('../../../../public/linda.jpeg')}/>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SecondSection