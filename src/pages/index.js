import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FirstSection from './components/FirstSection'
import SecondSection from './components/SecondSection'


export default function Home() {
  return (
      <>
        <Head>

        </Head>
        <main className='flex flex-col w-full'>
          <Navbar/>
          <HeroSection />
          <FirstSection />
          <SecondSection />
          
        </main>
      </>
  )
}
