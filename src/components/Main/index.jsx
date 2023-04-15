
import Image from 'next/image'
import { Inter } from 'next/font/google'
import classes from 'src/components/Main/Main.module.css';
import { Links } from 'src/components/Links/';
import { Logo } from 'src/components/MainLogo';
import { Headline } from 'src/components/Headline';
import React, { useState, useCallback } from 'react';

const inter = Inter({ subsets: ['latin'] })

const ITEMS = [
  { href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Docs",
    discription: "Find in-depth information about Next.js features and&nbsp;API.",
  },
  { href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
  title: "Learn",
  discription: "Learn about Next.js in an interactive course with&nbsp;quizzes!",
  },
  { href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
  title: "Templates",
  discription: "Discover and deploy boilerplate example Next.js&nbsp;projects.",
  },
  { href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
  title: "Deploy",
  discription: "Instantly deploy your Next.js site to a shareable URL with&nbsp;Vercel.",
  },
  // { href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
  // title: "Deploy <span>-&gt;</span>",
  // discription: "Instantly deploy your Next.js site to a shareable URL with&nbsp;Vercel.",
  // },
];

export const Main = (props) => {
  const [items,setItems] = useState(ITEMS);
  const handleReduce = useCallback(() => {
    setItems((prevItem) => {
        return prevItem.slice(0,prevItem.length - 1);
      });
  }, []);
  return (
     <> {/* <React.Fragment> と同じ意味 import React from 'react を呼び出してから使う*/}
      <main className={classes.main}>
        <div className={classes.description}>
          <Headline page={props.page} 
            // onClick={ () => alert('クリック！')}
            >
            <code className={classes.code}>pages/{props.page}.page.tsx</code>{/* childrenに渡るデータ　1つのみだったらタグで囲んだ中のデータがわたる*/}
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
            className={classes.vercelLogo}
            width={100}
            height={24}
            priority
            />
        </a>
        </div>
        </div>
        <Logo />
        <Links items={items} handleReduce={handleReduce} />
      </main>
    </>
  )
}
