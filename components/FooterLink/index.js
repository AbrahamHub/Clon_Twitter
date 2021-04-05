import styles from '../styles/Home.module.css'
export default function FooterLink ({children ,href}) {
    return(
        <a className={styles.footext} href={href} target="_blank">{children}</a>
    )
}