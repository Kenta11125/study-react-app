import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export function Headline(props) {
  return (
    <div>
        <p>
        <span className={styles.pagetitle}>{props.page} page&nbsp;</span>
        <code className={styles.code}>pages/{props.page}.tsx</code>
        </p>
    </div>
  )
}
