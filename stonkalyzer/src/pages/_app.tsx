import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>Stonkalyzer</title>
        <link rel="shortcut icon" href="/Stonkalyzer_favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <Header/>
        <Component {...pageProps} />
      </main>
    </>
  );
}
