import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Login from '../views/Login'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Auth App - NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Login/>
      </main>
    </div>
  )
}
