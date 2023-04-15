import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";

const inter = Inter({ subsets: ["latin"] });

const About = (props) => {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />

      {/* {isShow ? <h1>{count}</h1> : null} */}
      {props.isShow ? <h1>{props.doubleCounter}</h1> : null}
      <button onClick={props.handleClick}>ボタン</button>
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

      <Main page="about" />
      <Footer name="COLORSDRIP" />
    </>
  );
};

export default About;
