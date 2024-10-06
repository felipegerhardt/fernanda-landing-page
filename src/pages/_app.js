import '../styles/globals.css'
import { Montserrat, Cinzel } from '@next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap', // Optional to improve loading performance
});


export default function App({ Component, pageProps }) {
  return <div className={montserrat.className} ><Component {...pageProps} /></div>
}
