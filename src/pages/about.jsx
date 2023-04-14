import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'src/styles/Home.module.css'
import { Footer } from 'src/components/Footer'
import { Main } from 'src/components/Main';
import { Header } from 'src/components/Header';

const inter = Inter({ subsets: ['latin'] })

export default function About(props) {

  const {
    // count,
    doubleCounter,
    isShow,
    handleClick,
    handleDisplay,
    text,
    array,
    handleChange,
    handleAdd,
  } = props;

  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />

      {/* {isShow ? <h1>{count}</h1> : null} */}
      {isShow ? <h1>{doubleCounter}</h1> : null}
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
          <br></br>
          <button onClick={handleAdd}>配列追加</button>
          <ul>
            {array.map(item => {
              return <li key={item}>{item}</li>;
            })}
          </ul>

      <Main page="about"/>
      <Footer name="COLORSDRIP"/>
    </>
  )
}
