import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import { Button } from '@/components/Button'

import { stock } from '@/util/api'


export default function Home() {

  //stock("AAPL");

  return (
    <>
      <main className={styles.main}>
        <div>
          <div className="text-white">Hello, world!</div>
          <Button onclick={() => console.log("This button was clicked!")}/>
        </div>
      </main>
    </>
  )
}
