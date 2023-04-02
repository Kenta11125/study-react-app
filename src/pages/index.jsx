import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import classes from 'src/styles/Home.module.css';
import { Footer } from 'src/components/Footer';
import { Main } from 'src/components/Main';
import { Header } from 'src/components/Header';
import { useEffect,useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

 

export default function Home() {

  const [count, setCount] = useState(1);

  const handleClick = (e) => {
    setCount((fooo) => fooo + 1);//これでも一緒　アロー関数
    setCount((fooo) => fooo + 1);//これでも一緒　アロー関数
    // setFoo(function(foo) {
    //   return foo + 1;
    // });

  };
  useEffect(() => {
    document.body.style.backgroundColor = "darkblue";

    return () => {
      document.body.style.backgroundColor = "";
    };
  },[]);
  return (
     <> {/* <React.Fragment> と同じ意味 import React from 'react を呼び出してから使う*/}
     <div className={classes.container}>
        <Head>
          <title>Index Page</title>
        </Head>
        <Header />
        <h1>{count}</h1>
          <button onClick={handleClick}>
            ボタン
          </button>
        <Main page="index"/>
        <Footer name="COLORSDRIP"/>
     </div>
    </>
  )
}
