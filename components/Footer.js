
import { Inter } from 'next/font/google'
import classes from './Footer.module.css'

const inter = Inter({ subsets: ['latin'] })

export function Footer(props) {
  return (
    <footer className={classes.footer}>
        <a>
            Powered by {props.name}
        </a>
    </footer>
  )
}
