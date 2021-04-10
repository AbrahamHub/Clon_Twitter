import React from 'react';
import {loginWithTwitter, loginWithGitHub} from '../firebase/client'
import styles from '../styles/Session.module.css'

const handleClickT = () => {
    loginWithTwitter().then(user => {
        console.log(user)
    }).catch(err => {console.log(err)})
}
const handleClickG = () => {
    loginWithGitHub().then(user => {
        console.log(user)
    }).catch(err => {console.log(err)})
}
class Session extends React.Component {
    render() {
        return (
        <div className={styles.main}>
        <div className={styles.sec}>
            <button className={styles.button} onClick={handleClickT}><img src="/T-Icon.svg" alt="logo-twitter"/>{this.props.clas} con Twitter</button>
            <button className={styles.button} onClick={handleClickG}><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="logo-github"/>{this.props.clas} con GitHub</button>
            <form action="">
                <input type="email" autocomplete="email" placeholder="Correo"/>
                <input type="password" placeholder="Contraseña"/>
                <button  className={styles.button} type="submit">{this.props.clas}</button>
            </form>  
        </div> 
        </div>        
        )
    }
}
export default Session;