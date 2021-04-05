import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter</title>
        <link className="logo" rel="icon" href="/T-Icon-blue.svg"/>
      </Head>

      <main>
      <div className={styles.conright}>
        <div className={styles.secmain}>
          <img src="/T-Icon-blue.svg" width="45px"/>
          <h1 className={styles.h1}>Lo que está pasando ahora</h1>
          <h2 className={styles.h2}>Únete a Twitter hoy mismo.</h2>
          <Link href="/singup"><a><button className={styles.reg}>Regístrate</button></a></Link>
          <Link href="/login"><a><button className={styles.is}>Iniciar sesión</button></a></Link>
        </div>
      </div>
      <div className={styles.conleft}>
        <img className={styles.twilog} src="/T-Icon.svg"/>
      </div>
      <footer className={styles.footer}>
        {/* Hacer un componente*/}
        <a className={styles.footext} href="https://about.twitter.com" target="_blank">Acerca de</a>
        <a className={styles.footext} href="https://help.twitter.com" target="_blank">Centro de ayuda</a>
        <a className={styles.footext} href="https://twitter.com/tos" target="_blank">Condiciones de Servicio</a>
        <a className={styles.footext} href="https://twitter.com/privacy" target="_blank">Política de Privacidad</a>
        <a className={styles.footext} href="https://support.twitter.com/articles/20170514" target="_blank">Política de cookies</a>
        <a className={styles.footext} href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html" target="_blank">Información de anuncios</a>
        <a className={styles.footext} href="https://blog.twitter.com" target="_blank">Blog</a>
        <a className={styles.footext} href="https://status.twitterstat.us" target="_blank">Estado</a>
        <a className={styles.footext} href="https://careers.twitter.com" target="_blank">Empleos</a>
        <a className={styles.footext} href="https://about.twitter.com/press/brand-assets" target="_blank">Recursos para marcas</a>
        <a className={styles.footext} href="https://ads.twitter.com/?ref=gl-tw-tw-twitter-advertise" target="_blank">Publicidad</a>
        <a className={styles.footext} href="https://marketing.twitter.com" target="_blank">Marketing</a>
        <a className={styles.footext} href="https://business.twitter.com" target="_blank">Twitter para empresas</a>
        <a className={styles.footext} href="https://developer.twitter.com" target="_blank">Desarrolladores</a>
        <a className={styles.footext} href="https://twitter.com/i/directory/profiles" target="_blank">Guía</a>
        <a className={styles.footext} href="/settings" target="_blank">Configuración</a>
        <a className={styles.footext}>© 2021 Twitter, Inc.</a>
      </footer>
      </main>
    </div>
  )
}
