import Head from 'next/head'
import Link from 'next/link'
import FooterLink from '../components/FooterLink'
import Data from '../public/Data/footerdata.json'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twistter</title>
        <link className="logo" rel="icon" href="/T-Icon-blue.svg"/>
      </Head>

      <main>
      <div className={styles.conright}>
        <div className={styles.secmain}>
          <img src="/T-Icon-blue.svg" width="45px"/>
          <h1 className={styles.h1}>Lo que está pasando ahora</h1>
          <h2 className={styles.h2}>Únete a Twistter hoy mismo.</h2>
          <Link href="/singup"><a><button className={styles.reg}>Regístrate</button></a></Link>
          <Link href="/login"><a><button className={styles.is}>Iniciar sesión</button></a></Link>
        </div>
      </div>
      <div className={styles.conleft}>
        <img className={styles.twilog} src="/T-Icon.svg"/>
      </div>
      <footer className={styles.footer}>
        {/* Hacer un componente <FooterLink url={this.Data.map()} text={this.Data}></FooterLink>*/} 
      </footer>
      </main>
    </div>
    
  )
}