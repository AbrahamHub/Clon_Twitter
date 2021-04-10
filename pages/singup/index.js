import Head from 'next/head'
import Session from '../../components/Session'
export default function SingUp(){
    return(
        <>
        <Head>
        <title>Twistter Crear una cuenta</title>
      </Head>
    <main>
        <Session clas="Registrate"/>
    </main>
        </>
    )
}