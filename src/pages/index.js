import Head from 'next/head'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FirstSection from './components/FirstSection'
import SecondSection from './components/SecondSection'
import ThirdSection from './components/ThirdSection'
import FourthSection from './components/FourthSection'
import Footer from './components/Footer'
export default function Home() {
  return (
      <div>
        <Head>

        </Head>
        <main className='flex flex-col w-full'>
          <Navbar/>
          <HeroSection />
          <FirstSection />
          <SecondSection />
          <ThirdSection />
          <FourthSection />
          <Footer />
          
        </main>
      </div>
  )
}
