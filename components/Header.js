import { Inter } from 'next/font/google';
import Link from "next/link";
import classes from './Header.module.css'

const inter = Inter({ subsets: ['latin'] })

export function Header(props) {
  return (
    <header className={classes.header}>
        <Link href="/" legacyBehavior>
            <a className={classes.anchor}>Index</a>
        </Link>
        <Link href="/about" legacyBehavior>
        <a className={classes.anchor}>About</a>
        </Link>
    </header>
  )
}
