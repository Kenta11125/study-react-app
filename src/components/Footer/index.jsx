
import { Inter } from 'next/font/google'
import classes from 'src/components/Footer/Footer.module.css'

const inter = Inter({ subsets: ['latin'] })

export const Footer = (props) => {
  return (
    <footer className={classes.footer}>
        <a>
            Powered by {props.name}
        </a>
    </footer>
  )
}
