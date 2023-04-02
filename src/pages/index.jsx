import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import classes from 'src/styles/Home.module.css';
import { Footer } from 'src/components/Footer';
import { Main } from 'src/components/Main';
import { Header } from 'src/components/Header';
import { useCallback } from 'react';

const inter = Inter({ subsets: ['latin'] })

 

export default function Home() {

  const foooo = 1;
  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foooo);
  }, []);

  return (
     <> {/* <React.Fragment> と同じ意味 import React from 'react を呼び出してから使う*/}
     <div className={classes.container}>
        <Head>
          <title>Index Page</title>
        </Head>
        <Header />
        <a 
          href="/about"
          onClick={handleClick}
        >
          ボタン
        </a>
        <Main page="index"/>
        <Footer name="COLORSDRIP"/>
     </div>
    </>
  )
}