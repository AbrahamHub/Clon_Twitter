import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Twitter</title>
        <link className="logo" rel="icon" href="/T-Icon.svg"/>
      </Head>

      <main className={styles.main}>
        <img src="/T-Icon.svg"/>
        <Link href="/timeline"><a>/HOME</a></Link>
      </main>
    </div>
  )
}
