
import { Inter } from 'next/font/google'
import classes from 'src/components/Links/Links.module.css'


const inter = Inter({ subsets: ['latin'] })



export function Links({ items, handleReduce }) {

  return (
    <>
        <div className={classes.grid}>
          <button onClick ={handleReduce} >消す</button>
          <br></br>
          <br></br>
          {items.map((item) => {
            return(
              <a
                key={item.href}
                href={item.href}
                className={classes.card}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className={inter.className}> {item.title}
                  <span>-&gt;</span>
                </h2>
                <p className={inter.className}> {item.discription} </p>
            </a>
            )
          })}
        </div>
    </>
  )
}
