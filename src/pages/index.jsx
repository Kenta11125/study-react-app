import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import classes from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";

const inter = Inter({ subsets: ["latin"] });

const Home = (props) => {
  return (
    <>
      {" "}
      {/* <React.Fragment> と同じ意味 import React from 'react を呼び出してから使う*/}
      {/* JSXはreturn文の中でifが使えないので三項演算子で記述する必要がある */}
      <div className={classes.container}>
        <Head>
          <title>Index Page</title>
        </Head>
        <Header />

        {props.isShow ? <h1>{props.count}</h1> : null}
        <button onClick={props.handleClick}>クリック</button>
        <br></br>
        <button onClick={props.handleDisplay}>
          {props.isShow ? "非表示" : "表示"}
        </button>

        <br></br>
        <input type="text" value={props.text} onChange={props.handleChange} />
        <br></br>
        <button onClick={props.handleAdd}>配列追加</button>
        <ul>
          {props.array.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>

        <Main page="index" />
        <Footer name="COLORSDRIP" />
      </div>
    </>
  );
};

export default Home;
