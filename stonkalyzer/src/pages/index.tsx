import styles from '@/styles/Home.module.css'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>Stonkalyzer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <div>
          <div className="text-white">Hello, world!</div>
        </div>
      </main>
    </>
  )
}
