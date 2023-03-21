import React from 'react';
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export function Headline(props) {
  return (
    <div>
        <p>
        <span className={styles.pagetitle}>{props.page} page&nbsp;</span>{props.children}
        </p>
        {/* <button onClick={props.onClick}>ボタン</button> */}
    </div>
  )
}
