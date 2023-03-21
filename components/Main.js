
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css';
import { Links } from '../components/Links';
import { Logo } from '../components/MainLogo';
import { Headline } from '../components/Headline';

const inter = Inter({ subsets: ['latin'] })

export function Main(props) {
  return (
     <> {/* <React.Fragment> と同じ意味 import React from 'react を呼び出してから使う*/}
      <main className={styles.main}>
        <div className={styles.description}>
          <Headline page={props.page} 
            // onClick={ () => alert('クリック！')}
            >
            <code className={styles.code}>pages/{props.page}.page.tsx</code>
          </Headline>
          <div>
        <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
        >
            By{' '}
            <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
            />
        </a>
        </div>
        </div>
        <Logo />
        <Links />
      </main>
    </>
  )
}
