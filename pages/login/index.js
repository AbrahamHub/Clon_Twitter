import Head from 'next/head'
import Link from 'next/link'

export default function Login({userName}){
    return(
        <>
        <Head>
        <title>Twitter</title>
      </Head>
      <main>
        <h1>TimeLine Hola: {userName}</h1>
        <Link href="/"><a>Regresar♐</a></Link></main>
        </>
    )
}
Login.getInitialProps = () => {
  return fetch('http://localhost:3000/api/hello')
  .then(res => res.json())
}