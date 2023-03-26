import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'src/styles/Home.module.css'
import { Footer } from 'src/components/Footer'
import { Main } from 'src/components/Main';
import { Header } from 'src/components/Header';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <Main page="about"/>
      <Footer name="COLORSDRIP"/>
    </>
  )
}
