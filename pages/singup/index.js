import Head from 'next/head'
import {loginWithTwitter} from '../../firebase/client'
export default function SingUp(){
    const handleClick = () => {
        loginWithTwitter().then(user => {
            console.log(user)
        }).catch(err => {console.log(err)})
    }
    return(
        <>
        <Head>
        <title>Twitter Crear una cuenta</title>
      </Head>
    <main>
        <div>
        <h1>Si</h1>
        <button onClick={handleClick}>Twitter</button>
        </div>
    </main>
        </>
    )
}