import { Inter } from 'next/font/google';
import Link from "next/link";
import classes from 'src/components/Header/Header.module.css'

const inter = Inter({ subsets: ['latin'] })

export function Header(props) {
  return (
    <header className={classes.header}>
        <Link href="/" legacyBehavior>
            <a className={classes.anchor}>Index Page</a>
        </Link>
        <Link href="/about" legacyBehavior>
            <a className={classes.anchor}>About Page</a>
        </Link>
        <Link href="/test" legacyBehavior>
            <a className={classes.anchor}>Test Page</a>
        </Link>
        <Link href="/todos" legacyBehavior>
            <a className={classes.anchor}>Todos Page</a>
        </Link>
    </header>
  )
}
