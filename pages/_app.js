import '../styles/globals.css'
import Layout from '../common/Layout';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Roboto} from '@next/font/google';

const roboto = Roboto({
  weight: ['400', '700'],
  styles: ['normal', 'italic'],
  subsets: ['latin'], 
})


// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
function MyApp({ Component, pageProps }) {
  return (
    <Layout footerstatus={pageProps.footerstatus}>
      <div className={roboto.className}>
        <Component {...pageProps} />
        </div>
    </Layout>
  
  )
 
}

export default MyApp
