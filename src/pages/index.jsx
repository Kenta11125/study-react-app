import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import classes from 'src/styles/Home.module.css';
import { Footer } from 'src/components/Footer';
import { Main } from 'src/components/Main';
import { Header } from 'src/components/Header';
import { useEffect,useState,useCallback } from 'react';

const inter = Inter({ subsets: ['latin'] })

 

export default function Home() {

  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((foo) => foo + 1);//これでも一緒　アロー関数
    }
    // setFoo(function(foo) {
    //   return foo + 1;
    // });

  }, [count]);

  const handleChange = useCallback((foo) => {
    if (foo.target.value.length > 5) {
      alert('5文字以内にしてください');
      return;
    }
      setText(foo.target.value.trim());
  }, []);

  const handleDisplay = useCallback(() => {
                // setIsShow((isShow) => {
              //   // if(isShow) {
              //   //   return false;
              //   // }
              //   // return true;
              //   // return isShow ? false : true;
              //   return !isShow;
              // });
              setIsShow((isShow) => !isShow);
  }, []);

  useEffect(() => {
    // console.log(`マウント時： ${count}`);
    document.body.style.backgroundColor = "darkblue";

    return () => {
      // console.log(`アンマウント時： ${count}`); //バックスラッシュ
      document.body.style.backgroundColor = "";
    };
  },[]);



  return (
     <> {/* <React.Fragment> と同じ意味 import React from 'react を呼び出してから使う*/}
     {/* JSXはreturn文の中でifが使えないので三項演算子で記述する必要がある */}
     <div className={classes.container}>
        <Head>
          <title>Index Page</title>
        </Head>
        <Header />
        {isShow ? <h1>{count}</h1> : null}
          <button onClick={handleClick}>
            ボタン
          </button>
          <br></br>
          <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
          <br></br>
          <input 
          type="text" 
          value={text} 
          onChange={handleChange}
          />
        <Main page="index"/>
        <Footer name="COLORSDRIP"/>
     </div>
    </>
  )
}
