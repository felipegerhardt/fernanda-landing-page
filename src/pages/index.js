import Head from 'next/head'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Diferenciais from './components/Diferenciais'
import Sobre from './components/Sobre'
import Conquistas from './components/Conquistas'
import WhatsappFloating from './components/WhatsappFloating'
import Solucoes from './components/Solucoes'
import Footer from './components/Footer'
import Contato from './components/Contato'

export default function Home() {
  
  
  return (
      <div className='max-w-[2000px'>
        <Head>

        </Head>
        <main className='flex flex-col w-screen ]'>
          <Navbar/>
          <HeroSection />
          <Diferenciais/>
          <Sobre/>
          {/* <Conquistas /> */}
          <Solucoes/>
          <Contato/>
          <Footer />
          <WhatsappFloating />
        </main>
      </div>
  )
}
