import { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout';
import Image from 'next/image';
import img from '../public/img.png'
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }:AppProps) => (
  <Layout>
    <Head>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
    </Head>
    <main>
     <Component {...pageProps} />
    </main>
    <Image src={img} style={{width: '100vw', height: 'auto'}} alt='preview' placeholder='blur' />
  </Layout>
);

export default MyApp;
